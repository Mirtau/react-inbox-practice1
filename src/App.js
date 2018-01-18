import React, {Component} from 'react';
import './App.css';
import MessagesList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar'
import Labels from './Components/Labels'
let selectedIs = true
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      messages: this.props.messages.map(message => {
        return !message.selected
          ? {
            selected: false,
            ...message
          }
          : message
      })

    }
  }
  toggleClass = (message, class1) => {
    const index = this.state.messages.indexOf(message)
    let newMessages = this.state.messages.slice(0)
    newMessages[index][class1] = !newMessages[index][class1]
    this.setState({messages: newMessages})
  }
  selectAll = () => {
    let duplicate = this.state.messages.slice(0)
    if (selectedIs === true) {
      for (let i = 0; i < duplicate.length; i++) {
        duplicate[i].selected = true
      }
      selectedIs = false
    } else {
      for (let i = 0; i < duplicate.length; i++) {
        duplicate[i].selected = false
      }
      selectedIs = true
    }
    this.setState({messages: duplicate})
  }
  allRead = () => {
    let duplicate1 = this.state.messages.slice(0)

    for (let i = 0; i < duplicate1.length; i++) {
      duplicate1[i].read = true
    }

    this.setState({messages: duplicate1})
  }
  allUnread = () => {
    let duplicate1 = this.state.messages.slice(0)
    for (let i = 0; i < duplicate1.length; i++) {
      duplicate1[i].read = false
    }
    this.setState({messages: duplicate1})
  }
  handleChange = (event, messages) => {
    event.stopPropagation()
    let newMessages = this.state.messages.slice(0)

    newMessages.filter(message => !message.labels.includes(event.target.value) && message.selected).map(e => e.labels.push(event.target.value))

    // const messageIds = newMessages.filter(e => e.selected).map(e => e.id)
    this.setState({messages: newMessages})
  }
  // updateClass = async (method, body, path) => {
  //     await fetch(`${api}/${path}`, {
  //       method,
  //       body,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     })
  //   }
  handleRemoveChange = (event, messages) => {
    event.stopPropagation()
    let newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i].selected === true) {
        for (let j = 0; j < newMessages[i].labels.length; j++) {
          if (newMessages[i].labels[j] === event.target.value) {
            console.log('here');
            newMessages[i].labels.splice(j, 1)

          }
        }
      }
    }
    this.setState({messages:newMessages})

  }
  deleteMessage = (messages) => {
  var  notDeleted = []
    let newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i].selected !== true){
        notDeleted.push(newMessages[i])
        console.log(newMessages[i]);
      }
    }
    this.setState({messages:notDeleted})
  }
  countSelected = (messages) =>{

    let count = 0
    for (let i = 0; i < messages.length; i++) {

      if (messages[i].read === false){
        count ++
      }

  }
  return count
}
  render() {
    return (<div className="App">
      <Navbar/>
      <div className='container'>
        <Toolbar countSelected={this.countSelected} selectAll={this.selectAll} allRead={this.allRead} allUnread={this.allUnread} messages={this.state.messages} handleChange={this.handleChange} handleRemoveChange={this.handleRemoveChange} deleteMessage={this.deleteMessage}/>
        <MessagesList messages={this.state.messages} toggleClass={this.toggleClass.bind(this)}/>
      </div>
    </div>);
  }
}

export default App;
