'use strict';

let votingArea = document.getElementById('voting'-area);
let resultArea = document.getElementById('result-area');

let box = document.getElementById("clicker");

function handleBoxClick(event) {
event.preventDefault();
let target = event.target;
target.style.backgroundColor = "yellow";
target.dataset.n = "1001"
}

 box.addEventListener("click"), handleBoxClick);

let box1 = document.getElementById("clicker-d0g-duck");

let box2 = document.getElementById("clicker-unicorn");

let box3 = document.getElementById("clicker-bugglegum");