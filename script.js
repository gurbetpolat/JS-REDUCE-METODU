/***************REDUCE METODU******************/

const numbers = [1, 2, 4, 8, 5, 6]

let total = numbers.reduce((acc, number) => {

    return acc += number;


}, 10)

console.log(total)
/*----------------------------*/

const basket = [
    {
        name: "İphone 8",
        price: 7000
    },
    {
        name: "Apple Macbook Pro",
        price: 14000
    },
    {
        name: "Harman/Kardon",
        price: 2500
    }
]

let sum = basket.reduce((acc, item) => {

    return acc += item.price

}, 0)

console.log(sum)

/*-----------------------------*/

const names = ["Fadime", "Seda", "Emre", "Gurbet", "Emre", "Emre"]

let repeat = names.reduce((allNames, name) => {

    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames

}, {})

console.log(repeat)


/*------------------------*/

const products = [
    {
        name: "Macbook-Pro",
        brand: "Apple"

    },
    {
        name: "Iphone-12s",
        brand: "Apple"
    },
    {
        name: "SmartLav Plus+ Yaka Mikrofonu",
        brand: "Rode"
    },
    {
        name: "M-AUDIO Keystation 61",
        brand: "M-AUDIO"
    }
]

let group = "brand"

const ürünler=products.reduce((acc, product) => {

    let key = product[group]
    if (!acc[key]) {
        acc[key] = []
    }
    else {
        acc[key].push(product)
    }
    return acc


}, {})

console.log(ürünler);

/*------------------------------*/

const posts=[
    {
       title:"Post 1",
       tags:["php","css"] 
    },
    {
        title:"Post 2",
        tags:["javascript","html5"]
    },
    {
        title:"Post 3",
        tags:["html5","json"]

    }
]


const allTags=posts.reduce((acc,post)=>{

 return [...acc,...post.tags]

} ,[])

console.log(allTags);

/*----------------------------*/

const harfler=["a","b","e","w","w","b","e","a"]

const notrepeat=harfler.reduce((acc,harf)=>{

    if(!acc.includes(harf)){
        acc.push(harf)
    }

    return acc

},[])

console.log(notrepeat)

/*---------------------------------*/

const sayilar=[-5,-8,1,5,8,5,9,10]

const filtermap=sayilar.filter((sayi)=>{
    return sayi>0
}).map((sayi)=>{
    return sayi=sayi*2
})

console.log(filtermap)


//reduce nasıl yazardık?

const reducelayazma=sayilar.reduce((acc,sayi)=>{

    if(sayi>0){
      acc.push(sayi*2)

    }
    return acc
},[])

console.log(reducelayazma)