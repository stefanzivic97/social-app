import { InterfaceType, Field, ID } from 'type-graphql';
import User from '../User/Types/User.ObjectType';

@InterfaceType()
export abstract class IUser implements Partial<User> {

    @Field(type => ID)
    public readonly id!: string;

    @Field()
    public username!: string;
    
    @Field()
    public firstName!: string;

    @Field()
    public lastName!: string;

    @Field()
    public email!: string;

    @Field()
    public dateOfBirth!: Date;

    @Field()
    public password!: string; // ! Need to be privete

    @Field()
    public imageUrl!: string;

    @Field()
    public verified!: Boolean;

    @Field()
    public driveFolderId!: string;

    @Field()
    public resetToken!: string;

    @Field()
    public resetTokenExpiration!: Date;

    @Field()
    public verifyId!: string;

    @Field()
    public deactivated!: Boolean;

}