//to Number Conversion
let str1="sam"
let str2=""
let bool1=true
let bool2=false
let numString1=Number(str1)
let numString2=Number(str2)
let numBool1=Number(bool1)
let numBool2=Number(bool2)
console.log(["Strings:" ,numString1, numString2]) //[NaN, 0]
console.log([typeof numString1, typeof numString2]) //[number, number]
console.log(["Booleans:" ,numBool1, numBool2]) //[1, 0]
console.log([typeof numBool1, typeof numBool2]) //[number, number]



//to Boolean Conversion
let a1=44
let a2=0
let a5=""
let a6="kamlesh"
let Bool1=Boolean(a1)
let Bool2=Boolean(a2)
let Bool5=Boolean(a5)
let Bool6=Boolean(a6)
console.log(["ToBools:" ,Bool1, Bool2, Bool5, Bool6]) //[ 'ToBools:', true, false, false, true ]
console.log([typeof Bool1, typeof Bool2, typeof Bool5, typeof Bool6]) //[ 'boolean', 'boolean', 'boolean', 'boolean' ]


//to String Conversion
let a=44
let c=0
let b1=true
let b2=false
let String1=String(a)
let String2=String(c)
let String3=String(b1)
let String4=String(b2)
console.log(["ToStrings:" ,String1, String2, String3, String4]) //[ 'ToStrings:', '44', '0', 'true', 'false' ]
console.log([typeof String1, typeof String2, typeof String3, typeof String4]) //[ 'string', 'string', 'string', 'string' ]