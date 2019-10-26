let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(128, 128, 128, 0.5)';
ctx.fillRect(0, 0, canvas.width, canvas.height);



let sizeOptionsButtons = document.querySelectorAll('.size-options__button');
let sizeOptionsButtonImages = document.querySelectorAll('.size-options__button-img');
for (let i = 0; i < sizeOptionsButtons.length; i++) {
  sizeOptionsButtons[i].addEventListener('click', function() {
    for (let j = 0; j < sizeOptionsButtonImages.length; j++) {
      sizeOptionsButtonImages[j].src = './assets/images/Ellipse.svg';
    }
    sizeOptionsButtonImages[i].src = './assets/images/Ellipse2.svg';
  });
}
