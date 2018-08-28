(function () {
    emailjs.init("user_lqKZ5vejfBA034vAQhC0C");
})();

document.getElementById('hire-application').addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(() => {
        if (!document.getElementById('hire-form').classList.contains('show')) {
            emailjs.sendForm('contact_service', 'hireus_template', this);
        }
    }, 3000)
});
document.getElementById('job-application').addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(() => {
        if (!document.getElementById('apply-form').classList.contains('show')) {
            emailjs.sendForm('contact_service', 'jobapply_template', this);
        }
    }, 3000)
});

