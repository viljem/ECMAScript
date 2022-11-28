//enhanced objects literals

function newUser(user,age, country,uid){
    return {
        user,
        age,
        country,
        id:uid
    }
}

console.log(newUser('Guillermo',37,'MX',17));