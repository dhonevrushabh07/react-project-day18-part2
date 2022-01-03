export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="row">
        {list.map(() => (
          <div className="col-md-4 col-sm-6 mt-2">
            <MyCard />
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row">
      <div
        className=" col bg-dark text-light fs-1 p-2 fw-bolder sticky-top"
        style={{ height: "60px", fontFamily: "italic" }}
      >
        My Shopping App
      </div>
    </div>
  );
}

function MyCard() {
  return (
    <div className="card">
      <div className="card-header bg-dark text-light fs-2 fw-bold border-danger">
        Moto Xg
      </div>
      <div className="card-body p-1">
        <img
          className="img-fluid border-info"
          src="https://picsum.photos/900"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="bg-alert alert-danger text-dark fw-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          architecto. Laboriosam odio iste maiores placeat minus autem
          laudantium, dolorum exercitationem!
        </div>
      </div>
      <div className="card-footer bg-dark">
        <div>
          <input
            className=" btn-outline-dark m-2 rounded-pill p-2"
            type="button"
            value="Add to Cart"
          />
          <input
            className=" btn-outline-dark m-2 rounded-pill p-2"
            type="button"
            value="Buy Now"
          />
        </div>
      </div>
    </div>
  );
}
