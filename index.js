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
const hm = document.getElementsByClassName("hamburger")[0];
const list = document.getElementsByClassName("mobile")[0];
var listOpen = 0;
hm.addEventListener("click", ()=>{
  // console.log(listOpen);
        if(listOpen === 0){
            list.style.display = "block";
            listOpen = 1;
        }else {
            list.style.display = "none";
            listOpen = 0;
        }
})