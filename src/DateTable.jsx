import { useState } from "react"

const data = [
    {
        id:1,
        name: '購買雜貨',
        due: '2023-07-30',
        com: true
    }
]


function DataTable() {
    
    const [todo, setTodo] = useState(data)

    return <div>
        DataTable


        {todo.map((item) => {
            return ( <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.due}</td>
                <td><button onClick={() => {
                    const newTodo = [...data]; //展開 ES6 淺拷貝

                    // 改特定位置 todo
                    const newTodo = todo.map(() => {
                        
                    });


                    setTodo(newTodo);
                }}>{item.com ? '是':'否'}</button>{item.com ? '是':'否'}</td>
            </tr> )
        })}
    </div>



}



export default DataTable;
