import { Field, ObjectType, ID } from 'type-graphql'
import { IUser } from './user.interface';

@ObjectType({ implements: IUser })
export default class User implements IUser {
    public id!: string;    
    public username!: string;
    public name!: string;    
    public lname!: string;
    public email!: string;
    public dateOfBirth!: Date;
    public password!: string;
}

