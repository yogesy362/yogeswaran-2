const fs = require("fs");

const css = fs.readFileSync("styles.css", "utf8");

describe("CSS Assignment", () => {

test("Universal selector exists", () => {
    expect(css).toMatch(/\*/);
});

test("html selector exists", () => {
    expect(css).toMatch(/html\s*\{/);
});

test("body selector exists", () => {
    expect(css).toMatch(/body\s*\{/);
});

test("main selector exists", () => {
    expect(css).toMatch(/main\s*\{/);
});

test("h1 selector exists", () => {
    expect(css).toMatch(/h1\s*\{/);
});

test("h2 selector exists", () => {
    expect(css).toMatch(/h2\s*\{/);
});

test("h3 selector exists", () => {
    expect(css).toMatch(/h3\s*\{/);
});

test("img selector exists", () => {
    expect(css).toMatch(/img\s*\{/);
});

test("p selector exists", () => {
    expect(css).toMatch(/p\s*\{/);
});

test("blockquote selector exists", () => {
    expect(css).toMatch(/blockquote\s*\{/);
});

test("cite selector exists", () => {
    expect(css).toMatch(/cite\s*\{/);
});

test("ul selector exists", () => {
    expect(css).toMatch(/ul\s*\{/);
});

test("li selector exists", () => {
    expect(css).toMatch(/li\s*\{/);
});

test(".cite class exists", () => {
    expect(css).toMatch(/\.cite\s*\{/);
});

test("footer selector exists", () => {
    expect(css).toMatch(/footer\s*\{/);
});

test("footer p selector exists", () => {
    expect(css).toMatch(/footer\s+p\s*\{/);
});

});