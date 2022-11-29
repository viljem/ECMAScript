//declarando una clase
class User{

    //constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
        console.log('Nuevo usuario');
    }

    //métodos
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    speak(){
        return 'Hello';
    }

    //Getters & Setters
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n+10;
    }
}

//instancia de una clase
const newUser = new User('Guillermo',37);
console.log(newUser.greeting());
console.log(newUser.uAge);
newUser.uAge=20;
console.log(newUser.uAge);