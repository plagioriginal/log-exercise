class Sequence {
    constructor(initialNumber, finalNumber) {
        this.initialNumber  = initialNumber;
        this.finalNumber    = finalNumber;
        this.ruleOne        = false;
        this.ruleTwo        = false;
        this.ruleThree      = false;
        this.ruleFive       = false;
        this.result         = '';
    }

    start() {
        if(this.initialNumber <= this.finalNumber) {
            this.checkConditions(this.initialNumber);
            var iterationResult = this.initialNumber + ', ';
            if(this.ruleOne) {
                iterationResult = this.setRepresentationForRuleOneOrTwo('fizz');
            }
            if(this.ruleTwo) {
                iterationResult = this.setRepresentationForRuleOneOrTwo('buzz');
            }
            if(this.ruleThree) {
                iterationResult = 'lucky, ';
            }
            this.result += iterationResult;
            this.initialNumber++;
            return this.start();
        } else {
            return this.result;
        }
    }

    checkConditions(number) {
        this.ruleOne    = number % 3 === 0 || number % 10 === 3;
        this.ruleTwo    = number % 5 === 0 || number % 10 === 5;
        this.ruleThree  = number % 3 === 0 && number % 5 === 0;
        this.ruleFive   = this.checkRuleFive(number);
    }

    checkRuleFive(number) {
        return  (number % 5 === 0 && number % 10 === 5) ||
                (number % 3 === 0 && number % 10 === 3);
    }

    setRepresentationForRuleOneOrTwo(pattern) {
        var representation = pattern + ', ';
        if(this.ruleFive) {
            representation = pattern + ' ' + pattern + ', ';
        }
        return representation;
    }
}

function startSequence() {
    var initialNumber = document.querySelector('#initial-number').value;
    var finalNumber = document.querySelector('#final-number').value;
    var resultDiv = document.querySelector('#result');
    var resultText = document.createElement('p');
    resultDiv.innerHTML = "";
    if(initialNumber && finalNumber) {
        resultText.append(new Sequence(initialNumber, finalNumber).start());
    } else {
        resultText.append('Insira apenas números');
    }
    resultDiv.append(resultText);
}

document.querySelector('button').addEventListener('click', startSequence);

