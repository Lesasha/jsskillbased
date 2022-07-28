const totalBasketballScore = (freeThrow, midRange, threePointer) => {
    switch(randomNumber) {
        case freeThrow:
        return 1
        case midRange:
        return 2
        case threePointer:
        return 3
    
    }
};


// const totalBasketballScore = function() {

//     freethrow = 1;
//     midRange = 2;
//     threePointer = 3; 
// }; 
    




const itemPrice = () => {
    switch(item) {
        case computer:
        return 500
        case mouse:
        return 10
        case tablet:
        return 250
        case case1:
        return 25
        case router:
        return 100
        if(item === 'computer' || item === 'mouse' || item === 'tablet' || item === 'case1' || item === 'router') {
            return item;
        } else {
            console.log('Item is not in the store ')
        }
    }
}



    const randomRestaurant = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];

console.log(randomRestaurant)




function isLeapYear (num) {
    if(num % 400 === 0)
        console.log("Even")
    else 
        console.log("Odd")
}
                                        
const random = Math.floor(Math.random() * (400) + 1) //(max - min + 1) + min
​
console.log(isLeapYear)
// isLeapYear(random)
