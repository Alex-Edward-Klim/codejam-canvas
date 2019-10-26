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



/*
document.getElementById('4x4').addEventListener('click', function() {
  let colorMatrix;
  let url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    colorMatrix = out;
    for (let i = 0; i < colorMatrix.length; i++) {
      for (let j = 0; j < colorMatrix[i].length; j++) {
        ctx.fillStyle = `#${colorMatrix[i][j]}`;
        ctx.fillRect(i * 128, j * 128, (i + 1) * 128, (j + 1) * 128);
      }
    }
  })
  .catch(err => { throw err });
});

document.getElementById('32x32').addEventListener('click', function() {
  let colorMatrix;
  let url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    colorMatrix = out;
    for (let i = 0; i < colorMatrix.length; i++) {
      for (let j = 0; j < colorMatrix[i].length; j++) {
        ctx.fillStyle = `rgba(${colorMatrix[i][j][0]}, ${colorMatrix[i][j][1]}, ${colorMatrix[i][j][2]}, ${colorMatrix[i][j][3]})`;
        ctx.fillRect(i * 16, j * 16, (i + 1) * 16, (j + 1) * 16);
      }
    }
  })
  .catch(err => { throw err });
});
*/

document.getElementById('256x256').addEventListener('click', function() {
  let image = new Image();
  image.src = "./data/image.png";
  image.onload = function() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
});

document.getElementById('4x4').addEventListener('click', function() {
  let colorMatrix = matrix4x4;
    for (let i = 0; i < colorMatrix.length; i++) {
      for (let j = 0; j < colorMatrix[i].length; j++) {
        ctx.fillStyle = `#${colorMatrix[i][j]}`;
        ctx.fillRect(i * 128, j * 128, (i + 1) * 128, (j + 1) * 128);
      }
    }
  }
);

document.getElementById('32x32').addEventListener('click', function() {
  let colorMatrix = matrix32x32;
    for (let i = 0; i < colorMatrix.length; i++) {
      for (let j = 0; j < colorMatrix[i].length; j++) {
        ctx.fillStyle = `rgba(${colorMatrix[i][j][0]}, ${colorMatrix[i][j][1]}, ${colorMatrix[i][j][2]}, ${colorMatrix[i][j][3]})`;
        ctx.fillRect(i * 16, j * 16, (i + 1) * 16, (j + 1) * 16);
      }
    }
});
