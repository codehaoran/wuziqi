const lineSize = 15
const blockSize = 50

class GoBang {
    constructor() {
        this.list = [] // 棋盘已下棋子列表信息
        this.isWin = false
    }

    init(app) {
        const canvas = document.createElement('canvas')
        app.appendChild(canvas)
        // .appendChild(this.map)
        document.body.style.margin = '0'
        canvas.style.backgroundColor = 'goldenrod'
        canvas.width = blockSize * lineSize + blockSize
        canvas.height = blockSize * lineSize + blockSize
        return canvas
    }

    render(app) {
        const canvas = this.init(app)
        this.ctx = canvas.getContext('2d')
        this.drawLine(this.ctx)
        this.drawLine(this.ctx, 'col')
        canvas.onclick = bindCanvasClick.bind(this)
    }

    // 画线
    drawLine(ctx, type = 'row') {
        for (let i = 1; i <= lineSize; i++) {
            const isRow = type === 'row'
            ctx.beginPath()
            if (isRow) {
                ctx.moveTo(blockSize, i * blockSize)
                ctx.lineTo(lineSize * blockSize, i * blockSize)
            } else {
                ctx.moveTo(i * blockSize, blockSize)
                ctx.lineTo(i * blockSize, lineSize * blockSize)
            }
            ctx.stroke()
        }
    }

}

// canvas点击事件
function bindCanvasClick(e) {
    // 解构
    const {ctx, list, isWin} = this
    if (isWin) return
    const x = Math.round(e.offsetX / blockSize) * blockSize
    const y = Math.round(e.offsetY / blockSize) * blockSize
    // 边界检测
    if (checkRound(x, y)) return false
    const color = list.length % 2 === 0 ? 'black' : 'white'
    const id = x + '_' + y
    // 检测要下的位置是否已有棋子
    if (list.find(item => id === item.id)) return false
    list.push({
        color: color,
        id,
        x,
        y
    })
    // 画圆
    drawArc(ctx, list, x, y, color)
    // 下棋后判断输赢
    window.dispatchEvent(new CustomEvent('win'))
}

// 画圆 =》 棋子
function drawArc(ctx, list, x, y, color) {
    ctx.beginPath()
    ctx.arc(x, y, blockSize * 0.45, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
}

// 边界检测
function checkRound(x, y) {
    if (x < blockSize || x > blockSize * lineSize) return true
    if (y < blockSize || y > blockSize * lineSize) return true

}
