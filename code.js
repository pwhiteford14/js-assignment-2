/**
 * @Author Whiteford, Parker (pwhiteford02@gmail.com)
 * @version 0.1
 * @summary calculates insurance quote
 *@todo calculate total
 * */
"use strict";
const PROMPT = require('readline-sync');

let yearBorn,age,agePrice,amntAccidents,customerId,total,accidentPrice,payDate;
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
    paymentDate();
    finalStatement();


}

main();

/**
 * @method
 * @desc gets customer first name
 * @returns {null}
 * **/

    function getFirstName() {
   firstName = PROMPT.question(`what is your first name? `);
    }

/**
 * @method
 * @desc gets customer last name
 * @returns {null}
 * **/

    function getLastName() {
        lastName = PROMPT.question(`what is your last name? `);

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
        if (age > 115 || age < 16) {
            console.log(`Oops it looks like you age is invalid. Please try again.`);
            return getAge();
        }


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
    amntAccidents = Number(PROMPT.question(`How many at fault accidents have you had in the past three years? `));
    console.log(amntAccidents);

    if (amntAccidents > 20) {
        console.log(`we're sorry it seems that you have had too many at fault accidents in the past three years. we cannot insure you. `);
        return setAtFaultAccidents();

    }

    if (amntAccidents < 0){
        console.log(`It looks like you have entered an invalid number please try again. `);
        return setAtFaultAccidents();
    }
}


/**
 * @method
 * @desc calculates total  payment
 * @returns {null}
 **/


function calcTotal() {

   const REALLY_OLD_PRICE = 30;
   const OLD_PRICE = 10;
   const YOUNG_PRICE = 20;
   accidentPrice = 50;


    agePrice = 0;

    if (age >=60){
        agePrice = REALLY_OLD_PRICE;
    }
    
    if (age >= 30 && age < 45){
        agePrice = OLD_PRICE;
    }
    
    if (age > 15 && age < 30){
        agePrice = YOUNG_PRICE
    }

    total = accidentPrice * amntAccidents + agePrice;


}
/**
 * @method
 * @desc gets date of first payment
 * @returns {null}
 **/

function paymentDate(){
    payDate = PROMPT.question(`what date would you wish to make your first payment? (MM/DD/YY):`)
}

/**
 * @method
 * @desc states payment and when payment is due
 * @returns {null}
 **/


function finalStatement() {
    console.log(`Congratulations ${firstName} ${lastName} your first car insurance bill will be due on ${payDate} for $${total}.`)
}

