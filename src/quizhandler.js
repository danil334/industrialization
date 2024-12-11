export const choices = {
    "s1": "A: Agricultural Innovation<br>B: Industrialization<br>C: Raw Materials<br>D: Joint stock",
    "s2": "A: The process of intellectual growth<br>B: The process of farming<br>C: Building of factories<br>D: I don\'t know",
    "s3": "A: To drive cars<br>B: To power trains<br>C:To power brains<br>D: To farm",
    "s4": "A: Eating<br>B: To build cars<br>C:I don't know<br>D: To power trains",
    "s5": "",
    "s6": "",
    "s7": "",
    "s8": "A: Farms<br>B: IDK<br>C: Islands<br>D: Factories",
    "s9": "",
    "s10": "",
    "s11": "",
    "s12": "",
    "s13": "",
    "s14": "",
    "s15": "",
    "s16": "",
    "s17": "",
    "s18": "",
    "s19": "",
    "s20": ""
}

export const questions = {
    "q1": {
        question: `crop rotation, selective breeding of animals, lighter plows, higher-yielding seeds<br>${choices.s1}`,
        answer: 'a'
    },
    "q2": {
        question: `What constitutes industrialization?<br>${choices.s2}`,
        answer: 'c'
    },
    "q3": {
        question: `What was steam power used for?<br>${choices.s3}`,
        answer: 'b'
    },
    "q4": {
        question: `What was coal used for?<br>${choices.s4}`,
        answer: 'd'
    },
    "q5": {
        question: `What is steel?<br>${choices.s5}`,
        answer: 'b'
    },
    "q6": {
        question: `An example of a raw material is...<br>${choices.s6}`,
        answer: 'a'
    },
    "q7": {
        question: `Railroads were used for...<br>${choices.s7}`,
        answer: 'b'
    },
    "q8": {
        question: `Where did many people work during the industrial revolution?<br>${choices.s8}`,
        answer: 'd'
    },
    "q9": {
        question: `Joint stock includes...?<br>${choices.s9}`,
        answer: 'd'
    },
    "q10": {
        question: `A capitalist belief would be...?<br>${choices.s10}`,
        answer: 'c'
    },
    "q11": {
        question: `What did women do during the industrial revolution?<br>${choices.s11}`,
        answer: 'c'
    },
    "q12": {
        question: `What did children do during the industrial revolution?<br>${choices.s12}`,
        answer: 'a'
    },
    "q13": {
        question: `An example of a middle-class job would be...?<br>${choices.s13}`,
        answer: 'c'
    },
    "q14": {
        question: `What was the working class?<br>${choices.s14}`,
        answer: 'b'
    },
    "q15": {
        question: `Did education become more accessible?<br>${choices.s15}`,
        answer: 'd'
    },
    "q16": {
        question: `Marxist beliefs include?<br>${choices.s16}`,
        answer: 'd'
    },
    "q17": {
        question: `What is socialism?<br>${choices.s17}`,
        answer: 'a'
    },
    "q18": {
        question: `Did urbanization occur during industrial revolution?<br>${choices.s18}`,
        answer: 'b'
    },
    "q19": {
        question: `Did the colonies benefit Britain during the industrial revolution?<br>${choices.s19}`,
        answer: 'c'
    },
    "q20": {
        question: `Did leisure time increase for the middle and upper classes?<br>${choices.s20}`,
        answer: 'd'
    }
}

export function submitA(selection, number) {
    switch (number) {
        case 1:
            if (selection == questions.q1.answer) {
                return true;
            }
            break;
        case 2:
            if (selection == questions.q2.answer) {
                return true;
            }
            break;
        case 3:
            if (selection == questions.q3.answer) {
                return true;
            }
            break;
        case 4:
            if (selection == questions.q4.answer) {
                return true;
            }
            break;
        case 5:
            if (selection == questions.q5.answer) {
                return true;
            }
            break;
        case 6:
            if (selection == questions.q6.answer) {
                return true;
            }
            break;
        case 7:
            if (selection == questions.q7.answer) {
                return true;
            }
            break;
        case 8:
            if (selection == questions.q8.answer) {
                return true;
            }
            break;
        case 9:
            if (selection == questions.q9.answer) {
                return true;
            }
            break;
        case 10:
            if (selection == questions.q10.answer) {
                return true;
            }
            break;
        case 11:
            if (selection == questions.q11.answer) {
                return true;
            }
            break;
        case 12:
            if (selection == questions.q12.answer) {
                return true;
            }
            break;
        case 13:
            if (selection == questions.q13.answer) {
                return true;
            }
            break;
        case 14:
            if (selection == questions.q14.answer) {
                return true;
            }
            break;
        case 15:
            if (selection == questions.q15.answer) {
                return true;
            }
            break;
        case 16:
            if (selection == questions.q16.answer) {
                return true;
            }
            break;
        case 17:
            if (selection == questions.q17.answer) {
                return true;
            }
            break;
        case 18:
            if (selection == questions.q18.answer) {
                return true;
            }
            break;
        case 19:
            if (selection == questions.q19.answer) {
                return true;
            }
            break;
        case 20:
            if (selection == questions.q20.answer) {
                return true;
            }
            break;
        default:
            break;
    }
    return false;
}


export function putQ(number) {
    switch (number) {
        case 1:
            document.getElementById("questionPlace").innerHTML = questions.q1.question;
            break;
        case 2:
            document.getElementById("questionPlace").innerHTML = questions.q2.question;
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        default:
            break;
    }
}