import { Resolver, Field, Args, Mutation, Arg, Ctx, Query } from 'type-graphql';
import User from './Types/user.type';
import AddUserDataInput from './Types/user.input';
import { Context } from 'vm';


@Resolver(of => User)
export default class {

    @Mutation({ description: `# ? Registration ` })
    registerUser(@Arg("UserInput", { nullable: false }) UserInput: AddUserDataInput, @Ctx() ctx: Context ): User {
                

        return {
            id: 'asdasd',
            username: 'Ziks',
            name: 'stefan',
            lastName: 'zivic',
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