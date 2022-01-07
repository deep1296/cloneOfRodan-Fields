

var total = [];
var arr2 = JSON.parse(localStorage.getItem("bagData")) || [];

displayData(arr2)

function displayData(arr2) {
    document.querySelector("#bagProduct").innerHTML = "";
    arr2.map(function (ele, index) {


        var main = document.createElement("div")
        main.setAttribute("id", "imgdiv")

        var prodImage = document.createElement("img");
        prodImage.setAttribute("src", ele.prodimage);


        var prodName = document.createElement("h3");
        prodName.textContent = ele.prodname;


        var prodPrice = document.createElement("h4");
        prodPrice.textContent = " $ " + " " + ele.price;
        total.push(ele.price)

        var pbtn = document.createElement("button");
        pbtn.textContent = "+";

        var nbtn = document.createElement("button");
        nbtn.textContent = "-";

        var quty = document.createElement("span");
        quty.textContent = 0;


        var remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.setAttribute("class", "remove")
        remove.addEventListener("click", function () {
            deletetask(index);
        });


        var div2 = document.createElement("div");
        div2.append(prodName, prodPrice,remove)
        div2.setAttribute("id", "name-price")


        main.append(prodImage, div2)
        document.querySelector("#bagProduct").append(main)

    });
}

var ttl = total.reduce(function (ac, cv) {
    return Number(ac) + Number(cv);
})
document.querySelector("#subtotal_price").textContent = "$ " + ttl;
document.querySelector("#continue").addEventListener("click", gotobest);

function gotobest() {
    window.location.href = "bestsellers.html"
}
function deletetask(index) {
    arr2.splice(index, 1)
    localStorage.setItem("bagData", JSON.stringify(arr2));
    window.location.reload();
    displayData(arr2);
};

localStorage.setItem("bag_length", JSON.stringify(arr2.length));

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

document.querySelector('#checkout').addEventListener('click',checkOut1);
    function checkOut1(){
        window.location.href='paymentGateway.html';
    }

