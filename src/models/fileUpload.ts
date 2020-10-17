import { Document, Model, model, Schema } from 'mongoose'

import { schemaNames } from '../config/constants'
import { GraphData } from '../interface'

export interface GraphModel extends GraphData,Document{

}

export const GraphSchema: Schema = new Schema({
    TransactionData:[
        {
            TransactionDate:{
                type:Date, 
                required:true,
            },
            Product:{
                type:String, 
                required:true,
            },
            Price:{
                type:Number, 
                required:true,
            },
            Payment_Type:{
                type:String, 
                required:true,
            },
            Name:{
                type:String, 
                required:true,
            },
            City:{
                type:String, 
                required:true,
            },
            State:{
                type:String, 
                required:true,
            },
            Country:{
                type:String, 
                required:true,
            },
            AccountCreated:{
                type:Date, 
                required:true,
            },
            LastLogin:{
                type:Date, 
                required:true,
            },
            Longitude:{
                type:String, 
                required:true,
            },
            Latitude:{
                type:String, 
                required:true,
            },
        }
    ]
}, { timestamps: true })

  
export const Graph: Model<GraphModel> = model<GraphModel>(schemaNames.GRAPH_DATA,GraphSchema)
  