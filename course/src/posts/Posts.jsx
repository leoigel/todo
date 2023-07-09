import React,{useState} from 'react';
import Post from './Post';
import './posts.css';
import Button from '../components/buttons/Button';
import Modal from '../modal/Modal';

function Posts({user}) {
    const {posts} = user;
   const [isOpenModal,setIsOpenModal] = useState(false);
   const [postInfo,setPostInfo] = useState({title:"",body:""})
   const [userPosts,setUserPosts] = useState(posts);

  return (
    <div className='posts'>
        <Button onClick={() => setIsOpenModal(true)}>ADD</Button>
      {
       !isOpenModal? (
         userPosts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        })
       ): (
          <Modal setIsOpenModal={setIsOpenModal} user={user} data={userPosts} addData={setUserPosts} title={postInfo} name='fromPosts'>
             title : <input type="text" onChange={(e) => {setPostInfo({...postInfo,title:e.target.value})}} />
             body : <input type="text" onChange={(e) => {setPostInfo({...postInfo,body:e.target.value})}}/>
          </Modal>
       )
      }
    </div>
  )
}

export default Posts