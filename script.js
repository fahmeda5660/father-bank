// #1 add click handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // #2 get email address inside the email input field
    const emailField = document.getElementById('user-email');
    const emailText = emailField.value;
    // #3 get password 
    const passField = document.getElementById('user-pass');
    const passText = passField.value;
    // #4 verify email and password
    if (emailText==='phero.com' && passText ==='secret'){
        window.location.href = 'bank.html';
    }else{
        alert('Invalid User')
    }

})