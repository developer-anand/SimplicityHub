// // Add event listeners to handle navigation menu clicks
// const homeLink = document.querySelector('nav a[href="index.html"]');
// const aboutLink = document.querySelector('nav a[href="about.html"]');
// const contactLink = document.querySelector('nav a[href="contact.html"]');

// homeLink.addEventListener("click", () => {
//   alert("You clicked on the Home link!");
// });

// aboutLink.addEventListener("click", () => {
//   alert("You clicked on the About link!");
// });

// contactLink.addEventListener("click", () => {
//   alert("You clicked on the Contact link!");
// });

// // Add functionality to the contact form
// const contactForm = document.getElementById("contact-form");

// contactForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(contactForm);
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const message = formData.get("message");

//   // Assuming there's an element with the ID "message-output" to display the result
//   const messageOutput = document.getElementById("message-output");
//   messageOutput.innerHTML = `<p>Thank you for your message, ${name}! We will get back to you at ${email} shortly.</p>`;
// });

// Add event listeners to handle navigation menu clicks
// const homeLink = document.getElementById("home-link");
// const aboutLink = document.getElementById("about-link");
// const contactLink = document.getElementById("contact-link");

// homeLink.addEventListener("click", handleNavigationClick);
// aboutLink.addEventListener("click", handleNavigationClick);
// contactLink.addEventListener("click", handleNavigationClick);

// function handleNavigationClick(event) {
//   event.preventDefault();
//   const clickedLinkText = event.target.textContent;
//   alert(`You clicked on the ${clickedLinkText} link!`);
// }

// Add functionality to the contact form
AOS.init();
const contactForm = document.getElementById("contact-form");
const messageOutput = document.getElementById("message-output");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Assuming there's an element with the ID "message-output" to display the result
  messageOutput.innerHTML = `<p>Thank you for your message, ${name}! We will get back to you at ${email} shortly.</p>`;
});
