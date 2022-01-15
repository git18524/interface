window.onload = ()=>{

    let aBis = document.querySelector("#firstCol a")
    
    let a = document.querySelector("#secondCol a")

    let imgBis = document.querySelector("#firstCol img")

    let img = document.querySelector("#secondCol img")

    // first image
    
    imgBis.addEventListener("mouseenter", (e)=>{

        aBis.style.color = "rgb(230, 150, 34)"
        imgBis.style.cursor = "pointer"

    })

    imgBis.addEventListener("mouseleave", (e)=>{

        aBis.style.color = "black"
        imgBis.style.cursor = "unset"

    })

    aBis.addEventListener("mouseenter", (e)=>{

        aBis.style.color = "rgb(230, 150, 34)"
        aBis.style.cursor = "pointer"

    })

    
    aBis.addEventListener("mouseleave", (e)=>{

        aBis.style.color = "black"
        aBis.style.cursor = "unset"

    })

    // second image

    img.addEventListener("mouseenter", (e)=>{

        a.style.color = "rgb(230, 150, 34)"
        img.style.cursor = "pointer"

    })

    img.addEventListener("mouseleave", (e)=>{

        a.style.color = "black"
        img.style.cursor = "unset"

    })

    a.addEventListener("mouseenter", (e)=>{

        a.style.color = "rgb(230, 150, 34)"
        a.style.cursor = "pointer"

    })

    
    a.addEventListener("mouseleave", (e)=>{

        a.style.color = "black"
        a.style.cursor = "unset"

    })

}
