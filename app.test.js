function sum(a, b) {
    return a+b;
}

test('Jest works', () => {
    expect(sum(1, 2)).toEqual(3);
});

// App starts a server
// App can connect to a database
// App can access environment variables