export function Button({name, onClick, filter}) {
    return (
        <button className={filter === name.toLowerCase()? 'active' : ''} onClick={onClick}>
            {name}
        </button>
    )
}