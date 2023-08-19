
function ArrayMethods() {
    
    

    const data =  [
        {
            id: 1,
            name: '小明',
            cash: 1000,
            fav: '海鮮粥'
        }
    ]
    

    return (<div>
        { data.map((item, index) => {
            return (<div key={index}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.cash}</li>
                    <li>{item.fav}</li>
                </ul>
            </div>)
        })}
    </div>)
}


export default ArrayMethods;
