import { Deserializable } from './deserializable.model';

export class Film implements Deserializable {
    id: number;
    title: string;
    description: string;
    email: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}