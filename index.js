const grab = (identifier) => document.querySelector(identifier);

const emailList = [];
const form = grab('.form');
const main = grab('.hero');
const nameInput = grab('#name');
const emailInput = grab('#email');
const formBtn = grab('#close-form');
const formContainer = grab('.form-container');

/* variables for cart functionality */
let cartItems = 0;
const cart = document.createElement('div');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');


const toggler = () => {
    form.classList.toggle('hide');
    formBtn.innerText = formBtn.innerText === 'X' ? '+' : 'X';
}

const displayThankYou = () => {
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(function(){
        formContainer.remove();
    }, 3000);
}

const validateForm = () => {
    if ((!nameInput.value) && (!emailInput.value)){
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        setTimeout(function(){
            alert('You must enter a name and an email address to subscribe!');
        }, 0);
    } else if (!nameInput.value){
        nameInput.style.border = '2px solid red';
        setTimeout(function(){
            alert('You must enter a name to subscribe!');
        }, 0);
    } else if (!emailInput.value){
        emailInput.style.border = '2px solid red';
        setTimeout(function(){
            alert('You must enter an email address to subscribe!');
        }, 0);
    } else {
        emailList.push(
            {
                name: nameInput.value, 
                email: emailInput.value,
            }
        )
        displayThankYou();
    }
}

const addToCart = () => {
    if (cartItems === 0){
        cartItems = 1;
        cart.setAttribute('class', 'cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.append(cart);
    } else {
        cartItems += 1;
        cart.innerText = `Your Cart: ${cartItems} items`;
    }
}

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', addToCart);
})

const changeBorder = (element) => {
    element.addEventListener('change', ()=>{
        element.style.border = 'none';
    })
}

formBtn.addEventListener('click', toggler);
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    validateForm();
})

changeBorder(nameInput);
changeBorder(emailInput);
