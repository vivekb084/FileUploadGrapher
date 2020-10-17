import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { errorMsgs } from '../config/constants/errorMsg'
import { Graph } from '../models/fileUpload'
import { formatCSV } from '../helper/csvDataExtractor'
import { ChangeColStringToNumber } from '../helper/formatter'
import { unlinkSync } from 'fs'
import { get, isEmpty } from 'lodash'
import { Types } from 'mongoose'

import path = require("path")



export const fileUPload = async (req: Request, res: Response) => {
  try {
    if (req.file == undefined || path.extname(req.file.path) != '.csv') {
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, "Incorrect file Format")
    }
    const fileData = new Graph();
    let TransactionData: any = await formatCSV(req.file.path);
    TransactionData = await ChangeColStringToNumber(TransactionData, ['Price'])
    fileData.TransactionData = TransactionData;
    let fileReponse = await fileData.save()
    if (req.file) {
      unlinkSync(req.file.path)
    }
    return RespondSuccess(req, res, 200, { FileId: fileReponse._id }, "File Saved Successfully with fileId " + fileReponse._id);
  } catch (err) {
    console.log('Error in Saving File ', err)
    if (req.file) {
      unlinkSync(req.file.path)
    }
    return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
  }
}


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