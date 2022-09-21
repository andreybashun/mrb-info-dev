import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from "crypto";
import * as PDFParser from "pdf2json"





@Injectable()
export class CryptoService {

    async getSHA256hash(file){
        const fileBuffer = Buffer.from(file.buffer, "utf-8");
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(file.buffer, saltOrRounds);
        return crypto.createHash('sha256').update(fileBuffer).digest('hex');
    }

    // txt hash
    async getHash(file){
        const fileBuffer = Buffer.from(file.buffer, "utf-8");
        return fileBuffer.toString()

    }

    // pdf hash
     getPDFhash(file){
         const fileBuffer = Buffer.from(file.buffer, "utf-8");
         let raw = file.buffer.toString();
         return raw.slice(raw.indexOf('Tj')-66,raw.indexOf('Tj')-2)

         }



}
