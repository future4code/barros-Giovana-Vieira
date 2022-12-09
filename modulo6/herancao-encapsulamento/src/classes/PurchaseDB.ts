export class PurchaseDB{
    constructor(private id: string,
        private user_id: string,
        private product_id: string,
        private quantity: number,
        private total_price: number
    ){
        this.id = id
        this.user_id = user_id
        this.product_id = product_id
        this.quantity = quantity
        this.total_price = total_price
    }

    public getId(){
        return this.id
    }

    public getUserId(){
        return this.user_id
    }

    public getProductId(){
        return this.product_id
    }

    public getQuantity(){
        return this.getQuantity
    }

    public getTotalPrice(){
        return this.total_price
    }
}