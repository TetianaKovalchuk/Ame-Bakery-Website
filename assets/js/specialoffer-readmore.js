var specialOfferReadMoreOpened = false;

function specialOfferReadMore() {
  if (specialOfferReadMoreOpened == false) {
    document.querySelector(".main-hero-description-additional").style.display =
      "block";
    document.querySelector(".main-hero-readmore").textContent = "Show less";
    specialOfferReadMoreOpened = true;
  } else {
    document.querySelector(".main-hero-description-additional").style.display =
      "none";
    document.querySelector(".main-hero-readmore").textContent = "Show more";
    specialOfferReadMoreOpened = false;
  }
}
