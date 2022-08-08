import { useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import './Exercise.css'
import ReactPaginate from 'react-paginate';


const Exercise = () => {
    const [exerList, setexerList] = useState([])
    const [pageNumber, SetPageNumber] = useState(0);
    useEffect(() => {
        exercise()
    }, [])

    const exercise = async () => {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
        console.log(exerciseData)
        setexerList(exerciseData);
    }
    const exercisePerPage = 12;
    const pageVisited = pageNumber * exercisePerPage;
    const pageCount=Math.ceil(exerList.length/exercisePerPage);
    const changePage=({selected})=>{
        SetPageNumber(selected);
    }
    return (
        <div className="heading">
            <h1>All Exercise Details</h1>
            <div className="exerciseCard">
                {exerList.slice(pageVisited, pageVisited + exercisePerPage).map((list) => {
                    return <div className="cardBody">
                        <img src={`http://d205bpvrqc9yn1.cloudfront.net/${list.id}.gif`} alt="exercise" />
                        <h3>{list.name}</h3>
                    </div>
                })}
            </div>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </div>
    )
}
export default Exercise;