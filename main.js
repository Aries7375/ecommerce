/* lo importante es llegar a ROMA*/

const data = [
  {
    img: "./img/featured1.png",
    name: "Hoodies",
    stock: 9,
    price: 14,
    subtotal: 0,
    units: 0,
    id: i0,
    btnId: "uni1",
    itId: "it0",
    subId: "sub1",
    restId: "re1",
    stId: "st1",
  },
  {
    img: "./img/featured2.png",
    name: "Shirts",
    stock: 15,
    price: 24,
    subtotal: 0,
    units: 0,
    id: i1,
    btnId: "uni2",
    itId: "it1",
    subId: "sub2",
    restId: "re2",
    stId: "st2",
  },
  {
    img: "./img/featured3.png",
    name: "Sweatshirts",
    stock: 20,
    price: 24,
    subtotal: 0,
    units: 0,
    id: i2,
    btnId: "uni3",
    itId: "it3",
    subId: "sub3",
    restId: "re3",
    stId: "st3",
  },
];

const menuIcon = document.querySelector("#icon-menu");
const nav = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const cartIcon = document.querySelector("#icon-cart");
const cart = document.querySelector(".cart");
const exit = document.querySelector("#exit");

function active(x, y) {
  x.addEventListener("click", function () {
    y.classList.toggle("active");
    x != exit
      ? body.classList.toggle("no-scroll")
      : body.classList.remove("no-scroll");
    window.innerWidth >= 700 && x === cartIcon
      ? body.classList.remove("no-scroll")
      : null;
    window,
      innerWidth >= 700 && x === nav
        ? body.classList.remove("no-scroll")
        : null;
  });
}
active(menuIcon, nav);
active(cartIcon, cart);
active(exit, cart);
active(nav, nav);

const card = document.querySelector(".card");
let printId = document.querySelector(".added");
const all = document.querySelector(".products-items");
const first = document.querySelector("#i0");
const two = document.querySelector("#i1");
const three = document.querySelector("#i2");
const add1 = document.querySelector(".add1");
const add2 = document.querySelector(".add2");
const add3 = document.querySelector(".add3");
const check = document.getElementById("check");
const cartImg = document.querySelector(".cart-img");

function last(x, y) {
  x.addEventListener("click", function () {
    let html = "";
    for (let i of data) {
      if (x === i.id) {
        html = `<div class="added1">
    <div class="added-img">
      <img src="${i.img}" alt="" />
    </div>
    <div class="added-info">
      <h4>${i.name}</h4>
      <p>Stock: <span class="${i.stId}">${i.stock}</span> | $<span>${i.price}</span></p>
      <h5>Subtotal $<span class="${i.subId}">${i.subtotal}</span></h5>
      <div class="added-icons"><div class="rest">
          <i class="fa-solid fa-minus ${i.restId}"></i>
          <p><span class="${i.btnId}">${i.units}</span> units</p>
          <i class="fa-solid fa-plus ${i.itId}"></i>
        </div>
        <div class="del">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  </div>`;
      }
    }
    if (y.classList.contains("none")) {
      cartImg.classList.add("none");
      y.classList.remove("none");
      y.innerHTML = html;
    }
  });
}

last(first, add1);
last(two, add2);
last(three, add3);

