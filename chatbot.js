function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addUserMessage(message);
  getBotReply(message);
  input.value = "";
}

const products = [
  {
    name: "iPhone 15 Pro",
    img: "img/i15.jpeg",
    price: "$999",
    rating: 4.8,
  },
  {
    name: "Sony WH-1000XM5",
    img: "img/sonyxm.jpeg",
    price: "$349",
    rating: 4.6,
  },
  {
    name: "Dell XPS 13 Laptop",
    img: "img/dell.jpeg",
    price: "$1199",
    rating: 4.7,
  },
  {
    name: "Apple Watch Series 9",
    img: "img/apple watch.jpeg",
    price: "$399",
    rating: 4.5,
  },
  {
    name: "Samsung Galaxy S24",
    img: "img/s24.jpeg",
    price: "$899",
    rating: 4.6,
  },
  {
    name: "MacBook Air M3",
    img: "img/am3.jpeg",
    price: "$1299",
    rating: 4.9,
  },
  {
    name: "Bose QC45 Headphones",
    img: "img/bose.jpeg",
    price: "$329",
    rating: 4.5,
  },
  {
    name: "Canon EOS M50",
    img: "img/canon.jpeg",
    price: "$749",
    rating: 4.4,
  },
  {
    name: "Nikon D5600",
    img: "img/nikon.jpeg",
    price: "$699",
    rating: 4.5,
  },
  {
    name: "iPad Pro 12.9",
    img: "img/ipad.jpeg",
    price: "$1099",
    rating: 4.7,
  },
  {
    name: "Fitbit Versa 4",
    img: "img/fitbit.jpeg",
    price: "$229",
    rating: 4.2,
  },
  {
    name: "Echo Dot 5th Gen",
    img: "img/echo.jpeg",
    price: "$49",
    rating: 4.6,
  },
  {
    name: "Logitech MX Master 3S",
    img: "img/logitech.jpeg",
    price: "$99",
    rating: 4.8,
  },
  {
    name: "Razer BlackWidow V3",
    img: "img/razer.jpeg",
    price: "$139",
    rating: 4.5,
  },
  {
    name: "Samsung Galaxy Tab S9",
    img: "img/s9.jpeg",
    price: "$799",
    rating: 4.7,
  },
  {
    name: "ASUS ROG Gaming Laptop",
    img: "img/asus.jpeg",
    price: "$1499",
    rating: 4.9,
  },
  {
    name: "HP Pavilion 15",
    img: "img/hpp.jpeg",
    price: "$699",
    rating: 4.4,
  },
  {
    name: "JBL Flip 6 Speaker",
    img: "img/jbl.jpeg",
    price: "$119",
    rating: 4.5,
  },
  {
    name: "GoPro Hero11 Black",
    img: "img/gopro.jpeg",
    price: "$399",
    rating: 4.6,
  },
  {
    name: "Ring Video Doorbell",
    img: "img/razer.jpeg",
    price: "$199",
    rating: 4.3,
  },
];

const productList = document.getElementById("products");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <button class="cart-btn">Add to Cart</button>
    `;
  productList.appendChild(card);
});

function addUserMessage(msg) {
  const chatBody = document.getElementById("chat-body");
  const div = document.createElement("div");
  div.className = "user-msg";
  div.textContent = msg;
  chatBody.appendChild(div);
}

function addBotMessage(msg) {
  const chatBody = document.getElementById("chat-body");
  const div = document.createElement("div");
  div.className = "bot-msg";
  div.textContent = msg;
  chatBody.appendChild(div);
}

function getBotReply(message) {
  // Basic keyword-based AI logic
  const lower = message.toLowerCase();
  if (lower.includes("phone")) {
    addBotMessage("Check out our latest smartphones with AI cameras!");
  } else if (lower.includes("laptop")) {
    addBotMessage("We have top deals on gaming and work laptops.");
  } else {
    addBotMessage("I’ll find you something great! Can you be more specific?");
  }
}
