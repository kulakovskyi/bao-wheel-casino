
const playBtn = document.querySelector('.bao__main-descr-btn'),
    wheel = document.querySelector('.bao__main-wheel-reel'),
    overlay = document.querySelector('.bao__overlay'),
    popupFirst = document.querySelector('.bao__firstWin'),
    popupFirstBtn = document.querySelector('.bao__firstWin-btn'),
    popupSecond = document.querySelector('.bao__secondWin'),
    overflow = document.querySelector('body'),
    wrapper = document.querySelector('.bao');

let triesCounter = 0

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 5300)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(913deg)'
    wheel.classList.remove('reel-rotation-first')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
    }, 5300)
    triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}

popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
}
