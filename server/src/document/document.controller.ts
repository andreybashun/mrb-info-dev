import {Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {DocumentService} from "./document.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateDocDto} from "./dto/create-doc.dto";
import {CreateDocRevisionDto} from "./dto/create-docRevision.dto";
import {ObjectId, Schema} from "mongoose";


@Controller('document')
export class DocumentController {
    constructor (private documentService: DocumentService) {
    }

    @Post()
    create (@Body () dto: CreateDocDto) {
        return this.documentService.create (dto);
    }

    @Get(':id')
    getOne (@Param('id') id:ObjectId) {
        return this.documentService.getOne(id)
    }

    @Get ()
    getAll () {
        return this.documentService.getAll ();
    }
    @Delete(':id')
    delete (@Param('id') id:ObjectId) {
        return this.documentService.delete(id);
    }

    // @Post('/[revision]')
    // @UseInterceptors (FileInterceptor ('file'))
    // createRevision (@UploadedFile () file, @Body () dto: CreateDocRevisionDto) {
    //     return this.documentService.createRevision(dto, file);
    // }

    @Post('/revision')
    createRevision(@Body() dto:CreateDocRevisionDto){
        return this.documentService.createRevision(dto)
    }
}
