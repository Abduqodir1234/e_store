import { Request, Response,NextFunction } from "express"

const getDurationInMilliseconds = (start:[number,number]) => {
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

let urlLoggerMiddleWare = ((req:Request,res:Response,next:NextFunction)=>{
    const start = process.hrtime()
    res.on('close', () => {
        const durationInMilliseconds = getDurationInMilliseconds (start)
        console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    next()
    
})

export default urlLoggerMiddleWare