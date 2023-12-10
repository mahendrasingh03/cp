const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;
let f = 0;
setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })
  
  
  
  if(!f)i++;
  else i--;

  if(i == carouselItems.length){
    f = 1;
    i -= 2;
  }
  if(i == 0)f = 0;
},3000)

// multiple carousel........

