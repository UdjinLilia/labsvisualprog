// ========== Задание 1 ==========
interface User {
    id: number;
    name: string;
    email?: string;
    isActive: boolean;
}

function createUser(id: number, name: string, email?: string, isActive: boolean = true): User {
    return {
        id,
        name,
        email,
        isActive
    };
}

const user1 = createUser(1, "Иван Петров");
const user2 = createUser(2, "Мария Сидорова", "maria@example.com", false);
console.log("Задание 1:");
console.log(user1);
console.log(user2);

// ========== Задание 2 ==========
type Genre = 'fiction' | 'non-fiction';

interface Book {
    title: string;
    author: string;
    year?: number;
    genre: Genre;
}

function createBook(book: Book): Book {
    return book;
}

const book1 = createBook({
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "fiction"
});

const book2 = createBook({
    title: "Краткая история времени",
    author: "Стивен Хокинг",
    genre: "non-fiction"
});

console.log("\nЗадание 2:");
console.log(book1);
console.log(book2);

// ========== Задание 3 ==========
function calculateArea(shape: 'circle', radius: number): number;
function calculateArea(shape: 'square', side: number): number;
function calculateArea(shape: 'circle' | 'square', param: number): number {
    if (shape === 'circle') {
        return Math.PI * param * param;
    } else {
        return param * param;
    }
}

console.log("\nЗадание 3:");
console.log(`Площадь круга с радиусом 5: ${calculateArea('circle', 5)}`);
console.log(`Площадь квадрата со стороной 4: ${calculateArea('square', 4)}`);

// ========== Задание 4 ==========
type Status = 'active' | 'inactive' | 'new';

function getStatusColor(status: Status): string {
    switch (status) {
        case 'active':
            return 'green';
        case 'inactive':
            return 'gray';
        case 'new':
            return 'blue';
        default:
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}

console.log("\nЗадание 4:");
console.log(`Цвет для 'active': ${getStatusColor('active')}`);
console.log(`Цвет для 'inactive': ${getStatusColor('inactive')}`);
console.log(`Цвет для 'new': ${getStatusColor('new')}`);

// ========== Задание 5 ==========
type StringFormatter = (str: string, uppercase?: boolean) => string;

const capitalizeFirst: StringFormatter = (str: string, uppercase: boolean = false): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const trimAndTransform: StringFormatter = (str: string, uppercase: boolean = false): string => {
    let result = str.trim();
    if (uppercase) {
        result = result.toUpperCase();
    }
    return result;
};

console.log("\nЗадание 5:");
console.log(`capitalizeFirst("hello world"): ${capitalizeFirst("hello world")}`);
console.log(`trimAndTransform("  hello world  "): ${trimAndTransform("  hello world  ")}`);
console.log(`trimAndTransform("  hello world  ", true): ${trimAndTransform("  hello world  ", true)}`);

// ========== Задание 6 ==========
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log("\nЗадание 6:");
const numberArray = [10, 20, 30, 40];
const stringArray = ["яблоко", "банан", "апельсин"];
const emptyArray: number[] = [];

console.log(`Первый элемент numberArray: ${getFirstElement(numberArray)}`);
console.log(`Первый элемент stringArray: ${getFirstElement(stringArray)}`);
console.log(`Первый элемент emptyArray: ${getFirstElement(emptyArray)}`);

// ========== Задание 7 ==========
interface HasId {
    id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

console.log("\nЗадание 7:");

interface Product extends HasId {
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Ноутбук", price: 75000 },
    { id: 2, name: "Мышь", price: 1500 },
    { id: 3, name: "Клавиатура", price: 3500 }
];

interface Person extends HasId {
    name: string;
    age: number;
}

const people: Person[] = [
    { id: 101, name: "Анна", age: 25 },
    { id: 102, name: "Петр", age: 30 },
    { id: 103, name: "Елена", age: 28 }
];

const foundProduct = findById(products, 2);
const foundPerson = findById(people, 103);
const notFound = findById(products, 99);

console.log("Поиск продукта с id=2:", foundProduct);
console.log("Поиск человека с id=103:", foundPerson);
console.log("Поиск продукта с id=99:", notFound);