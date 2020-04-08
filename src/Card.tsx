import React, {Component} from 'react';

class Card extends Component<{}, {firstName: string, initials : string, info : Array<any> }> {
    constructor(props : any){
        super(props);

        this.state = {
            firstName : 'Jane Smith',
            initials : 'JS',
            info: [
                {title: 'Birthday', text: 'Jan 1 1980'},
                {title: 'Address', text: '123 Fulton St.'},
                {title: 'Phone', text: ''},
                {title: 'Email', text: 'jane@gmail.com'}
            ]
        }
    }

    render(){
        return (
        <React.Fragment>
            <section className="card-container">
            <header className="card-header">
                <span custom-initials={this.state.initials}></span>
                <h2>{this.state.firstName}</h2>
            </header>
            <main>
                <ul>
                    {this.state.info.map((row, index) =>{
                        return(
                            <li key={index}>
                                <span>{row.title}</span>
                                {row.text ? row.text : 'n/a'}
                            </li>
                        )
                    })}
                </ul>
            </main>
            </section>
        </React.Fragment>
            )
    }
}

export default Card;