



var arr = [
    {
        prodname: "Total RF Serum",
        prodimage: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        price: "220.00 "
    },

    {
        prodname: "Total RF Serum Refill",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENFMR30-Global-720x600-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wzNjExN3xpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDJiLzEzNjkzOTY2NDUwNzE4LmpwZ3wxODM3NzM2MTE0ZmMxM2VmMTVlYTA3ZTM5MWU3NzdmMTIzNmFkYzgzM2Y1YmIwMzk4OWFlNjQ1MzlkOGI5N2I2",
        price: "175.00  "
    },

    {
        prodname: "Active Hydration Serum",
        prodimage: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTcwMHxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaGI0LzEzNTMzMTcxNTE1NDIyLmpwZ3wyZjgzMWEzNzJhNjRjZmZmNTU3NTBjODE0NjcxYjgzY2Q2Y2MxMzgyNzk3ZjcxOTU3OGUyYTVlNzE5MjI4OTI5",
        price: "155.00 "
    },

    {
        prodname: "REDEFINE AMP MD System",
        prodimage: "https://www.rodanandfields.com/en-us/medias/AAAPS01-cat.jpg?context=bWFzdGVyfGltYWdlc3wyNTYwNHxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDE3LzEzNTMzMTE0OTkwNjIyLmpwZ3w1ZGZmYmVkYWY1OGMxMmFiNTJhMGIxZDc0MTAyODMxZmFjOWRlNmQyNjRhZTNhZmM2YzVlNjQ2NDI0ZWQ4Mjcx",
        price: "172.00  "
    },

    {
        prodname: "REDEFINE Intensive Renewing Serum",
        prodimage: "https://www.rodanandfields.com/en-us/medias/IRS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3w0NzYwNXxpbWFnZS9wbmd8aW1hZ2VzL2gzMy9oMmIvMTM3NTgzODU3MTcyNzgucG5nfDU3MDNlODNlMjk0MDZiYWEwODU1NTZhMDg3NDBkNTU4M2EwNGJiY2M1OTZmN2RlMWNlM2UwYmEyZDg5YzViNDM",
        price: "112.00 "
    },

    {
        prodname: "REDEFINE AMP MD SYSTEM REFILL",
        prodimage: "https://www.rodanandfields.com/en-us/medias/AAAPR01-cat.jpg?context=bWFzdGVyfGltYWdlc3w2MTA3NHxpbWFnZS9qcGVnfGltYWdlcy9oYTYvaDc3Lzg4MjE4NDE3MjM0MjIuanBnfGM3MTc2MmQzNTg4MWJkZTRhNjkyZjBhYmE2MDkxMjAzYzZiMWQwNGI2NGEzZDUyOTdjMDk3M2ZlNWU5M2JmNTc",
        price: "70.00  "
    },

    {
        prodname: "REDEFINE + Total RF Serum Special",
        prodimage: "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w4NDEwM3xpbWFnZS9qcGVnfGltYWdlcy9oZGMvaGRkLzEzOTc3NjUzNTQyOTQyLmpwZ3xhN2M4ZTcyYjQxNzhjMjcyNDZiNzk5OTEzOWZhZDA2NzIyNzkyODhiYzY0NjY2ZTk1ZGY4OWQ0NTJjNjc3Njk0",
        price: "195.00"
    },

    {
        prodname: "REVERSE + Total RF Serum Special",
        prodimage: "https://www.rodanandfields.com/en-us/medias/HRVRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NDMwOHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaGMzLzEzOTc3NjU2NTI0ODMwLmpwZ3wzZDI3Mzk1ZTZhMjVjMTMwMWZhMTYzNTNmZjVlYTAxM2YwMzYwYTg5OWU1NTNlYjY3MTYwNDQzNGY3ZTA4ZGY3",
        price: "83.00 "
    },

    {
        prodname: "UNBLEMISH + Total RF Serum Special",
        prodimage: "https://www.rodanandfields.com/en-us/medias/HUNRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NTM5MnxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDhjLzEzOTc3NjU3OTY2NjIyLmpwZ3xkYzVkYmZhM2IyYmU1ZmFiZWI5NTMxYjQxYzhkZDNlNDMxMDYzNmFiZDg5NzUzNTc5NDI4NDllYWY0YzEzNmIz",
        price: "66.00 "
    },
];



localStorage.setItem("ProductData", JSON.stringify(arr));

var prodata = JSON.parse(localStorage.getItem("ProductData"));

var bag = JSON.parse(localStorage.getItem("bagData"))||[]

displayData(prodata);



function handleSort(){
    var selected= document.querySelector("#priceSort").value
    console.log(selected)
    if(selected =="high"){
        prodata.sort(function(a,b){
            return b.price-a.price
        })
    }
    if(selected== "low"){
        prodata.sort(function(a,b){
            return a.price- b.price
        })
    }
    console.log(prodata)
    displayData(prodata)

}


function displayData(prodata) {

document.querySelector("#Products").textContent = "";

    prodata.map(function (ele , index) {
        var main = document.createElement("div")
        var prodImage = document.createElement("img");
        prodImage.setAttribute("src", ele.prodimage);

        var prodName = document.createElement("h3");
        prodName.textContent = ele.prodname;
       

        var cost= document.createElement("div")
        var prodPrice = document.createElement("p");
        prodPrice.style.margin= "0px"
        prodPrice.textContent = ele.price;

        var dollar= document.createElement("p")
        dollar.textContent="$ "
        dollar.style.margin= "0px"

        cost.style.display="flex"
      
        cost.style.justifyContent= "center"
        

        cost.append(dollar, prodPrice)

        var btn = document.createElement("button");
        btn.setAttribute("id", "btn")
        btn.textContent = "ADD TO BAG";

        btn.addEventListener('click', function(){
           addtobag(index) 
        })

        main.append(prodImage, prodName, cost, btn);
        document.querySelector("#Products").append(main)

    });


}

function addtobag(index){
    console.log("hers")
    bag.push(prodata[index]);
    console.log(bag);
    alert("Successfuly Added To Cart")
    localStorage.setItem("bagData", JSON.stringify(bag));
}

document.querySelector("#cart").addEventListener("click", opencart);
function opencart() {
    window.location.href = "bag.html";
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