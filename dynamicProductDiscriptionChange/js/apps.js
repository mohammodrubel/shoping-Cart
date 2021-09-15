// img div --------------------------------//
const divOne = document.getElementById('fast-img')
const divTwo = document.getElementById('second-img')
const divThree = document.getElementById('third-img')

// main img photo --------------------------//
const mainPhoto = document.getElementById('main-photo')
// update html dynamic discription / text / price 
const headline = document.getElementById('headline')
const discription = document.getElementById('discription')
const price = document.getElementById('price')

    // update shiping button ---------------------------//
    const freeBtn = document.getElementById('free-btn')
    const expresBtn = document.getElementById('express-btn')
        // shiping charge value change 
        const totalShiping = document.getElementById('totalShiping')
            // total value update 
            const  total =document.getElementById('total')
        // button handaller and shiping charge update
        freeBtn.addEventListener('click',function(){
            totalShiping.innerText="5";
            updateFeld()
        })
        expresBtn.addEventListener('click',function(){
            totalShiping.innerText="30";
            updateFeld()
        })
// update Fild 
function updateFeld(){
    const shipingCharge =Number(totalShiping.innerText)
    const productCharge =Number(price.innerText) 
    const totalCharge = shipingCharge + productCharge;
    total.innerText = totalCharge
}

        
    

// img handaler -------------------------//
divOne.addEventListener('click',function(){
    mainPhoto.src = "img/img1.png";
    headline.innerText="Hanes Authentic T‑shirt";
    discription.innerText ="Hanes famous Authentic design = ultimate comfort. Our favorite classic tee, the Hanes Authentic collection is great for any group. Available in a wide range of sizes with a comfortable fit, this product will meet the needs of your group at a price you’ll love.";
    price.innerText="550";
    // update total charge 
    updateFeld()
    

})
divTwo.addEventListener('click',function(){
    mainPhoto.src = "img/img2.png";
    headline.innerText="Color Authentic T‑shirt";
    discription.innerText ="second-Text Hanes famous Authentic design = ultimate comfort. Our favorite classic tee, the Hanes Authentic collection is great for any group. Available in a wide range of sizes with a comfortable fit, this product will meet the needs of your group at a price you’ll love.";
    price.innerText="650";
    // update total charge 
    updateFeld()

})
divThree.addEventListener('click',function(){
    mainPhoto.src = "img/img3.png";
    headline.innerText="Authentic Color T‑shirt";
    discription.innerText ="Third-Text Hanes famous Authentic design = ultimate comfort. Our favorite classic tee, the Hanes Authentic collection is great for any group. Available in a wide range of sizes with a comfortable fit, this product will meet the needs of your group at a price you’ll love.";
    price.innerText="850";
    // update total charge 
    updateFeld()

})