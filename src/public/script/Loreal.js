const Loreal_products = [
    {
        name: "L'Oreal Paris Hydrated, Plump & Radiant Skin Kit",
        price: 880,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/c/4/c4f201a8994993016020__2_.png",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal-clear Skin Kit",
        price: 996,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/d/7/d7d91066923700934489_3.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Extraordinary Oil Serum 100ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/1/8/18542e4lorea00000117.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Hyaluronic Acid Plumping Day Cream 15ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/3/e/3e3b2e4lorea00000118.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Rouge Signature Matte Liquid Lipstick - 130 I Amaze",
        price: 325,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/6/9/6902395742746.1_1.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Long Hair Dreams",
        price: 1030,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/n/y/nymaybln00865_1_3.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Hydrated, Plump & Radiant Skin Kit",
        price: 880,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/c/4/c4f201a8994993016020__2_.png",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal-clear Skin Kit",
        price: 996,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/d/7/d7d91066923700934489_3.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Extraordinary Oil Serum 100ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/1/8/18542e4lorea00000117.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Hyaluronic Acid Plumping Day Cream 15ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/3/e/3e3b2e4lorea00000118.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Rouge Signature Matte Liquid Lipstick - 130 I Amaze",
        price: 325,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/6/9/6902395742746.1_1.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Long Hair Dreams",
        price: 1030,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/n/y/nymaybln00865_1_3.jpg",
        rating: "★★★★☆"
    },
     {
        name: "L'Oreal Paris Hydrated, Plump & Radiant Skin Kit",
        price: 880,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/c/4/c4f201a8994993016020__2_.png",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal-clear Skin Kit",
        price: 996,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/d/7/d7d91066923700934489_3.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Extraordinary Oil Serum 100ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/1/8/18542e4lorea00000117.jpg",
        rating: "★★★★☆"
    },
     {
        name: "L'Oreal Paris Hydrated, Plump & Radiant Skin Kit",
        price: 880,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/c/4/c4f201a8994993016020__2_.png",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal-clear Skin Kit",
        price: 996,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/d/7/d7d91066923700934489_3.jpg",
        rating: "★★★★☆"
    },
    {
        name: "L'Oreal Paris Crystal Micro Essence 22ml + Extraordinary Oil Serum 100ml",
        price: 499,
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/1/8/18542e4lorea00000117.jpg",
        rating: "★★★★☆"
    },
];



localStorage.setItem("Loreal_store", JSON.stringify(Loreal_products))

let Loreal_store = JSON.parse(localStorage.getItem("Loreal_store"));
let data_div = document.querySelector("#data")
let count = 1;

function showProducts() {
    Loreal_store.forEach(function (product) {
        let div = document.createElement('div');

        let p_name = document.createElement('p');
        p_name.innerText = product.name

        let p_rating = document.createElement('p');
        p_rating.innerText = product.rating

        let p_price = document.createElement('p');
        p_price.innerText = "₹"+ product.price
        p_price.style.margin = -5 + "px"

        let image = document.createElement('img');
        image.src = product.image;

        let btn = document.createElement('button');
        btn.setAttribute("id","addcartbtn")
        btn.innerText = "♡Add to Bag";
        btn.onclick = function () {
            addTocart(product);
        }

        div.append(image, p_name, p_price, p_rating, btn);
        data_div.append(div)
        count++;
    });
}
showProducts();


if (localStorage.getItem("lorialCart") === null) {
    localStorage.setItem("lorialCart", JSON.stringify([]))
}

function addTocart(p) {
    let cart_data = JSON.parse(localStorage.getItem("lorialCart"));
    cart_data.push(p);

    localStorage.setItem("lorialCart", JSON.stringify(cart_data))
}

