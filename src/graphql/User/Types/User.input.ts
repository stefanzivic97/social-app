import { InputType, Field,  } from 'type-graphql';
import { MinLength } from 'class-validator';
import { User } from '../schema/User/User.type';

@InputType({ description: '' })
export class InpSingUpData implements Partial<User> {
    
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