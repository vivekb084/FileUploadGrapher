import {  Request, Response } from 'express'

export const RespondError = (req: Request, res: Response, status: number, errorType: string, message: string) => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'appliation/json',
    })
    res.status(status)
    res.json({
        error_type: errorType,
        message,
        status,
    })
}

export const RespondSuccess = (req: Request, res: Response, status: number, payload: any ,message:string='') => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'appliation/json',
    })
    res.status(status)
    res.json({
        data: payload,
        message,
        status,
    })
}