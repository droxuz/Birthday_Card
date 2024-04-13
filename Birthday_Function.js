const openButton = document.getElementById("openPopupVid");
const closeButton = document.getElementById("closePopupVid");
const innerModel = document.getElementById("modal");

openButton.addEventListener("click", () => {
    modal.classList.add("open");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
});