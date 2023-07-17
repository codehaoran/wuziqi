class Game {
    constructor() {
        this.gobang = new GoBang()
        this.map = document.createElement('div')
        // document.body.appendChild(this.map)
    }

    start() {
        document.body.appendChild(this.map)
        this.map.style.width = blockSize * lineSize + blockSize + 'px'
        this.map.style.height = blockSize * lineSize + blockSize + 'px'
        this.map.style.position = 'relative'
        this.gobang.render(this.map)
        isWin(this)



        // with (this.map.style) {
        //     background = 'pink'
        // }
    }
}

function isWin(that) {
    window.addEventListener('win', (e) => {
        if (checkWin(that)) {
            this.dialog = new Dialog()
            const list = that.gobang.list
            const player = list[list.length - 1]['color'] === 'black' ? '黑' : '白'
            // console.log(list[list.length-1])
            console.log(that)
            this.dialog.render(player + '方胜利', that.map)
            that.gobang.isWin = true
        }
    })
}

function checkWin(that) {
    const {gobang} = that
    const list = gobang.list
    // 当前判断的棋子
    const listItem = list[list.length - 1]
    // 保存所有能赢的规则
    const wins = []
    for (let k = 0; k < 4; k++) {
        wins[k] = []
        for (let i = 0; i < 5; i++) {
            wins[k][i] = []
            for (let j = -i; j < -i + 5; j++) {
                let x, y
                if (k === 0) {
                    x = listItem.x + j * blockSize
                    y = listItem.y
                }
                if (k === 1) {
                    x = listItem.x
                    y = listItem.y + j * blockSize
                }
                if (k === 2) {
                    x = listItem.x + j * blockSize
                    y = listItem.y + j * blockSize

                }
                if (k === 3) {
                    x = listItem.x - j * blockSize
                    y = listItem.y + j * blockSize
                }
                wins[k][i].push({
                    color: listItem.color,
                    x,
                    y
                })
            }
        }
    }
    console.log(wins)
    // 将规则与list中的棋子对比，如果存在就true，否则false。返回的是与wins数组相同，但是数据变成布尔值的多维数组
    const winTypeLists = wins.map(winTypeLists => {
        return winTypeLists.map(winTypeList => {
            return winTypeList.map(chessInfo => {
                return list.filter(item => {
                    return item.x === chessInfo.x && item.y === chessInfo.y && item.color === chessInfo.color
                }).length > 0
            })
        })
    })
    // 判断满足哪条获胜规则
    let isWin = false
    winTypeLists.map(winList => {
        winList.map(item => {
            if (item.every(win => win)) {
                isWin = true
                console.log(isWin)

            }
        })
    })
    return isWin
}

const game = new Game()
game.start()