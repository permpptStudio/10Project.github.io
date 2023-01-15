const items =document.querySelectorAll(".accordion a");

function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(items => items.addEventListener('click' , toggleAccordion));