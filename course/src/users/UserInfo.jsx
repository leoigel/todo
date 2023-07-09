import React,{useState} from 'react'

export default function UserInfo({infoField,setInfoField}) {
  return (
    <>
        city: <input type="text" value={infoField.city} onChange={(e) => setInfoField({...infoField,city:e.target.value})}/> <br/>
        street: <input type="text" value={infoField.street} onChange={(e) => setInfoField({...infoField,street:e.target.value})}/> <br/>
        zipcode: <input type="text" value={infoField.zipcode} onChange={(e) => setInfoField({...infoField,zipcode:e.target.value})}/>
    </>
  )
}
