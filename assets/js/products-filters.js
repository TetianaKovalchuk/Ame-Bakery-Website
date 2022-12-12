function updateItems() {
  for (i = 0; i < productsQuantity; i++) {
    if (
      $(`[data-productid="${i}"]`).hasClass("hidden-price") ||
      $(`[data-productid="${i}"]`).hasClass("hidden-category") ||
      $(`[data-productid="${i}"]`).hasClass("hidden-search")
    ) {
      $(`[data-productid="${i}"]`).addClass("hidden");
    } else if (
      !$(`[data-productid="${i}"]`).hasClass("hidden-price") &&
      !$(`[data-productid="${i}"]`).hasClass("hidden-category") &&
      !$(`[data-productid="${i}"]`).hasClass("hidden-search")
    ) {
      $(`[data-productid="${i}"]`).removeClass("hidden");
    }
  }
  if (
    $(".main-products-list").children().length ==
    $(".main-products-list").children(".hidden").length
  ) {
    $(".main-products-noitems").css("display", "block");
  } else {
    $(".main-products-noitems").css("display", "none");
  }
}

function updateCategoriesMenu(activeCategory) {
  $(".main-products-filters-category-list-item").each(function () {
    $(this).removeClass("category-active");
  });
  if (activeCategory == 99) {
    $(".main-products-filters-category-list-item-all").addClass(
      "category-active"
    );
  } else {
    $(`[data-categoryid="${activeCategory}"]`).addClass("category-active");
  }
}

function resetFilter(type) {
  $(".main-products-list-item").each(function () {
    $(this).removeClass(`hidden-${type}`);
  });
  updateItems();
  if (type == "category") {
    updateCategoriesMenu(99);
  }
}

var slider = $(".main-products-filters-price-sliders-item"),
  range = $(".main-products-filters-price-sliders-item-range"),
  value = $(".main-products-filters-price-sliders-item-result");

for (i = 0; i < slider.length; i++) {
  value.eq(i).text(range.eq(i).attr("value"));
}

function sliderInput(sliderId) {
  value.eq(sliderId).text(range.eq(sliderId).val());
}

// slider.each(function () {
//   value.each(function () {
//     $(this).text($(this).prev().prev().attr("value"));
//   });
//   range.on("input", function () {
//     $(this).next(value).html(this.value);
//     // change next
//     $(".main-products-filters-price-sliders-max-range").attr(
//       "min",
//       $(".main-products-filters-price-sliders-min-result").text()
//     );
//     if (
//       $(".main-products-filters-price-sliders-max-range").attr("min") <
//       $(".main-products-filters-price-sliders-min-result").text()
//     ) {
//       $(".main-products-filters-price-sliders-max-range").attr(
//         "min",
//         $(".main-products-filters-price-sliders-min-result").text() + 50
//       );
//     }
//   });
// });

for (
  i = 0;
  i < $(".main-products-filters-category-list").children().length;
  i++
) {
  $(`[data-categoryid="${i}"]`).text(`- ${categories[i]}`);
}

function appliedPriceFilter() {
  $(".main-products-list-item").each(function () {
    $(this).addClass("hidden-price");
  });
  // console.log("hid all elements");
  for (i = 0; i < productsQuantity; i++) {
    // console.log("i is" + i);
    if (
      Number($(".main-products-filters-price-sliders-max-result").text()) >
        Number(products[i].price) &&
      Number(products[i].price) >
        Number($(".main-products-filters-price-sliders-min-result").text())
    ) {
      // console.log("product " + i + "suits for the condition");
      document
        .getElementsByClassName("main-products-list-item")
        [i].classList.remove("hidden-price");
      // console.log("added shown class for" + i);
    }
  }
  updateItems();
}

function appliedCategoryFilter(id) {
  $(".main-products-list-item").each(function () {
    $(this).addClass("hidden-category");
  });
  // console.log("hid all elements");
  for (i = 0; i < productsQuantity; i++) {
    // console.log("i is" + i);
    if (Number(products[i].category) == Number(id)) {
      // console.log("product " + i + "suits for the condition");
      document
        .getElementsByClassName("main-products-list-item")
        [i].classList.remove("hidden-category");
      // console.log("added shown class for" + i);
    }
  }
  updateItems();
  updateCategoriesMenu(id);
}

// сделать чтобы подсвечивалась выбранная категория в списке фильтра категорий и ховер тоже
// сдулать нормально надпись что ничего не найдено
//

function appliedSearchFilter() {
  if ($(".main-products-search-input").val() !== "") {
    $(".main-products-list-item").each(function () {
      $(this).addClass("hidden-search");
    });
    for (i = 0; i < productsQuantity; i++) {
      if (
        String($(".main-products-list-item-info-maininfo-name").eq(i).text())
          .toLowerCase()
          .includes(
            String($(".main-products-search-input").val()).toLowerCase().trim()
          ) ||
        String($(".main-products-list-item-info-description").eq(i).text())
          .toLowerCase()
          .includes(
            String($(".main-products-search-input").val()).toLowerCase().trim()
          )
      ) {
        $(`[data-productid="${i}"]`).removeClass("hidden-search");
      }
    }
    // .each(function () {
    //   $(this).parent().parent().parent().parent().removeClass("hidden-search");
    // });
  } else {
    resetFilter("search");
  }
  updateItems();
}
