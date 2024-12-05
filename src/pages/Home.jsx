import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Home = () => {
  const { users, deleteUser, editUser } = useUserContext();
  const navigate = useNavigate(); 

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <div className='flex justify-center items-center h-svh bg-teal-300 flex-col gap-40'>
      <h1 className="bg-yellow-100 px-10 py-5 rounded-md">Users List</h1>
      <button onClick={() => navigate('/create')} className='bg-fuchsia-300 px-7 py-5 rounded-xl'>Create New User</button>
      <ul className='flex flex-col gap-2 flex-wrap'>
        {users.map(user => (
          <li key={user.id} className='bg-lime-300 p-5 rounded-lg flex gap-5 items-center'>
            {user.name} - {user.email}
            <button className='p-2 bg-blue-500 rounded-lg text-white hover:opacity-[.6]' onClick={() => handleEdit(user.id)}>Edit</button>
            <button className='p-2 bg-red-600 rounded-lg text-white hover:opacity-[.6]' onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
