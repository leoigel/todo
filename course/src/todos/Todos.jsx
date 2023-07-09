import React,{useState,useEffect} from 'react'
import Button from '../components/buttons/Button';
import Modal from '../modal/Modal';
import Todo from './Todo';
import './todo.css';
function Todos({user,setMarked}) {
    const {todos} = user;
    const [userTodo,setUserTodo] = useState(todos);
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [title,setTitle] = useState('');
    
    
    useEffect(() => {
       const checkIsMarked = userTodo.every((todo) => todo.completed);
       setMarked(checkIsMarked);
    },[userTodo])
    const handleMarked = (id) => {
        let newTodo = userTodo.map((u) => {
            if(u.id === id) {
                u.completed = true;
            }
            return u;
        })
        setUserTodo(newTodo)
    }
   
  return (
    <>
   
     {
     !isOpenModal? (
        <ul className='todo_list'>
         <Button onClick={() => setIsOpenModal(true)}>Add</Button>
                    { userTodo.map((todo => {
                        return (
                          <Todo key={todo.id} todo={todo} handleMarked={handleMarked}/>
                        )
                    }))}
                  
            </ul>
            
        ): (
             <Modal setIsOpenModal={setIsOpenModal} user={user} data={userTodo} addData={setUserTodo} title={title} postInfo={null} name='fromTodos'>
                        title : <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
            </Modal>
        )
     } 
             
    </>
  )
}

export default Todos