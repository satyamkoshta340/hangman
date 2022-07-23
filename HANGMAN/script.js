// const App = ()=>{
//     return(
//         React.createElement(
//             "div",
//             null,
//             "HANGMAN"
//         )  
//     )
// }

// const fun = async ()=>{
//     const res = await fetch("../data.json", ['text/json']);
    
//     console.log(res)
//     return res.json();      
// }

const getOne = async()=>{
    const response =await fetch("./data.json");
    const data = await response.json();
    words = data.words;
    return words[Math.floor(Math.random()*words.length)];
}

const wordSpace = document.getElementById("word-space");
let gameState = false;
var lives = 6;
let word = "";
var covered = 0;
var keyHistory = [];
const start = async ()=>{
    lives=6;
    covered=0;
    keyHistory=[];
    gameState = true;
    word =await getOne();
    word = word.toUpperCase();
    // console.log(word);


    const bodyParts = document.querySelectorAll(".hangman-base div");
    // console.log(bodyParts);
    for(let i=1; i<=6; i++) bodyParts[i].style.display="none";
    wordSpace.innerHTML ="";
    for(let i =0; i< word.length; i++){
        const block = document.createElement("div");
        wordSpace.appendChild(block);
    }
}

const finish =() =>{
    if(covered === word.length){
        // create pop-up Win
        console.log("win");
        alert("You win");
        // alert()
    }
    else{// create pop up gameover
        wordSpace.innerHTML ="";
        for(let i =0; i< word.length; i++){
            const block = document.createElement("div");
            block.innerText = word[i];
            wordSpace.appendChild(block);
        }
        console.log("lose");
        alert(`You lose! word was: ${word}`);
    }
    start();
}

start();


const pressed = (e)=>{
    let k = e.key.toLowerCase();
    
    const el =document.getElementsByClassName(k)[0];
    if(el){
        el.classList.add("active-key");
        setTimeout(()=>{
            el.classList.remove("active-key");
        }, 301);
        // && history.find(elem => elem === k)=== undefined
        gameEvent(k);
    }
}
const clicked = (k)=>{
    // const k = e.key.toLowerCase();
    
    const el =document.getElementsByClassName(k)[0];
    if(el){
        el.classList.add("active-key");
        setTimeout(()=>{
            el.classList.remove("active-key");
        }, 301);
    }
    gameEvent(k);
}

const gameEvent = (k)=>{
    if(gameState && keyHistory.find(elem => elem === k)=== undefined ){
            // console.log(keyHistory);
            keyHistory.push(k);
            k = k.toUpperCase();
            let c= 0;
            for(let i =0; i< word.length; i++){
                if(word[i] === k){
                    var nthChar = document.querySelector(`.word-space div:nth-child(${i+1})`);
                    const ch = document.createTextNode(k);
                    nthChar.appendChild(ch);
                    c++;
                    covered++;
                }
                if(covered === word.length ) finish();
            }
            if(c===0){
                lives--;
                // if(lives === 5){
                //     const head = document.getElementsByClassName("hangman-head")[0];
                //     head.style.display= "block";
                // }
                const part = document.querySelector(`.hangman-base div:nth-child(${6-lives + 1})`);
                part.style.display = "block";
                if(lives === 0) finish();
            }
        }
        else{
            alert("press any other key, u have already tried it!")
        }
}

document.addEventListener("keyup", pressed)

// ReactDOM.render(React.createElement(App), document.getElementById("App"));
