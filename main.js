const mole=document.querySelector('.mole')
const main_container=document.querySelector('.main-container')
const scoreBoard=document.querySelector('.score')
const diffMenu=document.querySelector('.diff')
// non dom variables

let highestScore=localStorage.getItem('highestScore') || 0

scoreBoard.innerHTML=`<p>Score:0</p><p>Higest Score:${highestScore}`

let pressed=false

document.getElementById('easy').addEventListener('click',()=>{

    mole.style.width=140+'px'
    mole.style.height=80+'px'
    pressed=true
    diffMenu.style.display='none'
    gameCode()


})

document.getElementById('hard').addEventListener('click',()=>{

    mole.style.width=80+'px'
    mole.style.height=60+'px'
    pressed=true
    diffMenu.style.display='none'
    gameCode()


})





 function gameCode(){
    let score=0
let containerWidth=main_container.offsetWidth;
let containerHeight=main_container.offsetHeight;
let moleWidth = mole.offsetWidth;
let moleHeight = mole.offsetHeight;
const maxX = containerWidth - moleWidth;
const maxY = containerHeight - moleHeight;
let moleVisible=true
function moveMole(){

    let randomX=Math.random()*maxX
    let randomY=Math.random()*maxY

    mole.style.left=randomX+'px'
    mole.style.top=randomY+'px'
    moleVisible=true
  

}


mole.addEventListener('click',()=>{
    if(moleVisible){ score++
        moleVisible=false
        scoreBoard.innerHTML=`<p>Score:${score}</p><p>Higest Score:${highestScore}`

    }  
})


function resetGame() {
    
     gameTimeout=setTimeout(()=>{
        restart()
     },15000)
     gameInterval=setInterval(moveMole,2000)
    score = 0; 
    scoreBoard.innerHTML =`<p>Score:0</p><p>Higest Score:${highestScore}`
}

let gameInterval=setInterval(moveMole,1000)
let gameTimeout=setTimeout(()=>{
   restart()
},30000)


function restart(){
        
        clearInterval(gameInterval)
        alert(`Your score is:${score}`)
        let highestScore = localStorage.getItem('highestScore') || 0; 
        if (score > highestScore) {
            localStorage.setItem('highestScore', score);
            alert(`Congratulations! You've set a new highest score: ${score}`);
        }
        score=0
        resetGame() 
}
 }