import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { UserModel } from './User'

export class UserDetailsModel extends Model<UserDetailsModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    readonly id!: String; 

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public currentLocation!: String;
    
    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.DATE })
    public placeOfBirth!: Date;

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public school!: String;

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public work!: String; 

    @AllowNull(true)
    @Max(30)
    @Column({ type: DataType.STRING })
    public hobby!: String; 

    /**
     * * Association
     */

    // * User 1:n UserDetails
    @ForeignKey(() => UserModel)
    @Column({ type: DataType.STRING })
    public userId!: String;
    
    @BelongsTo(() => UserModel)
    public user!: UserModel;
    
}