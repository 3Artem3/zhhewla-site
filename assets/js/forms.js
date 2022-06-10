function submit() {
    const formName = document.querySelector('#formName').value
    const formTag = document.querySelector('#formTag').value
    const formCity = document.querySelector('#formCity').value
    const formYear = document.querySelector('#formYear').value

    const predictTIme = document.querySelector("#slider").value

    const moder = document.querySelector("#moder").checked
    const helper = document.querySelector("#helper").checked
    const eventer = document.querySelector("#eventer").checked

    const textarea = document.querySelector("#textArea").value

    const data = { formName, formTag, formCity, formYear, predictTIme, moder, helper, eventer, answer: textarea  }


    fetch("/request", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const form = document.querySelector(".formContainer")
    const modal = document.querySelector("#succesModal")

    form.classList.toggle("hidden")
    modal.classList.toggle("hidden")
}

let rightSpacing = 0

function animate(container) {
    const steps = document.querySelectorAll(".formStep")
    const width = -(container.offsetWidth)
    if (rightSpacing > 0) {
        rightSpacing = -(container.offsetWidth - (container.offsetWidth / steps.length))
    } else if (rightSpacing <= width) {
        rightSpacing = 0
    }
    container.style.left = rightSpacing + 'px'
}

function stepLeft() {
    const form = document.querySelector(".formContainer")
    const btns = document.querySelectorAll(".formNext")
    btns.forEach(item => {
        item.addEventListener("click", () => {
            rightSpacing -= 700
            animate(form)
        })
    })
}

function stepRight() {
    const form = document.querySelector(".formContainer")
    const btns = document.querySelectorAll(".formReturn")
    btns.forEach(item => {
        item.addEventListener("click", () => {
            rightSpacing += 700
            animate(form)
        })
    })
}
window.addEventListener("DOMContentLoaded", () => {
    stepRight()
    stepLeft()
})

// Код был написан Apexo#0723 (LegionerRI)
// Примечание! Скрипты не подлежат использованию на других ресурсах, это может повлечь к большим последствиям