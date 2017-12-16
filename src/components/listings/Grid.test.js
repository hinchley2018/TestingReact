//each file is a test suite
import data from '../../data/courses.json';

//numbers
const numItems = data.length;
test('Number of items == 12', () => {
    expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

//Strings
const dataTest = data[0].title;//grab 1st obj's title
test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
});

test('The title contains React', () => {
    expect(dataTest).toContain('React');
});

//Arrays
const passedArray = ["React Native", "MeteorJS", "React"];
const myArray = ["React Native", "MeteorJS"];
test('The list of courses includes React native and MeteorJS', () => {
    expect(passedArray).toEqual(expect.arrayContaining(myArray));
});

//Objects
const firstCourse = data[0];
test('The first course to have a property of title', () => {
    expect(firstCourse).toHaveProperty("title");
});

test('The first course to have a property of title', () => {
    expect(firstCourse).toHaveProperty("views",'31,266');
});