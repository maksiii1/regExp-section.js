const submitBtn1 = document.querySelectorAll("[type='submit']");

submitBtn1[1].addEventListener("click", (event) => {
  const telephone = document.querySelector("[type='tel']").value;

  const telephoneChecker =
    /^((\+|)(7|8)(\s|-|)(\(|)[0-9]{3}(\(|)(\s|-|)[0-9]{3}(\s|-|)[0-9]{2}(\s|-|)[0-9]{2})$/;

  if (!telephoneChecker.test(telephone)) {
    event.preventDefault();

    const form = document.querySelectorAll("form");
    const checker = form[1].querySelector("div");

    if (!checker) {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = "Неверный формат Telephone";
      const lastElement = form[1].lastElementChild;
      form[1].insertBefore(elementDiv, lastElement);
    }
  }
});
