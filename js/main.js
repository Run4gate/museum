// let slideIndex = 1
// let dots = document.querySelectorAll(`.slider__dot`)
// function getClass (Class) {
//     return document.querySelector(Class)
// }
// let slide = getClass(`.welcome--0`)
// function () {
//     .classList.remove(`welcome--${slideIndex}`)
//     .classList.remove(`slider__dot--${slideIndex}`)
// }
// window.onload = function dotsColor () {
//     dots.classList.remove(`dots__slider:active`)
// }
const progress = document.querySelector('.video__panel-input--1')
const audio = document.querySelector('.video__panel-input--2')
progress.addEventListener('input', function() {
  const value = this.value
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
audio.addEventListener('input', function() {
    const value = this.value
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  })

const gallery1 = document.querySelector('.gallery__content--1')
const gallery2 = document.querySelector('.gallery__content--2')
const gallery3 = document.querySelector('.gallery__content--3')

function shuffle(arr){
    let j, temp
    for(let i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1))
      temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
    return arr
}

function createArr(){
  let array = []
  for(let i = 0; i <= 14; i++){
    array[i] = document.createElement ("IMG")
    array[i].setAttribute(`src`, `random/galery${i}.jpg`)
    array[i].classList.add(`gallery__content-item`)
  }
  return array
}

window.onload = function () {
let images = createArr()
images = shuffle(images)
console.log(images)
for(let i = 0; i <= 4; i++){
  gallery1.appendChild(images[i])
}
for(let i = 5; i <= 10; i++){
  gallery2.appendChild(images[i])
}
for(let i = 10; i <= 14; i++){
  gallery3.appendChild(images[i])
}
}


