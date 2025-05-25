function factorial(n) {
    const num = Number(n);
  
    if (isNaN(num) || num === 0) {
      return 1;
    } else if (num < 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  const arg = process.argv[2];
  console.log(factorial(arg));