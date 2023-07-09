import React,{useEffect,useState} from 'react'
import Search from './search/Search';
import Button from './components/buttons/Button';
import Modal from './modal/Modal';
import Users from './users/Users';
import {getAllUsers,getAllTodos,getAllPosts} from './utils';
import './app.css';
const url = "https://jsonplaceholder.typicode.com";

function App() {
  const [users,setUsers] = useState([]);
  const [filterUser,setFilterUser] = useState([]);
  const [isOpenModal,setIsOpenModal] = useState(false);
  const [userInfo,setUserInfo] = useState({name:"",email:""})
  const fetchData = async () => {
      const {data:userData} = await getAllUsers(url);
      const {data:todosData} = await getAllTodos(url);
      const {data:postsData} = await getAllPosts(url);
      let completeUser =  userData.map((user,index) => {
        user['todos'] = todosData.filter(todo => user.id === todo.userId);
        user['posts'] = postsData.filter(post => user.id === post.userId);
        return user;
      })
      setFilterUser(completeUser)
      setUsers(completeUser);
    }
  useEffect(() => {
       fetchData();
  },[])
  
  return (
    <div className='app'>
      <div>
         <Search users={users} setFilterUser={setFilterUser}/>
         <Button onClick={() => setIsOpenModal(true)}>ADD</Button>
         {isOpenModal && <Modal setIsOpenModal={setIsOpenModal}  postInfo={null} name='fromApp' title={userInfo} setUsers={setUsers} users={users} setFilterUser={setFilterUser} filterUser={filterUser}>
               Name : <input type="text" onChange={(e) => {setUserInfo({...userInfo,name:e.target.value})}} />
               Email : <input type="text" onChange={(e) => {setUserInfo({...userInfo,email:e.target.value})}}/>
          </Modal>}
      </div>
      {filterUser.length === 0 ?null:<Users  setFilterUser={setFilterUser} setUsers={setUsers} users={filterUser.length > 0 ? filterUser : users}/>}
    </div>
  )
}

export default App
