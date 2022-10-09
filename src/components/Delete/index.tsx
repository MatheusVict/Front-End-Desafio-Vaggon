import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../config/ApiConfig';

export const Deletar = () => {
    const { idTask } = useParams();
    const id = Number(idTask);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')

    if (!token) {

      navigate('/')

    } else {
        api.delete(`/tasks/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            navigate('/home');
        }).catch((error) => alert(error))
    }
    },[])

  return (
    <div>Deletar</div>
  )
}
