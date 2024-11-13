export interface ProductoInterfaces {
    id : number,
    titile : string,
    price : number,
    description : string
    category : CategoryInterface,
    images : string[] 
}

interface CategoryInterface{
    id : number,
    name : string,
    image : string,
}
