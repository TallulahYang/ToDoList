import React, { Component } from 'react';
// import SliderView from './Slider';
// import { observer } from "mobx-react";

// @observer
class TodoHeaderView extends Component {

    render() {
        // const { todoList } = this.props;
        return (
            <div id='header'>
                <div id='titleWrapper'>
                    <h2 className="textCenter">To-do List</h2>
                </div>
            </div>
        );
    }
}

export default TodoHeaderView;