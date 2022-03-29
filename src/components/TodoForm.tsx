import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
const [title, setTitle] = useState<string>('')

const keyPressHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
        props.onAdd(title)
        setTitle('')
    }
}


    return(
        <div className="input-field mt2">
            <input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} type="text" id='tittle' placeholder="Enter that to do" onKeyPress={keyPressHandler} />
            <label htmlFor="tittle" className="active">Enter that to do</label>
        </div>
    )
}