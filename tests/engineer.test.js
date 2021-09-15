const Engineer = require('../lib/engineer');

it('Set gitHub', () => {
    const testValue = 'AshbyLB';
    const e = new Engineer("Ashby",4, "me@me.com", testValue);
    expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Ashby", 12, 'me@me.com', 'AshbyLB');
    expect(e.getRole()).toBe(testValue);
});

test("get username from gitHub()", () => {
    const testValue = "AshbyLB";
    const e = new Engineer("Ashby", 12, 'me@me.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});