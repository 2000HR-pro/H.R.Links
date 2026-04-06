// وظيفة لجعل العناصر تظهر تدريجياً عند التمرير
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// تشغيل الوظيفة مرة واحدة عند التحميل لإظهار العناصر الموجودة في البداية
document.addEventListener("DOMContentLoaded", reveal);
