const mobile = [
    {phone : 'iPhone', price : 78000},
    {phone : 'Walton', price : 24000},
    {phone : 'Redmi', price : 29000},
    {phone : 'Samsung', price : 52000},
    {phone : 'OPPO', price : 34000},
]

const findOut = mobile.find(mobilePrice => mobilePrice.price < 25000);
console.log(findOut.price)