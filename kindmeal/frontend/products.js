let mainProducts = document.getElementById("meal-deal-products")

fetch("http://localhost:8080/products/get", {
    method: "GET"
}).then(res => res.json())
    .then((data) => {
        console.log(data)
        display(data)
    })

    .catch(err => console.log(err.message))


function display(data) {


    data.data.forEach((ele, ind) => {

        let div = document.createElement("div")
        let img = document.createElement("img")
        let cat = document.createElement("p")
        let des = document.createElement("p")
        let btn = document.createElement("button")
        let div2 = document.createElement("div")
        let img2 = document.createElement("img")
        let img3 = document.createElement("img")
        let img4 = document.createElement("img")
        let kindDis = document.createElement("p")
        let expire = document.createElement("p")
        let star1 = document.createElement("img")
        let star2 = document.createElement("img")
        let star3 = document.createElement("img")
        let star4 = document.createElement("img")
        let star5 = document.createElement("img")
        let div3 = document.createElement("div")
        let imgdiv = document.createElement("div")
        div3.setAttribute("class", "first-pro-div")
        div2.setAttribute("id", "divTwo")


        img.setAttribute("src", ele.mainimg)
        img.setAttribute("id", "mainimg")
        img.addEventListener("click", () => {
            location.assign("singleProduct.html")
        })
        cat.textContent = ele.cat
        cat.setAttribute("id", "cat")
        des.textContent = "Relish in tasty, nutritious oriental & western delicacies amidst our peaceful, cozy environment. Our food is prepared with heart"
        des.setAttribute("id", "des")
        btn.textContent = "Get FREE Coupon"
        btn.setAttribute("id", "btn")
        star1.setAttribute("src", "https://www.kindmeal.my/images/icon_star.png")
        star1.setAttribute("class", "starts")
        star1.setAttribute("class", "starts")
        star2.setAttribute("src", "https://www.kindmeal.my/images/icon_star.png")
        star2.setAttribute("class", "starts")
        star3.setAttribute("src", "https://www.kindmeal.my/images/icon_star.png")
        star3.setAttribute("class", "starts")
        star4.setAttribute("src", "https://www.kindmeal.my/images/icon_star.png")
        star4.setAttribute("class", "starts")
        star5.setAttribute("src", "https://www.kindmeal.my/images/icon_star_half.png")
        star5.setAttribute("class", "starts")
        img2.setAttribute("src", "https://www.kindmeal.my/images/icon_egg.png")
        img3.setAttribute("src", "https://www.kindmeal.my/images/icon_milk.png")
        img4.setAttribute("src", "https://www.kindmeal.my/images/icon_alcohol.png")
        kindDis.textContent = `KindMeal
         Discount ${ele.Discount}   |`
        kindDis.setAttribute("id", "kinddis")
        expire.textContent = "Expires in 12 Days"
        expire.setAttribute("id", "expire")
        imgdiv.append(img)
        div2.append(img2, img3, img4, kindDis, expire)
        div.append(cat, des, btn, star1, star2, star3, star4, star5)
        div3.append(imgdiv, div, div2)
        mainProducts.append(div3)

    })

}