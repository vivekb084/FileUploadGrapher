import { Document, Model, model, Schema } from 'mongoose'

import { schemaNames } from '../config/constants'
import { GraphData } from '../interface'

export interface GraphModel extends GraphData,Document{

}

export const GraphSchema: Schema = new Schema({
    TransactionData:[
        {
            Transaction_date:{
                type:Date, 
                trim:true
            },
            Product:{
                type:String, 
                trim:true
            },
            Price:{
                type:Number, 
                trim:true
            },
            Payment_Type:{
                type:String, 
                trim:true
            },
            Name:{
                type:String, 
                trim:true
            },
            City:{
                type:String, 
                trim:true
            },
            State:{
                type:String, 
                trim:true
            },
            Country:{
                type:String, 
                trim:true
            },
            Account_Created:{
                type:Date, 
                trim:true
            },
            Last_Login:{
                type:Date, 
                required:true,
                trim:true
            },
            Latitude:{
                type:String, 
                trim:true
            },
            Longitude:{
                type:String, 
                trim:true
            },
        }
    ]
}, { timestamps: true })

  
export const Graph: Model<GraphModel> = model<GraphModel>(schemaNames.GRAPH_DATA,GraphSchema)
  