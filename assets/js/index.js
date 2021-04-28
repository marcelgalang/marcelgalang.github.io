// handle image picker
const imgs = document.getElementsByClassName("smallImg");
let i;

const heroView = e => {
    const currentImg = document.querySelector('#largeImg');
    const imgs = document.querySelector('.thumbnail-wrapper');
    const thumbs = document.querySelectorAll('[id=small]');
    
    currentImg.src = e.target.src;
    currentImg.parentElement.style.display = "block";
    thumbs.forEach(thumb => (
        thumb.classList.remove('selected')
    ));
    // exclude wrapper
    if (e.target.id ==="small") {
        e.target.classList.add('selected')
    }
};

for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', heroView)
}

//Expandable feature

const expandingButtons = document.getElementsByClassName("collapsible");

for (i = 0; i < expandingButtons.length; i++) {
    console.log(expandingButtons[i])
    expandingButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        content.style.maxHeight ? content.style.maxHeight = null :
        content.style.maxHeight = content.scrollHeight + "px";
  });
}

let accordionButton = document.querySelectorAll(".collapsible");

const textToggle = e => {
    const el = e.target;
    if (el.getAttribute("data-text-swap") == el.innerHTML) {
        el.innerHTML = el.getAttribute("data-text-original");
    } else {
        el.setAttribute("data-text-original", el.innerHTML);
        el.innerHTML = el.getAttribute("data-text-swap");
    }
}

for (i=0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', textToggle)
}

// Modal

const modal = document.getElementById('addToCartModal');
let addToCartBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const continueShoppingBtn = document.getElementsByClassName("continueShopping")[0];

const openModal = () => {
    modal.style.display = "block";
};
const closeModal = () => {
    modal.style.display = "none";
};
const clickOutsideCloseModal = (e) => {
    e.target == modal ? closeModal() : null;
};

addToCartBtn.onclick = openModal;
closeBtn.onclick = closeModal;
continueShoppingBtn.onclick = closeModal;
window.onclick = clickOutsideCloseModal;

