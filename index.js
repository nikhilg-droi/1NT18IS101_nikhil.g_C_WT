var a=10

let greeter = "say hi "
var times =4
if(times >3 ){
    let greeter="say hello"

}

let str="apple banana kiwi";
document.getElementById("demo2").innerHTML = "sss"

//console.log(greeter)

const greeting = {
    message:"Abc",
    number:2
}

greeting.message="aca"
//alert(greeter)

var car;
console.log(car+" "+typeof car)

car=" "
console.log(car+" "+typeof car)

person={
    name:"sanket",
    usn:"1nt18is137",
    fullname:function(){
        return this.name+" "+this.usn;
    }
};
//document.getElementById("demo").innerHTML=person.fullname();

//let displaydate = ()=>{document.getElementById("demo").innerHTML=Date();}

let name1 = () =>{
    let person=prompt("enter your name","sanketh");
    alert(person.length)
}

let escape="This is \"escap\" character";

let name1="string" //string
let name2=new String("string") //object









car=null
//console.log(typeof car)

// let sum=()=>alert(10+20)
// sum();

function func(){
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    alert(Number(a)+Number(b))
}

let addelem=document.getElementById("add")
addelem.addEventListener("click",()=>{
    let add1=Number(document.getElementById("a").value)
    let add2=Number(document.getElementById("b").value)
    alert(add1+add2)
})

let data=document.getElementById("btn")
data.addEventListener("click",()=>{
    let data1=document.getElementById("name").value
    alert(data1)
})



var delay = function (elem, callback) {
    var timeout = null;
    elem.onmouseover = function(e) {
        e.stopPropagation()
        timeout = setTimeout(callback, 1000);
    };

    elem.onmouseout = function() {
        clearTimeout(timeout);
    }
};


let elem1=document.getElementById("innerbox")
// elem1.addEventListener("mouseover",(e)=>{
//     e.stopPropagation()
//     alert("danger");
// })
delay(elem1,()=>{
    alert("danger")})

let elem2=document.getElementById("middlebox")
// elem2.addEventListener("mouseover",(e)=>{
//     e.stopPropagation()
//     alert("threat");
// })
delay(elem2,()=>{alert("threat")})
let elem3=document.getElementById("outerbox")
// elem3.addEventListener("mouseover",()=>{
//     alert("safe");
// })
delay(elem3,()=>{alert("safe")})

var str1=prompt("enter your name");
alert(str1.length);

var str2=prompt("enter a string");
var str3=prompt("enter string to find");

let idx=str2.indexOf(str3)
alert(idx)

let elm=document.getElementById("add")
elm.addEventListener("click",()=>{
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    let c=a.concat(" "+b)
    document.getElementById("id1").innerHTML="fullname   "+c
})

let elm2=document.getElementById("slice")

elm2.addEventListener("click",()=>{
    let c=document.getElementById("c").value
    let d=Number(document.getElementById("d").value)
    let e=Number(document.getElementById("e").value)
    document.getElementById("id2").innerHTML=c.slice(d,e)
})

//array methods
var nums = ["one", "two", "three", "four"];
document.getElementById("id1").innerHTML = nums.toString();

//join method
document.getElementById("id2").innerHTML = nums.join(" * ");


//pop method
document.getElementById("id3").innerHTML = nums.pop();

//push method
nums.push("five");
document.getElementById("id4").innerHTML = nums.toString();

//shift
document.getElementById("id5").innerHTML = nums.shift();

//unshift
nums.unshift("six");
document.getElementById("id6").innerHTML = nums.toString();

//length
document.getElementById("id7").innerHTML = nums.length;

//splice
nums.splice(2, 2, "eight", "nine");
document.getElementById("id8").innerHTML = nums.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
nums = nums.concat(fruits)
document.getElementById("id9").innerHTML = nums.toString();

//slice
document.getElementById("id10").innerHTML = nums.slice(3, 6);

//1.There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value 
//from the given arrays. 
//Sample array:array1 = [2,0,3,3,4];array2 = [3,4,6,6,3,1];
//Expected Output:[5, 4, 9, 9, 7, 1]

let nums1 = [2, 0, 3, 3, 4];
let nums2 = [3, 4, 6, 6, 3, 1];
let results = [];
let idx = 0;
while (idx < nums1.length && idx < nums2.length) {
    results.push(nums1[idx] + nums2[idx]);
    idx++;
}
if (nums1.length > nums2.length) {
    for (let i = idx; i < nums1.length; i++)
        results.push(nums1[i]);
} else {
    for (let i = idx; i < nums2.length; i++)
        results.push(nums2[i]);
}
document.getElementById("id10").innerHTML = results.toString();

//2.Find the leap years in the given range

function isaleapyear() {
    const year = prompt('Enter a year:');
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        document.getElemcentById("id9").innerHTML = 'yes it is a leap year' + year
    } else {
        document.getElementById("id10").innerHTML = 'not a leap year' + year
    }
}
isaleapyear();

//3.Write a javascript program to compute the sum and product of an array of integers
let array1 = [6,5,2,1,4];
let array2 = [9,3,6,1,3];
let summ = [];
let product = [];
let i2 = 0;
while (i2 < array1.length && i2 < array2.length) {
    summ.push(array1[i2] + array2[i2]);
    product.push(array1[i2] * array2[i2]);
    i2++;
}
if (array1.length > array2.length) {
    for (let j = i2; j < array1.length; j++) 
    summ.push(array1[j]);
    for (let j = i2; j < array1.length; j++) 
    product.push(array1[j]);
} else {
    for (let k = i2; k < array2.length; k++) 
    summ.push(array2[k]);
    for (let k = i2; k < array2.length; k++) 
    product.push(array2[k]);
}
document.getElementById("id9").innerHTML = 'Sum is :  ' + summ;
document.getElementById("id10").innerHTML = 'Product is :  ' + product;


//calculator part
//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}