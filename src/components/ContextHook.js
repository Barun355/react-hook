import React, { createContext } from 'react'
import ComponentC from './Context/ComponentC'

export const UserContext = createContext()
export const ChannelContext = createContext()

function ContextHook() {
    return (
        <div>
            <UserContext.Provider value={'Barun'}>
                <ChannelContext.Provider value={'Barun Channel'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ContextHook
