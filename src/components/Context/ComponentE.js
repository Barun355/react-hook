import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../ContextHook'
// import CommponentF from './CommponentF'

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentE
