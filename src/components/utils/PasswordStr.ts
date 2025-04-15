export const getPasswordStrength = (password: string) => {
    let strength = "Weak";
    const lengthCriteria = password.length > 8;
    const upperCriteria = /[A-Z]/.test(password);
    const lowerCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const symbolCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (lengthCriteria && (upperCriteria || lowerCriteria) && numberCriteria) {
      strength = "Moderate";
    }
    if (lengthCriteria && upperCriteria && lowerCriteria && numberCriteria && symbolCriteria) {
      strength = "Strong";
    }
  
    return strength;
  }
  