const secretNumber = 45;
const pin = 9870;

const temPlateString = `
My secret number is ${secretNumber}
My pis number ${pin}
`
console.log(temPlateString)

const user = {
    name : 'John Doe',
    age : 45,
    address : {
        newAddress : 'USA',
        oldAddress : 'Canada'
    }
}

const templateString = `
My New Address is ${user.address.newAddress}
`
const templateString2 = `
My Old Address is ${user.address.oldAddress}
`

console.log(templateString, templateString2)