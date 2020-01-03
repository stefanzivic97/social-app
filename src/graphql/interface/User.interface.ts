import { InterfaceType, Field, ID } from 'type-graphql';

@InterfaceType()
export abstract class IUser {

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