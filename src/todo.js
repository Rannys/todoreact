import React, { Component } from 'react'



class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todolist: [],
            text: "",
            complete: false

        }


    }
    handleName = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    Add = () => {
        this.setState({
            todolist: this.state.todolist.concat({ name: this.state.text, complete: false }), text: ''
        })

    }
    Delete = (diff) => {
        this.setState({
            todolist: this.state.todolist.filter(el => diff !== el.name)
        })
    }
    Complete = (line) => {
        this.setState({
            todolist: this.state.todolist.map(el =>
                el.name === line ? { ...el, complete: !el.complete } : el)
        })

    }






    render() {
        return (
            <div>
                <div className='App'>
                    <h1>To-Do App!</h1>
                    <p>Add new To-Do</p>
                    <input className="inputText" type="text" placeholder="Enter new text" onChange={this.handleName} value={this.state.text} />
                    <button className="addBtn" type="button" onClick={this.Add} >Add</button>
                </div>
                <div className='title'>
                    <h2>Let's do some work</h2>
                </div>



                {
                    this.state.todolist.map(el =>
                        <div className='section'>

                            <button className='complete' onClick={() => this.Complete(el.name)}>{el.complete ? 'Undo' : 'Complete'}</button>
                            <button className='delete' onClick={() => this.Delete(el.name)} >Delete</button>
                            <p className={el.complete ? 'through' : 'normal'}>{el.name}</p>
                        </div>)

                }

            </div>


        )
    }



}

export default Todo