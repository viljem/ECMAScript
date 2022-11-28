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