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