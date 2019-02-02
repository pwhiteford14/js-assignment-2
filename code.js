/**
 * @Author Whiteford, Parker (pwhiteford02@gmail.com)
 * @version 0.1
 * @summary calculates insurance quote
 *@todo calculate total
 * */
"use strict";
const PROMPT = require('readline-sync');

let yearBorn,age,amntAccidents,customerId,total;
let firstName,lastName;

/**
 * @method
 * @desc The dispatch method for our progress
 * @returns {null}
 */

function main() {
    getFirstName();
    getLastName();
    getAge();
    setCustomerId();
    setAtFaultAccidents();
    calcTotal();


}

main();

/**
 * @method
 * @desc gets customer first name
 * @returns {null}
 * **/

    function getFirstName() {
   firstName = PROMPT.question(`what is your fist name`);
        console.log(firstName);
    }

/**
 * @method
 * @desc gets customer last name
 * @returns {null}
 * **/

    function getLastName() {
        lastName = PROMPT.question(`what is your last name`);
        console.log(lastName)

    }

    /**
     * @method
     * @desc gets customer age
     * @returns {null}
     * **/

    function getAge() {
        const THIS_YEAR = 2019;
        yearBorn = Number(PROMPT.question(`What year where you born? `));
        age = THIS_YEAR - yearBorn;
        if (age > 115 || age < 18) {
            console.log(`Oops it looks like you age is invalid. Please try again.`);
            return getAge();
        }
        console.log(age);


    }
/**
 * @method
 * @desc set customer ID 1-100
 * @returns {null}
 **/

function setCustomerId() {
        customerId = Math.floor(Math.random() * 100 + 1);
        console.log(`your Customer id is ${customerId}!`)

    }


/**
 * @method
 * @desc asks for amount of at fault accidents in the past 3 years
 * @returns {null}
 **/

function setAtFaultAccidents() {
    amntAccidents = Number(PROMPT.question(`How many at fault accidents have you had in the past three years?`));
    console.log(amntAccidents);

    if (amntAccidents > 20) {
        console.log(`we're sorry it seems that you have had too many at fault accidents in the past three years. we cannot insure you `);
        return setAtFaultAccidents();

    }

    if (amntAccidents < 0{
        console.log(`It looks like you have entered an invalid number please try again `);
        return setAtFaultAccidents();
    }
}


function calcTotal() {
    let YOUNG_PRICE,OLD_PRICE,REALLY_OLD_PRICE;
   const REALLY_OLD_PRICE = 30;
   const OLD_PRICE = 10;
   const YOUNG_PRICE = 20;

    total = 0;
    if (age > 59){
        total = total + REALLY_OLD_PRICE;
    }
    
    if (age <) 
    
    if (age <= 30){
        total = total + YOUNG_PRICE
    }

}


