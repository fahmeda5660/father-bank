document.getElementById('btn-apply').addEventListener('click',function(){
    const priceField = document.getElementById('price');
    const priceString = priceField.innerText;
    const price = parseInt(priceString);
    // const disPrice = price-price*0.3;
    // const newPrice = priceField.innerText=disPrice;
    const inputField = document.getElementById('input-text');
    const inputString = inputField.value;
        if (inputString === 'DISC30'){
            const disPrice = price-price*0.3;
            priceField.innerText=disPrice;
        }else{
            alert('Please Enter Valid Promo Code')
        }
})
document.getElementById('btn-apply1').addEventListener('click',function(){
    const inputCostField = document.getElementById('input-cost');
    const inputCostString = inputCostField.value;
    const inputCost = parseInt(inputCostString);
    const inputPercenField = document.getElementById('input-percen')
    const inputPercenString = inputPercenField.value;
    const inputPercen = parseInt(inputPercenString);
    inputCostField.value='';    
    inputPercenField.value='';  

    const percentage =   (inputPercen/inputCost)*100;
    const pay = inputCost-percentage;

    const discount = document.getElementById('discount');
    discount.innerText=percentage;

    const total = document.getElementById('total');
    total.innerText = pay;

})

