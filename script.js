// criado a classe da calculadora

class calculator{
    constructor(){
        //aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";

    }
    //este método adiciona os valores à propriedade displayValue
    //permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value){
        this.displayValue += value;
        //chamamos o método updateDisplay dentro do método appendToDisplay para que quando o usuário digitar alguma
        //tecla da calculadora o valor que armazenado na propriedade displayValue seja exibida na tela 
        this.updateDisplay();
    }
    //este metodo atualiza o elemento input no HTML com o valor atual que está armazenado em DisplayValue
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    //este método limpa o valor que está armazenado em DisplayValue e chama a função updateDisplay para atualizar 
    //a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    //o metodo try catch execulta o cálculo da expressão matemática contida em displayValue. esse metodo utiliza
    //a função eval() para avaliar a expressão e, se for bem sucedida, atualiza o displayValue com o resultado e chama
    //a função updateDisplay(). se ocorrer um erro durante a avaliação, ele atualiza o displayValue com a mensagem 
    //"erro" e chama a função updateDisplay().
    calculate(){
        try{
            //const result = eval(this.displayValue);
            const result = math.evaluate(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Erro";
            this.updateDisplay();
        }
    }
}
//criando o objeto ou instanciando a classe
//objeto chamado calc
const calc = new calculator();