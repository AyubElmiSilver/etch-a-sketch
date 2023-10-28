const container = document.querySelector('.container');
const button = document.querySelector('button');
button.textContent = ('Select Size');
button.style.backgroundColor = 'blue';

button.addEventListener('click', () => {
    let number = prompt('Enter number of squares per row and column for new grid');
    if (number <= 100) {
        for (let i = 0; i < (number*number); i++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'box');
            div.style.cssText = `width: ${(600 / number) - 2}px; height: ${(600 / number) - 2}px;`;
            container.appendChild(div);
        }
    } 

})
