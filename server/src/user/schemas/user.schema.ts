import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';



export type UserDocument = User & Document;
@Schema()

export class User {

    @Prop ()
    email: string

    @Prop ()
    password: string

    @Prop ()
    firstName: string

    @Prop ()
    secondName: string

    @Prop ()
    organization: string

    @Prop ()
    position: string

    @Prop ()
    avatar: string

}

    export const UserSchema = SchemaFactory.createForClass (User);




