import React, {Component, FormEvent} from 'react'

class InputEvents extends Component <{}, {mouseDown: boolean, mouseClicked : number, inputText: string, formInputText : string, formInputTextSubmitted: string}>{
    constructor(props : any){
        super(props)

        this.state = {
            mouseDown: false,
            mouseClicked: 0,
            inputText: "Hello World",
            formInputText: "Hello World 2",
            formInputTextSubmitted: ""
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnClick(){
        this.setState((state) => {
            return {
                mouseClicked: state.mouseClicked + 1
            }
        })
    }

    handleOnMouseDown(){
        this.setState({
            mouseDown: true
        })
    }
    
    handleOnMouseUp(){
        this.setState({
            mouseDown: false
        })
    }

    handleOnChange(event : React.ChangeEvent<HTMLInputElement>){
        this.setState({
            inputText: event.target.value
        })
    }

    handleOnSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.setState({
            formInputTextSubmitted: this.state.formInputText
        })
    }

    render(){
        return (
            <>
            <section>
                <div>
                    <h3>Mouse Events</h3>
                    <button onClick={this.handleOnClick}
                    onMouseDown={this.handleOnMouseDown}
                    onMouseUp={this.handleOnMouseUp}>
                    Click me
                    </button>
                    <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
                    <p>Button clicked: {this.state.mouseClicked}</p>
                </div>
            </section>

            <section>
                <h3>Input Change Events:</h3>
                <input 
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleOnChange}
                />
                <p>Input Value: {this.state.inputText}</p>
            </section>

            <section>
                <h3>Form Submit Events:</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text"
                        value={this.state.formInputText}
                        />
                        <button type="submit">Submit</button>
                    <p>Input Value: {this.state.formInputText}</p>
                    <p>Submitted Value: {this.state.formInputTextSubmitted}</p>
                </form>
            </section>
            </>
        )

    }
}

export default InputEvents;