export const handleCopyPassword = (password:string) => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => {
          alert("Password copied to clipboard!")  // Puedes mostrar una alerta o un mensaje visual
        })
        .catch(() => {
          alert("Failed to copy the password")
        })
    }
  }