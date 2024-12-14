function password() {
    let porm = prompt("Enter A Length Of Password")
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&"
    let password = "";
    for (let i = 0; i < porm; i++) {
        let index = Math.floor(Math.random() * charset.length);
        password += charset[index]
    }
    document.getElementById("password").innerHTML = `${password}`
}
