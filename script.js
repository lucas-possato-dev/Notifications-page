const names = document.querySelectorAll('.name');
const dots = document.querySelectorAll('.redDot');
const markAll = document.querySelector('.markAll');
const counter = document.querySelector('.counter');

function handleClick(event) {
  const dotIndex = event.target.getAttribute('data-dot');
  const dot = dots[dotIndex];
  if (dot.classList.contains('active')) {
    dot.classList.remove('active');
    const counterNumber = parseInt(counter.innerText);
    counter.innerText = (counterNumber - 1).toString();
  }
}

function handleAll() {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  })
  counter.innerText = '0';
}

names.forEach((name, index) => {
  name.setAttribute('data-dot', index);
  name.addEventListener('click', handleClick);
})

markAll.addEventListener('click', handleAll);
