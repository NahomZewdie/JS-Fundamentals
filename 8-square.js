let x = Number(process.argv[2]);
let string="X"
let i=0;
if (Number.isInteger(x)) {
    while (i<x){
        console.log(string.repeat(x));
        i++;
    }
}
else {
    console.log("Missing size");
}
