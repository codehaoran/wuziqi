class Dialog {
    constructor() {
        this.div = document.createElement('div')
    }

    render(text, app) {
        this.div.innerHTML = text
        const father = app || document.body
        drawUI(this.div)
        father.appendChild(this.div)
        makeCurrentDown(father)
    }
}
function makeCurrentDown(father){
    const div = document.createElement('div')
    // div.innerHTML = 'fff'
    let count = 4
    const timer = setInterval(() => {
        count--
        div.innerHTML = count + '秒后刷新'
        if (count<=0){
            location.reload()
        }
    },1000)
    father.appendChild(div)

}
function drawUI(div) {
    div.style.width = '200px'
    div.style.height = '40px'
    div.style.lineHeight = '40px'
    div.style.fontSize = '30px'
    div.style.fontWeight = '600'
    div.style.position = 'absolute'
    div.style.top = 'calc(50% - 20px)'
    div.style.left = 'calc(50% - 100px)'
    div.style.textAlign = 'center'
    div.style.backgroundColor = 'rgba(255,255,255,.8)';
    div.style.lineHeight = '40px';
    div.style.borderRadius = '10px';
    div.style.boxShadow=' 5px 5px 10px rgba(0,0,0,.5)';
}