class Todo {
    id: string;
    text : string;

    constructor (todoText : string) {
        this.id = new Date().toISOString() + Math.random()*10;
        this.text = todoText;
        console.log('run');
        
    }
}

export default Todo;