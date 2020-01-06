import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { User, AddUserDataInput } from './Types/index';
import { Context } from 'vm';
// import { UserModel } from '../../models/User/Users';


@Resolver(of => User)
export default class {

    @Mutation({ description: `# ? Registration ` })
    public registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): User {
           
        // const user = new UserModel({
        //     username: 'Ziks',
        //     name: 'stefan',
        //     lname: 'zivic',
        //     email: 'test@test.com',
        //     password: 'stefan1997',
        //     dateOfBirth: new Date()
        // })

        // await user.save()

        // return user

        return {
            id: 'asdasd',
            username: 'Ziks',
            name: 'stefan',
            lname: 'zivic',
            email: 'test@test.com',
            password: 'stefan1997',
            dateOfBirth: new Date()
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