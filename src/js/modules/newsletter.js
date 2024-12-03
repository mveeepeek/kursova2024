const newsletterForm = document.querySelector(".footer-newsletter");
const newsletterInput = document.querySelector(".footer-input");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sentNewsletter();
});

function sentNewsletter() {
  let params = {
    email: document.querySelector(".footer-input").value,
  };

  emailjs.send("service_9crpmq9", "template_t8lorx6", params).then(() => {
    alert("Email sent!!!");
    newsletterForm.reset();
  });
}
