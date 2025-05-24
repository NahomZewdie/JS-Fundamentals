
const firstArgument = process.argv[2];
const number = parseInt(firstArgument);

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log("My number: " + number);
}