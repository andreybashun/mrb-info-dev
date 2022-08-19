import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {DocumentService} from "./document.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateDocDto} from "./dto/create-doc.dto";
import {CreateDocRevisionDto} from "./dto/create-docRevision.dto";

@Controller('document')
export class DocumentController {
    constructor (private documentService: DocumentService) {
    }

    @Post()
    create (@Body () dto: CreateDocDto) {
        return this.documentService.create (dto);
    }

    getOne () {

    }

    @Get ()
    getAll () {
        return this.documentService.getAll ();
    }

    delete () {

    }

    @Post('/[revision]')
    @UseInterceptors (FileInterceptor ('file'))
    createRevision (@UploadedFile () file, @Body () dto: CreateDocRevisionDto) {
        return this.documentService.createRevision(dto, file);
    }
}
