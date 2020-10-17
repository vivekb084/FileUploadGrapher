import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { errorMsgs } from '../config/constants/errorMsg'
import { Graph } from '../models/fileUpload'



export const fileUPload = async (req: Request, res: Response) => {
    try {
        console.log("Req for file ",req.file.path)
        const fileData = new Graph();
        // let temp = {
        //   TransactionDate:new Date(),
        //   Product:'Testing',
        //   Price:300,
        //   Payment_Type:'Card',
        //   Name:'Vivek',
        //   City:'Bhtp',
        //   State:'Raja',
        //   Country:'Ind',
        //   AccountCreated:new Date(),
        //   LastLogin:new Date(),
        //   Longitude:"22323322",
        //   Latitude:"232423423"
        // }
        // fileData.TransactionData.push(temp);
        // fileData.TransactionData.push(temp);
        // fileData.TransactionData.push(temp);

        fileData.save()
        return RespondSuccess(req, res, 200, {},"File Saved Successfully");
    } catch (err) {
      console.log('Error in Adding Query ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
}