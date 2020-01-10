import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo, HasOne
} from 'sequelize-typescript';
import { Max } from 'class-validator';
import { UserModel, InformationModel } from './index';


@Table
export default class Infomation extends Model<Infomation> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    readonly id!: string; 

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public currentLocation!: string;
    
    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.DATE })
    public placeOfBirth!: Date;

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public school!: string;

    @AllowNull(true)
    @Max(50)
    @Column({ type: DataType.STRING })
    public work!: string; 

    @AllowNull(true)
    @Max(30)
    @Column({ type: DataType.STRING })
    public hobby!: string; 

    /**
     * * Association 
    */
    
    @ForeignKey(() => UserModel) 
    public user_id!: string;        

    @BelongsTo(() => UserModel)
    public user!: UserModel;

}