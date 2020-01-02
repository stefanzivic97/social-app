import { Field, InterfaceType, ID } from 'type-graphql';

@InterfaceType()
export abstract class IUser {
    
    @Field(type => ID)
    public readonly id!: String;
    
    @Field({ nullable: false })
    public username!: String;

    @Field({ nullable: false })
    public firstName!: String;

    @Field({ nullable: false })
    public lastName!: String;

    @Field({ nullable: false })
    public email!: String;

    @Field({ nullable: true })
    public dateOfBirth!: Date;    

    @Field({ nullable: true })
    public password!: String;

    @Field({ nullable: true })
    public imageUrl!: String;

    @Field({ nullable: true })
    public verified!: Boolean;

    // ! Need to be false
    @Field({ nullable: true })
    public driveFolderId!: String;

    @Field({ nullable: true })
    public resetToken!: String;

    @Field({ nullable: true })
    public resetTokenExpiration!: String;

    @Field({ nullable: true })
    public verifyId!: String;

    @Field({ nullable: false, defaultValue: false })
    public deactivated!: Boolean;

}