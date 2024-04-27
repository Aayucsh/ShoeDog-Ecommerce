const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menu-items")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.webp",
        },
        {
          code: "darkblue",
          img: "./img/air2.webp",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.webp",
        },
        {
          code: "green",
          img: "./img/jordan2.webp",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.webp",
        },
        {
          code: "green",
          img: "./img/blazer2.webp",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.webp",
        },
        {
          code: "lightgray",
          img: "./img/crater2.webp",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.webp",
        },
        {
          code: "black",
          img: "./img/hippie2.webp",
        },
      ],
    },
  ];

let choosenProduct = products[0]

const CurrentProductTitle = document.querySelector(".ProductTitle")
const CurrentProductPrice = document.querySelector(".ProductPrice")
const CurrentProductImg = document.querySelector(".ProductImg")
const CurrentProductColor = document.querySelectorAll(".box")
const currentProductSizes = document.querySelectorAll("siz")


menuItems.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        choosenProduct = products[index];
        CurrentProductTitle.textContent = choosenProduct.title;
        CurrentProductPrice.textContent = "$" + choosenProduct.price;
        CurrentProductImg.src = choosenProduct.colors[0].img
        
        CurrentProductColor.forEach((box, index)=>{
            box.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

CurrentProductColor.forEach((box,index)=>{
    box.addEventListener("click" , ()=>{
        CurrentProductImg.src = choosenProduct.colors[index].img;
    });
});

const closebtn = document.querySelector(".close")
const buybtn = document.querySelector(".buy button")
const paymentdiv = document.querySelector(".payment")

buybtn.addEventListener("click",()=>{
  paymentdiv.style.display = "block"
})
closebtn.addEventListener("click",()=>{
  paymentdiv.style.display = "none"
})