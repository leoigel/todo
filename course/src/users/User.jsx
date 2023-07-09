import React,{useState,useEffect} from 'react';
import './user.css';
import Button from '../components/buttons/Button';
import UserInfo from './UserInfo';
import Todos from '../todos/Todos';
import Posts from '../posts/Posts';

function User({id,name,email,phone,username,website,address,company,users,setFilterUser,setUsers,tasks,posts,todos,user}) {
const [userInfo,setUserInfo] = useState({name,email});
const [toogle,setToogle] = useState(false);
const [toogleTodo,setToogleTodo] = useState(false)
const [marked,setMarked] = useState(null);
const {city,street,zipcode} = user.address;
const [infoField,setInfoField] = useState({city,street,zipcode})
  

    const handleToogle = () => {
        setToogle(!toogle);
    }
     const handleToogleTodo = () => {
        setToogleTodo(true);
    }
    const handleUpdateUser = (id) => {
        let findIndex = users.findIndex(user => user.id === id);
        let address = {...user.address,...infoField};

        users[findIndex] = {...userInfo,id,phone,username,website,address,company,tasks,posts,todos};
       
        setFilterUser(users);
        setUsers(users);
        console.log(users)
    }
    const handleDeleteUser = (id) => {
        console.log(id)
        let deleteUser = users.filter((user) => user.id !== id);
        setFilterUser(deleteUser);
        setUsers(deleteUser);
    }   
  return (
    <>
    <div className={`user_container`}  style={{ background: !marked ? 'orange' : 'green' }} >
    <div className='wrapper' onClick={handleToogleTodo}>
        <div>ID:{id}</div>
        Name: <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo,name:e.target.value})}/> <br/>
        Email: <input type='text' value={userInfo.email} onChange={(e) => setUserInfo({...userInfo,email:e.target.value})}/>
        <br/>
      </div>
       <div className='btns'>
            <Button onClick={handleToogle}>other data</Button>
            <Button onClick={() => handleUpdateUser(id)}>update</Button>
            <Button onClick={() => handleDeleteUser(id)}>delete</Button>
        </div>
        {toogle && <UserInfo infoField={infoField} setInfoField={setInfoField} address={user.address}/>}
    </div>
    {toogleTodo && (
        <div className='container'>
            <Todos user={user} setMarked={setMarked} setUsers={setUsers}/>
            <Posts user={user}/>
        </div>
    )}
    
    </>
  )
}

export default User;