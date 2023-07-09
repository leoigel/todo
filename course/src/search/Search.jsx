import React,{useState,useEffect} from 'react'
import './search.css';
function Search({users,setFilterUser}) {
  const [inputValue,setInputValue] = useState('');
  useEffect(() => {
    let filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(inputValue.toLowerCase()) || user.email.toLowerCase().includes(inputValue.toLowerCase())
    });
    filteredUsers.length === 0 && inputValue !== ''? setFilterUser('not found'):setFilterUser(filteredUsers)
  },[inputValue])
  const handleInputChange = (e) => {
        setInputValue(e.target.value)
   }
  return (
    <div className='search_container'>
        <input type='text' onChange={handleInputChange} />
     

    </div>
  )
}

export default Search