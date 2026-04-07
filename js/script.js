// تأثير الكتابة التلقائية
const textElement = document.getElementById('typing-text');
const text = "Web Developer & Python Programmer";
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// تأثير الظهور عند التمرير
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal); 

window.onload = () => {
    type();
    reveal();
}; 
