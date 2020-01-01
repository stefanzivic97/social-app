import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';

@Table
export class UserModel extends Model<UserModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    readonly id!: string;

    @AllowNull(false)
    @Min(4)
    @Max(8)
    @Column
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
    public password!: string;

    @AllowNull(true)
    @Max(255)
    @Column({ type: DataType.STRING })
    public image!: string;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public verified!: Boolean;

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

    @Column({ type: DataType.BOOLEAN })
    public deactivated!: Boolean;

    /**
     * 
     * @param instance 
     */
    @BeforeCreate
    @BeforeUpdate
    public static makeUpperCase (instance: UserModel): void {
        let firstCarater: string = instance.firstName.slice(0, 1);
        let restOfString: string = instance.firstName.toUpperCase();
        instance.firstName = firstCarater + restOfString;
    }

}