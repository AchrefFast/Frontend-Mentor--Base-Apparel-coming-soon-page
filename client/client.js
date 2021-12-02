window.addEventListener('DOMContentLoaded', function () {
    const email = document.querySelector('.hero__email__input');
    const submit = document.getElementById('submit');
    const error = document.getElementById('error');
    const error_p = document.getElementById('p-error');

    submit.addEventListener('click', function (e) {
        const regex = /^\w*?[@]\w*?[.]\w*$/ig;
        if (regex.test(email.value)) {
            error.style.display = 'none';
            error_p.style.display = 'none';
            return;
        } else {
            error.style.display = 'block';
            email.style.outline = '2px solid red';
            error_p.style.display = 'block';
            e.preventDefault();
        }
    });

});