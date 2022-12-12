var headerMobileMenuOpened = false;
function headerMobileMenu() {
  if (headerMobileMenuOpened == false) {
    $(".links").css("display", "flex");
    setTimeout(function () {
      $(".links").css("transform", "translateX(0)");
    }, 100);
    headerMobileMenuOpened = true;
  } else {
    $(".links").css("transform", "translateX(calc(2000 * var(--dp)))");
    setTimeout(function () {
      $(".links").css("display", "none");
    }, 1000);
    headerMobileMenuOpened = false;
  }
}
