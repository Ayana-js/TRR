import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
    const {error, loading, todos, page, limit} = useTypedSelector( state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading) {
       return <h1>Loading...</h1>
    }

    if (error) {
        return <h1> {error} </h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}> {todo.id}. {todo.title}
            </div> )}
            <div style={{display: 'flex', }}> 
                {pages.map(p=>
                    <div style={{border: p === page? '2px solid green': '1px solid grey', padding: 10, margin: 5}}
                    onClick={() =>setTodoPage(p)}> 
                        {p}
                    </div> )}
            </div>
           
        </div>
    );
};

export default TodoList;