import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { UserType, AddUserDataInput } from './Types/index';
import { User } from './User.crud';
import { Context } from 'vm';
import validator from 'validator';
import uuidv4 from 'uuid/v4'
import { UserModel } from '../../models/User/index';
import { hashSync } from 'bcryptjs';
import obj from '../../test';
// import UserDetails from '../../models/User/Information';

import { create_model } from '../../models/db_options';

/**
 * @param of => UserType
 * ?        * Only if export default class { ...resolvers }
 *   Todo   * @Resolver(of => UserType)
 * ! Error  * Hard to find problem
 */

@Resolver() 
export class UserResolver extends UserModel {
    
    private userCollection: UserType[] = [];

    /**
     * * Registration
     * @param UserInput  
     * @param ctx 
     */
    @Mutation(returns => UserType, { description: `# ? Registration ` })
    public async registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): Promise<UserType> {
        
        
        const uuid = uuidv4()
        const errors: { message: string }[] = [];
        
        const { username, firstName, lastName, email, password, confirmPassword, imageUrl } = UserInput;
        
        if (validator.isEmpty(username)) {
            errors.push({ message: 'Username is required!' });
        } else if (username.length < 4 || username.length > 8) {
            errors.push({ message: 'Required min lenght is 4 and max lenght is 8!' });
        } else if (validator.isEmpty(firstName)) {
            errors.push({ message: 'First name is required!' });
        } else if (firstName.length < 3 || firstName.length > 25) {
            errors.push({ message: 'Required min lenght is 3 and max lenght is 25!' });
        } else if (validator.isEmpty(lastName)) {
            errors.push({ message: 'Last name is required!' });
        } else if (lastName.length < 3 || lastName.length > 25) {
            errors.push({ message: 'Required min lenght is 3 and max lenght is 25!' });
        } else if (validator.isEmpty(email)) {
            errors.push({ message: 'Email is required!' });
        } else if (validator.isEmpty(password)) {
            errors.push({ message: 'Password is required!' });
        } else if (password.length < 5 || password.length > 40) {
            errors.push({ message: 'Required min lenght is 5 and max lenght is 40!' });
        } else if (validator.isEmpty(confirmPassword)) {
            errors.push({ message: 'Please confirm your password!' });
        } else if (password !== confirmPassword) {
            errors.push({ message: 'Passwords not match!' });
        }
        
        if (errors.length > 0) {
            const error: { [key: string]: any } = new Error('Invalid input')
            error.data = errors;
            error.code = 422;
            throw error
        }
        
        // const user = new UserModel({
        //     username,
        //     firstName,
        //     lastName,
        //     email,
        //     dateOfBirth: new Date(),
        //     deactivated: true,
        //     driveFolderId: 'asdkjalsjdlas',
        //     imageUrl,
        //     password: hashSync(password, 12), 
        //     resetToken: 'aksdjlaksdjklas',
        //     resetTokenExpiration: new Date() ,
        //     verified: true,
        //     verifyId: 'akjshdkjhask'
        // })
        
        // const proba = await user.save()
        // console.log(proba.id);
        
        
        // const create = promisify(create_model)
        
        const user = await create_model(UserModel, UserInput)
        
        console.log(user.getPassword)
        
        // console.log('asdsadas', user.User.dataValues)

    
        return {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            imageUrl: user.imageUrl,
            password: user.getPassword
        }

        // return {
        //     id: user.id,
        //     username: user.username,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     email: user.email,
        //     dateOfBirth: user.dateOfBirth,
        //     // deactivated: user.deactivated,
        //     // driveFolderId: user.driveFolderId,
        //     imageUrl: user.imageUrl,
        //     password: user.getPassword,
        //     // resetToken: user.resetToken,
        //     // resetTokenExpiration: user.resetTokenExpiration,
        //     // verified: user.verified,
        //     // verifyId: user.verifyId
        // }
        
    }

    @Query(returns => [UserType], { nullable: true, description: `# ? Get all users ` })
    getAllUsers(): any {
        try {
            let a: Object = {}
            return a;
        } catch (error) {
            console.log(error)
        }
    }
    
}