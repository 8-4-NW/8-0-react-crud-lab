import { useParams,useHistory } from "react-router-dom";
import Error from "../common/Error";

const Show = ({ shows, handleDelete }) => {

    const { id } = useParams()
    // alert(id)
    const history = useHistory()
    const show = shows.find(show => show.id === id)
    const handleClick = () => {
        history.push("/shows")
    }
    if(!show){ 
    return <Error/> }
    return(
        <section class="shows-show-wrapper">
        <h2>{show.title}</h2>
        <section class="shows-show">
          <aside>
            <p><span>Duration:</span> {show.duration}</p>
            <p><span>Listed Categories:</span> {show.listedIn }</p>
            <p><span>Country:</span> {show.country}</p>
            <p><span>Rating:</span> { show.rating }</p>
            <p><span>Date Added:</span> {show.releaseYear}</p>
          </aside>
          <article>
            <p>{ show.description }</p>
          </article>
          
          <aside><button onClick={handleClick}className="goBack">Go back</button></aside>
          <aside><button className="delete" onClick={handleDelete}value={ id }>Delete</button></aside>
        </section>
      </section> 
    )
}
export default Show;