printId.addEventListener("click", function (e) {
  const uni1 = document.querySelector(".uni1");
  const uni2 = document.querySelector(".uni2");
  const uni3 = document.querySelector(".uni3");
  const sub1 = document.querySelector(".sub1");
  const sub2 = document.querySelector(".sub2");
  const sub3 = document.querySelector(".sub3");
  const st1 = document.querySelector(".st1");
  const st2 = document.querySelector(".st2");
  const st3 = document.querySelector(".st3");
  const totalItems = document.querySelector("#totalItems");
  const total = document.querySelector("#total");
  const au =
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  const cartCont = document.querySelector("#cartCont");

  if (e.target.classList.contains("fa-trash-can")) {
    const jaja =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    jaja.classList.add("none");
    const delIt = Number(
      e.target.parentElement.parentElement.firstChild.children[1]
        .firstElementChild.textContent
    );
    const tot = Number(
      e.target.parentElement.parentElement.parentElement.children[2]
        .firstElementChild.textContent
    );
    totalItems.textContent = Number(totalItems.textContent) - delIt;
    total.textContent = Number(total.textContent) - tot;
    cartCont.textContent = Number(cartCont.textContent) - delIt;
    cartIm();
  }
  if (e.target.classList.contains("it0")) {
    if (st1.textContent != 0) {
      uni1.textContent != 9
        ? (uni1.textContent = Number(uni1.textContent) + 1)
        : null;
      sub1.textContent != 126
        ? (sub1.textContent = Number(sub1.textContent) + 14)
        : null;
      st1.textContent != 0
        ? (st1.textContent = Number(st1.textContent) - 1)
        : null;
      totalItems.textContent = Number(totalItems.textContent) + 1;
      total.textContent = Number(total.textContent) + 14;
      cartCont.textContent = Number(cartCont.textContent) + 1;
    }
  }
  if (e.target.classList.contains("it1")) {
    if (st2.textContent != 0) {
      uni2.textContent != 15
        ? (uni2.textContent = Number(uni2.textContent) + 1)
        : null;
      sub2.textContent != 360
        ? (sub2.textContent = Number(sub2.textContent) + 24)
        : null;
      st2.textContent != 0
        ? (st2.textContent = Number(st2.textContent) - 1)
        : null;
      totalItems.textContent = Number(totalItems.textContent) + 1;
      total.textContent = Number(total.textContent) + 24;
      cartCont.textContent = Number(cartCont.textContent) + 1;
    }
  }
  if (e.target.classList.contains("it3")) {
    if (st3.textContent != 0) {
      uni3.textContent != 20
        ? (uni3.textContent = Number(uni3.textContent) + 1)
        : null;
      sub3.textContent != 480
        ? (sub3.textContent = Number(sub3.textContent) + 24)
        : null;
      st3.textContent != 0
        ? (st3.textContent = Number(st3.textContent) - 1)
        : null;
      totalItems.textContent = Number(totalItems.textContent) + 1;
      total.textContent = Number(total.textContent) + 24;
      cartCont.textContent = Number(cartCont.textContent) + 1;
    }
  }
  if (e.target.classList.contains("re1")) {
    if (uni1.textContent != 0) {
      /*uni1.textContent != 0
        ? */ uni1.textContent = Number(uni1.textContent) - 1;
      //: null;
      sub1.textContent != 0
        ? (sub1.textContent = Number(sub1.textContent) - 14)
        : null;
      st1.textContent != 9
        ? (st1.textContent = Number(st1.textContent) + 1)
        : null;
      totalItems.textContent != 0
        ? (totalItems.textContent = Number(totalItems.textContent) - 1)
        : null;
      total.textContent != 0
        ? (total.textContent = Number(total.textContent) - 14)
        : null;
      cartCont.textContent != 0
        ? (cartCont.textContent = Number(cartCont.textContent) - 1)
        : null;
    }
    //const au = e.target.parentElement.parentElement.parentElement.parentElement;
    uni1.textContent == 0 ? au.classList.add("none") : null;
    cartIm();
  }
  if (e.target.classList.contains("re2")) {
    if (uni2.textContent != 0) {
      uni2.textContent = Number(uni2.textContent) - 1;
      //: null;
      sub2.textContent != 0
        ? (sub2.textContent = Number(sub2.textContent) - 24)
        : null;
      st2.textContent != 15
        ? (st2.textContent = Number(st2.textContent) + 1)
        : null;
      totalItems.textContent != 0
        ? (totalItems.textContent = Number(totalItems.textContent) - 1)
        : null;
      total.textContent != 0
        ? (total.textContent = Number(total.textContent) - 24)
        : null;
      //const au = e.target.parentElement.parentElement.parentElement.parentElement;
      cartCont.textContent != 0
        ? (cartCont.textContent = Number(cartCont.textContent) - 1)
        : null;
    }
    uni2.textContent == 0 ? au.classList.add("none") : null;
    cartIm();
  }
  if (e.target.classList.contains("re3")) {
    if (uni3.textContent != 0) {
      uni3.textContent = Number(uni3.textContent) - 1;
      sub3.textContent != 0
        ? (sub3.textContent = Number(sub3.textContent) - 24)
        : null;
      st3.textContent != 20
        ? (st3.textContent = Number(st3.textContent) + 1)
        : null;
      totalItems.textContent != 0
        ? (totalItems.textContent = Number(totalItems.textContent) - 1)
        : null;
      total.textContent != 0
        ? (total.textContent = Number(total.textContent) - 24)
        : null;
      //const au = e.target.parentElement.parentElement.parentElement.parentElement;
      cartCont.textContent != 0
        ? (cartCont.textContent = Number(cartCont.textContent) - 1)
        : null;
    }
    uni3.textContent == 0 ? au.classList.add("none") : null;
    cartIm();
  }
});

check.addEventListener("click", function () {
  const totalItems = document.querySelector("#totalItems");
  const total = document.querySelector("#total");
  const cartCont = document.querySelector("#cartCont");
  add1.classList.add("none");
  add2.classList.add("none");
  add3.classList.add("none");
  totalItems.textContent = 0;
  total.textContent = 0;
  cartCont.textContent = 0;
  cartImg.classList.remove("none");
});
const dark = document.querySelector(".dark-icon");
const sun = document.querySelector(".light-icon");
dark.addEventListener("click", function () {
  body.classList.add("dark-mode");
  dark.classList.add("none");
  sun.classList.remove("none");
});
sun.addEventListener("click", function () {
  body.classList.remove("dark-mode");
  sun.classList.add("none");
  dark.classList.remove("none");
});

mixitup(".products-items", {
  selectors: {
    target: ".card",
  },
  animation: {
    duration: 300,
  },
}).filter("all");

const cartIm = () => {
  add1.classList.contains("none") &&
  add2.classList.contains("none") &&
  add3.classList.contains("none")
    ? cartImg.classList.remove("none")
    : cartImg.classList.add("none");
};

function load() {
  const load = document.getElementById("load");
  if (load) {
    setTimeout(() => {
      load.style.display = "none";
    }, 3000);
  }
}

window.addEventListener("load", function () {
  load();
});
