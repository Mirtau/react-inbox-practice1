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
    if(selectedIs === true){
      for(let i=0; i<duplicate.length; i++){
        duplicate[i].selected = true
      }
      selectedIs = false
    }
    else{
      for(let i=0; i<duplicate.length; i++){
        duplicate[i].selected = false
      }
      selectedIs = true
    }
    this.setState({
      messages:duplicate
    })
  }
    allRead = () => {
      let duplicate1 = this.state.messages.slice(0)

        for(let i = 0; i<duplicate1.length; i++){
           duplicate1[i].read = true
        }

      this.setState({
        messages:duplicate1
      })
    }
    allUnread = () => {
      let duplicate1 = this.state.messages.slice(0)
        for(let i = 0; i<duplicate1.length; i++){
           duplicate1[i].read = false
        }
      this.setState({
        messages:duplicate1
      })
    }


  render() {
    return (<div className="App">
      <Navbar/>
      <div className='container'>
        <Toolbar selectAll = {this.selectAll} allRead = {this.allRead} allUnread = {this.allUnread} messages={this.state.messages}/>
        <MessagesList messages={this.state.messages} toggleClass={this.toggleClass.bind(this)}/>
      </div>
    </div>);
  }
}

export default App;
