let searchbox=document.querySelector('.searchitem')
let searchbt=document.querySelector('button')
let img=document.querySelector('.country-image')
let population=document.querySelector('.Population')
let capital=document.querySelector('.Capital')
let continents=document.querySelector('.Languages')
let area=document.querySelector('.Borders')


async function searchct(val){
    let res=await fetch(`https://restcountries.com/v3.1/name/`+val)
    let data=await res.json()
    
    area.innerHTML=data[0].area 
    img.src=data[0].flags.png
    population.innerHTML=data[0].population
    capital.innerHTML=data[0].capital[0]
    continents.innerHTML=data[0].continents[0]
    img.style.width="400px"
    img.style.height="300px"

}
searchbt.addEventListener('click',()=>{
    searchct(searchbox.value)
    searchbox.value=""
})

