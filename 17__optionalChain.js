const user = {
    name : 'Steve Jobs',
    age : 87,
    children : {
        firstSon : 'Bill Gates',
        secondSon : {
            sonName : 'Haven',
            son2NameAge : [12, 34, 56, 76]
        }
    }
}

console.log(user.children.secondSon2?.sonName3) // Dot Notation
console.log(user.children.secondSon1?.son2NameAge3[3]) // ? Not error But Undefined Show

console.log(user['children']['secondSon2']['sonName']) // Bracket Notation
console.log(user['children']['secondSon3']['son2NameAge4'][3])