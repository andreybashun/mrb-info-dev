import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {DocumentService} from "../document/document.service";
import {CryptoService} from "./crypto.service";

@Controller('crypto')
export class CryptoController {
    constructor (private cryptoService: CryptoService) {
    }
    @Post ('/sha256')
    @UseInterceptors (FileInterceptor ('file'))
    getSHA256hash (@UploadedFile () file) {
        return  this.cryptoService.getSHA256hash(file);
    }

    @Post ('/hash')
    @UseInterceptors (FileInterceptor ('file'))
    getHash (@UploadedFile () file) {
        return  this.cryptoService.getHash(file);
    }
}
