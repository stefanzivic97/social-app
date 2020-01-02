import { Field, InterfaceType, ID } from 'type-graphql';
import { UserSchema } from '../typedefs/User-schema';

@InterfaceType()
export abstract class IPost {
 
    @Field(type => ID)
    public readonly id!: String;

    @Field({ nullable: true })
    public title!: String;

    @Field({ nullable: true })
    public content!: String;
    
    @Field({ nullable: true })
    public imageUrl!: String;

    @Field({ nullable: true, defaultValue: true })
    public published!: Boolean;

    @Field({ nullable: true, defaultValue: false })
    public isDeleted!: Boolean;

    @Field({ nullable: false })
    public userId!: UserSchema;
    
}