import {Injectable} from '@nestjs/common';
import {S3} from 'aws-sdk';
import *as uuid from 'uuid'

@Injectable ()
export class S3Service {

    async upload (file): Promise<string> {
        const fileName = uuid.v4 ();
        const bucketS3 = 'mrb-doc';
        await this.uploadS3 (file.buffer, bucketS3, fileName);
        return fileName
    }

    async uploadS3 (file, bucket, name) {
        const s3 = this.getS3 ();
        const params = {
            Bucket: bucket,
            Key: String (name),
            Body: file,
        };
        return new Promise ((resolve, reject) => {
            s3.upload (params, (err, data) => {
                if (err) {
                    console.log (err);
                    reject (err.message);
                }
                resolve (data);
            });
        });
    }

    async getFile (key) {
        const s3 = this.getS3 ()
        await s3.getObject (
            {Bucket: process.env.BUCKET_S3, Key: key},
            function (error, data) {
                if (error != null) {
                    alert ("Failed to retrieve an object: " + error);
                } else {
                    return data
                }
            }
        );
    }

    getS3 () {
        return new S3 ({
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            endpoint: process.env.END_POINT,
            s3ForcePathStyle: true,
            signatureVersion: process.env.SIGNATURE_VERSION,
            region: process.env.REGION
        });
    }
}
