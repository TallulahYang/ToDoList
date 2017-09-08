import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './Second.module.scss';
// import App from './App';
// import Emoji from './Emoji';
// import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TodoStore from './stores/TodoStore';
import TodoModel from './models/TodoModel';

import TodoListView from './components/TodoList';
import TodoNewView from './components/TodoNew';
import TodoHeader from './components/TodoHeader';

// export const ALL_TODOS = 'all';
// export const ACTIVE_TODOS = 'active';
// export const FINISHED_TODOS = 'finished';


const store = new TodoStore();
store.todos.push(
    new TodoModel(store, "Get Coffee" , true),
    new TodoModel(store, "Write simpler code")
);
store.todos[0].finished = true;

// setTimeout(() => {
//     store.addTodo("Get a cookie as well");
// }, 2000);


const App = () => (
    <MuiThemeProvider>
        <div id='container'>
            <TodoHeader />
            <TodoNewView todoList={store} />
            <TodoListView todoList={store} />
        </div>
    </MuiThemeProvider>
);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
injectTapEventPlugin();
// registerServiceWorker();

