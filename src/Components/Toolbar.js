import React from 'react'




const Toolbar = ({selectAll, allRead, allUnread, messages, handleChange, handleRemoveChange, message, deleteMessage, countSelected}) => {
 var numSelected = 0
 var boxCheck = 0;
for (var i = 0; i < messages.length; i++) {
  if(messages[i].selected === true){
  numSelected ++
}
}
if (numSelected === 0){
  boxCheck = 'square'
}
else if( numSelected < messages.length){
  boxCheck = 'minus-square'}
else if(numSelected === messages.length){
boxCheck = 'check-square'}

let num = countSelected(messages)
  return (<div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{num}</span>
        unread messages
      </p>

      <button className="btn btn-default" onClick={() => {
          selectAll()
        }}>
        <i className={`fa fa-${boxCheck}-o`} ></i>
      </button>

      <button className="btn btn-default" onClick={() => {
          allRead()
        }}>
        Mark As Read
      </button>

      <button className="btn btn-default" onClick={() => {
          allUnread()
        }}>
        Mark As Unread
      </button>

      <select className="form-control label-select" onChange={(e)=>{handleChange(e, message)}}>
        <option value="">Apply label</option>
        <option value="dev" >dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select" onChange={(e)=>{handleRemoveChange(e, message)}}>
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default"onClick={() => {
          deleteMessage()
        }}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </div>)
}
export default Toolbar
