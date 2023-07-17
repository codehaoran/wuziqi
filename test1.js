const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const blockSize = 20 // 每个格子的大小
const blockCount = 15 // 棋盘的纵横排列多少个

canvas.width = blockSize * blockCount + blockSize
canvas.height = blockSize * blockCount + blockSize

let n = 0

for (let i = 1; i <= blockCount; i++) {
    // 横线
    ctx.beginPath()
    ctx.moveTo(blockSize, i * blockSize)
    ctx.lineTo(blockCount * blockSize, i * blockSize)
    ctx.stroke()
    // 竖线
    ctx.beginPath()
    ctx.moveTo(i * blockSize, blockSize)
    ctx.lineTo(i * blockSize, blockCount * blockSize)
    ctx.stroke()
}

canvas.onclick = function (e) {
    let x = Math.round(e.offsetX / blockSize) * blockSize
    let y = Math.round(e.offsetY / blockSize) * blockSize
    ctx.beginPath()
    ctx.arc(x, y, 8, 0, 2 * Math.PI)
    n % 2 === 0 ? ctx.fillStyle = 'black' : ctx.fillStyle = 'white'
    ctx.fill()
    n++
}
