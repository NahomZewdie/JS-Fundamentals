let x = Number(process.argv[2]);
let string="X"
if (Number.isInteger(x)) {
    for(i=0;i<x;i++){
        console.log(string.repeat(x));
    }
}
else{
    console.log("Missing size");
}
