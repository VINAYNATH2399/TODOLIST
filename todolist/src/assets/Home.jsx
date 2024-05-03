import React, { useState } from 'react'
import Creat from './Creat'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Creat />
            {
                todos.length === 0 ?
                    <div>
                        <h2>No Record</h2>
                    </div> :
                    todos.map(todo => (
                        <div>
                            {todo}
                        </div>
                    ))
            }

        </div>
    )
}

export default Home