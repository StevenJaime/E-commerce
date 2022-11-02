const menuBtn = document.querySelector('.menu-btn');
const burgerNav = document.querySelector('.burger-nav');
const bodyFreeze = document.querySelector('body');

const footerBtn = document.querySelectorAll('.footer-section-mobile');
const descriptionBox = document.querySelectorAll('.desc-box');
const path = window.location.pathname;


let menuOpen = false;

let state = [];

let page = [];

let track = true;

let library = [];

let newLibrary = [];

let itemCard = [];

let clones = {};




let a = document.createElement("div");
a.setAttribute("id","preloader");
let b = document.querySelector(".res-box");
document.body.insertBefore(a, b);

/* temp clear header */



document.querySelector(".header").innerHTML= ""; 

function seek(str){
    var regex = /\d+/g;
    var string = str;
    var matches = string.match(regex);

    page = matches;
}

seek(window.location.pathname);


function shuffle(){
	while(library.length > 12){
		var x = Math.floor(Math.random()*library.length);
		newLibrary.push(library[x]);
		library.splice([x],1);
		var x = 0;
	}
}






function klean(){

    const card = itemCard;
    const uniqueIds = new Set();

    const unique = card.filter(el => {
        const dupe = uniqueIds.has(el.pk);
        
        uniqueIds.add(el.pk);

        if(!dupe){
            return true;
        }

        return false;

    });

    console.log(unique)

    itemCard = unique.map(el =>{
        return el;
    })

      console.log("cleaned");
}; 

function findClones(){
            
    itemCard.forEach( clone => {clones[clone.pk] = (clones[clone.pk] || 0) + 1 ;
    });



    const keys = Object.entries(clones); 
    const doors = itemCard;
        for (let key of keys) {
            for(let door of doors){
                if(key[0] === door.pk){
                    door['amount'] = key[1];
                }
            }
        }


};


var cartTotalAmt = 0 ;

function cartTotal(){

    cartTotalAmt = 0;

    for( let x = 0 ; x < itemCard.length ; x++){
       
       var i = itemCard[x].cardPrice.substring(1);
       console.log(i);
       

       cartTotalAmt += parseFloat(i) * itemCard[x].amount ;
       

    }

    cartTotalAmt = Number(cartTotalAmt).toFixed(2);
};

function cartTotalShow(){
    document.querySelector("#subtotal").innerHTML = "$" + cartTotalAmt;
       
       let z = Number(cartTotalAmt) + ( 5.32 + 7.95 );

       document.querySelector(".total-value").innerHTML = "$" + z.toFixed(2);
}


function cartQty(){

    let cnt = [];

    for (let i = 1; i <= localStorage.length; i++) {
        cnt.push(JSON.parse(localStorage.getItem(i)));    
        
    }

    let x = cnt.length;

    document.querySelector(".cart-cnt").innerHTML = x;
};

cartQty();


/* pageFilter checks the state to grab information from api */

