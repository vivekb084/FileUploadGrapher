import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { errorMsgs } from '../config/constants/errorMsg'



export const fileUPload = async (req: Request, res: Response) => {
    try {
        console.log("Insieef file upload req ",req)
        return RespondSuccess(req, res, 200, {},"File Added Successfully");
    } catch (err) {
      console.log('Error in Adding Query ', err)
      return RespondError(req, res, 500, errorMsgs.INTERNAL_SERVER_ERROR, err.message)
    }
}