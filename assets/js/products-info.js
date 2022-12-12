var products = {
  0: {
    name: "Chocolate cake",
    category: "0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, ante in ultricies tristique, metus.",
    price: "60",
    weight: "1,5",
    image: "assets/img/products/products/0.png",
  },
  1: {
    name: "Strawberry cream cupcake",
    category: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, ante in ultricies tristique, metus.",
    price: "10",
    weight: "0,4",
    image: "assets/img/products/products/1.png",
  },
  2: {
    name: "Bavarian cream cheesecake",
    category: "2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, ante in ultricies tristique, metus.",
    price: "20",
    weight: "0,8",
    image: "assets/img/products/products/2.png",
  },
  3: {
    name: "Soft heart-shaped cake",
    category: "0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, ante in ultricies tristique, metus.",
    price: "50",
    weight: "2",
    image: "assets/img/products/products/3.png",
  },
  4: {
    name: "Chocolate cream cupcake",
    category: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, ante in ultricies tristique, metus.",
    price: "12",
    weight: "0,4",
    image: "assets/img/products/products/4.png",
  },
};

var categories = {
  0: "cakes",
  1: "cupcakes",
  2: "deserts",
};

var productsQuantity = document.querySelector(
  ".main-products-list"
).childElementCount;

for (i = 0; i < productsQuantity; i++) {
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-info")
    .find(".main-products-list-item-info-maininfo")
    .find(".main-products-list-item-info-maininfo-name")
    .text(products[i].name);
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-info")
    .find(".main-products-list-item-info-description")
    .text(products[i].description);
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-info")
    .find(".main-products-list-item-info-bottominfo")
    .find(".main-products-list-item-info-bottominfo-price")
    .text(`${products[i].price}\$`);
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-info")
    .find(".main-products-list-item-info-bottominfo")
    .find(".main-products-list-item-info-bottominfo-weight")
    .text(`${products[i].weight} kg`);
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-img")
    .attr("src", products[i].image);
  $(`[data-productid="${i}"]`)
    .find(".wrapper")
    .find(".main-products-list-item-info")
    .find(".main-products-list-item-info-maininfo")
    .find(".main-products-list-item-info-maininfo-category")
    .text(`-${categories[products[i].category]}`);
}

// do adding to cart
function productAdded(productId) {
  console.log(productId);
}
