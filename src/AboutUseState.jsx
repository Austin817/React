import { useState } from "react"

const initialData = [
    {
        "id": 1,
        "name": '珍珠奶茶',
        "price": 50,
    },
    {
        "id": 2,
        "name": '冬瓜檸檬',
        "price": 45,
    },
    {
        "id": 3,
        "name": '翡翠檸檬',
        "price": 55,
    },
    {
        "id": 4,
        "name": '四季春茶',
        "price": 45,
    },
    {
        "id": 5,
        "name": '阿薩姆奶茶',
        "price": 50,
    },
    {
        "id": 6,
        "name": '檸檬冰茶',
        "price": 45,
    },
    {
        "id": 7,
        "name": '芒果綠茶',
        "price": 55,
    },
    {
        "id": 8,
        "name": '抹茶拿鐵',
        "price": 60,
    },
]

function AboutUseState() {
    const [data, setData] = useState(initialData)
    return (
        <>
        
        </>
    )
    

}


export default AboutUseState;