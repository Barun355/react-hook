import React from 'react'
import { UserContext, ChannelContext } from '../ContextHook'

function CommponentF() {
  return (
    <div>
      <UserContext.Consumer>
            {
            user => {
                return (
                    <ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>User context value {user}, Channel Context value {channel}</div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
            }
      </UserContext.Consumer>
    </div>
  )
}

export default CommponentF
