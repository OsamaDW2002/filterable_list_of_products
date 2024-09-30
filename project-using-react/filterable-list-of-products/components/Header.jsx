export function Header({name, title}) {
    return (
        <header className={'header'}>
            <span>{name}</span>
            <span>{title}</span>
        </header>
    )
}