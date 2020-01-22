import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { UserType, AddUserDataInput } from './Types/index';
import { Context } from 'vm';
import validator from 'validator';
import uuidv4 from 'uuid/v4'
import { UserModel } from '../../models/User/index';
import { hashSync } from 'bcryptjs';
import { exec } from 'child_process';

import { create_model, find_one_where } from '../../models/db_options';
import { sendConfirmMail } from '../../util/Mail/mail';

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
    @Mutation(
        returns => UserType, { 
        description: `# ? Registration `
    })
    public async registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): Promise<UserType> {
        
        const email_: Boolean = true;

        ctx.res.cookie('assdsadsdad','sdfd');

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

        
        const email_check = await find_one_where(UserModel, { email })
        if (email_check) {
            throw new Error('Email exists already!')
        }
        
        const checkEmailExist = async (email: string) => {
            const e = await UserModel.findOne({ 
                where: {
                    email: email
                }
            });
            return e;
        };
        
        
        const emailEx = await checkEmailExist(email)
        // console.log(emailEx);
        if (emailEx) {
            throw new Error('User exists already!');
        }

        
        
        if (errors.length > 0) {
            const error: { [key: string]: any } = new Error('Invalid input')
            error.data = errors;
            error.code = 422;
            throw error;
        }
        
        const user = await create_model(UserModel, UserInput);
        // console.log(user);
        
        if (!user) {
            throw new Error('user not created');
        }
        
        const generateAuthId = async (user: any) => {
            const uuid = uuidv4();
            const authId = hashSync(`${user.id}`, 12);
            return authId;
        }
        


        /**
         * * On and Off fn
         * ? For email confirmation
         * @param key Boolean true 'on', false 'off'
         */
        const Confirm_Email_fn = async (from: string, model: any, sub: string, key: Boolean) => {
            switch (key) {
                case true: { 
                    try {
                        const authId = await generateAuthId(model.id)
                        console.log('Mail sent!');
                        const send = sendConfirmMail({
                            to: model.email,
                            from: from,
                            subject: 'Confirm mail',
                            html: `
                            <div style="border: 1px solid black; width: 100%;">
                            <p style="margin-left: auto; width: 20%;"> 
                                hello ${model.firstName}
                            <p>
                            </div>
                            <h2><a style="color:red;" href="${authId}">link</a></h2>`
                            
                        });
                        return send;
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                }

                case false: {
                    console.log('Confirm_Email_fn is off');
                }
            
                default:
                    break;
            }
        }
        Confirm_Email_fn('test@test.com', user, 'Confirm email', email_);
        
    
        // exec('ls -la', (err, stdout, stderr) => {
        //     if (err) {
        //         console.log('error: ', err.message);
        //         return;
        //     }
        //     if (stderr) {
        //         console.log('stderr: ', stderr);
        //         return;
        //     }
        //     console.log(stdout);
            
        // })


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

    }

    @Query(returns => [UserType], { nullable: true, description: `# ? Get all users ` })
    getAllUsers(): any {
        try {
            let a: Object = {};
            return a;
        } catch (error) {
            console.log(error);
        }
    }
    
}