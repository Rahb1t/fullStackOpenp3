const Message = ({ text, messageType }) => {
  if (text === null || messageType === null) {
    return null
  }

  const messageTypeStyle = {
    success: {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    error: {
      color: 'red',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  }

  const messageStlye = messageTypeStyle[messageType]

  return <div style={messageStlye}>{text}</div>
}

export default Message
