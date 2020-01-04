import { Resolver, Mutation, Query, Arg, Ctx } from 'type-graphql';
// import { UserType } from './Types/index';
import User from './Types/User.ObjectType';
import { SingUpData } from './Types/SingUpData.InputType';
import {IUser} from '../interface/User.interface';

import { plainToClass } from 'class-transformer';
import { Context } from 'vm';

@Resolver(of => User)
export default class {


    @Mutation()
    addUser(@Arg("UserInput", { nullable: false }) UserInput: SingUpData, @Ctx() ctx: Context ): User {
    // addUser(@Arg('SingUpDataInput') SingUpDataInput: SingUpData): User | any {
        return {
            id: 'sdadasdsa',
            username: 'adsdjkhsa',
            firstName: 'stefan',
            lastName: 'zoviasid',
            email: 'test@test.com',
            dateOfBirth: new Date(),
            password: 'stkjlajsdkasjdl',
            deactivated: true,
            driveFolderId: 'adkjhksjhdjaskhj',
            imageUrl: 'jsadjsakdhkjasd',
            resetToken: 'asdkhkjhajdsksa',
            resetTokenExpiration: new Date(),
            verified: true,
            verifyId: 'sakjdkksahdashjhdkj'
        }

    }
}