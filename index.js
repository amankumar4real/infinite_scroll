let start = 0
let end = 25

function loadText(){
    let text = "Masai"

    let container = document.createElement("div")
    let main = document.querySelector(".main")

    for(let i=start;i<end;i++){
        let para = document.createElement("p")

        para.textContent = text +" "+ (i+1);

        para.classList.add("para")

        container.appendChild(para)
    }

    main.appendChild(container)

    start += 25
    end += 25
}


window.addEventListener("load",()=>{
    loadText()
})

function scroll(){
    let scroll_height =  get_main.scrollHeight
    let scroll_top = Math.ceil(get_main.scrollTop + get_main.clientHeight)

    if(scroll_height === scroll_top){
        loadText()
    }
}

let get_main = document.querySelector(".main")

get_main.addEventListener("scroll", function(){
    
    scroll()
})