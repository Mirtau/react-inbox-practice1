import React from 'react'
import Message from './Messages'

const MessagesList = ({messages, toggleClass}) => {
  return (<div>
    {messages.map(message => (<Message key={message.id} message={message}
    toggleClass={toggleClass}/>))}

  </div>)

}

export default MessagesList
