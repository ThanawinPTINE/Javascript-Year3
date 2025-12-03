const istatus = 200

if (istatus === 200) {
    console.log(`OK!`);

}
else if (istatus === 400) {
    console.log(`Error!`)
}
else{
    console.log(`Unknown`)
}

switch (istatus) {
    case 200:
        console.log(`OK!`)
        break
    case 400:
        console.log(`Error`)
        break
    default:
        console.log(`Unknown`)
}

const result = (istatus === 200) ? "OK!" : "Not OK";
console.log(result);