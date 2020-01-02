import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../../schema/User/User.type'
import {UserInputData} from '../../schema/User/user-inp';
import { Context } from 'vm';

const pathAndFileName = `# * Path and file name * \n ${__filename}`;

@Resolver(of => User)
export class UserResolver {
    @Mutation({ description: `# Sing Up(): UserSchema \n${pathAndFileName}` })
    public singUp (@Arg('UserInputData') UserInp: UserInputData, @Ctx() ctx: Context): any  {

            const date = new Date()
            return {
                username: 'hsadkjsakhdkj',
                firstName: 'aksdjlkasdj',
                lastName: 'kasdjlasdj',
                email: 'asldkjlasjdk',
                dateOfBirth: date,
                imageUrl: 'askdjlaksdjlks',
                password: 'laksds;akd;lsa',
            }
            // return {
            //     id: 'sakljdksadl',
            //     username: 'hsadkjsakhdkj',
            //     firstName: 'aksdjlkasdj',
            //     lastName: 'kasdjlasdj',
            //     email: 'asldkjlasjdk',
            //     dateOfBirth: date,
            //     driveFolderId: 'aksdjsahkdj',
            //     imageUrl: 'askdjlaksdjlks',
            //     password: 'laksds;akd;lsa',
            //     deactivated: false,
            //     resetToken: 'askdljasdljkl',
            //     resetTokenExpiration: date,
            //     verified: false,
            //     verifyId: 'kasdjlsdjlk'
            // }
    }
}
