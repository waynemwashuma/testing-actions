/*global setInterval */
/*global document */
import {add} from "mylib"

setInterval(
    ()=>{
        document.body.innerHTML = `<h1>5 + 5 is ${add(5,5)}</h1>`
    },
    1000
)
