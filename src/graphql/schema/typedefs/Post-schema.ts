import { ObjectType } from 'type-graphql';
import { IPost } from '../interface/Post-interface';

@ObjectType({ implements: IPost })
export class PostSchema implements IPost {
    public id!: String;    
    public title!: String;
    public content!: String;
    public imageUrl!: String;
    public published!: Boolean;
    public isDeleted!: Boolean;
    public userId!: import("./User-schema").UserSchema;   
}