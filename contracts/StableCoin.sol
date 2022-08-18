// SPDX-License-Identifier:MIT

pragma solidity 0.8.12;
import {ERC20} from "./ERC20.sol";
import {DepositorCoin} from "./DepositorCoin.sol";
import {Oracle} from "./Oracle.sol";


contract StableCoin is ERC20 {
    
    DepositorCoin public depositorCoin;


    uint256 public feeRatePercentage;
    Oracle public oracle;
    uint256 public  constant INITIAL_COLLATERAL_RATIO_PERCENTAGE = 10;

    constructor (uint256 _feeRatePercentage,Oracle _oracle) ERC20("StableCoin","STC"){
        
        feeRatePercentage = _feeRatePercentage;
        oracle = _oracle;
    }

    function mint() external payable{
        uint256 fee = _getFee(msg.value);
        uint256 remainingEth = msg.value - fee;
        uint256 mintStableAmountCoin = msg.value * oracle.getPrice();
        _mint(msg.sender, mintStableAmountCoin);
    }

    function burn(uint256 burnStableCoinAmount) external{

        int256 deficitOrSurplusInUsd = _getDeficitOrSurplusInContractInUsd();
        require (deficitOrSurplusInUsd >=0,"STC:Cannot burn while in deficit");

        _burn(msg.sender,burnStableCoinAmount);

        uint256 refundEth = burnStableCoinAmount/oracle.getPrice();
        uint256 fee = _getFee(refundEth);
        uint256 remainingRefundingEth = refundEth -fee;

        (bool success,) = msg.sender.call{value:remainingRefundingEth}("");
        require(success,"STC: Burn refund transaction failed");
        
    }

    function _getFee(uint256 ethAmount) private view returns (uint256){
    
        bool hasDepositor = address (depositorCoin) != address(0) && depositorCoin.totalSupply()>0;
        if (!hasDepositor){
            return 0;
        }
        return (feeRatePercentage *ethAmount) / 100;
    }


    function depositCollateralBuffer () external payable {
        int256 deficitOrSurplusInUsd = _getDeficitOrSurplusInContractInUsd();

        if (deficitOrSurplusInUsd <=0){
            uint256 deficitInUsd = uint256(deficitOrSurplusInUsd * -1);
            uint256 usdInEthPrice = oracle.getPrice();
            uint256 deficitInEth = deficitInUsd / usdInEthPrice ;

            uint256 requiredSurplusInUsd  = (INITIAL_COLLATERAL_RATIO_PERCENTAGE * totalSupply)/100 ;
            uint256 requiredInitialSurplusInEth =  requiredSurplusInUsd /usdInEthPrice;

            require(msg.value >= deficitInEth +requiredInitialSurplusInEth, "STC: Initial collateral ratio not met ");

            uint256 newInitialSurplusInEth = msg.value - deficitInEth;
            uint256 newInitialSurplusInUsd = newInitialSurplusInEth * usdInEthPrice;

            depositorCoin = new DepositorCoin();
            uint256 mintDepositorCoinsAmount = newInitialSurplusInUsd ;
            depositorCoin.mint(msg.sender,mintDepositorCoinsAmount);

            return;  
        }

        uint256 surplusInUsd = uint256(deficitOrSurplusInUsd);
        uint256 dpcInUsdPrice = _getDPCInUsdPrice (surplusInUsd);
        uint256 mintDepositorCoinAmount = (msg.value * dpcInUsdPrice)/ oracle.getPrice() ;
        depositorCoin.mint (msg.sender,mintDepositorCoinAmount);
    }

    function withdrawCollateralBuffer(uint256 burnDepositorCoinAmount) external {

        require (depositorCoin.balanceOf(msg.sender) >= burnDepositorCoinAmount,"STC: sender has insufficient dpc funds ");
        depositorCoin.burn(msg.sender,burnDepositorCoinAmount);
    }


    function _getDeficitOrSurplusInContractInUsd() private view returns (int256) {
        uint256 ethContractBalanceInUsd = (address(this).balance - msg.value) * oracle.getPrice();
        uint256 totalStableCoinBalanceInUsd = totalSupply;
        int256  deficitOrSurplus = int256(ethContractBalanceInUsd) - int256(totalStableCoinBalanceInUsd);

        return deficitOrSurplus;
    }

    function _getDPCInUsdPrice(uint256 surplusInUsd) private view returns (uint256){
        return depositorCoin.totalSupply() / surplusInUsd ;
    }
}