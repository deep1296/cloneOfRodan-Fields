document.querySelector('#form').addEventListener("submit",communityAdd)
var arr =JSON.parse(localStorage.getItem("communityDetails")) || [];
function communityAdd(){
 var name =document.querySelector('#nameinput').value;
 var lastName =document.querySelector('#lastNameInput').value;
 var language =document.querySelector('#language1').value;
 var email = document.querySelector("#emailinput").value;


 var communityAObj={
    name:name,
    lastName:lastName,
    language:language,
    email:email,
 }
 arr.push(communityAObj);
 localStorage.setItem("communityDetails",JSON.stringify(arr));
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

