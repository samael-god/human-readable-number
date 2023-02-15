module.exports =
    function toReadable (number) {
        const CONFIG = {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        }; // define an object with to compare

        // check if 0 is given
        if (number === 0) {
            return 'zero';
        }
        // check number is already defined in CONFIG
        if (number in CONFIG) {
            return CONFIG[number];
        }
        let text = '';
        // check if number > 100
        if (number >= 100) {
            text = text + toReadable(Math.floor(number / 100)) + ' hundred'; // display hundreds
            number = number % 100; // get rid of hundreds (for further calculations)
        }
        // if number is not just hundreds (idk 100, 200, 300...)
        if (number > 0) {
            // another check if number is already defined in CONFIG
            if (number < 20) {
                text += ' ' + CONFIG[number];
            }
            // if not - display tens
            else {
                text += ' ' + CONFIG[Math.floor(number / 10) * 10]; // get rid of digits to display tens
                // if number is not just tens (idk 10, 20, 30...)
                if (number % 10 > 0) {
                    text += " " + CONFIG[number % 10]; //display digits
                }
            }
        }
        // don't forget to get rid of empty spaces
        return text.trim();
    }

