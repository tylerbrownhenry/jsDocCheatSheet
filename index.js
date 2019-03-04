/**
 * @file Creates various greetings
 * @author Tyler Henry
 */

/**
 * A friendly howdy-do
 * @readonly
 * @const {string}
 */
const greeting = 'Hello';

/**
 * Greeting settings
 * @namespace
 */
var gettings = {
    /**
     * Standard greeting ending.
     */
    staticEnding: '!',
    /**
     * Second greeting ending.
     */
    secondEnding: 'again!',
    /**
     * A la mode.
     * @readonly
     */
    get greet() {
        return greeting;
    },
    // ending: function* greet() {
    //     yield this.staticEnding;
    //     return this.secondEnding;
    // }
};

 /**
 * @function hello
 * @description Greet a person by their first and last names passed as strings, first and last name are required, but middle name is optional
 * @summary Returns a greeting with a name
 * @param {string} firstName - First name of person you want to say hello to.
 * @param {string} [middleName] - Middle name of person you want to say hello to.
 * @param {string} lastName - Last name of person you want to say hello to.
 * @example <caption>Example usage of Hello</caption>
 * // returns "Hello Tyler Brown Henry!"
 * hello('Tyler', 'Brown', 'Henry')
 * // returns "Hello Tyler Henry!"
 * hello('Tyler', null, 'Henry')
 * @returns {string} 'Hello' + firstName + ' ' + middleName + ' ' + lastName + '!' 
 *  
 */
const hello = function helloGreeting(firstName, middleName, lastName) {
    middleName = middleName ? ` ${middleName} `  : ' ';
    return `${greetings.greet} ${firstName}${middleName}${lastName}${greetings.staticEnding}`;
}

/**
 * @function helloObject
 * @description Greet a person by their first and last names, passed as parameters on an object
 *
 * @param {Object} person - person you want to say hello to.
 * @param {string} person.firstName - firstName of person
 * @param {string} [person.middleName] - middleName of person
 * @param {string} person.lastName - lastName of person
 * @example <caption>Example usage of HelloObject</caption>
 * // returns "Hello Tyler Henry!"
 * helloObject({firstName: 'Tyler', lastName: 'Henry')
 *  * // returns "Hello Tyler Brown Henry!"
 * helloObject({firstName: 'Tyler', middleName: 'Brown', lastName: 'Henry')
 * @returns {string} 'Hello' + firstName + lastName + '!' 
 *  
 */
const helloObject = function helloGreetingWithObject(person) {
    return hello(person.firstName, person.middleName, person.lastName);
}

/**
 * @function helloArray
 * @description Greet a list of people by their first and last names, passed as array of objects
 * @param {Object[]} people - people you want to say hello to.
 * @param {string} people[].firstName - firstName of person
 * @param {string} [people[].middleName] - middleName of person
 * @param {string} people[].lastName - lastName of person
 * @example <caption>Example usage of HelloArray</caption>
 * // returns ["Hello Tyler Henry!", "Hello Taylor Hendry!"]
 * helloArray([{firstName: 'Tyler', lastName: 'Henry'])
 * // returns ["Hello Tyler Brown Henry!", "Hello Taylor Hendry!"]
 * helloArray([{firstName: 'Tyler', middleName: 'Brown', lastName: 'Henry'],{firstName: 'Taylor', lastName: 'Hendry'})
 * @returns {Object[]} ['Hello' + firstName + lastName + '!']
 *  
 */
const helloArray = function helloGreetingWithArray(people) {
    return people.reduce((memo, person) => {
        memo.push(helloObject(person))
        return memo;
    },[]);
}

/**
 * Receives parameters and executes hello as callback
 * @param {string} firstName - firstName of person you want to say hello to.
 * @param {string} [middleName] - middleName of person you want to say hello to.
 * @param {string} lastName - lastName of person you want to say hello to.
 * @param {hello} cb - The callback that handles the response.
 * @example <caption>Example usage of helloCallback</caption>
 * // returns ["Hello Tyler Henry!"]
 * helloCallback({firstName: 'Tyler', lastName: 'Henry'], hello)
 * // returns ["Hello Tyler Brown Henry!"]
 * helloCallback({firstName: 'Tyler', middleName: 'Brown', lastName: 'Henry'], hello)
 * @returns {string} 'Hello' + firstName + middleName + lastName + '!'
 */
const helloCallback = function helloGreetingWithCallback(firstName, middleName, lastName, cb) {
    return cb(firstName, middleName, lastName)
};





//  First name of person you want to say hello to.
//  @typedef {(string)} firstName

