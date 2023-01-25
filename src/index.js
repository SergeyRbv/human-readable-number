module.exports = function toReadable (number) {

    let upToTen = ['zero', 'one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let upToTwelwe = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let multipleOfTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    return result();
    
    function result() {
        if (number < 100) {
           return lessHundred(number);
        } else if (number % 100 === 0) {
           return hundred(number);
        } else if (number > 100 && number < 1000 && (number % 100 < 100)) {
           return (hundred(number) + ' ' + upToThousend(number));
        }
    }

    function lessHundred(number) {
        if (number < 10) {
            return upToTen[number];
        } else if (number < 20) {
            return upToTwelwe[(number-10)];
        } else if ((number % 10 === 0) && (number < 100)) {
            return multipleOfTen[((number - 20) / 10)];
        } else if (number > 20 && number < 100) {
            return multipleOfTen[Math.floor(number / 10 - 2)] + ' ' + upToTen[(number % 10)];
        }
    }

    function hundred(number) {
        if (99 < number < 1000) {
            return upToTen[Math.floor(number / 100)] + ' hundred';
        }
    }

    function upToThousend(number) {
        if (number % 100 < 10) {
        return upToTen[(number % 100)];
        } else if (number % 100 < 20) {
            return upToTwelwe[((number % 100) - 10)];
        } else if (number % 100 % 10 === 0) {
            return multipleOfTen[(number % 100 / 10 - 2)];
        } else if (number % 100 > 20) {
            return multipleOfTen[Math.floor((number % 100) / 10 - 2)] + ' ' + upToTen[((number % 100) % 10)];
        }
    }
}




