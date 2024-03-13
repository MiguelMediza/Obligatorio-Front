import React from 'react'
 import FoundForUser from '../../../components/foundUser'
 import { useParams } from 'react-router-dom'
const ProfileUser = () => {
    const { id } = useParams();
  return (
        <FoundForUser idUser = {id} verUser = {true}/>
  )
}

export default ProfileUser