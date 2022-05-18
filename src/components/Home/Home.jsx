import React from 'react';

const Home = () => {
    return (
        <div className='text-center mt-16 px-24'>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <button className='btn btn-primary'>Add</button>
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