import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from 'mobx';
import TodoItemView from '../components/TodoItem';
import './TodoList.scss';

import FlatButton from 'material-ui/FlatButton';
import SliderView from './Slider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//view
@observer
class TodoListView extends Component {
    @observable newTodoTitle = "";

    render() {
        const { todoList } = this.props;
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {todoList.todos.map(todo => (
                        <TodoItemView todo={todo} key={todo.id} />
                    ))}
                </ReactCSSTransitionGroup>
                <div id='footer'>
                    <br />
                    Tasks left({todoList.unfinishedTodoCount})
                    <br />
                    <FlatButton
                        onClick={() => {
                            console.log('-----clear------')
                            todoList.clearCompleted();
                        }}
                        primary
                    >CLEAR finished TASKS({todoList.finishedCount})
                    </FlatButton>
                    <div id='sliderView'>
                        <SliderView
                            radius={50}
                            border={10}
                            value={todoList.totalCount ? todoList.finishedCount / todoList.totalCount : 0}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoListView;