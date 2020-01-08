import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { User, AddUserDataInput } from './Types/index';
import { Context } from 'vm';
import { Validator } from 'class-validator';
// import { UserModel } from '../../models/User/Users';


@Resolver(of => User)
export default class {

    public validator: Validator = new Validator();

    @Mutation({ description: `# ? Registration ` })
    public registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): User {
        
        const errors: { message: string }[] = [];
        const { username, firstName, lastName, email, password, imageUrl } = UserInput;

        if (this.validator.isEmpty(username)) {
            errors.push({ message: 'Username is required!' });
        } else if (username.length < 4 || username.length > 8) {
            errors.push({ message: 'Required min lenght is 4 and max lenght is 8' });
        } else if (this.validator.isEmpty(firstName)) {
            errors.push({ message: 'First name is required!' })
        } else if (firstName.length < 3 || firstName.length > 25) {
            errors.push({ message: 'Required min lenght is 3 and max lenght is 25' })
        }
        


        return {
            id: 'kasdjlaksd',
            firstName: 'adjklkasjd',
            lastName: 'adjskjkldsa',
            username: 'adskjsalkdjlksa',
            email: 'kaskjdksajdklja',
            dateOfBirth: new Date(),
            deactivated: false,
            driveFolderId: 'asdkjalsjdlas',
            imageUrl: 'aslkdjlsajdkl',
            password: 'asdl;skadlsladk',
            resetToken: 'aksdjlaksdjklas',
            resetTokenExpiration: new Date() ,
            verified: true,
            verifyId: 'akjshdkjhask'
        }

    }

    @Query(returns => [User], { nullable: true, description: `# ? Get all users ` })
    getAllUsers(): any {
        try {
            let a: Object = {}
            return a;
        } catch (error) {
            console.log(error)
        }
    }
    
}