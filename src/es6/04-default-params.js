function newUser (name, age, country){
    var name=name || 'Guillermo';
    var age=age || 37;
    var country=country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David',15,'CO');

function newAdmin(name='Guillermo',age=37, country='CL') {
    console.log(name,age,country);
}

newAdmin();
newAdmin('Ana',28,'PE');