import React,{useState,useEffect} from 'react'
import './modal.css';
import Button from '../components/buttons/Button';
function Modal({children,setIsOpenModal,user,data,title,addData,setUsers,users,setFilterUser,filterUser,name}) {
  
  const handleCancel = () => {
    setIsOpenModal(false)
  }
  const handleAddTodo = () => {
      let currentUser;
      switch(name) {
      case 'fromApp':
        currentUser = {
          id:users.length + 1,
          name:title.name,
          email:title.email,
          todos:[],
          posts:[],
          address: {
            street: '',
            suite: '',
            city: '',
            zipcode: ''
            }
        }
        setUsers([...users,currentUser])
        setFilterUser([...filterUser,currentUser])
        break;
      case 'fromTodos':      
        currentUser = {
        userId: user.id,
        id:data.length + 1,
        title:title,
        completed:false
        }
        addData([...data,currentUser])
      break;
      case 'fromPosts':
        currentUser = {
        userId: user.id,
        id:data.length + 1,
        title:title.title,
        body:title.body,
        completed:false
        }
        addData([...data,currentUser])

        break;
        default:
        break;
    }
    console.log(currentUser)


  
    
  }

  return (
    <div className="modal">
      {children}
      <div className='btns'>
        <Button onClick={handleAddTodo}>ADD</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
      </div>
  )
}

export default Modal