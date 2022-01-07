var details = document.querySelector('#submitbtn').addEventListener('click',verifyOtp);
function verifyOtp(){
   var otp =  document.querySelector('#otp').value
    if(otp == '1234'){
        alert('Payment Successful & Your Order has been successfully placed');
    }
    else{
        alert('Wrong OTP');
    }
}

function fb() {
    window.location.href = 'https://www.facebook.com/rodanandfields';
}

function twit() {
    window.location.href = 'https://twitter.com/RodanFieldsHQ';
}

function insta() {
    window.location.href = 'https://www.instagram.com/rodanandfields/';
}
function you() {
    window.location.href = 'https://www.youtube.com/user/RodanFields';
}
function pinte() {
    window.location.href = 'https://in.pinterest.com/RodanandFields/';
}   