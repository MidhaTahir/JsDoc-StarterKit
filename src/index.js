//@ts-check

const { add, subtract, multiply, divide } = require("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Mids
 * @see <a href="https://github.com/MidhaTahir/JsDoc-StarterKit">JS Doc</a>
 */

/**
 * Student Name
 * @type {string}
 */
// const studentName = 1; //error line
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */

// const grades = [true, 98, 97, 35, 39, 34]; //error

const grades = [98, 97, 35, 39, 34];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */

const todo = {
  id: "1",
  text: "hello",
  //   hey: 'ehe' //error
};

/**
 * Calculate Tax
 * @param {number} amount - Total Amount
 * @param {number} tax    - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 *
 */

/**
 * @type {Student}
 */

const Student = {
  id: 1,
  name: "john",
  age: "20",
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo - Information about person
   */
  constructor(personInfo) {
    /**
     *  @property {string} name - Persons name
     */
    this.name = personInfo.name;
    /**
     *  @property {string} age - Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet - A greeting
   * @returns {string}
   */
  greet() {
    return `hello my name is ${this.name} and I am ${this.age} `;
  }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: "John",
  age: 30,
});

console.log(person1.greet());

console.log(add(20, 12));
