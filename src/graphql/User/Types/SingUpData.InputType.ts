import { InputType, Field,  } from 'type-graphql';
import { MinLength } from 'class-validator';
import User  from '../Types/User.ObjectType';

@InputType({ description: '' })
export class SingUpData implements Partial<User> {
    
    @MinLength(4, {
        message: 'Username must be at least 4 characters'
    })
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