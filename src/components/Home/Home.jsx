import React, { useEffect, useState } from 'react';

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/userTask')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTasks(data)
        })
    },[tasks])

    const handelSubmit = (e) => {
        e.preventDefault()
        const task = e.target.task.value
        const decription = e.target.decription.value
        const newTask = {task, decription}

        fetch('http://localhost:5000/userTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/userTask/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='text-center mt-16 px-24 mb-48'>
            <form onSubmit={handelSubmit} action="">
            <input name='task' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" /> <br />
            <input name='decription' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-5" /> <br />
            <input type='submit' value='submit' className='btn btn-primary'/>
            </form>
            <div class="overflow-x-auto">
                        <table class="table w-full mx-auto mt-20">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Task Confirm</th>
                            <th>Task Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {
                            tasks.map(task => <tr>
                                <th>{1}</th>
                                <td>{task.task}</td> 
                                <td>{task.decription}</td> 
                                <td>
                                    <button className='btn btn-primary'>Confirm</button>
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(task._id)} className='btn bg-red-500 '>Delete</button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    </div>
        </div>
    );
};

export default Home;