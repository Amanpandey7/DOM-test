const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement('p');
redText.style.cssText = "color: red";
redText.textContent = "Hey I'm red!";

const blueText = document.createElement('h3');
blueText.style.cssText = "color: blue";
blueText.textContent = "I'm blue h3!";

const smallContent = document.createElement('div');
smallContent.style.background = 'pink';
smallContent.style.borderStyle = 'solid';
smallContent.style.borderColor = 'black';
//smallContent.style.borderWidth = '20px';
//smallContent.style.borderTop = '20px';
const headOne = document.createElement('h1');
headOne.textContent = "I'm in div!";
const pOne = document.createElement('p');
pOne.textContent = "ME TOO!";

smallContent.appendChild(headOne);
smallContent.appendChild(pOne);

container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(smallContent);