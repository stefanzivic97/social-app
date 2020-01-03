import { ObjectType, Field, ID } from 'type-graphql';
import { IUser } from '../../interface/User.interface';

@ObjectType()
export default class User implements IUser {
    public readonly id!: string;
    public username!: string;    
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public dateOfBirth!: Date;
    public password!: string;
    public imageUrl!: string;
    public verified!: Boolean;
    public driveFolderId!: string;
    public resetToken!: string;
    public resetTokenExpiration!: Date;
    public verifyId!: string;
    public deactivated!: Boolean;
}

