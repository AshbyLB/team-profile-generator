const Intern = require('../lib/intern');

it('Set school', () => {
    const testValue = 'Winthrop';
    const e = new Intern("Ashby",4, "me@me.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Ashby", 12, 'me@me.com', 'Winthrop');
    expect(e.getRole()).toBe(testValue);
});

test("get school from schoolStats()", () => {
    const testValue = "Winthrop";
    const e = new Intern("Ashby", 12, 'me@me.com', testValue);
    expect(e.getschoolStats()).toBe(testValue);
});