import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/ApiConfig';
import './styles.css'

export const CreateTask = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [end_day, setEnd_day] = useState('');

    const handleSubmit = (e: any) => {

        e.preventDefault();
        
        if (name.length <= 0) {
            alert('nome vazio')
            return
        };

        if (description.length <= 0) {
            alert('descrição vazia')
            return
        };

        if (status.length <= 0) {
            alert('status vazio')
            return
        };

        if(end_day.length <= 0) {
            alert('prazo vazio')
            return
        }


        const token = localStorage.getItem('token')

    if (!token) {

      navigate('/')

    } else {
        api.post('/tasks/create', {name: name, description: description, status: status, end_day: end_day}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            navigate('/home')
        }).catch((error) => alert(error))
           
    }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" placeholder='Informe o nome da task' onChange={(e: any) => setName(e.target.value)}/>
        <label htmlFor="descrição">Descrição</label>
        <input type="text"  placeholder='informe uma descrição' onChange={(e: any) => setDescription(e.target.value)}/>
        <label htmlFor="status">Status</label>
        <input type="text" placeholder='informe o status' onChange={(e:any) => setStatus(e.target.value)}/><br/>
        <label htmlFor="dia-final">Até</label>
        <input type="date" placeholder='informe o dia final' onChange={(e: any) => setEnd_day(e.target.value)}/>
        <button type='submit' className='btn'>Criar</button>
        </form>
    </div>
  )
}
