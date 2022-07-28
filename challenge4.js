function isLeapYear (num) {
    if(num % 400 === 0)
        console.log("Even")
    else 
        console.log("Odd")
}
                                        
const random = Math.floor(Math.random() * (400) + 1) //(max - min + 1) + min
​
console.log(random)
isLeapYear(random)

