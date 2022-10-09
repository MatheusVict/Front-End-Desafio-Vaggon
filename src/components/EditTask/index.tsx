import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../config/ApiConfig';
import './styles.css'

export const EditTask = () => {
    const { idTask } = useParams();
    const id = Number(idTask)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

        const handlesubmit =  (e: any) => {

            e.preventDefault();

            if (name.length <= 0) {
                alert('nome vazio')
                return
            }

            if (description.length <= 0) {
                alert('descrição vazia')
                return
            }

            if (status.length <= 0) {
                alert('status vazio')
                return
            }

        if (!token) {

            navigate('/');

        } else {

            api.put(`tasks/${id}`, {name: name, description: description, status: status}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((result) => {
                navigate('/home')
            }).catch((error) => alert(error))
        }
        }
        
        
        

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label htmlFor="name">Nome</label>
            <input className='input' type="text" placeholder='Informe o nome da task' onChange={(e: any) => setName(e.target.value)}/>
            <label htmlFor="descrição">Descrição</label>
            <input className='input' type="text"  placeholder='informe uma descrição' onChange={(e: any) => setDescription(e.target.value)}/>
            <label htmlFor="status">Status</label>
            <input className='input' type="text" placeholder='informe o status' onChange={(e:any) => setStatus(e.target.value)}/><br/>
            <button type='submit' className='btn'>Editar</button>
        </form>
    </div>
  )
}
