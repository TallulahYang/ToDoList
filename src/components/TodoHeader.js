import React, { Component } from 'react';
// import SliderView from './Slider';

class TodoHeaderView extends Component {

    render() {
        // const { todoList } = this.props;
        return (
            <div id='header'>
                <div id='titleWrapper'>
                    <h2 class="textCenter">To-do List</h2>
                </div>
            </div>
        );
    }
}

export default TodoHeaderView;