import { Deserializable } from './deserializable.model';

export class NewFilm implements Deserializable {
    name: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}