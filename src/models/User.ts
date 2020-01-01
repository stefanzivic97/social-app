import { 
    Model, Table, Column, AllowNull,
    DataType, Unique,
    PrimaryKey, AutoIncrement, IsUUID,
    HasMany 
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator'

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

    @AllowNull(false)
    @Min(5)
    @Max(40)
    @Column({ type: DataType.STRING })
    private password!: string;

    @AllowNull(true)
    @Max(255)
    @Column({ type: DataType.STRING })
    public image!: string;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public verified!: Boolean;

    
}