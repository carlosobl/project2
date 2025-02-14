function showMessage() {
    const card = document.querySelector('.card');
    const surpriseMessage = document.createElement('p');
    surpriseMessage.textContent = "Keep moving forward, Keira! 💖 Your ate, family, and nongni are always here to support you.";
    surpriseMessage.style.fontSize = "18px";
    surpriseMessage.style.marginTop = "10px";
    surpriseMessage.style.opacity = "0";
    surpriseMessage.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    surpriseMessage.style.transform = "translateY(20px)";
    card.appendChild(surpriseMessage);
    
    setTimeout(() => {
        surpriseMessage.style.opacity = "1";
        surpriseMessage.style.transform = "translateY(0)";
    }, 100);
}
