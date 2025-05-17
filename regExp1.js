const submitBtn = document.querySelector("[type='submit']");

submitBtn.addEventListener("click", (event) => {
  const url = document.querySelector("[type='url']").value;

  const URLChecker = /^((http|https):\/\/[a-z]+(\/[a-z]*)*\.(php|html))$/;

  if (!URLChecker.test(url)) {
    event.preventDefault();

    const form = document.querySelector("form");
    const checker = form.querySelector("div");

    if (!checker) {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = "Неверный формат URL";
      const lastElement = form.lastElementChild;
      form.insertBefore(elementDiv, lastElement);
    }
  }
});
