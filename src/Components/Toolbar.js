import React from 'react'




const Toolbar = ({selectAll, allRead, allUnread, messages}) => {
 var numSelected = 0
 var boxChock = 0;
for (var i = 0; i < messages.length; i++) {
  if(messages[i].selected === true){
  numSelected ++
}
}
console.log(numSelected);
if (numSelected === 0){
  boxChock = 'square'
}
else if( numSelected < messages.length){
  boxChock = 'minus-square'}
else if(numSelected === messages.length){
boxChock = 'check-square'}
console.log(boxChock);

  return (<div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default">
        <i className={`fa fa-${boxChock}-o`} onClick={() => {
            selectAll()
          }}></i>
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

      <select className="form-control label-select">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </div>)
}
export default Toolbar
