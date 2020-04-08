import React, {Component} from 'react';

class FormValidation extends Component<{}, {firstName: string, feedback: string, acceptedTerms: boolean, submitted: number}>{
    constructor(props : any){
        super(props);

        this.state = {
            firstName: '',
            feedback: '',
            acceptedTerms: false,
            submitted: 0,
            [name]: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(event : React.ChangeEvent<HTMLInputElement>){
        const target = event.target;
        const name : string = target.name;
        const value = (
            target.type === 'text'
            ? target.value
            : target.checked
        )

        this.setState({
            [name]: value
        })
    }
}