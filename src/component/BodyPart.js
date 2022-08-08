import { useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import './Style.css'


const BodyPart = () => {
    const [data, setData] = useState();
    const [part, setPart] = useState([])
    const handleData = (part) => {
        setData(part)

    }

    console.log(data)
    useEffect(() => {
        const bodyPart = async () => {
            const partData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions)
            setPart(partData)
            console.log(partData)

        }
        bodyPart();
    }, [])
    return (
        <div className="bodyPart">
            <h3>Recommend Body Part</h3>
            {part.map((part) => {
                return <li key={part.id} style={{
                    listStyle: 'none',
                    display: 'inline',
                    justifyContent:'center',
                    margin: '8px',
                    textTransform: 'uppercase',
                    border:'1px solid rgb(243, 16, 16)',
                    borderRadius:'5px',
                    cursor:'pointer',
                    background:'rgb(243, 16, 16)',
                    color:'white',
                    paddingTop:'2px',
                    
                }}
                    onClick={() => { handleData(part) }} >
                    {part}
                </li>
            })}
        </div>
    )
}

export default BodyPart;