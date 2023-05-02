let collection = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','a','b','c','d','e','f']
// #f13598(i<6)--------#000000bf(i<8)
let btn = document.getElementById("btn")
let color= document.querySelector(".color")

function randamNumber(){
    return Math.floor(Math.random() * collection.length)
}


btn.addEventListener('click' , function(){
    let manyColor='#'
    for(let i=0;i<6;i++){
        manyColor +=collection[randamNumber()]
    }
    
    color.textContent=manyColor
    document.body.style.backgroundColor=manyColor
}
)
