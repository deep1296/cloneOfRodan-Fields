var details = document.querySelector('#submitbtn').addEventListener('click',signIn);
function signIn(event){
    event.preventDefault();
    var cardNum = document.querySelector('#cardNum').value;
    var exDate =  document.querySelector('#exDate').value;
    var name =document.querySelector('#name').value;
    var cvv =document.querySelector('#cvv').value;

    if(cardNum == '1234567890' && name == 'Suraj' && cvv == '123'){
        window.location.href='otp.html';
    }
    else{
        alert('Wrong Card Details');
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