import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        content: '',
        id: 0
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            id: Math.random()
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.reset();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
export default AddTodo;