import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate, 
    HasMany, HasOne
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { PostModel } from '../Post_comments_likes/Posts';
import { UserDetailsModel } from './User-details';

@Table
export class UserModel extends Model<UserModel> {

    public _fullName!: String; 

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    @AllowNull(false)
    @Min(4)
    @Max(8)
    @Column
    public username!: String;

    @AllowNull(false)
    @Min(3)
    @Max(25)
    @Column({ type: DataType.STRING })
    public firstName!: string;

    @AllowNull(false)
    @Min(3)
    @Max(25)
    @Column({ type: DataType.STRING })
    public lastName!: String;

    @AllowNull(false)
    @Min(4)
    @Max(25)
    @Column({ type: DataType.STRING })
    public email!: String;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    public dateOfBirth!: Date;

    @AllowNull(false)
    @Min(5)
    @Max(40)
    @Column({ type: DataType.STRING })
    public password!: String;

    @AllowNull(true)
    @Max(255)
    @Column({ type: DataType.STRING })
    public image!: String;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public verified!: Boolean;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public driveFolderId!: String;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public resetToken!: String;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    public resetTokenExpiration!: Date;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public verifyId!: String;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public deactivated!: Boolean;

    /**
     * * Association 
     */

    // * User 1:n Post
    @HasMany(() => PostModel)
    public posts!: PostModel[];

    // * User 1:n UserDetails
    @HasOne(() => UserDetailsModel)
    public userDetals!: UserDetailsModel;

    /**
     * Format string before insert in database
     * @param instance 
     */
    @BeforeCreate
    @BeforeUpdate
    public static firstCaraterUpperCase (instance: UserModel): void {
        /** First and Last name */
        let firstCarater: string = instance.firstName.slice(0, 1);
        let restOfString: string = instance.firstName.toUpperCase();
        instance.firstName = firstCarater + restOfString;
    }
    
    
}