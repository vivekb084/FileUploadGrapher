import * as fs from 'fs';
import  csv  from 'csv-parser'

export const formatCSV = (csvPath:string)=>{
    return new Promise((resolve,reject)=>{
        try {
            const results:any = [];
        
            fs.createReadStream(csvPath)

            .pipe(csv())
            .on('data', (data:any) => results.push(data))
            .on('end', () => {
                resolve(results)
            });
        } catch (error) {
            reject(error)
        }
    });
}

