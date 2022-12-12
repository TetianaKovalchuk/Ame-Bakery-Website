var eventReadMoreOpened = false;

function eventReadMore() {
  if (eventReadMoreOpened == false) {
    document.querySelector(".main-recommendations-wrapper").style.top =
      "calc(815 * var(--dp))";
    document.querySelector(".main-banner-post-description-more").style.display =
      "block";
    document.querySelector(".main-banner-post-description").style.marginBottom =
      "calc(20 * var(--dp))";
    document.querySelector(".main-banner-post-readmore").textContent =
      "Show less";
    eventReadMoreOpened = true;
  } else {
    document.querySelector(".main-recommendations-wrapper").style.top =
      "calc(615 * var(--dp))";
    document.querySelector(".main-banner-post-description-more").style.display =
      "none";
    document.querySelector(".main-banner-post-description").style.marginBottom =
      "calc(35 * var(--dp))";
    document.querySelector(".main-banner-post-readmore").textContent =
      "Show more";
    eventReadMoreOpened = false;
  }
}
