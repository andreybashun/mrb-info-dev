import {Module} from '@nestjs/common';
import {DocumentController} from './document.controller';
import {DocumentService} from './document.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Doc, DocSchema} from "./schemas/document.schema";
import {S3Service} from "../s3/s3.service";
import {DocRevision, DocRevisionSchema} from "./schemas/docrevision.schema";
import {Task, TaskSchema} from "../task/schemas/task.schema";
import {TaskRevision, TaskRevisionSchema} from "../task/schemas/taskRevision.schema";
import {S3Controller} from "../s3/s3.controller";

@Module ({
    imports: [
        MongooseModule.forFeature ([{name: Doc.name, schema: DocSchema}],),
        MongooseModule.forFeature ([{name: DocRevision.name, schema: DocRevisionSchema}],),
        MongooseModule.forFeature ([{name: Task.name, schema: TaskSchema}],),
        MongooseModule.forFeature ([{name: TaskRevision.name, schema: TaskRevisionSchema}],),
    ],

    controllers: [DocumentController, S3Controller],
    providers: [DocumentService, S3Service]
})
export class DocumentModule {
}
