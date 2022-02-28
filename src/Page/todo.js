import * as React from 'react';
import './Todo.css';

function TODO(){
    const [editIndex, setEditIndex] = React.useState(null);
    const [currentValue, setCurrentValue] = React.useState('');
    const [list, setList] = React.useState(
        localStorage.getItem('TodoList')? JSON.parse(localStorage.getItem('TodoList')): []
    );
    const [currentIndex, setCurrentIndex] = React.useState(
        localStorage.getItem('TodoList')? JSON.parse(localStorage.getItem('TodoList')).length: 0
    );

    const handleAddTODOList = () => {
        if(currentValue.length === 0){
            alert('Please enter todo name')
            return ;
        }
        let todoList = [...list];
        if(editIndex !== null){
            for(let i=0; i<todoList.length; i++){
                if(editIndex === todoList[i].index){
                    todoList[i] = { index: todoList[i].index, value: currentValue}
                }
            }
            setEditIndex(null);
        } else {
            todoList.push({ index: currentIndex, value: currentValue})
            setCurrentIndex(currentIndex+1);
        }
        setList(todoList);
        setCurrentValue('');
        localStorage.setItem('TodoList', JSON.stringify(todoList));
    }

    const handleEdit = (index) => {
        let todoList = [...list];
        for(let i=0; i<todoList.length; i++){
            if(todoList[i].index === index){
                setEditIndex(index);
                setCurrentValue(todoList[i].value);
            }
        }
    }

    const handleDelete = (index) => {
        console.log(index);
        
        let todoList = [...list], newTodoList = [];
        for(let i=0; i<todoList.length; i++){
            console.log(todoList[i], index, todoList[i].index !== index);
            
            if(todoList[i].index !== index){
                newTodoList.push(todoList[i])
            }
        }
        setList(newTodoList);
        localStorage.setItem('TodoList', JSON.stringify(newTodoList));
    }

    return (
        <div className="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <input placeholder='todo name' value={currentValue} onChange={e => setCurrentValue(e.target.value)} type="text"/><button onClick={handleAddTODOList}>Add</button>
            </p>
            <h3>Todo List</h3>
            <ul id="tasks">
                {list.map((data, index) => (
                    <li key={index}>
                        <input type="text" value={data.value} disabled/>
                        <button className="edit" onClick={e => handleEdit(data.index )}>Edit</button>
                        <button className="delete" onClick={e => handleDelete(data.index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default <TODO/>