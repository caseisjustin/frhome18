import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { useUserContext } from '../context/UserContext';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { addUser } = useUserContext();
    const navigate = useNavigate(); // useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            email,
        };
        addUser(newUser);
        navigate('/');
    };

    return (
        <div className='flex justify-center items-center h-svh bg-teal-300 flex-col gap-40'>
            <h1 className="bg-yellow-100 px-10 py-5 rounded-md">Create User</h1>
            <form onSubmit={handleSubmit} className='bg-yellow-200 p-20 rounded-xl flex flex-col justify-start'>
                <div className='flex flex-col gap-5 p-5'>
                    <label>Name:</label>
                    <input
                    className='p-3 text-[20px]'
                        type="text"
                        value={name}
                        placeholder='Enter Name:'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col gap-5 p-5'>
                    <label>Email:</label>
                    <input
                    className='p-3 text-[20px]'
                        type="email"
                        value={email}
                        placeholder='Enter Email:'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className='bg-green-600 rounded-lg py-3' type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
