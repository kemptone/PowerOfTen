import { buildCardinals } from './buildCardinals.js'
import { firstFive } from './firstFive.js'
const Cardinals = [ null, null, null, null, null, null ]
buildCardinals( Cardinals )

const P = window.PAGE = {
  e_name : document.getElementById("name")
  , e_pronounce : document.getElementById("pronounce")
  , e_input : document.getElementById("input")
}

const onChange = e => {
  const key = Number(P.e_input.value)

  if (key < 6) {
    P.e_name.value = firstFive( key )
    P.e_pronounce.value = firstFive( key )
    return
  }

  if (key > 1e4 * 10) {
    let msg = "😜 NUMBER TOO BIG! 😜"
    P.e_name.value = msg
    P.e_pronounce.value = msg
    return alert(msg)
  }

  const value = Cardinals[ key ]

  P.e_name.value = value.stringArray.join("")
  P.e_pronounce.value = value.stringArray.join(" ").replace(/  /g, " ")

}

P.e_input.addEventListener("keyup", onChange)
P.e_input.addEventListener("change", onChange)
