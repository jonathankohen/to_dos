import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Task from './components/Task';
import Input from './components/Input';

function App() {
    const [list, setList] = useState([
        {
            name: 'Take out the trash',
            isSubmitted: false,
        },
    ]);

    return (
        <div className="App container" style={{ width: '800px' }}>
            {list.map((task, i) => (
                <Task task={task} setList={setList} index={i} list={list} />
            ))}
            <Input list={list} setList={setList} />
        </div>
    );
}

export default App;
