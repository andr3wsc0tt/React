import * as React from 'react';
import { string } from 'prop-types';

export interface IShoppingListProps {

}

export default class ShoppingList extends React.Component<IShoppingListProps, {newItemName : string, groceryItems: Array<any>, validationErrors: any, submitted: number}> {
    constructor(props : any){
        super(props);

        this.state = {
            newItemName: '',
            groceryItems: [
                {name:'Banana', id: 'item-1', completed:false},
                {name:'Applces', id: 'item-2', completed: true},
                {name:'Rice', id:'item-3', completed:false}
            ],
            validationErrors: {},
            submitted: 0
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleCompletedToggle = this.handleCompletedToggle.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.validateFields = this.validateFields.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const name: string = target.name;
        const value = target.type === "text" ? target.value : target.checked;
    
        this.setState({
          newItemName: value
        } as any);
      }

    handleCompletedToggle(e : React.ChangeEvent<HTMLInputElement>){
        const target = e.target;
        const itemindexValue = target.getAttribute('data-itemindex')!;
        const index = parseInt(itemindexValue, 10)

        console.log('toggling: ' + index)

        const newGroceryItemsState = [...this.state.groceryItems]
        newGroceryItemsState[index].completed = target.checked
        
        this.setState({
            groceryItems: newGroceryItemsState
        })
    }

    handleDelete(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = e.target as HTMLInputElement;
        const itemindexValue = target.getAttribute('data-itemindex')!;
        const index = parseInt(itemindexValue, 10)

        console.log('deleting: ' + index)

        const newGroceryItemsState = [...this.state.groceryItems]
        newGroceryItemsState.splice(index, 1)
        
        this.setState({
            groceryItems: newGroceryItemsState
        })

     }

    handleOnSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const isFormValid = this.validateFields()

        if (isFormValid){
            const newGroceryItemObject = {
                completed: false,
                name: this.state.newItemName,
                id: `item-${this.state.submitted+4}`
            }
            this.setState((state) => {
                return {
                    submitted: state.submitted + 1,
                    groceryItems: [...state.groceryItems, newGroceryItemObject],
                    newItemName: ''
                }
            })
        }
    }

    validateFields(){
        const {
            newItemName
        } = this.state

        const errors : Record<string, string> = {}

        if(!newItemName){
            errors['newItemName'] = 'Please enter new item name'
        }

        return Object.keys(errors).length === 0
    }

    public render() {
    return (
      <>
        <section>
            <h3>Shopping List</h3>
            { !this.state.groceryItems.length && <p>No Items!</p>}
            <ul>
                {
                    this.state.groceryItems.map((item, index) => {
                        return(
                            <li key={item.id}>
                                <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={this.handleCompletedToggle}
                                data-itemindex={index}
                                />
                                <span>{item.name}</span>
                                <button
                                    data-itemindex={index}
                                    onClick={this.handleDelete}
                                    >
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={this.handleOnSubmit} >
                <input type="text" value={this.state.newItemName} onChange={this.handleOnChange}/>
                <input type="submit" value='Submit'/>
            </form>
        </section>
      </>
    );
  }
}
