export type Order = {
    orderDate?:string,
    itemName?:string,
    quantity?: number,
    name?: string,
    email?: string,
    phone?: number,
    street?: string,
    city?: string,
    state?: string,
    zipCode?: number,
    totalAmount?:number
}