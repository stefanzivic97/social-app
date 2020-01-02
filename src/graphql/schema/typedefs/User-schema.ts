import { ObjectType } from 'type-graphql'
import { IUser } from '../interface/User-interface'

@ObjectType({ implements: IUser })
export class UserSchema implements IUser {
    public readonly id!: String    
    public username!: String
    public firstName!: String
    public lastName!: String
    public email!: String
    public dateOfBirth!: Date
    public password!: String
    public imageUrl!: String
    public verified!: Boolean
    public driveFolderId!: String
    public resetToken!: String
    public resetTokenExpiration!: String
    public verifyId!: String
    public deactivated!: Boolean
}