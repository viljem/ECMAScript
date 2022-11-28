const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if(false)
        {
            resolve('yea!'); 
        }
        else
        {
            reject('ups!')
        }
    })
}

anotherFunction()
    .then(Response=>console.log(Response))
    .catch(err=>console.log(err));