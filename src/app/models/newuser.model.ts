import { Deserializable } from './deserializable.model';

export class NewUser implements Deserializable {
    email: string;
    password: string;
    passwordConfirm: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}