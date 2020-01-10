import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate, 
    HasMany, HasOne, ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { PostModel } from '../Post_comments_likes/index';
import { InformationModel, UserModel } from './index';
import { hashSync } from 'bcryptjs';
import Infomation from './Information';


@Table
export default class User extends Model<User> {
 
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
    @Max(255)
    @Column({ type: DataType.STRING })
    private password!: string;

    get getPassword () {
        return this.password;
    }

    set setPassword (_password: string) {
        this.password = _password;
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

    @HasOne(() => InformationModel)
    public infomation!: InformationModel;

    @HasMany(() => PostModel)
    public posts!: [PostModel];
    
    /**
     * Format string before insert in database
     * @param instance of UserModel
     */
    @BeforeCreate
    // @BeforeUpdate
    public static firstCaraterUpperCase (instance: User): void {
        /** First and Last name */
        const psw = instance.getPassword
        instance.setPassword = hashSync(psw, 12)
        let firstCarater: string = instance.firstName.slice(5);
        let restOfString: string = instance.firstName.toUpperCase();
        instance.firstName = firstCarater + restOfString;
    }
    
    
}