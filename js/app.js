import { url } from "./module.js"; 

const cont = document.querySelector("#ghib-cont")

const response = await fetch(url) 
console.log(response)

async function checkapi (api) {
    try {
       CardCreators()
    } catch {
        throw new console.error(api.statusText)
    }

}

const data = await response.json()
console.log(data)

checkapi(response)

function CardCreators() {
    for(let i = 0; i < data.length; i++) {
        const d = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const txt = document.createTextNode(data[i].description)
        p.append(txt)
        d.id = `card${i}`
        
        img.src = `${data[i].image}`
        
        d.appendChild(img) 
        d.appendChild(p)
        cont.appendChild(d)
    }
}




