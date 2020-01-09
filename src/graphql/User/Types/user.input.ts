import { InputType, Field } from "type-graphql";
import { UserType } from './index';

@InputType({ description: "New user data" })
export default class AddUserDataInput implements Partial<UserType>{

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

    @Field({ nullable: false })
    public password!: string;

    @Field({ nullable: false })
    public confirmPassword!: string;

    @Field({ nullable: true })
    public imageUrl!: string;
}