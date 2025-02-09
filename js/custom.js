document.addEventListener('click', function (e) {
  let heart = document.createElement('div')
  heart.innerHTML = '❤️'
  heart.style.cssText = `
        position: fixed;
        top: ${e.clientY - 10}px;
        left: ${e.clientX - 10}px;
        font-size: 18px;
        pointer-events: none;
        animation: fadeOut 1s ease-out;
    `
  document.body.appendChild(heart)
  setTimeout(() => document.body.removeChild(heart), 1000)
})

// CSS动画
let style = document.createElement('style')
style.innerHTML = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
    }
`
document.head.appendChild(style)
