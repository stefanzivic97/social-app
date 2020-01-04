import { ObjectType, Field, ID } from 'type-graphql';
// import { IUser } from '../../interface/index';
import { IUser } from '../../interface/User.interface';

@ObjectType()
// @ObjectType({ implements: IUser })
export default class User /*implements IUser*/ {
    // public readonly id!: string;
    // public username!: string;    
    // public firstName!: string;
    // public lastName!: string;
    // public email!: string;
    // public dateOfBirth!: Date;
    // public password!: string;
    // public imageUrl!: string;
    // public verified!: Boolean;
    // public driveFolderId!: string;
    // public resetToken!: string;
    // public resetTokenExpiration!: Date;
    // public verifyId!: string;
    // public deactivated!: Boolean;
    @Field(type => ID)
    public readonly id!: string;

    @Field({ nullable: true })
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

