function getIntputFieldById(inputId){
    const inputField =document.getElementById(inputId);
    const inputFieldvalueString = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldvalueString);
    inputField.value = '';
    return inputFieldvalue;
}
function getElementFieldById(elementId){
    const elementField =document.getElementById(elementId);
    const elementFieldvalueString = elementField.innerText;
    const elementFieldvalue = parseFloat(elementFieldvalueString);
    return elementFieldvalue;
}
function setTextElementValueById(elementId,NewValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = NewValue;
}