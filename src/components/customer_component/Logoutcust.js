import React, { useContext } from 'react'
import { UserContext } from '../../App';

export default function Logoutcust() {
    const {state , dispatch} = useContext(UserContext);
    dispatch({type:"USER",payload:false})
    window.localStorage.clear()
  return (
    <div>logged out succesfully</div>
  )
}
