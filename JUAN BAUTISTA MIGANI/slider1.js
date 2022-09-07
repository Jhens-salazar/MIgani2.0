const imgarray=[
    'ima/profe2019.jpg'

]

const img= document.querySelector('#slide')
let i=0 
const SlideShow =() =>{
    img.src = imgarray[i]
    i=(i<imgarray.length - 1) ? i+1 :0
}
const interval=()=>{
    setInterval(SlideShow,2000)
}