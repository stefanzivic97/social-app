import { InterfaceType, Field, ID } from 'type-graphql';
import User from './user.type';

@InterfaceType()
export abstract class IUser implements Partial<User> {
    
    @Field(type => ID)
    public readonly id!: string;

    @Field()
    public username!: string;

    @Field()
    public name!: string;

    @Field()
    public lastName!: string;

    @Field()
    public email!: string;

    @Field()
    public dateOfBirth!: Date;

    @Field()
    public password!: string

}