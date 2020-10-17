import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { errorMsgs } from '../config/constants/errorMsg'
import { Graph } from '../models/fileUpload'
import { formatCSV } from '../helper/csvDataExtractor'
import { ChangeColStringToNumber } from '../helper/formatter'
import { unlinkSync } from 'fs'
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