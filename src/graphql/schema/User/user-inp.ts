import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInputData {

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
    public password!: string;

    @Field()
    public imageUrl!: string;

}
