const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#btn-close-modal");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-content form");
const overlay = document.querySelector(".overlay");
const openMobileModal = document.querySelector(".stick-menu-item li button");
const openModalFooter = document.querySelector("#open-modal-footer");

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendContactLetter();
});

function sendContactLetter() {
  let params = {
    name: document.getElementsByName("name")[0].value,
    email: document.getElementsByName("email")[0].value,
    phone: document.getElementsByName("phone")[0].value,
    message: document.getElementsByName("comment")[0].value,
  };

  emailjs.send("service_9crpmq9", "template_cuufhwm", params).then(() => {
    alert("Email sent!!!");
    modalForm.reset();
  });
}

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector("body").style.overflowY = "hidden";
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflowY = "auto";
};

openMobileModal.addEventListener("click", openModal);
openModalBtn.addEventListener("click", openModal);
openModalFooter.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
