export const generatePassword = (
    length: number,
    useUpper: boolean,
    useLower: boolean,
    useNumbers: boolean,
    useSymbols: boolean
  ): string => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    let characters = '';
    
    if (useUpper) characters += upper;
    if (useLower) characters += lower;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
  
    if (!characters) return '';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return password;
  };
