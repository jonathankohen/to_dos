import React from 'react';

const Input = (props) => {
    const { list, setList } = props;
    let task = {
        name: '',
        isComplete: false,
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task]);
        // adds new item to the state array
        e.target.value = '';
    };

    return (
        <div className="container w-50 mt-3">
            <input
                className="form-control"
                onChange={onChange}
                type="text"
                name="task"
            />
            <button
                onClick={onClick}
                className="btn btn-primary btn-block mt-1"
                type="button"
            >
                Add Task
            </button>
        </div>
    );
};

export default Input;
