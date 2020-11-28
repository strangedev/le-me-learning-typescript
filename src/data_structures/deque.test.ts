import { Deque } from "./deque"

test("creating a new empty deque", () => {
    const deque = new Deque<number>();
    expect(deque.length).toEqual(0);
});

test("creating a new deque with some numbers", () => {
    const deque = new Deque<number>(1, 2, 3, 4);
    expect(deque.length).toEqual(4);
    expect(deque.asArray).toEqual([1, 2, 3, 4]);
});

test("Popping the first item from the front of the deque", () => {
    const deque = new Deque<string>("a", "jolly", "bearded", "gnome");
    const front = deque.popFront();
    expect(deque.length).toEqual(3);
    expect(deque.asArray).toEqual(["jolly", "bearded", "gnome"]);
    expect(front).toEqual("a");
});

test("Popping the last item from the back of the deque", () => {
    const deque = new Deque<string>("a", "jolly", "bearded", "gnome");
    const back = deque.popBack();
    expect(deque.length).toEqual(3);
    expect(deque.asArray).toEqual(["a", "jolly", "bearded"]);
    expect(back).toEqual("gnome");
});

test("Pushing an item to the front of the deque", () => {
    const deque = new Deque<number>(1337);
    const newFront = 42;
    deque.pushFront(42);
    expect(deque.length).toEqual(2);
    expect(deque.asArray).toEqual([newFront, 1337]);
});

test("Pushing an item to the back of the deque", () => {
    const deque = new Deque<number>(1337);
    const newBack = 42;
    deque.pushBack(42);
    expect(deque.length).toEqual(2);
    expect(deque.asArray).toEqual([1337, newBack]);
});

test("All push and pop operations combined", () => {
    const deque = new Deque<number>(1337);
    deque.pushBack(42);
    deque.pushFront(69);
    expect(deque.asArray).toEqual([69, 1337, 42]);
    deque.popBack();
    deque.pushFront(420);
    expect(deque.asArray).toEqual([420, 69, 1337]);
    deque.popFront();
    deque.pushBack(621);
    expect(deque.asArray).toEqual([69, 1337, 621]);
    deque.popBack();
    deque.popFront();
    expect(deque.length).toEqual(1);
});

test("Popping from an empty deque throws an error", () => {
    const deque = new Deque<number>();
    expect(() => deque.popBack()).toThrow();
    expect(() => deque.popFront()).toThrow();
});

test("Shuffling a deque yields a shuffled deque", () => {
    const sortedSequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const deque = new Deque<number>(...sortedSequence);
    deque.shuffle();
    expect(deque.asArray).not.toEqual(sortedSequence);
    expect(deque.length).toEqual(sortedSequence.length);
});