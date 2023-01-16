export class User {
    id: string;
    name: string;
    surname: string;
    age: number;
    address: string;
    status: string;

    constructor(id: string, name: string, surname: string, age: number, address: string, status: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = address;
        this.status = status;
    }

    toString(): string {
        return `${this.name} ${this.surname}, ${this.age}, ${this.address}, ${this.status}`;
    }
}