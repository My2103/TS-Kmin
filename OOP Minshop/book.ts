// book.ts

export class Book {
    private static _count: number = 0;

    private _id: number;
    private _name: string;
    private _price: number;
    private _publisher: string;

    constructor(name: string, price: number, publisher: string) {
        Book._count++;
        this._id = Book._count;
        this._name = name;
        this._price = price;
        this._publisher = publisher;
    }

    public get id() {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price() {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get publisher() {
        return this._publisher;
    }

    public set publisher(value: string) {
        this._publisher = value;
    }

    public static get count() {
        return Book._count;
    }
}

