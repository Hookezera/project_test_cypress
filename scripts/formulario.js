function toggle() {
    const modalArea = document.querySelector('.area_close')

    modalArea.style.display = "none"
}
function abrir() {
    const modal = document.querySelector('.area_close')

    modal.style.display= "block"
}
function logar() {
    const areaSuccess = document.querySelector(".logado")
    const areazinha = document.querySelector(".login_area")
    areaSuccess.style.display = "flex"
    areazinha.style.display = "none"
}