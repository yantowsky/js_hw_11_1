const lengthMatrix = 10;
const arrMatrixNum = [];
const arrRenderMatrix = [];

for (i = 0; i <= lengthMatrix; i++) {
    arrMatrixNum[i] = [];
    if (i === 0) {
        for (j = 0; j <= lengthMatrix; j++) {
            j === 0 ? (arrMatrixNum[i][j] = 'X',
                arrRenderMatrix.push(`<div class = "matrix__item matrix__item--spec">${arrMatrixNum[i][j]}</div>`)) :
                (arrMatrixNum[i][j] = j, arrRenderMatrix.push(`<div class = "matrix__item matrix__item--mod">${arrMatrixNum[i][j]}</div>`));
        }
    } else {
        for (j = 0; j <= lengthMatrix; j++) {
            j === 0 ? (arrMatrixNum[i][j] = i,
                arrRenderMatrix.push(`<div class = "matrix__item matrix__item--mod">${arrMatrixNum[i][j]}</div>`)) :
                (arrMatrixNum[i][j] = i * j, arrRenderMatrix.push(`<div class = "matrix__item ">${arrMatrixNum[i][j]}</div>`));
        }
    }
}

const tablePythagoras = `<div class="matrix"id="matrix"style="grid-template-columns: repeat(${lengthMatrix + 1}, 1fr)">${arrRenderMatrix.join("")}</div>`;

document.write(`<div class="wrapper">${tablePythagoras}</div>`);