const textAreaText = document.getElementById('text-area');

document.getElementById('b-btn').addEventListener('click',function(){
    if (textAreaText.style.fontWeight == 'bold') {
        textAreaText.style.fontWeight = 'normal'

    } else {
        textAreaText.style.fontWeight = 'bold'
    }
});
document.getElementById('color-btn').addEventListener('input',function(){
    const colorPicker = document.getElementById('color-picker');
    textAreaText.style.color = colorPicker.value;
});
document.getElementById('b-italic').addEventListener('click',function(){
    if (textAreaText.style.fontStyle == 'italic') {
        textAreaText.style.fontStyle = 'normal'

    } else {
        textAreaText.style.fontStyle = 'italic'
    }
});
document.getElementById('b-underline').addEventListener('click',function(){
    if (textAreaText.style.textDecoration == 'underline') {
        textAreaText.style.textDecoration = 'none'

    } else {
        textAreaText.style.textDecoration = 'underline'
    }
});
document.getElementById('b-center').addEventListener('click',function(){
    if (textAreaText.style.textAlign == 'center') {
        textAreaText.style.textAlign = 'left'

    } else {
        textAreaText.style.textAlign = 'center'
    }
});
const fontSizeSelect = document.getElementById("font-size"); 
fontSizeSelect.addEventListener("change", function () {
    const fontValue = fontSizeSelect.value;
    textAreaText.style.fontSize = fontValue;
});

document.getElementById("font-size1").addEventListener("change", function (e) {
    const fontValue = e.target.value;
    textAreaText.style.fontSize = fontValue+'px';
});