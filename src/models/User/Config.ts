import { 
    Table, Model, Column, AllowNull,
    PrimaryKey, DataType
} from 'sequelize-typescript';

@Table
export default class Config extends Model<Config> {
    
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: string;

    @Column({ type: DataType.STRING })
    private driveFolderId!: string;

    get getDriveFolderId() {
        return this.driveFolderId;
    }

    set setDriveFolderId(_driveFolderId: string) {
        this.driveFolderId = _driveFolderId;
    }

    @Column({ type: DataType.STRING })
    private resetToken!: string;

    get getResetToken() {
        return this.resetToken;
    }

    set setResetToken(_resetToken: string) {
        this.resetToken = _resetToken;
    }

    @Column({ type: DataType.DATE })
    public resetTokenExpiration!: Date;

    @Column({ type: DataType.STRING })
    protected verifyId!: string;

    get getVerifyId() {
        return this.verifyId;
    }

    set setVerifyId(_verifyId: string) {
        this.verifyId = _verifyId;
    }

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    private isDeactivated!: Boolean;

    get getIsDeactivated() {
        return this.isDeactivated
    }

    set setIsDeactivated(_isDeactivated: Boolean) {
        this.isDeactivated = _isDeactivated;
    }

}