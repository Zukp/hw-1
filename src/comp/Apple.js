
import './AppleCss.css'

function Font(props) {
  return (
      <div  className="Cont__photo">
          <h2>{props.id}</h2>
          <img src={props.Url} />
          <p>{props.prise}</p>
      </div>
  )
}
export default Font
