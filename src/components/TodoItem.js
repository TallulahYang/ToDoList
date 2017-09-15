import React, { Component } from 'react';
import { observer } from "mobx-react";
import { action } from 'mobx';

import TodoEdit from './TodoEdit';

import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

@observer
class TodoItemView extends Component {

    render() {
        const { todo } = this.props;
        let isFinished = todo.finished;
        return (
            <div id='item' style={{ clear: 'both' }}>
                <div style={{ width: '80%', float: 'left', padding: '6px 0px' }}>
                    <Checkbox
                        type="checkbox"
                        label={todo.title}
                        checked={isFinished}
                        onClick={() => todo.toggleCheck()}
                        onChange={() => { console.log('---changed-----') }}
                    />
                </div>
                <div id='itemPriority' style={{ visibility: todo.priority ? 'visible' : 'hidden' }}>
                    <FontIcon className="material-icons">label</FontIcon>
                </div>
                <div style={{ float: 'right' }}>
                    <FlatButton
                        icon={<FontIcon className="material-icons">delete</FontIcon>}
                        onClick={this.handleDestroy}
                        style={{ marginRight: '5px', minWidth: '36px' }}
                    />
                    <FlatButton
                        icon={<FontIcon className="material-icons">edit</FontIcon>}
                        onClick={() => { this.setEditing(true);}}
                        style={{ marginRight: '5px', minWidth: '36px' }}
                    />
                </div>
                <TodoEdit todo={todo} />
            </div>
        );
    }

    @action
    handleDestroy = () => {
        this.props.todo.destroy();
    };

    setEditing =(flag)=>{
        this.props.todo.isEditing = flag;
    }
}

export default TodoItemView;