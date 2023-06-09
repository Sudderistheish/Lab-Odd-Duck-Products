'use strict';

let votingArea = document.getElementById('voting-area');
let resultArea = document.getElementById('result-area');
// boxes for images 
let product1Img = document.getElementById('product1');
let product2Img = document.getElementById('product2');
let product3Img = document.getElementById('product3');

//dog prouct contrustor it has a name image vote count and view count
function Dogproduct(name, imgSrc);{
    this.name = name0;
    this.imgSrc = imgSrc;
    this.voteCount = 0;
    this.viewcount = 0;
    
}

 let dogDuck = new Dogproduct("dog-Duck", "./img/dog-duck.jpg");
 let unicorn = new Dogproduct("unicorn","./img/unicorn.jpg");
 let bubblegum = new Dogproduct("bubblegum","./img/bubblegum.jpg");
 let shark = new Dogproduct("shark","./img/shark.jpg");
 let sweep = new Dogproduct("sweep","./img/sweep.jpg");
 let dragon = new Dogproduct("dragon", "./img/dragon.jpg");
 let petsweep = new Dogproduct("pet-sweep", "./img/pet-sweep.jpg");
 let bag = new Dogproduct("bag","./img/bag.jpg");
 let banana = new Dogproduct("banana","./img/banana.jpg");
 let boots = new Dogproduct("boots","./img/boots.jpg");
 let breakfast = new Dogproduct("breakfast","./img/breakfast.jpg");
 let chair = new Dogproduct("chair","./img/chair.jpg");
 let pen = new Dogproduct("pen","./img/pen.jpg");
 let scissors = new Dogproduct("scissors","./img/scissors.jpg");
 let tauntaun = new Dogproduct("tauntaun","./img/tauntaun.jpg");
 let watercan = new Dogproduct("water-can","./img/water-can.jpg");
 let wineglass = new Dogproduct("wine-glass","./img/wine-glass.jpg");
 let cthulhu = new Dogproduct("cthulhu","./img/cthulhu.jpg");
 let bathroom = new Dogproduct("bathroom","./img/bathroom.jpg");
 

 dogArray.push(dogDuck);
 dogArray.push(magicdogDuck);
 dogArray.push(bubblegum);
 dogArray.push(shark);
 dogArray.push(sweep);
 dogArray.push(dragon);
 dogArray.push(petsweep);
 dogArray.push(bag);
 dogArray.push(banana);
 dogArray.push(boots);
 dogArray.push(breakfast);
 dogArray.push(chair);
 dogArray.push(pen);
 dogArray.push(scissors);
 dogArray.push(tauntum);
 dogArray.push(watercan);
 dogArray.push(wineglass);
 dogArray.push(cthulhu);
 dogArray.push(bathroom);


let dogArray = [];

console.log(dogArray);

function setProductImages(product1, product2, product3){



product1Img.src = product1.imgSrc;
product1Img.alt = product1.name
product2Img.src = product2Img.imgSrc;
product2Img.alt = product2.name;
product3Img.src = product3.imgSrc;
product3Img.alt = product3.name;

}

setDogImages(dogArray [0], dogArray [0]);

renderDogimages(dogDuck,bubblegumdo, );

function handleBoxdogClick(event) {
event.preventDefault();
let target = event.target;
let dogName = target.alt;

}

let theBestDogProduct;
for (let i=0; i<dogArray.length; i++) {
    let dog = dogArray [i];
    if(dog.name === dogName) {
    theBestDog = DogPoduct; 
        
    }

}

votingArea.addEventListeneraddEventListener("click"), handleDogClick;



let box1 = document.getElementById("clicker-dog-duck");

let box2 = document.getElementById("clicker-unicorn");

let box3 = document.getElementById("clicker-bugglegum");


