// document.getElementById('btn-deposit').addEventListener('click',function(){
//     const newDepositField = document.getElementById('deposit-field');
//     const newDepositAmountString = newDepositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);
//     // newDepositField.value = " ";

//     const oldDepositTotal = document.getElementById('deposit-total');
//     const oldDepositAmountString = oldDepositTotal.innerText;
//     const oldDepositAmount = parseFloat(oldDepositAmountString);

//     const currentDepositTotal = newDepositAmount+oldDepositAmount;
//     oldDepositTotal.innerText = currentDepositTotal;

//     // balance
//     const balanceTotal = document.getElementById('balance-total');
//     const oldBalanceTotalString = balanceTotal.innerText;
//     const oldBalanceTotalAmount = parseFloat(oldBalanceTotalString);

//     const currentBalanceTotal = oldBalanceTotalAmount+newDepositAmount;
//     balanceTotal.innerText = currentBalanceTotal;

// })