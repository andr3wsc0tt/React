import React, {useState, useEffect} from 'react'
import { callExpression } from '@babel/types';

const CardHooks = () => {
    const [initials, setInitials] = useState('AS')
    const [name, setName] = useState("Andrw Scott")
    const [phone, setPhone] = useState("780-555-1234")
    const [email, setEmail] = useState("Andrw-Scott@email.com")
    const [favorite, setFavorite] = useState(false)
    
    useEffect(() => {
        console.log(`Value has changed to : ${favorite}`)
        // save to local storage, make API callExpression, DOM interactions, etc.
    })

    const activeClass = favorite ? 'active' : ''

    return (
        <section className="card-container">
            <header className="card-header">
                <span data-initials={initials}></span>
                <h2>{name}</h2>
                <div
                    className={`favorite${activeClass}`}
                    onClick={()=>{setFavorite(!favorite)}}
                    >
                </div>
            </header>

            <main>
                <ul>
                    <li>
                        <span>Phone</span>
                        {phone ? phone : 'n/a'}
                    </li>
                    <li>
                        <span>EMail</span>
                        {email ? email : 'n/a'}
                    </li>
                </ul>
            </main>
        </section>
    )
}

export default CardHooks