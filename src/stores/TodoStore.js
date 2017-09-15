import { observable, computed, action } from 'mobx';
import TodoModel from '../models/TodoModel';

class TodoStore {
    @observable filter = '';
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @computed get finishedCount() {
        return this.todos.length - this.unfinishedTodoCount;
    }
    @computed get totalCount() {
        return this.todos.length;
    }

    @computed get filterTodos(){
        return this.todos.filter(
            todo => !this.filter || todo.title.toLowerCase().indexOf(this.filter.trim().toLowerCase()) !== -1
        );
    }

    @action
    addTodo(title,priority) {
        let item = new TodoModel(this,title,priority);
        this.todos.push(item);
    }

    @action
    removeItem(index){
        this.todos[index].destroyed = true;
        this.todos.splice(index,1);
    }

    @action
    toggleAll(checked) {
        this.todos.forEach(
            todo => todo.finished = checked
        );
    }

    @action
    searchAll(searchString){
        console.log(searchString)
        // if (!searchString) {
        //     return this.todos;
        //   }
        var str = searchString.trim().toLowerCase();

        this.todos.filter(
            todo => !this.filter || todo.title.toLowerCase().indexOf(str) !== -1
        );
    }

    @action
    clearCompleted() {
        this.todos = this.todos.filter(
            todo => !todo.finished
        );
    }
}


export default TodoStore;