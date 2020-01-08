import { ObjectType } from 'type-graphql'
import { IUser } from './user.interface';

@ObjectType({ implements: IUser })
export default class User implements IUser {
    public id!: string;    
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

