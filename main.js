const mole=document.querySelector('.mole')
const main_container=document.querySelector('.main-container')
const scoreBoard=document.querySelector('.score')
// non dom variables
let score=0
let containerWidth=main_container.offsetWidth;
let containerHeight=main_container.offsetHeight;
let moleWidth = mole.offsetWidth;
let moleHeight = mole.offsetHeight;
const maxX = containerWidth - moleWidth;
const maxY = containerHeight - moleHeight;
let moleVisible=true
let highestScore=localStorage.getItem('highestScore') || 0

scoreBoard.innerHTML=`<p>Score:0</p><p>Higest Score:${highestScore}`

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

let gameInterval=setInterval(moveMole,2000)
let gameTimeout=setTimeout(()=>{
   restart()
},15000)


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