 document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully - Welcome H.R!");
    
    // مثال: إضافة رسالة تأكيد بسيطة عند محاولة الإرسال
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', () => {
            console.log("Form is being submitted...");
        });
    }
});
