document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    
    if (username.length < 8) {
        console.log("El usuario debe tener al menos 8 caracteres.");
        return;
    }
    
    if (!email.includes("@")) {
        console.log("El email no es válido.");
        return;
    }
    
    console.log(`Usuario: ${username}, Email: ${email}`);
    console.log("Formulario enviado correctamente.");
});