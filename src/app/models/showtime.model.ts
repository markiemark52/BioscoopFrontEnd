import { Deserializable } from './deserializable.model';

export class Showtime implements Deserializable {
    film: string;
    auditorium: string;
    datetime: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}