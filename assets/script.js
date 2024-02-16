"use strict"
// let name="Nurane";
// let result=[...name]
// console.log(result);

// let nums1=[1,2,3,4,5]
// let res=[...nums1]
// console.log(res);

// let nums1=[1,2,3,4,5]
// let num2=[100,200,300]
// let res=[...nums1,...num2]
// console.log(res);


// function  showNums(...numbers) {
//     console.log(numbers.length);
// }
// showNums(1,2,3,4,5)

// function  showNums(...numbers) {
//     console.log(numbers);
// }
// showNums(1,2,3,4,5)


// function test() {
//     console.log(arguments);
// }
// test(1,2,3,4,5)


// function showNums(...numbers) {
//     numbers.forEach(element => {
//         console.log(element);
//     });
// }
// showNums(1,2,3,4,5)


// function test() {
//     arguments.forEach(element => {
//         console.log(element);
//     });
// }
// test(1,2,3,4,5)

//--------DOM-----------
//  let h1=document.getElementsByTagName("h1")
//  console.log(h1);
//  let elems=document.getElementsByClassName("test")
//  console.log(elems);
// for (const item of elems) {
//     console.log(item);
// }
// let elementt=document.getElementById("salam")
// console.log(elementt);
// let elem=document.querySelector("h1")
// console.log(elem);
// let elems=document.querySelectorAll("h1")
// console.log(elems);
// for (const item of elems) {
//     console.log(item);
// }
// let elem=document.querySelector("h2")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// let elementt=document.querySelector(".example")
// elementt.innerText="Nurane";
// elementt.innerHTML="Nurane";
// elementt.innerHTML="<h1>Nurane</h1>"
// elementt.innerText="<h1>Nurane</h1>";
// let elementt=document.querySelector(".example")
// elementt.style.color="red";
// elementt.style.backgroundColor="yellow";
// elementt.style.padding="50px";
// elementt.className="salam";
// elementt.classList.add("salam")
// if (elementt.classList.contains("salam")) {
//     elementt.classList.remove("salam")
// }
// if (elementt.classList.contains("exx")) {
//         elementt.classList.remove("exx")
//     }
// let btn=document.querySelector(".sa")
// let btniki=document.querySelector(".saa")
// let elem=document.querySelector(".exx")

// console.log(btn);
// btn.onclick=function(){
//     alert("salamlar")
// }
// btn.onclick=function(){
//     alert("Necesiz?")
// }
// btn.addEventListener("click",function () {alert("salam")})
// btn.addEventListener("click",function () {alert("necesz")})
// btn.addEventListener("click",function () {
//     elem.style.backgroundColor="blue";
// })
// btniki.addEventListener("click",function () {
//     elem.style.backgroundColor="red";
// })
// btn.addEventListener("click",function () {
//     if (!elem.classList.contains("first")  ) {
//         elem.classList.add("first")
//         elem.classList.remove("second")
//     }
// })
// btniki.addEventListener("click",function(){
//     if (!elem.classList.contains("second")  ) {
//         elem.classList.add("second")
//         elem.classList.remove("first")
//     }
// })
// let ul=document.querySelector(".list")
// document.querySelector(".add").addEventListener("click",function(){
//     let li=document.createElement("li")
//     li.className="list-group";
//     li.innerText="Nurane";
//     ul.append(li)
// })
//-----------------------------------
// let ul=document.querySelector(".list")
// let input=document.querySelector(".innp")
// document.querySelector(".add").addEventListener("click",function(){
//     let li=document.createElement("li")
//     li.className="list-group";
//     li.innerText=input.value
//     if(input.value.trim()==""){
//         alert("Can't be empty")
//         return;
//     }
//     ul.append(li)
//     input.value=""
// })