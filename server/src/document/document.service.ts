import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Doc, DocDocument} from "./schemas/document.schema";
import {Model, ObjectId, Schema, Types} from "mongoose";
import {CreateDocDto} from "./dto/create-doc.dto";
import {S3Service} from "../s3/s3.service";
import {DocRevision, DocRevisionDocument} from "./schemas/docrevision.schema";
import {CreateDocRevisionDto} from "./dto/create-docRevision.dto";




@Injectable ()
export class DocumentService {
    constructor (@InjectModel (Doc.name) private docModel: Model<DocDocument>,
                 @InjectModel (DocRevision.name) private docRevisionModel: Model<DocRevisionDocument>,
                 private s3Servise: S3Service
    ) {
    }

    async create (dto: CreateDocDto, key): Promise<Doc> {
        const fileKey = await this.s3Servise.upload (key)
        return await this.docModel.create ({...dto,key: fileKey});
    }

    async getOne (id: ObjectId): Promise<Doc> {
        return this.docModel.findById (id).populate('docRevisions');
}


    async getAll (): Promise<Doc[]> {
        return this.docModel.find ();
    }

    async delete (id: ObjectId): Promise<ObjectId>{
        const doc = await this.docModel.findByIdAndDelete(id)
        return doc._id
    }

    // async createRevision(dto: CreateDocRevisionDto): Promise<DocRevision>{
    //     const doc = await this.docModel.findById (dto.docId)
    //     const docRevision = await this.docRevisionModel.create ({...dto});
    //     doc.docRevisions.push (docRevision._id);
    //     await doc.save ();
    //     return docRevision;
    // }

    async createRevision (dto: CreateDocRevisionDto, key): Promise<DocRevision> {
        const doc = await this.docModel.findById (dto.docId)
        const fileKey = await this.s3Servise.upload (key)
        const docRevision = await this.docRevisionModel.create ({...dto, key: fileKey});
        doc.docRevisions.push (docRevision._id);
        await doc.save ();
        return docRevision;
    }

    async getFile(key){
        const filePath = await this.s3Servise.getFile(key)
        return filePath
    }

    async getRevision(id:ObjectId):Promise<DocRevision>{
        return this.docRevisionModel.findById (id);
    }
}
