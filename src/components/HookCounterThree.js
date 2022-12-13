import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })

    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            <input type="text"
                value={name.lastName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <p>Your first Name :- {name.firstName}</p>
            <p>Your first Name :- {name.lastName}</p>
        </div>
    )
}

export default HookCounterThree
