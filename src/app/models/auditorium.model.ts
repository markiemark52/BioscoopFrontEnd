import { Deserializable } from './deserializable.model';

export class Auditorium implements Deserializable {
    id: number;
    name: string;
    description: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}