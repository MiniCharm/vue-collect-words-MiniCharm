const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
        Word: '',
        Words: ['hey','you'],
        Message:'',
        Number1:'',
        Number2:'',
        Result:''
        }
    },
    methods: {
        myMethod(){

        },
        Save(){
            this.Words.push(this.Word)
        },
        Show(){

            this.Message = this.Words.join(', ');
        },
        Clear(){
            this.Words=[]
        },
        Add(){
            this.Result= this.Number1+ this.Number2
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
