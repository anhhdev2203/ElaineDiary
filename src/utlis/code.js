export function generateRandomCode() {
    const codeLength = 6;
    let code = "";
  
    for (let i = 0; i < codeLength; i++) {
      const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      code += randomNumber.toString(); // Append the random number to the code string
    }
  
    return code;
  }