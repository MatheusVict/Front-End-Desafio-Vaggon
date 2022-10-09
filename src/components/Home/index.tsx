import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../config/ApiConfig';
import { ITaskCardProps, TaskCrad } from '../TaskCard';
import './styles.css'

export const Home = () => {

  const [tasks, setTaks] = useState<ITaskCardProps[]>([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {

      navigate('/');

    } else{

      api.get('/tasks', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((result) => {

        setTaks(result.data)

      }).catch((error) => {

        navigate('/');
        alert(error);

      })


    }
  }, [])

  return (
    <div className='container'>
      <h1>Tasks</h1>
      <Link to='/create'>Criar ➕</Link>
      <div className='todo-list'>
        {tasks.map((task) => {
          return <TaskCrad 
          id={task.id}
          name={task.name}
          description={task.description}
          status={task.status}
          end_day={task.end_day}
          created_at={task.created_at}
          key={task.id}
          />
        })}
      </div>
    </div>
  )
}
