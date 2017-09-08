import React, { Component } from 'react';

import { observer } from "mobx-react";
import { observable, action } from 'mobx';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';


const ENTER_KEY = 13;

@observer
class TodoEditView extends Component {
    // @observable disabled = true;
    @observable changedTitle = '';
    @observable changePriority = false;

    changePriority = this.props.todo.priority;
    changedTitle = this.props.todo.title;

    render() {
        const { todo } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCancle}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                // disabled={this.disabled}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div id='editDialog'>

                <Dialog
                    // title="EDIT TO-DO"
                    modal={false} 
                    actions={actions}
                    open={todo.isEditing}
                    onRequestClose={this.handleCancle}
                    contentStyle={{ maxWidth: 420, textAlign: 'center' }}
                >
                    <div id='editPriority'>
                        <Checkbox
                            type="checkbox"
                            label="priority"
                            checked={this.changePriority}
                            onClick={() => this.handlePriority()}
                            onChange={() => { console.log('---changed-----') }}
                        />
                    </div>
                    <TextField
                        name="TodoEdit"
                        autoFocus="true"
                        onChange={this.onChange}
                        value={this.changedTitle}
                        onKeyDown={this.onSubmit}
                    />
                </Dialog>
            </div>
        )
    }
    handleCancle = () => {
        this.props.todo.isEditing = false;
    };

    @action
    handleClose = () => {
        this.changeContent();
        this.props.todo.isEditing = false;
    };

    @action
    handlePriority = e => {
        this.changePriority = !this.changePriority;
    }

    @action
    onChange = (e) => {
        this.disabled = false;
        this.changedTitle = e.target.value;
    }

    @action
    onSubmit = (e) => {
        if (e.keyCode !== ENTER_KEY) {
            return;
        }

        e.preventDefault();
        this.handleClose();
    }


    changeContent() {
        var val = this.changedTitle.trim();

        if (val) {
            this.props.todo.title = this.changedTitle;
            this.props.todo.priority = this.changePriority;
        }
    }
}



export default TodoEditView;