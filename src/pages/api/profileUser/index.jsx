import React from 'react'
 import FoundForUser from '../../../components/foundUser'
 import PlacesForUser from '../../../components/placesUser'
 import { useParams } from 'react-router-dom'
const ProfileUser = () => {
    const { id } = useParams();
  return (
        <><PlacesForUser idUser={id} verUser={true} /><FoundForUser idUser={id} verUser={true} /></>
  )
}

export default ProfileUser