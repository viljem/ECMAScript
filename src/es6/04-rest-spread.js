//array destructuring

let fruits = ['Apple','Banana'];
let [a,b]=fruits;
fruits[0]='Orange';
console.log(a,b);
console.log(fruits);

//Object destructuring

let user ={
    username:'Guillermo',
    age:37,
    email:'algo@correo.com'
};
let {username,email} = user;
console.log(username,email);

//spread operator

let person={
    name:'Guillermo',
    age:37
}
let country = 'MX';
let data ={...person,country};
console.log(data);

//rest

function sum(num, ...values)
{
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}

sum(1,1,2,3);