import { InputType, Field } from "type-graphql";
import { User } from './index';

@InputType({ description: "New user data" })
export default class AddUserDataInput implements Partial<User>{

    @Field({ nullable: false })
    public username?: string;

    @Field({ nullable: false })
    public name?: string;

    @Field({ nullable: false })
    public lname?: string;

    @Field({ nullable: false })
    public email?: string;

    @Field({ nullable: false })
    public password?: string;

    @Field({ nullable: true })
    public dateOfBirth?: Date;
}

