import { sign, verify, decode } from 'jsonwebtoken';
import _ from 'lodash';
import uuid from 'uuid/v4'

export class JsonWebToken {

    private _authToken!: string;
    private _refreshToken!: string;
    protected _authSecret!: string;
    protected _refreshSecret!: string;
    protected _newRefreshSecret!: string;
    

    // constructor(_authSecret: string, refresh) {
        
    // }

    private config(authSecret: string, refreshSecret: string) {
        this._authSecret = authSecret;
        this._refreshSecret = refreshSecret;
    }

    public async generateTokens(model: any, authSecret: string, refreshSecret: string) {

        const token = sign(
            {
                user: _.pick(model, ['id'])
            },
            authSecret,
            {
                expiresIn: '1h'
            }
        )

        const refreshToken = sign(
            {
                userId: _.pick(model, 'id')
            },
            refreshSecret,
            {
                expiresIn: '7d'
            }
        )

        return [token, refreshToken]

    }

    public async refreshTokens(model: any, token: string, refreshToken: string, authSecret: string, refreshSecret: string) {

        let userId: string = '';
        
        try {
            const { user: { id } }: any = decode(refreshToken);
            userId = id;
        } catch (error) {
            return {};
        }

        if (!userId) {
            return {};
        }

        const user = await model.findByPk(userId)

        if (!user) {
            const error = new Error('User not found!');
            error.status = 404;
            throw error;
        }

        this._newRefreshSecret = user.password + refreshSecret;

        try {
            verify(refreshToken, this._newRefreshSecret)
        } catch (error) {
            return {}
        }

        // const [newAuthToken, newRefreshToken] = await this.generateTokens(user, )
    }
}
