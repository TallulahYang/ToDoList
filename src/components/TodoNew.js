import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import './TodoNew.scss';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
// import FontIcon from 'material-ui/FontIcon';
// import FlatButton from 'material-ui/FlatButton';

const ENTER_KEY = 13;

@observer
export default class TodoNew extends React.Component {
    @observable newTodoTitle = "";
    @observable newTodoPriority = false;
    @observable checked = false;

    render() {
        return (
            <div id="form">
                <input
                    ref="newField"
                    className="new-todo"
                    placeholder="ADD NEW TO-DO"
                    onKeyDown={this.handleNewTodoKeyDown}
                    onChange={this.handleInputChange}
                    autoFocus={true}
                />
                <div id='priority'>
                    <Checkbox
                        type="checkbox"
                        label="priority"
                        checked={this.checked}
                        onClick={() => this.handlePriority()}
                        onChange={() => { console.log('---changed-----') }}
                    />
                </div>
                <RaisedButton
                    id='add'
                    label="+"
                    primary={true}
                    onClick={this.handleNewTodoAddition}
                    style={{ width: '10%', minWidth: '8px' }}
                />
            </div>
        );
    }
    @action
    handlePriority = e => {
        this.newTodoPriority = !this.newTodoPriority;
        this.checked = !this.checked;
    }

    @action
    handleInputChange = e => {
        this.newTodoTitle = e.target.value;
    };

    @action
    handleNewTodoKeyDown = (event) => {
        if (event.keyCode !== ENTER_KEY) {
            return;
        }

        event.preventDefault();
        this.changeContent();

    };

    changeContent() {
        var val = this.newTodoTitle.trim();
        if (val) {
            this.props.todoList.addTodo(val, this.newTodoPriority);
            this.newTodoTitle = "";
            this.checked = false;
            this.newTodoPriority = false;
            ReactDOM.findDOMNode(this.refs.newField).value = '';
        }
    }

    @action
    handleNewTodoAddition = (event) => {
        event.preventDefault();
        this.changeContent();
    }
}