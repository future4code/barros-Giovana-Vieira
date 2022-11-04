type Products = {
    name: string,
    price: number,
    classification: Classifications,
    discountPrice?: number
}

enum Classifications {
    SUMMER= "Summer",
    WINTER= "Winter",
    BATH= "Bath",
    UNDERWEAR= "Underwear"
}

enum Discounts {
    DISCOUNTSUMMER= 5, 
    DISCOUNTWINTER= 10,
    DISCOUNTBATH= 4,
    DISCOUNTUNDERWEAR= 7
}

const arrayOfProducts: Products[] = [
    {
        name: "Shirt",
        price: 40,
        classification: Classifications.SUMMER        
    },
    {
        name: "Sweatshirt",
        price: 80,
        classification: Classifications.WINTER         
    },
    {
        name: "Panty",
        price: 15,
        classification: Classifications.UNDERWEAR             
    },
    {
        name: "Towel",
        price: 28.50,
        classification: Classifications.BATH               
    },
    {
        name: "Pants",
        price: 100,
        classification: Classifications.SUMMER
    }
]


const arrayWithDiscount = (array: Products[]): Products[] => {
    
    let newArray: Products[] = []

    for(let product of array){

    let discountSummer = product.price - ((product.price * Discounts.DISCOUNTSUMMER) / 100)
    let discountWinter = product.price - ((product.price * Discounts.DISCOUNTWINTER) / 100)
    let discountBath = product.price - ((product.price * Discounts.DISCOUNTBATH) / 100)
    let discountUnderwear = product.price - ((product.price * Discounts.DISCOUNTUNDERWEAR) / 100)
    
    if(product.classification === Classifications.SUMMER){
        newArray.push({
        name: product.name,
        price: product.price,
        classification: Classifications.SUMMER,
        discountPrice: discountSummer
    })
    } else if(product.classification === Classifications.WINTER){
        newArray.push({
        name: product.name,
        price: product.price,
        classification: Classifications.WINTER,
        discountPrice: discountWinter
    })
    } else if(product.classification === Classifications.UNDERWEAR){
        newArray.push({
        name: product.name,
        price: product.price,
        classification: Classifications.UNDERWEAR,
        discountPrice: discountUnderwear
    })
    } else if(product.classification === Classifications.BATH){
        newArray.push({
        name: product.name,
        price: product.price,
        classification: Classifications.BATH,
        discountPrice: discountBath
    })
    }
}

    return newArray

}

console.log(arrayWithDiscount(arrayOfProducts))