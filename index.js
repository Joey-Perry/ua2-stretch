const formBtn = document.querySelector('#close-form');
const form = document.querySelector('.form');

const toggler = () => {
    form.classList.toggle('hide');
    if(formBtn.innerText === 'X'){
        formBtn.innerText = '+';
    } else {
        formBtn.innerText = 'X';
    }
}

formBtn.addEventListener('click', toggler);
