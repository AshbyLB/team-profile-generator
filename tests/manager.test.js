const Manager = require('../lib/manager');

it('Set office number', () => {
    const testValue = '2468';
    const e = new Manager("Ashby",4, "me@me.com", testValue);
    expect(e.officeNum).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Ashby", 12, 'me@me.com', '2468');
    expect(e.getRole()).toBe(testValue);
});

test("get office number from officeNum()", () => {
    const testValue = "2468";
    const e = new Manager("Ashby", 12, 'me@me.com', testValue);
    expect(e.getOfficeNum()).toBe(testValue);
});