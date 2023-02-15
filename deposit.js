document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getIntputFieldById('deposit-field');
    // console.log(newDepositAmount);
    const oldDepositTotal = getElementFieldById('deposit-total')
    // console.log(newBalanceTotal);
    const newDepositTotal = newDepositAmount+oldDepositTotal;
    // console.log(oldDepositTotal);
    setTextElementValueById('deposit-total',newDepositTotal);

    // balance
    const oldBalanceTotal = getElementFieldById('balance-total');
    const newBalanceTotal = newDepositAmount+oldBalanceTotal;
    setTextElementValueById('balance-total',newBalanceTotal);


})