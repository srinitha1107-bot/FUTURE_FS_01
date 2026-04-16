function toggleMode() {
    document.body.classList.toggle("dark");
}

function sendMessage(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully!";
}