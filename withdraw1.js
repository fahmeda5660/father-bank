// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//     console.log(newWithdrawAmount);

//     withdrawField.value="";
    
//     if(isNaN(newWithdrawAmount)){
//         alert('please provide a valid input')
//         return;
//     }


//     const withdrawTotal = document.getElementById('withdraw-total');
//     const oldwithdrawAmountString = withdrawTotal.innerText;
//     const oldwithdrawAmount = parseFloat(oldwithdrawAmountString);
//     console.log(oldwithdrawAmount);


//     // const currentWithdrawTotal = newWithdrawAmount+oldwithdrawAmount;
//     // console.log(currentWithdrawTotal)
//     // withdrawTotal.innerText = currentWithdrawTotal;

//     // balance
//     const balanceTotal = document.getElementById('balance-total');
//     const oldBalanceTotalString = balanceTotal.innerText;
//     const oldBalanceTotalAmount = parseFloat(oldBalanceTotalString);

//     // withdrawField.value="";

//     if(newWithdrawAmount>oldBalanceTotalAmount){
//         alert('you dont have that much money left');
//         return; 
//         // return korar jonno balance update holona
//     }

//     const currentWithdrawTotal = newWithdrawAmount+oldwithdrawAmount;
//     console.log(currentWithdrawTotal)
//     withdrawTotal.innerText = currentWithdrawTotal;

//     const currentBalanceTotal = oldBalanceTotalAmount-newWithdrawAmount;
//     balanceTotal.innerText = currentBalanceTotal;


//     // withdrawField.value="";
// })