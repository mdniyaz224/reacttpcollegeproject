import react from "react"
import img2 from './image/house.jpg'
import img3 from './image/house.jpg'
const Card = () => {
  return (
    <>
    <div  className=  " container">
      <div className="row row-cols-1 row-cols-md-3 g-4   ">
  <div className="col"style={{backgroundColor:"white"}}>
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

  <div className="col" style=
  {{backgroundColor:"red"}}>
    <div className="card h-100">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col"style=
  {{backgroundColor:"red"}}>
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
export default Card;
