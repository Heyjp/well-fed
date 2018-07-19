function sum(a, b) {
    return a+b;
}

test('Jest works', () => {
    expect(sum(1, 2)).toEqual(3);
});