import { UserModel } from "../../models/User/Users";
import { hashSync } from 'bcryptjs';

export class User {
    
    public async createUser(input: {
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: Date,
        password: string,
        imageUrl: string
    }) {
        const { username, firstName, lastName, email, dateOfBirth, password, imageUrl } = input;

        const user = new UserModel();
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email
        user.dateOfBirth = dateOfBirth;
        user.setPassword = hashSync(password, 12);  // ! Add to process.env.{ salt for hash }
        user.imageUrl = imageUrl;
        await user.save();
    }

    public async findUserById(id: string) {
        await UserModel.findByPk(id);
    }

    public async updateUser(id: string , input: {
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: Date,
        password: string,
        imageUrl: string
    }) {
        const { username, firstName, lastName, email, dateOfBirth, password, imageUrl } = input;

        await UserModel.update({
            username,
            firstName,
            lastName,
            email,
            dateOfBirth,
            imageUrl
        }, { where: { id } })
    }

}
