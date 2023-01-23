let word = document.querySelectorAll(".words")
let emoji = document.querySelectorAll(".emojis")
let counter = 0

emoji[counter].style.display = "inline"
word[counter].style.display = "inline"

setInterval(function(){
    for(let i = 0; i < word.length; i++){
        emoji[i].style.display = "none"
        word[i].style.display = "none"
    }
    emoji[counter % word.length].style.display = "inline"
    word[counter % emoji.length].style.display = "inline"
    counter ++
}, 5000)

let geradorCor = () =>{
    let letras = "0123456789abcdef"

    let arrCor = []
    for(let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 15)
        arrCor.push(letras[indice])
    }
    return '#' + arrCor.join('')
}

let skill = document.querySelectorAll(".skills")

setInterval(function(){
    for(let i = 0; i < skill.length; i++){
        skill[i].style.display = "none"
    }
    skill[counter % skill.length].style.display = "inline"
    skill[counter % skill.length].style.color = geradorCor()
}, 3000)