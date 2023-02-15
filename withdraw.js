document.getElementById('btn-withdraw').addEventListener('click',function(){
const newWithdrawAmount = getIntputFieldById('withdraw-field');
const oldwithdrawTotal = getElementFieldById("withdraw-total");
const newWithdrawTotal = newWithdrawAmount+oldwithdrawTotal;
setTextElementValueById('withdraw-total',newWithdrawTotal);

const oldBalanceTotal = getElementFieldById('balance-total');
const newBalanceTotal = oldBalanceTotal-newWithdrawAmount;
setTextElementValueById('balance-total',newBalanceTotal);
})