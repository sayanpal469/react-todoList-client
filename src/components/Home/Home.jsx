import React from 'react';

const Home = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
        const task = e.target.task.value
        const newTask = {task}

        fetch('http://localhost:5000/userTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
    }
    return (
        <div className='text-center mt-16 px-24'>
            <form onSubmit={handelSubmit} action="">
            <input name='task' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type='submit' value='submit' className='btn btn-primary'/>
            </form>
            <div class="overflow-x-auto">
    <table class="table w-full mx-auto mt-20">
    <thead>
      <tr>
        <th></th>
        <th>Task</th>
        <th>Task Confirm</th>
        <th>Task Delete</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td> 
        <td>
            <button className='btn btn-primary'>Confirm</button>
        </td>
        <td>
            <button className='btn bg-red-500 '>Confirm</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Home;