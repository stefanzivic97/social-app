import { InterfaceType, Field, ID } from 'type-graphql';
import { UserType } from './index';

@InterfaceType()
export abstract class IUser implements Partial<UserType> {
    
    @Field(type => ID)
    public readonly id!: string;

    @Field({ nullable: false })
    public username!: string;

    @Field({ nullable: false })
    public firstName!: string;

    @Field({ nullable: false })
    public lastName!: string;

    @Field({ nullable: false })
    public email!: string;

    @Field({ nullable: true })
    public dateOfBirth!: Date;
    
    @Field()
    public password!: string;
    
    @Field({ nullable: true })
    public imageUrl!: string;

    // @Field()
    // public verified!: Boolean;

    // @Field()
    // public driveFolderId!: string;

    // @Field()
    // public resetToken!: string;

    // @Field()
    // public resetTokenExpiration!: Date;

    // @Field()
    // public verifyId!: string;

    // @Field()
    // public deactivated!: Boolean;

}