import { buildCardinals } from './buildCardinals.js'
import { firstFive } from './firstFive.js'

const Cardinals = [ null, null, null, null, null, null ]

buildCardinals( Cardinals )

function outputPower (powerOfTen) {

  const trey = []

  if (powerOfTen < 6) {
    return firstFive(powerOfTen)
  } else if (powerOfTen < 10) {
  } else {
    let [ [ first, ...rest ], root ] = Cardinals[ powerOfTen ]
    trey.push( firstFive( first ) )
  }

}

// # For the case of ending in 1x we need to end in an 'i'
//     # instead of the usual 'ti'.  This is because we say:
//     #
//     #	trecen-dec-illion
//     #
//     # instead of:
//     #
//     #	trecen-dec-tillion
//     #
//     if (defined($d2) && $d2 == 1) {
// 	print "i";
//     } else {
// 	print "ti";
//     }

//     # all done
//     #
//     return;

// outputPower(5)
// One Hundred Thousand

// outputPower(7)
// Ten Million

// outputPower(9)
// 1 Billion

// outputPower(15)
// 1 Quadrillion

// outputPower(16)
// Ten Quadrillion

// outputPower(16)
// Ten Quadrillion