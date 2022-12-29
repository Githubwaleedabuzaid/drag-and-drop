let btn =document.getElementById("btn")
let inp=document.getElementById("inp")
let boxs=document.querySelectorAll(".box")
let drag = null
btn.onclick=function(){
    if (inp.value!=""){
        boxs[0].innerHTML+=
        `<p class ="a" draggable "true">${inp.value}</p>`
        inp.value=""
    }
    dragitem()
}
function dragitem(){
    let items =document.querySelectorAll(".a")
    items.forEach(a=>{
        a.addEventListener('dragstart',function(){
            drag = a
            a.style.opacity="0.5"
        })
        a.addEventListener('dragend',function(){
            drag = null
            a.style.opacity="1"
        })
        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                this.style.background='blue'
                this.style.color='#fff'
            })
            box.addEventListener('dragleave',function(){
                this.style.background='#fff'
                this.style.color='#000'
            })
            box.addEventListener('drop',function(){
                this.append(drag)
                this.style.background='#fff'
                this.style.color='#000'
            })
        })
    })
}
