// by default everything here is a server component, but we have onChange hooked up
// and this interactivity needs to be on the client; this needs to be a client component
"use client"


type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({id, title, complete, toggleTodo} : TodoItemProps) {
    return <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}></input>
        <label htmlFor={id} 
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}