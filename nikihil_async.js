async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
f();

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
f().then(function(result) {
    console.log(result)
});

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 6000); 
});
// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}
// calling the async function
asyncFunc();
//The other way you can handle an error is by using try/catch block
// a promise
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 10000); 
});
// async function
async function asyncFunc1() {
    try {
        // wait until the promise resolves 
        let result = await promise1; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
// calling the async function
asyncFunc1(); // Promise resolved

