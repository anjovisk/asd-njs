module.exports = {
    sum : (number1, number2) => {return parseInt(number1) + parseInt(number2)},
	subtract : (number1, number2) => {return parseInt(number1) - parseInt(number2)},
	multiply : (number1, number2) => {return parseInt(number1) * parseInt(number2)},
	divide : (number1, number2) => {
        if (number2 == 0) throw Error('Não é possível dividir por zero');
        return parseInt(number1) / parseInt(number2)
    }
}