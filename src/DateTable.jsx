import { useState } from "react"

const data = [
    {
        id: 1,
        name: '購買雜貨',
        dueDate: '2023-07-30',
        completed: true
    },
    {
        id: 2,
        name: '完成報告',
        dueDate: '2023-08-01',
        completed: false
    },
    {
        id: 3,
        name: '清理房間',
        dueDate: '2023-07-28',
        completed: true
    },
    {
        id: 4,
        name: '計畫假期',
        dueDate: '2023-08-05',
        completed: false
    },
    {
        id: 5,
        name: '處理稅務',
        dueDate: '2023-08-10',
        completed: false
    }
]


function DataTable() {
    
    const [todo, setTodo] = useState(data)

    return <div>
        DataTable

        <table>
            <thead>
                <tr>
                    <th>代辦事項名稱</th>
                    <th>到期日</th>
                    <th>是否已完成</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((item) => {
                    return (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.dueDate}</td>
                        <td><button onClick={() => {
                            // setTodo(!item.completed)
                            // 這樣會錯 setTodo...，請寫入完整的值

                            // const newTodo = [...data]; // 展開 ES6

                            // 只能改變一個位置
                            // newTodo[0].completed = !newTodo[0].completed;

                            // 改變特定位置 todo
                            // 1.簡單版
                            // newTodo.forEach((newItem) => {
                            //     if (newItem.id === item.id) {
                            //         newItem.completed = !newItem.completed
                            //     }                                
                            // });

                            // 2.中階
                            // const newTodo = todo.map((newItem) => {
                            //     if (newItem.id === item.id) {
                            //         newItem.completed = !newItem.completed
                            //     }
                            //     return newItem
                            // });

                            // 3.惡夢
                            const newTodo = todo.map((newItem) => newItem.id === item.id ? {
                                    ...newItem,
                                    completed: !newItem.completed                                    
                                } : newItem
                            );


                            console.log(newTodo);
                            setTodo(newTodo);
                        }}>{item.completed? '是':'否'}</button></td>
                    </tr>)
                })}
            </tbody>
        </table>


        
    </div>



}



export default DataTable;
