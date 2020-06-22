/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
   someName = Object.getOwnPropertyNames(someObj);
   someValue = Object.values(someObj);
   
    for(i=0; i<someName.length;i++){
        console.log(someName[i]+ ": " + someValue[i])
    }
}

let city = {name: "New York", cost: "expensive"};

objectProperties(city);