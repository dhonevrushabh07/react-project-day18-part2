export default function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="row">
        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>

        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>

        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>

        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>
        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>
        <div className="col-md-4 col-sm-6 mt-2">
          <MyCard />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row">
      <div
        className=" col bg-dark text-light fs-1 p-2 fw-bolder"
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
      <div className="card-header">Moto Xg</div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        inventore explicabo consectetur nemo maxime ab quisquam vel iste totam!
        Enim corrupti illo blanditiis quos itaque eum fugit laborum accusamus
        nemo quo? Corrupti facilis quasi delectus consequatur architecto, nam
        qui ipsam, eligendi facere molestiae aperiam sint quaerat dicta vitae
        excepturi ipsa, in consectetur aliquid. Consequatur, porro similique
        pariatur incidunt, illum enim cum eveniet numquam tempora, corporis
        nobis? Aliquid veritatis, iure tempore eum molestias distinctio voluptas
        accusantium nulla impedit beatae quasi vitae ducimus animi fuga! Beatae
        fugiat obcaecati doloribus ab facilis velit ut, provident quas incidunt
        enim porro soluta adipisci voluptatem nam?
        <div>
          <input type="button" value="Add to Cart" />
          <input type="button" value="Buy Now" />
        </div>
      </div>
    </div>
  );
}
