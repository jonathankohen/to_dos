import React from 'react';

const Task = (props) => {
    const { task, setList, index, list } = props;

    const onClick = () => {
        setList(() => {
            return list.filter((task) => list.indexOf(task) !== index);
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    const strike = {
        textDecoration: 'line-through',
        fontStyle: 'italic',
    };

    const noStrike = {
        textDecoration: 'none',
        fontStyle: 'normal',
    };

    return (
        <div className="container d-flex justify-content-center align-items-center my-3 border border-dark">
            <p
                className="mt-3 mr-1"
                style={task.isComplete ? strike : noStrike}
            >
                <strong>{task.name}</strong>
            </p>
            <label htmlFor="checkbox"></label>
            <input
                type="checkbox"
                onChange={onChange}
                name="checkbox"
                checked={task.isComplete}
                className="mr-3"
            />
            <button
                onClick={onClick}
                className="btn btn-danger btn-sm py-0"
                style={{ fontStyle: '0.8em' }}
                type="button"
            >
                Delete
            </button>
        </div>
    );
};

export default Task;
