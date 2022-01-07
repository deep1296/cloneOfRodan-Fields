
var arr = [
    {
        prodname: "REDEFINE Regimen",
        prodimage: "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        price: "220.00"
    },

    {
        prodname: "Total RF Serum",
        prodimage: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        price: "175.00"
    },

    {
        prodname: "R + F Lash Boost",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENHLSH01-cat.jpg?context=bWFzdGVyfGltYWdlc3wxMTM0NXxpbWFnZS9qcGVnfGltYWdlcy9oM2EvaDExLzg4MjE4NDQ1NzQyMzguanBnfDJhZTNkODRiNDQ0YjQwZjY3MGQwMTVmNWEwMzFkYmEzMzMxNTBjMDc0MDRjNGM4NWYwYzVkNTg2NzY0MjQyZGI",
        price: "155.00"
    },

    {
        prodname: "Active Hydration Bright Eye Complex",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh",
        price: "72.00"
    },

    {
        prodname: "Active Hydration Serum",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTcwMHxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaGI0LzEzNTMzMTcxNTE1NDIyLmpwZ3wyZjgzMWEzNzJhNjRjZmZmNTU3NTBjODE0NjcxYjgzY2Q2Y2MxMzgyNzk3ZjcxOTU3OGUyYTVlNzE5MjI4OTI5",
        price: "112.00"
    },

    {
        prodname: "REDEFINE Multi-Function Eye Cream",
        prodimage: "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        price: "70.00"
    },

    {
        prodname: "REVERSE Regimen",
        prodimage: "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        price: "195.00"
    },

    {
        prodname: "Rodan + Fields Enhancements Micro-Dermabrasion Paste",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENPS125-1168x1168-desktop.jpg?context=bWFzdGVyfGltYWdlc3wzMzcxNnxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGEzLzEzNTMzMTc2NzkxMDcwLmpwZ3xlMzgwOGY3YzRkOThiMGUwMjIyODBkNjg2MWYyZTY3M2I1MDRkNTgwNjZhMGU0YzFkM2YwZmNkNDM4ZTFlZGE5",
        price: "83.00"
    },

    {
        prodname: "Rodan + Fields Active Hydration Body Replenish",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
        price: "66.00"
    },
];
var bagLength = JSON.parse(localStorage.getItem("bag_length"))
localStorage.setItem("ProductData", JSON.stringify(arr));

var prodata = JSON.parse(localStorage.getItem("ProductData"));

var bag = JSON.parse(localStorage.getItem("bagData")) || [];

displayData(prodata);
function displayData(prodata) {
    document.querySelector("#Products").innerHTML = "";

    prodata.map(function (ele, index) {
        var main = document.createElement("div")
        var prodImage = document.createElement("img");
        prodImage.setAttribute("src", ele.prodimage);
        prodImage.setAttribute("id", "imgpro")

        var prodName = document.createElement("h3");
        prodName.textContent = ele.prodname;

        var prodPrice = document.createElement("h4");
        prodPrice.textContent = " $  " + ele.price;

        var btn = document.createElement("button");
        btn.setAttribute("id", "btn")
        btn.textContent = "ADD TO BAG";
        btn.addEventListener("click", function () {
            addtobag(index);
        })

        main.append(prodImage, prodName, prodPrice, btn);
        document.querySelector("#Products").append(main)


    });
}
function addtobag(index) {
    bag.push(prodata[index]);
    // console.log(bag);
    alert("Successfuly Added To Cart")
    localStorage.setItem("bagData", JSON.stringify(bag));
    window.location.reload();

}

function sort() {
    var selected = document.querySelector("#price-sort").value;
    // console.log(selected);
    if (selected === "low") {
        prodata.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    }
    if (selected === "high") {
        prodata.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    }
    displayData(prodata);

}


///// bag Length part



document.querySelector("#bag_length").textContent = bagLength;

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

