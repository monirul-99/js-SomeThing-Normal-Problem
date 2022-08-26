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

console.log(user.children.secondSon.sonName) // Dot Notation
console.log(user.children.secondSon.son2NameAge[3])

console.log(user['children']['secondSon']['sonName']) // Bracket Notation
console.log(user['children']['secondSon']['son2NameAge'][3])