import { Deserializable } from './deserializable.model';

export class NewFilm implements Deserializable {
    title: string;
    description: string;
    email: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}