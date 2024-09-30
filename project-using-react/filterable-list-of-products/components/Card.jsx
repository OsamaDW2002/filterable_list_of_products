export function Card({name, category, price}) {
    return (
        <div className={'card'}>
            <div className={'name'}>
                {name}
            </div>
            <div>
                <span>
                    Price: {price}$
                </span>
                <span>
                   <div>{category}</div>
               </span>
            </div>
        </div>
    )
}