function pageFilter(){

    switch(path){

        case "/E-commerce/pages/men.html":
            state = "men_all";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_product="+ page +".html":
            state = "men_all";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_newarrivals.html":
            state = "men_newarrivals_all";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_newarrivals.html">NEW ARRIVALS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_newarrivals="+ page +".html":
            state = "men_newarrivals_all";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_newarrivals.html">NEW ARRIVALS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_shirts.html":
            state = "men_tshirtstanks";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_shirts.html">SHIRTS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_shirts="+ page +".html":
            state = "men_tshirtstanks";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_shirts.html">SHIRTS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_shorts.html":
            state = "men_shorts";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_shorts.html">SHORTS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_shorts="+ page +".html":
            state = "men_shorts";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_shorts.html">SHORTS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_accessories.html":
            state = "men_accessories";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_accessories.html">ACCESSORIES</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_accessories="+ page +".html":
            state = "men_accessories";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_accessories.html">ACCESSORIES</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_swimwear.html":
            state = "men_swimweear";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_swimwear.html">SWIMWEAR</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/men_swimwear="+ page +".html":
            state = "men_swimweear";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/men.html">MEN</a></li><li>/</li><li><a href="men_swimwear.html">SWIMWEAR</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women.html":
            state = "ladies_all";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_product="+ page +".html":
            state = "ladies_all";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_newarrivals.html":
            state = "ladies_newarrivals_all";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_newarrivals.html">NEW ARRIVALS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_newarrivals="+ page +".html":
            state = "ladies_newarrivals_all";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_newarrivals.html">NEW ARRIVALS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_swimwear.html":
            state = "ladies_swimwear";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_swimwear.html">SWIMWEAR</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_swimwear="+ page +".html":
            state = "ladies_swimwear";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_swimwear.html">SWIMWEAR</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_dress.html":
            state = "ladies_dresses";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_dress.html">DRESS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_dress="+ page +".html":
            state = "ladies_dresses";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_dress.html">DRESS</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_accessories.html":
            state = "ladies_accessories";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_accessories.html">ACCESSORIES</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_accessories="+ page +".html":
            state = "ladies_accessories";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_accessories.html">ACCESSORIES</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_premium.html":
            state = "ladies_premium_selection";
            track = false;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_premium.html">PREMIUM</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/women_premium="+ page +".html":
            state = "ladies_premium_selection";
            track = true;
            document.querySelector(".bred").innerHTML = `<li><a href="/E-commerce/pages/women.html">WOMEN</a></li><li>/</li><li><a href="women_premium.html">PREMIUM</a></li><li>/</li>`;
            break;
        case "/E-commerce/pages/cart.html":

            const keys = Object.keys(localStorage)

            for (let key of keys) {
                itemCard.push(JSON.parse(localStorage.getItem(key)));
            }

            findClones();
            klean();

            itemCard.map((item) => {

                let name = item.cardName;
                let img = item.cardImg;
                let price = item.cardPrice;
                let qty = item.amount;
                let size = item.cardSize;
                let a = `
                <div class="listItem-box">
                    <div class="listItem">
                
                        <div class="listItemFlex">
                
                            <div class="card-img">
                                <img class="item-img" src="${img}">
                            </div>
                
                            <div class="card-details">
                                <div class="card-details_subtitle">
                                    ${name}
                                </div>
                
                                <div class="card-det_box">
                
                                        <div class="card-det_box1">
                                            <div>Price</div>
                                            <div>Color</div>
                                            <div>Size</div>
                                        </div>
                
                                        <div class="card-det_box2">
                                            <div>${price}</div>
                                            <div>Black</div>
                                            <div>${size}</div>
                                        </div>
                                </div>
                
                                <div class="mobile-check-box">
                                    <div class="card-qty">
                                        <div class="card-qty_minus">-</div>
                                        <div class="card-qty_amt">${qty}</div>
                                        <div class="card-qty_plus">+</div>
                                    </div>
                
                                    <div id="mobile-delete" class="edit">
                                        <span id="trash" class="material-symbols-rounded">delete</span>
                                    </div>
                                </div>
                
                            </div>
                        
                        </div>
                
                        <div class="edit">
                            <span id="trash" class="material-symbols-rounded">delete</span>
                        </div>
                        
                   </div>
                
                </div>`;
         
                document.querySelector(".cartList").innerHTML += a;
                
            });
         
            cartTotal();
            cartTotalShow();
            break;
        default: 
            console.log("Not found");
        break;
        
    };

}

pageFilter();



menuBtn.addEventListener("click", () => {
    console.log("click");
    if(!menuOpen){
        menuBtn.classList.add('open');
        burgerNav.classList.add('open');
        
        burgerNav.style.display="flex"
        bodyFreeze.style.position="fixed" 
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        burgerNav.classList.remove('open');
       
        burgerNav.style.display="none"
        bodyFreeze.style.position="static" 
        menuOpen = false;
    }
});

footerBtn.forEach((a,b) => {
    a.addEventListener("click", () => {

        let plus = document.querySelectorAll(".plusIcon-footer");

        console.log(plus[b]);

        if(plus[b].innerHTML === "add"){
            plus[b].innerHTML = "remove";
        } else {
            plus[b].innerHTML = "add";
        }

        a.classList.toggle("dropdown-nav_active");
    });
});


descriptionBox.forEach((a,b) => {
    a.addEventListener("click", () => {
        
        let plus = document.querySelectorAll(".plusIcon-cart");

                if(plus[b].innerHTML === "add"){
                    plus[b].innerHTML = "remove";
                } else {
                    plus[b].innerHTML = "add";
                }
        
        a.classList.toggle("desc-drop_active");

       
    });
});


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b2fd3378amsh7a0ea72016f1bd3p129e63jsn73b182ef4319',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
	}
};


