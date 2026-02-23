import { expect, test } from 'vitest';

// ========== ЗАДАНИЕ 1 ==========
interface User {
    id: number;
    name: string;
    email?: string;
    isActive: boolean;
}

function createUser(id: number, name: string, email?: string, isActive: boolean = true): User {
    return { id, name, email, isActive };
}

test('Задание 1: createUser', () => {
    const user = createUser(1, "Иван");
    expect(user.id).toBe(1);
    expect(user.name).toBe("Иван");
    expect(user.isActive).toBe(true);
});

// ========== ЗАДАНИЕ 2 ==========
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

test('Задание 2: createBook', () => {
    const book = createBook({
        title: "Книга",
        author: "Автор",
        genre: "fiction"
    });
    expect(book.title).toBe("Книга");
    expect(book.author).toBe("Автор");
    expect(book.genre).toBe("fiction");
});

// ========== ЗАДАНИЕ 3 ==========
function calculateArea(shape: 'circle', radius: number): number;
function calculateArea(shape: 'square', side: number): number;
function calculateArea(shape: 'circle' | 'square', param: number): number {
    if (shape === 'circle') {
        return Math.PI * param * param;
    } else {
        return param * param;
    }
}

test('Задание 3: calculateArea', () => {
    expect(calculateArea('square', 4)).toBe(16);
    expect(calculateArea('circle', 5)).toBeCloseTo(78.5, 1);
});

// ========== ЗАДАНИЕ 4 ==========
type Status = 'active' | 'inactive' | 'new';

function getStatusColor(status: Status): string {
    switch (status) {
        case 'active': return 'green';
        case 'inactive': return 'gray';
        case 'new': return 'blue';
        default: return '';
    }
}

test('Задание 4: getStatusColor', () => {
    expect(getStatusColor('active')).toBe('green');
    expect(getStatusColor('inactive')).toBe('gray');
    expect(getStatusColor('new')).toBe('blue');
});

// ========== ЗАДАНИЕ 5 ==========
type StringFormatter = (str: string, uppercase?: boolean) => string;

const capitalizeFirst: StringFormatter = (str: string): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const trimAndTransform: StringFormatter = (str: string, uppercase: boolean = false): string => {
    let result = str.trim();
    return uppercase ? result.toUpperCase() : result;
};

test('Задание 5: capitalizeFirst', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
});

test('Задание 5: trimAndTransform', () => {
    expect(trimAndTransform('  hello  ')).toBe('hello');
    expect(trimAndTransform('  hello  ', true)).toBe('HELLO');
});

// ========== ЗАДАНИЕ 6 ==========
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

test('Задание 6: getFirstElement', () => {
    expect(getFirstElement([1, 2, 3])).toBe(1);
    expect(getFirstElement([])).toBeUndefined();
});

// ========== ЗАДАНИЕ 7 ==========
interface HasId {
    id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

test('Задание 7: findById', () => {
    const items = [
        { id: 1, name: 'First' },
        { id: 2, name: 'Second' }
    ];
    expect(findById(items, 2)).toEqual({ id: 2, name: 'Second' });
    expect(findById(items, 99)).toBeUndefined();
});