import React from 'react'

const TodoDelete = ({onButtonClick}) =>{
    return(
        <div>
            <input 
                type='button'
                value='Delete'
                onClick={onButtonClick}
            />
        </div>
    )
}
export default TodoDelete