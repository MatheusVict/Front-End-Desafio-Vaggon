import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export interface ITaskCardProps {
    id: number;
    name: string;
    description: string;
    status: string;
    end_day: string;
    created_at: string;
}

export const TaskCrad: React.FC<ITaskCardProps> = ({ id, name, description, status, end_day, created_at }) => {
  return (
    <div className='box'>
        <h3><b>Nome:</b> {name}</h3>
        <p><strong>Descrição:</strong> {description}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Até: </strong>{end_day}</p>
        <p><strong>Data de inicio:</strong> {created_at}</p>
        <Link to={`/edit/${id}`}>Editar✏️</Link>
        <Link to={`/delete/${id}`}>Apagar🗑️</Link>
    </div>
  )
}
