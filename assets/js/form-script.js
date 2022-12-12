window.onload = function () {
  if (localStorage.formSent == "true") {
    document.querySelector(".main-callaction-form-success").style.display =
      "block";
    document.querySelector(".main-callaction-form-success").style.opacity = 1;
  }
};

function formSent() {
  localStorage.setItem("formSent", "true");
  document.querySelector(".main-callaction-form-success").style.display =
    "block";
  document.querySelector(".main-callaction-form-success").style.opacity = 1;
}
