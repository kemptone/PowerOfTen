import { buildCardinals } from './buildCardinals.js'
import { firstFive } from './firstFive.js'
const Cardinals = [ null, null, null, null, null, null ]
buildCardinals( Cardinals )

const P = window.PAGE = {
  e_name : document.getElementById("name")
  , e_pronounce : document.getElementById("pronounce")
  , e_input : document.getElementById("input")
}

P.e_input.addEventListener("keyup", e => {
  const key = Number(P.e_input.value)

  if (key < 6)
    return P.e_name.value = firstFive( key )

  const value = Cardinals[ key ]

  P.e_name.value = value.stringArray.join("")
  P.e_pronounce.value = value.stringArray.join(" ")

})
