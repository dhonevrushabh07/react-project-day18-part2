export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="container-fluid p-0">
      <div className="bg-dark text-light p-2 fs-1 sticky-top">Twitter</div>

      {list.map((item) => (
        <div>
          <div
            className="row d-flex  justify-content-center align-content-center bg-alert alert-info"
            style={{ height: "70px" }}
          >
            <div className="col-2   text-center ">
              <img
                className="rounded-circle "
                src="https://picsum.photos/00"
                style={{ height: "50px" }}
                alt=""
              />
            </div>
            <div className="col-10  fs-1">Vrushabh Dhone</div>
          </div>
          <div className="bg-alert alert-danger p-2 mt-1 fw-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            libero ratione facere, sunt nesciunt blanditiis. Modi dolor aut
            itaque beatae exercitationem, vel, temporibus laudantium ullam vero
            totam suscipit dolore quos incidunt dolorum officia non aperiam
            doloremque veritatis eveniet? Earum cumque aperiam nesciunt.
            Accusamus, dolore cupiditate dolor consequuntur earum enim
            reprehenderit quae voluptate minus, voluptas, suscipit optio quaerat
            fugiat maxime deserunt dignissimos soluta nihil cumque. Aut vitae
            pariatur saepe vel blanditiis adipisci et. Molestiae nostrum facere,
            nulla illum vel nam praesentium deserunt aut vitae minima earum sunt
            voluptatum doloribus in quod illo eum omnis quae, nesciunt placeat
            ducimus! Sed, dolore temporibus?
          </div>
        </div>
      ))}
    </div>
  );
}
