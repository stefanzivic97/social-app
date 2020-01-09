import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { UserType, AddUserDataInput } from './Types/index';
import { User } from './User.crud';
import { Context } from 'vm';
import validator from 'validator';
import uuidv4 from 'uuid/v4'
import { UserModel } from '../../models/User/index';

/**
 *          @param of => UserType
 * ?        * Only if export default class { ...resolvers }
 * Todo     * @Resolver(of => UserType)
 * !        * Hard to find problem
 */

const uuid = uuidv4()

@Resolver() 
export class UserResolver extends User {
    
    @Mutation({ description: `# ? Registration ` })
    public registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): UserType {
        
        // const validator: Validator = new Validator();
        const log = console.log;
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
            console.log(error);
        }
        
        // const user = new UserModel(UserInput)
        
        // console.log('USER::  ',user)

        return {
            id: uuid,
            username,
            firstName,
            lastName,
            email,
            dateOfBirth: new Date(),
            deactivated: false,
            driveFolderId: 'asdkjalsjdlas',
            imageUrl,
            password,
            resetToken: 'aksdjlaksdjklas',
            resetTokenExpiration: new Date() ,
            verified: true,
            verifyId: 'akjshdkjhask'
        }

        

        // return {
        //     id: 'kasdjlaksd',
        //     firstName: 'adjklkasjd',
        //     lastName: 'adjskjkldsa',
        //     username: 'adskjsalkdjlksa',
        //     email: 'kaskjdksajdklja',
        //     dateOfBirth: new Date(),
        //     deactivated: false,
        //     driveFolderId: 'asdkjalsjdlas',
        //     imageUrl: 'aslkdjlsajdkl',
        //     password: 'asdl;skadlsladk',
        //     resetToken: 'aksdjlaksdjklas',
        //     resetTokenExpiration: new Date() ,
        //     verified: true,
        //     verifyId: 'akjshdkjhask'
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