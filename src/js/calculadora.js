let Calculadora = {
    adicionar: (num1, num2) => {

        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        return num1 + num2

    },
    subtrair: (num1, num2) => {
        
        if(isNaN(num1) || isNaN(num2)) {
            return 0
        }

        return num1 - num2
        
    },
    dividir: (num1m, num2) => {
        return 0
    },
    multiplica: (num1, num2) => {
        return 0
    },
}

// usado na func 'require' do NodeJs
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora
}