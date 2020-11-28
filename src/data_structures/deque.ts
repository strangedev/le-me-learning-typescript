export class Deque<T> {
    private items: T[];

    constructor(...items: T[]) {
        this.items = items;
    }

    get length(): number {
        return this.items.length;
    }

    pushFront(item: T) {
        this.items = [item, ...this.items];
    }

    pushBack(item: T) {
        this.items = [...this.items, item];
    }

    popFront(): T {
        if (this.items.length < 1) {
            throw "No more items in the deque";
        }
        const poppedItem = this.items[0];
        this.items = this.items.slice(1, this.length);
        return poppedItem;
    }

    popBack(): T {
        if (this.items.length < 1) {
            throw "No more items in the deque";
        }
        const poppedItem = this.items[this.length - 1];
        this.items = this.items.slice(0, this.length - 1)
        return poppedItem;
    }

    get asArray(): T[] {
        return [...this.items];
    }

    copy(): Deque<T> {
        return new Deque<T>(...this.items);
    }

    shuffle() {
        let shuffledItems = [];
        const numberOfDraws = this.length;
        for (let i = 0; i < numberOfDraws; i++) {
            const drawIndex = Math.floor(Math.random() * this.length);
            shuffledItems.push(this.items[drawIndex]);
            this.items = [...this.items.slice(0, drawIndex), ...this.items.slice(drawIndex + 1, this.length)];
        }
        this.items = shuffledItems;
    }
}