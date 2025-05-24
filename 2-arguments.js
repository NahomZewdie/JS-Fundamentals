const numberOfArguments = process.argv.length - 2; // Subtract 2 to exclude 'node' and the script file path.

// Check the number of arguments and print the appropriate message.
if (numberOfArguments === 0) {
  // If no arguments are passed by the user
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed by the user
  console.log("Argument found");
} else {
  // If more than one argument is passed by the user
  console.log("Arguments found");
}