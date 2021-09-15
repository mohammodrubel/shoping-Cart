const fastImg = document.getElementById('fast-img')
const secondImg = document.getElementById('second-img')
const ThirdImg = document.getElementById('third-img')
const displayImg = document.getElementById('main-photo')
const discription =document.getElementById('discription')
const price = document.getElementById('price')
const headline = document.getElementById('headline')
const freebtn = document.getElementById('free-btn')
const expressBtn = document.getElementById('express-btn')
const totalShiping = document.getElementById('totalShiping')
const total = document.getElementById('total')


    const grandTotalPrice = ()=>{
        const updatetotalShiping = Number(totalShiping.innerText)
        const updatePrice = Number(price.innerText)
        const convert= updatetotalShiping + updatePrice
        total.innerText = convert  
    }
   
// button price 
freebtn.addEventListener('click',()=>{
    
    totalShiping.innerText='30'
    grandTotalPrice()
})
expressBtn.addEventListener('click',()=>{
   
    totalShiping.innerText='60'
    grandTotalPrice()
})




fastImg.addEventListener('click',()=>{
    displayImg.src='img/img1.png'
    headline.innerText='Hanes Authentic T‑shirt'
    discription.innerText=`Hanes famous Authentic design = ultimate comfort. Our favorite classic tee, the Hanes Authentic collection is great for any group. Available in a wide range of sizes with a comfortable fit, this product will meet the needs of your group at a price you’ll love.     
    `
    price.innerText='550'
    // totalValue 
    grandTotalPrice()
})
secondImg.addEventListener('click',()=>{
    displayImg.src='img/img2.png'
    headline.innerText='T‑shirt Hanes Authentic '
    discription.innerText=`ultimate comfort. Our favorite classic tee,Hanes famous Authentic design Available in a wide range sizes with a comfortable fit, this product will meet the needs of your group at a price you’ll lovethe Hanes Authentic collection is great for any group.     
    `
    price.innerText='770'
    // totalValue 
    grandTotalPrice()
})
ThirdImg.addEventListener('click',()=>{
    displayImg.src='img/img3.png'
    headline.innerText='Authentic Hanes  T‑shirt'
    discription.innerText=`Available in a wide range of sizes with a comfortable fit, this product will meet the needs of your grouat a price you’ll love.Hanes famous Authentic design = ultimate comfort. Our favorite classic tee, thHanes Authentic collection is great for any group.
    `
    price.innerText='850'
    // totalValue 
    grandTotalPrice()
})
