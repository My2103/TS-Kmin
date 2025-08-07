import { question } from "readline-sync";

// Định nghĩa kiểu dữ liệu cho đối tượng Person
type Person = {
    name: string;
    age: number;
    email: string;
};

// Khai báo một mảng chứa các đối tượng Person
let people: Person[] = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 28, email: 'charlie@example.com' }
];

function demo01() {
    // Truy cập và sử dụng thông tin từ mảng đối tượng
    console.log(people[0].name); // Output: Alice
    console.log(people[1].age); // Output: 30
    console.log(people[2].email); // Output: charlie@example.com
}


function printPeopleData(people: Person[]): void {
    console.log("Dữ liệu của mảng people:");
    for (let i = 0; i < people.length; i++) {
        console.log(`Người thứ ${i + 1}:`);
        console.log(`Tên: ${people[i].name}`);
        console.log(`Tuổi: ${people[i].age}`);
        console.log(`Email: ${people[i].email}`);
        console.log("-------------------------");
    }
}

function demo02() {
    // Sử dụng hàm để in dữ liệu từ mảng people
    printPeopleData(people);
}

function demo03() {
    console.table(people);
}

function countPeopleOver27(people: Person[]): number {
    let countOver27: number = 0;

    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 27) {
            countOver27++;
        }
    }

    return countOver27;
}

function demo04() {
    // Sử dụng hàm để đếm số người trên 27 tuổi trong mảng people
    const countOver27: number = countPeopleOver27(people);
    console.log(`Số người trên 27 tuổi trong mảng là: ${countOver27}`);
}

function filterPeopleOver27(people: Person[]): Person[] {
    const peopleOver27: Person[] = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 27) {
            peopleOver27.push(people[i]);
        }
    }

    return peopleOver27;
}

function demo05() {
    /// Sử dụng hàm để lọc ra những người trên 27 tuổi trong mảng people
    const peopleOver27: Person[] = filterPeopleOver27(people);
    console.log("Những người trên 27 tuổi:");
    console.log(peopleOver27);
}

function inputPeopleData(): Person[] {
    let people: Person[] = [];

    const numberOfPeople: number = Number(question("Nhập số người muốn thêm vào danh sách:"));

    for (let i = 0; i < numberOfPeople; i++) {
        const name: string = question(`Nhập tên của người thứ ${i + 1}:`);
        const age: number = Number(question(`Nhập tuổi của người thứ ${i + 1}:`));
        const email: string = question(`Nhập email của người thứ ${i + 1}:`);

        // const person: Person = { name, age, email };
        let person: Person = {name: name, age: age, email: email};
        people.push(person);
    }

    return people;
}

function demo06() {
    // Sử dụng hàm để nhập dữ liệu
    const peopleData: Person[] = inputPeopleData();
    console.table(peopleData);
}

