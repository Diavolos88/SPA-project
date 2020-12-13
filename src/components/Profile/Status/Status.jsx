import React from 'react'
import s from './Status.module.css';

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        debugger
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render(){
        if (!this.state.editMode) {
            return (
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status :'***Update status***'}</span>
                </div>
            );
        } else {
            return (
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus={true} onBlur={this.deActivateEditMode} className={s.inputField}
                           value={this.state.status ? this.state.status :'***Update status***'}/>
                </div>
            );
        }
    }
}

export default Status