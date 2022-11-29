function* iterate(array) {
    for(let value of array)
    {
        yield value;
    }
}

const it = iterate([{name:'algo',age:37},'Katia','Karla','Mario']);
let bandera=false;
console.log(it.next());
console.log(it.next().value);
console.log(it.next().done);

// while(!bandera)
// {
//     let obj=it.next();
//     bandera=obj.done;
//     console.log(obj.value);
// }
