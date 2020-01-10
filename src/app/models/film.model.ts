import { Deserializable } from './deserializable.model';

export class Film implements Deserializable {
    id: number;
    name: string;
    email: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}