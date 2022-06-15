const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');
const boxes = document.querySelectorAll('.skills-box')
const wavyLetters = document.querySelectorAll('.name', '.front-end')

window.addEventListener('scroll', skillBoxes)
window.addEventListener('scroll', wavyLetters)

wavyLetters.forEach(letters => {
    letters.innerHTML = letters.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 70}ms">${letter}</span>`)
    .join('')
})

let load = 0;

let int = setInterval(blurring, 20)

skillBoxes()


function skillBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(skillsBox => {
        const boxTop = skillsBox.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            skillsBox.classList.add('show')
        } else {
            skillsBox.classList.remove('show')
        }
    })
}

function blurring() {
    load++

    if( load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale (load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
