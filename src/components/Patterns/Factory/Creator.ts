import { User } from "../../../models/User";
import { Md5 } from "ts-md5";

export abstract class Creator {
    abstract createUser(): User;
}

export class DefaultUserCreator extends Creator {
    createUser() {
        let id = Md5.hashStr(new Date().toString());
        return new User(id, "John", "Doe", 30, "address", "enabled");
    }
}