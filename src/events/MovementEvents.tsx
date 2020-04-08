import React, {Component} from 'react'

class InputEvents extends Component <{}, {mouseDown: boolean, mouseClicked : number, inputText: string, formInputText : string}>{
    constructor(props : any){
        super(props)

        this.state = {
            mouseDown: false,
            mouseClicked: 0,
            inputText: "Hello World",
            formInputText: "Hello World 2"
        }
    }

    render(){
        return (
            <section>
                <div>
                    <h3>Mouse Events</h3>
                    <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
                    <p>Button clicked: {this.state.mouseClicked}</p>
                </div>
            </section>

        )

    }
}