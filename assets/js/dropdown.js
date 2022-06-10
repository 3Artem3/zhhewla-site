window.addEventListener("DOMContentLoaded", () => {
    const wrappersTitle = document.querySelectorAll('.dropdownTitle')
    const wrappersDescription = document.querySelectorAll('.dropdownText')

    wrappersTitle.forEach((item, i) => {
        item.addEventListener("click", () => {
            item.classList.toggle("dropdownActive")
            wrappersDescription[i].classList.toggle("dropdownActive")
        })
    })
})

// Код был написан Apexo#0723 (LegionerRI)
// Примечание! Скрипты не подлежат использованию на других ресурсах, это может повлечь к большим последствиям