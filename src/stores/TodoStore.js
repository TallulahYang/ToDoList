import { observable, computed, action } from 'mobx';
import TodoModel from '../models/TodoModel';

class TodoStore {
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

    @action
    addTodo(title,priority) {
        this.todos.push(new TodoModel(this,title,priority));
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
    clearCompleted() {
        this.todos = this.todos.filter(
            todo => !todo.finished
        );
    }
}


export default TodoStore;