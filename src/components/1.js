export default function Vrushabh007() {
  return (
    <div>
      <div className="fs-1 bg-black text-light p-2 mt-1">
        <span>
          <img
            className="rounded-circle mx-2"
            src="https://picsum.photos/900"
            style={{ height: "60px" }}
            alt=""
          />
        </span>
        Vrushabh Vijayrao Dhone
      </div>
      <p className="bg-info p-2 text-dark text-black fw-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        corrupti qui atque labore quidem dicta! Similique cupiditate, ut magni
        ea ipsam non rerum nesciunt quod perspiciatis impedit hic laborum ullam
        vitae eaque deserunt mollitia laudantium, autem dicta voluptatem?
        Mollitia voluptates recusandae aliquid animi, quasi fugit maiores? Esse,
        porro? Provident, vel corporis nobis dolorem doloremque ut officia
        ratione odit iste error vitae necessitatibus cum cupiditate aut ipsa
        deserunt officiis iusto ipsam unde quibusdam omnis ducimus. Accusantium
        ab aperiam cupiditate explicabo. Placeat consequuntur quia repudiandae
        enim ducimus laboriosam provident. Accusamus enim, necessitatibus,
        ducimus perspiciatis, harum expedita ipsam voluptate dignissimos
        inventore officiis in.
      </p>
      <div className="">
        {" "}
        <input
          className="btn btn-outline-info mx-1 bg-danger w-25 "
          type="button"
          value="Like"
        />
        <input
          className="btn btn-outline-info mx-1 bg-danger w-25 "
          type="button"
          value="Dislike"
        />
        <input
          className="form form-control my-1"
          type="text"
          name="Comment"
          id=""
          placeholder="Comment.."
          style={{ width: "400px" }}
        />
      </div>
      <span>
        {" "}
        <input
          className="btn btn-outline-danger bg-secondary fw-bold w-25 "
          type="button"
          value="Post"
        />
      </span>
    </div>
  );
}
