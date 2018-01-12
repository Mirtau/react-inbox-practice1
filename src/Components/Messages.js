import React from 'react'
import Label from './Labels'

const Message = ({message, toggleClass}) => {
let isSelect = ""
if(message.selected===true){
  isSelect = "selected"
}
const readClass= message.read ? 'read' : 'unread';
const selectedClass = message.selected ? 'selected' : '';
const starred = message.starred ? '' : '-o'

  return (
<div className = {`row message ${readClass} ${selectedClass}`} >
  <div className="col-xs-1">
  <div className="row">
    <div className="col-xs-2" >
      <input type="checkbox" checked ={isSelect} defaultChecked = {message.selected} onClick={()=>{toggleClass(message, 'selected')}}/>
    </div>
    <div className="col-xs-2"  >
      <i className={`star fa fa-star${starred}`} onClick={()=>{toggleClass(message, 'starred')}}></i>
    </div>
  </div>
</div>
<div className="col-xs-11">
{message.labels.map((label, index)=> (<Label key = {index} label = {label}/>))}
  <a href ='#' onClick={()=>(toggleClass(message, 'read'))}>
  {message.subject}
  </a>
</div>
</div>

)}

export default Message
