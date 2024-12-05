import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate instead of useHistory
import { useUserContext } from '../context/UserContext';

const EditUser = () => {
    const { users, editUser } = useUserContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const user = users.find((user) => user.id === parseInt(id));
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [id, users]);

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(parseInt(id), { name, email });
        navigate('/');
    };

    return (
        <div className='flex justify-center items-center h-svh bg-teal-300 flex-col gap-40'>
            <h1 className="bg-yellow-100 px-10 py-5 rounded-md">Edit User</h1>
            <form onSubmit={handleSubmit} className='bg-yellow-200 p-20 rounded-xl flex flex-col justify-start'>
                <div className='flex flex-col gap-5 p-5'>
                    <label>Name:</label>
                    <input
                        className='p-3 text-[20px]'
                        placeholder='Enter Name:'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col gap-5 p-5'>
                    <label>Email:</label>
                    <input
                        className='p-3 text-[20px]'
                        placeholder='Enter Email:'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className='bg-green-600 rounded-lg py-3' type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditUser;
