import {Module} from '@nestjs/common';
import {TaskController} from './task.controller';
import {TaskService} from './task.service';
import {S3Service} from "../s3/s3.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Doc, DocSchema} from "../document/schemas/document.schema";
import {DocRevision, DocRevisionSchema} from "../document/schemas/docrevision.schema";
import {DocumentModule} from "../document/document.module";
import {Task, TaskSchema} from "./schemas/task.schema";
import {TaskRevision, TaskRevisionSchema} from "./schemas/taskRevision.schema";

@Module ({
    imports: [
        MongooseModule.forFeature ([{name: Doc.name, schema: DocSchema}],),
        MongooseModule.forFeature ([{name: DocRevision.name, schema: DocRevisionSchema}],),
        MongooseModule.forFeature ([{name: Task.name, schema: TaskSchema}],),
        MongooseModule.forFeature ([{name: TaskRevision.name, schema: TaskRevisionSchema}],),
    ],
    controllers: [TaskController],
    providers: [TaskService, S3Service]
})
export class TaskModule {
}