function go(){

    var loader = document.getElementById("preloader");
    
    fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=16&categories='+ state , options)
    	.then(response => response.json())
    	.then(data => {

            let id = 0;

            library = data.results;
            console.log(library);
            
            console.log("Api running");
            
            if(track === true){

               console.log("Api Products list uploading");

               library.map((item) => { 
                    id++ 
                    item['id'] = id; 

               });

               let cardName = library[page-1].name;
               let cardPrice = "$" + library[page-1].price.value;
               let cardImg = library[page-1].images[0].url;
               let pk = library[page-1].pk;
               let amount = 1;
               let gal = library[page-1].galleryImages;
               let color = library[page -1].articleColorNames[0];
               let cardSize ="";


               itemCard = {cardName , cardPrice, cardSize , cardImg, pk, amount};

               document.querySelector(".product-details").firstElementChild.innerHTML = cardName;
               document.querySelector(".product-price").innerHTML = cardPrice;
               document.querySelector(".product-image").innerHTML = `<img class ="main-img "src="${cardImg}">`;
           
               document.querySelector("#item-color").innerHTML = color;

               bredTitle = document.querySelector(".product-details").firstElementChild.innerHTML; 

               document.querySelector(".bred").innerHTML += `<li>${bredTitle}</li>`;

               shuffle();
           
/* remove first image from array */
               gal.map((item)=>{

                    let h = item.url;

                    if(true){
                
                        let galAd = `<li><img class="gal-img" src="${h}"></li>`;

                        document.querySelector(".product-gallery").innerHTML += galAd;

                        document.querySelectorAll(".gal-img").forEach((a)=>{

                            a.addEventListener("mouseover", function(e){
                                document.querySelector(".main-img").src = e.target.src;
                            })
                        })
                    }
               });

               


                newLibrary.map((item) => {

                    const name = item.name;
                    const image = item.images[0].url;
                    const pricey = item.price.value;
                    let tag = item.id;
                    let ad ="";


                    switch(state){
                    

                        case "men_all":
                            ad = `<a href ="/E-commerce/pages/men_product=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "men_newarrivals_all":
                            ad = `<a href ="/E-commerce/pages/men_newarrivals=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "men_tshirtstanks":
                            ad = `<a href ="/E-commerce/pages/men_shirts=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;  
                            break;
                        case "men_shorts": 
                            ad = `<a href ="/E-commerce/pages/men_shorts=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;  
                            break;
                        case "men_accessories":
                            ad = `<a href ="/E-commerce/pages/men_accessories=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;  
                            break;
                        case "men_swimweear":
                            ad = `<a href ="/E-commerce/pages/men_swimwear=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;  
                            break;
                        case "ladies_all":
                            ad = `<a href ="/E-commerce/pages/women_product=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "ladies_newarrivals_all":
                            ad = `<a href ="/E-commerce/pages/women_newarrivals=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "ladies_dresses":
                            ad = `<a href ="/E-commerce/pages/women_dress=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad; 
                            break;
                        case "ladies_swimwear":
                            ad = `<a href ="/E-commerce/pages/women_swimwear=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "ladies_accessories":
                            ad = `<a href ="/E-commerce/pages/women_accessories=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        case "ladies_premium_selection":
                            ad = `<a href ="/E-commerce/pages/women_premium=${tag}.html"> <li id="${tag}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".ad-products_box").innerHTML += ad;
                            break;
                        default:
                            console.log("Ad content did not upload");
                            break;

                    }
                })

                loader.style.display = "none";

                return 

            }

            else{
                library.map((item) => {

                    console.log("Api product info uploading");
                
                    const name = item.name;
                    const image = item.images[0].url;
                    const pricey = item.price.value;
                    let shmoney = "";

                    id++
                    item['id'] = id;
                    

                    switch(state){
                    
                        case "men_all":
                            shmoney = `<a href ="/E-commerce/pages/men_product=${id}.html"> <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;  
                            break;
                        case "men_newarrivals_all":
                            shmoney = `<a href ="/E-commerce/pages/men_newarrivals=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;
                            break;
                        case "men_tshirtstanks":
                            shmoney = `<a href ="/E-commerce/pages/men_shirts=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;  
                            break;
                        case "men_shorts": 
                            shmoney = `<a href ="/E-commerce/pages/men_shorts=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;   
                            break;
                        case "men_accessories":
                            shmoney = `<a href ="/E-commerce/pages/men_accessories=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;  
                            break;
                        case "men_swimweear":
                            shmoney = `<a href ="/E-commerce/pages/men_swimwear=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney; 
                            break;
                        case "ladies_all":
                            shmoney = `<a href ="/E-commerce/pages/women_product=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;
                            break;
                        case "ladies_newarrivals_all":
                            shmoney = `<a href ="/E-commerce/pages/women_newarrivals=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney; 
                            break;
                        case "ladies_dresses":
                            shmoney = `<a href ="/E-commerce/pages/women_dress=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;
                            break;
                        case "ladies_swimwear":
                            shmoney = `<a href ="/E-commerce/pages/women_swimwear=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;
                            break;
                        case "ladies_accessories":
                            shmoney = `<a href ="/E-commerce/pages/women_accessories=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;  
                            break;
                        case "ladies_premium_selection":
                            shmoney = `<a href ="/E-commerce/pages/women_premium=${id}.html" <li id="${id}"><img src="${image}"> <h2>${name}</h2> <p>${pricey}</p></li></a>`;
                            document.querySelector(".holster").innerHTML += shmoney;  
                            break;
                        default:
                            console.log("Api product info did not upload");
                            break;
                    }

                }) 

                loader.style.display = "none";

            }

        })
	
    .catch(err => console.error(err));

};

if (path !== "/index.html" && path !== "/E-commerce/pages/cart.html"){
    go();
    console.log("Api running");
}


 var judgeState = 0;

function judge(){

document.querySelectorAll(".listItem-box").forEach( (a, b) => { 
    
    

 

    a.addEventListener("click", function(e){
        console.log(b);
        console.log(itemCard[b].amount)

        

        if(e.target.className === "card-qty_minus" && itemCard[b].amount > 1 ){

            const keys = Object.keys(localStorage)
            for (let key of keys) {

                let hope = JSON.parse(localStorage.getItem(key)).pk; 
                let free = itemCard[b].pk;

                    if( hope === free){
                        console.log("deleted")
                        
                        
                        localStorage.removeItem(key);

                        itemCard[b].amount -= 1;
                        let nodelist = document.querySelectorAll(".card-qty_amt");              
                        nodelist[b].innerHTML = itemCard[b].amount;
                        cartTotal();
                        cartTotalShow();
                        cartQty();
                        
                        
                    return
                    }

            }

        }

        if(e.target.className === "card-qty_plus"){


            const keys = Object.keys(localStorage)
            for (let key of keys) {
                
                let hope = JSON.parse(localStorage.getItem(key)).pk; 
                let free = itemCard[b].pk;

                    if( hope === free){
                        console.log("it works");

                        var count = localStorage.length + 1;
                        console.log(itemCard[b]);
                        let myObj_serial = JSON.stringify(itemCard[b]);
    
                        localStorage.setItem( count , myObj_serial);


                        itemCard[b].amount += 1;
                        let nodelist = document.querySelectorAll(".card-qty_amt");
                        nodelist[b].innerHTML = itemCard[b].amount;
                        cartTotal();
                        cartTotalShow();
                        cartQty();

                    return
                    }

            }

        }

        if(e.target.id === "trash"){

            const keys = Object.keys(localStorage)
            for (let key of keys) {

                let hope = JSON.parse(localStorage.getItem(key)).pk; 
                let free = itemCard[b].pk;
                

                    if( hope === free ){
                        console.log("deleted")
                        
                        
                      
                       localStorage.removeItem(key); 
                       klean();
                       console.log("hey");


                    };

                    

            }
            
            itemCard.splice(b,1);
            a.remove();
            console.log(e.target.id); 
            cartTotal();
            cartTotalShow();
            cartQty();
            console.log("reach")
            a.removeEventListener("click", function(){});
            

            return

        }

        else{
            console.log("nothing")
           
        }

    })

  

});

document.querySelectorAll(".sizeBox").forEach( (a,b) => {
    
    a.addEventListener("click", (e)=>{ 
        if(e.target.style.border != "1px solid black"){

            document.querySelectorAll(".sizeBox").forEach((a)=>{
                a.style.border="none";
            })

            e.target.style.border = "1px solid black"; 
            itemCard.cardSize = e.target.innerHTML;

            
            
        }
       

    })
});

};

judge();

var gate = true;


document.querySelector(".add-btn").addEventListener("click", function(){

    if (gate === true){

        var count = localStorage.length + 1;

        let myObj_serial = JSON.stringify(itemCard);
    
        localStorage.setItem( count , myObj_serial);

        cartQty();

    gate = false;
    document.querySelector(".add-btn").classList.add("add-btn_ani");
    document.querySelector("#add-p").classList.add("add-btn_p");
    document.querySelector(".add-btn_p").innerHTML = "ADDED TO CART!";
 
    setTimeout(function(){
      
        document.querySelector(".add-btn").classList.remove("add-btn_ani");
        document.querySelector("#add-p").classList.remove("add-btn_p");
        document.querySelector("#add-p").innerHTML = "ADD TO CART";
        console.log("1");
        gate = true;
     
    }, 2000);

}
   /* let myObj_deserial = JSON.parse(localStorage.getItem("itemCard"));
    console.log(myObj_deserial); 
    */
});

     