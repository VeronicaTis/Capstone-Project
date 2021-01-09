document.getElementById("cartBod").style.display = "none";
document.getElementById("cartBod").style.visibility = "hidden";

document.getElementById("carB").addEventListener("click", showNav);
document.getElementById("carB").addEventListener("mouseover", pointCursor);
document.getElementById("carB").style.backgroundColor = "transparent";
document.getElementById("carB").style.borderColor = "transparent";


document.getElementById("ex").addEventListener("click", hideNav);
document.getElementById("ex").addEventListener("mouseover", pointCursor2);
document.getElementById("ex").style.position = "absolute";
document.getElementById("ex").style.right = "0%";

document.getElementById("ex").style.backgroundColor = "transparent";
document.getElementById("ex").style.borderColor = "transparent";

function showNav(){
    document.getElementById("cartBod").style.display = "block";
    document.getElementById("cartBod").style.visibility = "visible";
}

function hideNav(){
    document.getElementById("cartBod").style.display = "none";
document.getElementById("cartBod").style.visibility = "hidden";
}

function pointCursor(){
    document.getElementById("carB").style.cursor = "pointer";
}

function pointCursor2(){
    document.getElementById("ex").style.cursor = "pointer";
}

const prod = document.querySelector('#prodList');
const shoppingCart = document.querySelector('#cardBod tBody');

loadEventListeners();

function loadEventListeners(){
    //when new course is added
    prod.addEventListener('click', buyProd);
    shoppingCart.addEventListener('click', removeProd);

function buyProd(e){

    if(e.target.classList.contains('add-to-cart')){
        //read the course value
     const prod = e.target.parentElement.parentElement;
        getProdInfo(prod);
    }
    
}
function removeProd(e){
    if(e.target.classList.contains('remove')){
         e.target.parentElement.parentElement.remove();
    } 
    
}
}

function getProdInfo(prod) {
    //create an Object with course data
    const prodInfo = {
        image: prod.querySelector('img').src,
        title: prod.querySelector('.card-title').textContent,
        price: prod.querySelector('.price').textContent,
        id: prod.querySelector('a').getAttribute('data-id')
    }
    addToCart(prodInfo);
}

function addToCart(prod){
    const row = document.createElement('tr');

    row.innerHTML = `
<tr>
    <td>
        <img src="${prod.image}" width="100">    
    </td>
    <td>
        ${prod.title}
    </td>
     <td>
        ${prod.price}
    </td>
     <td>
        <a href="#" class="remove" data-id="${prod.id}">X</a>
    </td>
</tr>
`
    ;

    shoppingCart.appendChild(row);
}




document.getElementById("purchBod").style.display = "none";
document.getElementById("purchBod").style.visibility = "hidden";

var x = document.getElementsByClassName("purchB");

for(var i =0; i<x.length; i++){
x[i].addEventListener("click", showNav1);
}


document.getElementById("exout").addEventListener("click", hideNav1);
document.getElementById("exout2").addEventListener("click", hideNav2);


function showNav1(){
    document.getElementById("purchBod").style.display = "block";
    document.getElementById("purchBod").style.visibility = "visible";
}

function hideNav1(){
    alert("Thank you for the purchase");
    document.getElementById("purchBod").style.display = "none";
document.getElementById("purchBod").style.visibility = "hidden";
}

function hideNav2(){
    document.getElementById("purchBod").style.display = "none";
document.getElementById("purchBod").style.visibility = "hidden";
}