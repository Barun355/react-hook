import React, { useEffect, useState } from 'react'

const HookUseEffectCounter = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
        // eslint-disable-next-line
    }, [count])

    return (
        <div>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>click {count}</button>
        </div>
    )
}

export default HookUseEffectCounter
