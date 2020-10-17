export interface GraphData {
    TransactionData:Array<TrasactionData>,
}

export interface TrasactionData {
    Transaction_date:Date, 
    Product:string,
    Price:Number,
    Payment_Type:string,
    Name:string,
    City:string,
    State:string,
    Country:string,
    Account_Created:Date,
    Last_Login:Date,
    Latitude:string,
    Longitude:string
}