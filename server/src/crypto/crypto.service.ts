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

    async getHash(file){
        const fileBuffer = Buffer.from(file.buffer, "utf-8");
        return fileBuffer.toString()

    }

     getPDFhash(file){
        const pdfParser = new PDFParser(this, 1);
        pdfParser.loadPDF(file.buffer);
    }
}
