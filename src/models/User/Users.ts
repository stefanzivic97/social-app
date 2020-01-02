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

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: string;

    @AllowNull(false)
    @Min(4)
    @Max(8)
    @Column({ type: DataType.STRING })
    public username!: string;

    @AllowNull(false)
    @Min(3)
    @Max(25)
    @Column({ type: DataType.STRING })
    public firstName!: string;

    @AllowNull(false)
    @Min(3)
    @Max(25)
    @Column({ type: DataType.STRING })
    public lastName!: string;

    @AllowNull(false)
    @Min(4)
    @Max(25)
    @Column({ type: DataType.STRING })
    public email!: string;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    public dateOfBirth!: Date;

    @AllowNull(false)
    @Min(5)
    @Max(40)
    @Column({ type: DataType.STRING })
    private password!: string;

    get getPassword () {
        return this.password;
    }

    set setPassword (psw: string) {
        if (psw && psw.length > 40 || psw && psw.length < 5) {
            throw new Error('Password lenght: MIN(5) and Max(40)!');
        }
        this.password = psw;
    }

    @AllowNull(true)
    @Max(255)
    @Column({ type: DataType.STRING })
    public imageUrl!: string;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public verified!: Boolean;

    // ! Need to be false
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public driveFolderId!: string;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public resetToken!: string;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    public resetTokenExpiration!: Date;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public verifyId!: string;

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
     * @param instance of UserModel
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