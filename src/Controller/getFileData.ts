import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { errorMsgs } from '../config/constants/errorMsg'
import { Graph } from '../models/fileUpload'
import { get, isEmpty } from 'lodash'
import { Types } from 'mongoose'

export const getFileData = async (req: Request, res: Response) => {
    try {
      let fileId = get(req, 'query.fileId', undefined);
  
      if(isEmpty(fileId)|| !Types.ObjectId.isValid(fileId)){
        return RespondError(req, res, 422, errorMsgs.UNPROCESSABLE_ENTITY, errorMsgs.INVALID_QUERY_PARAMS);    
    }
      const result = await Graph.findById(fileId,{_id:0,TransactionData:1})
      return RespondSuccess(req, res, 200,result, "File Fetched Successfully with fileId "+fileId);
    } catch (err) {
      console.log('Error in Fetching File ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
  }
  
  
  export const getCityWiseUserCount = async (req: Request, res: Response) => {
    try {
      let fileId = get(req, 'query.fileId', undefined);
  
      if(isEmpty(fileId)|| !Types.ObjectId.isValid(fileId)){
        return RespondError(req, res, 422, errorMsgs.UNPROCESSABLE_ENTITY, errorMsgs.INVALID_QUERY_PARAMS);    
    }
      const result = await Graph.findById(fileId,{_id:0,TransactionData:1})
      if(result==undefined){
        return RespondSuccess(req, res, 200,{}, "No Entry Found");
      }
      let cityWiseUser:any = {}
      for(let i=0;i<result.TransactionData.length;i++){
        if(cityWiseUser[result.TransactionData[i].City]){
          cityWiseUser[result.TransactionData[i].City]++;
        }
        else{
          cityWiseUser[result.TransactionData[i].City]=1;
        }
      }
  
      let cityNameArray:any = []
      let userCountArray:any = []
      for (let city in cityWiseUser){
        cityNameArray.push(city);
        userCountArray.push(cityWiseUser[city])
      }
      let cityGraph = {
        cityNameArray,
        userCountArray
      }
      return RespondSuccess(req, res, 200,cityGraph, "CityWise Data Fetched with fileId "+fileId);
    } catch (err) {
      console.log('Error in Fetching File ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
  }
  
  export const getStateWiseUserCount = async (req: Request, res: Response) => {
    try {
      let fileId = get(req, 'query.fileId', undefined);
  
      if(isEmpty(fileId)|| !Types.ObjectId.isValid(fileId)){
        return RespondError(req, res, 422, errorMsgs.UNPROCESSABLE_ENTITY, errorMsgs.INVALID_QUERY_PARAMS);    
    }
      const result = await Graph.findById(fileId,{_id:0,TransactionData:1})
      if(result==undefined){
        return RespondSuccess(req, res, 200,{}, "No Entry Found");
      }
      let stateWiseUser:any = {}
      for(let i=0;i<result.TransactionData.length;i++){
        if(stateWiseUser[result.TransactionData[i].State]){
          stateWiseUser[result.TransactionData[i].State]++;
        }
        else{
          stateWiseUser[result.TransactionData[i].State]=1;
        }
      }
  
      let StateNameArray:any = []
      let userCountArray:any = []
      for (let state in stateWiseUser){
        StateNameArray.push(state);
        userCountArray.push(stateWiseUser[state])
      }
      let StateGraph = {
        StateNameArray,
        userCountArray
      }
      return RespondSuccess(req, res, 200,StateGraph, "StateWise Data Fetched with fileId "+fileId);
    } catch (err) {
      console.log('Error in Fetching File ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
  }
  

  export const getProductWiseUserCount = async (req: Request, res: Response) => {
    try {
      let fileId = get(req, 'query.fileId', undefined);
  
      if(isEmpty(fileId)|| !Types.ObjectId.isValid(fileId)){
        return RespondError(req, res, 422, errorMsgs.UNPROCESSABLE_ENTITY, errorMsgs.INVALID_QUERY_PARAMS);    
    }
      const result = await Graph.findById(fileId,{_id:0,TransactionData:1})
      if(result==undefined){
        return RespondSuccess(req, res, 200,{}, "No Entry Found");
      }
      let ProductWiseSeller:any = {}
      for(let i=0;i<result.TransactionData.length;i++){
        if(ProductWiseSeller[result.TransactionData[i].Product]){
            ProductWiseSeller[result.TransactionData[i].Product]++;
        }
        else{
            ProductWiseSeller[result.TransactionData[i].Product]=1;
        }
      }
  
      let ProductNameArray:any = []
      let userCountArray:any = []
      for (let product in ProductWiseSeller){
        ProductNameArray.push(product);
        userCountArray.push(ProductWiseSeller[product])
      }
      let ProductGraph = {
        ProductNameArray,
        userCountArray
      }
      return RespondSuccess(req, res, 200,ProductGraph, "ProductWise Data Fetched with fileId "+fileId);
    } catch (err) {
      console.log('Error in Fetching File ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
  }
  

  export const getPaymentWiseUserCount = async (req: Request, res: Response) => {
    try {
      let fileId = get(req, 'query.fileId', undefined);
  
      if(isEmpty(fileId)|| !Types.ObjectId.isValid(fileId)){
        return RespondError(req, res, 422, errorMsgs.UNPROCESSABLE_ENTITY, errorMsgs.INVALID_QUERY_PARAMS);    
    }
      const result = await Graph.findById(fileId,{_id:0,TransactionData:1})
      if(result==undefined){
        return RespondSuccess(req, res, 200,{}, "No Entry Found");
      }
      let paymentWiseUser:any = {}
      for(let i=0;i<result.TransactionData.length;i++){
        if(paymentWiseUser[result.TransactionData[i].Payment_Type]){
            paymentWiseUser[result.TransactionData[i].Payment_Type]++;
        }
        else{
            paymentWiseUser[result.TransactionData[i].Payment_Type]=1;
        }
      }
  
      let PaymentTypeArray:any = []
      let userCountArray:any = []
      for (let paymentMethod in paymentWiseUser){
        PaymentTypeArray.push(paymentMethod);
        userCountArray.push(paymentWiseUser[paymentMethod])
      }
      let PaymentGraph = {
        PaymentTypeArray,
        userCountArray
      }
      return RespondSuccess(req, res, 200,PaymentGraph, "PaymentMethod Wise Data Fetched with fileId "+fileId);
    } catch (err) {
      console.log('Error in Fetching File ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
  }