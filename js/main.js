const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
        Word: '',
        Words: ['hey','honney'],
        Message:'',
        Number1:'4',
        Number2:'6',
        Result:'',
        Operation:''
        }
    },
    methods: {
        myMethod(){

        },
        Save(){
            this.Words.push(this.Word)
            this.Word=''
            this.Show()
        },
        Show(){
            if(this.Words.length===0){
                this.Message="<i>Empty</i>"
            }
            else{
                this.Message = this.Words.join(', ');
            }
            

        },
        Clear(){
            this.Words=[]
            this.Show()
        },
        Add(){
            this.Result= this.Number1+ this.Number2
        },
        SwitchOperation()
        {
            const num1 = Number(this.Number1)
            const num2 = Number(this.Number2)

            switch (this.Operation) {
            case '+':
                {
                    this.Result= num1+num2
                    break;
                }
            case "-":
                {
                    this.Result= num1-num2
                    
                    break;
                }
            case "*":
                {
                    this.Result= num1* num2
                    break;
                }
            case "/":
                {
                    this.Result= num2==0? "Du kan ikke dividere med 0":num1/num2
                    break;
                }
            default:{
                break;
            }
        }
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
