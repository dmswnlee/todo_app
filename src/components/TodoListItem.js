import React from 'react';
import classNames from 'classnames'; //조건부 스타일링
import { MdCheckBox, MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/TodoListItem.scss';

function TodoListItem({todo,onToggle,onRemove}) {
  const {id, text, checked} = todo;

  return (
    <div className='TodoListItem'>
      <div className={classNames('checkbox',{checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={()=>onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem