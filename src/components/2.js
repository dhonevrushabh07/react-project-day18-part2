import "./2.css";

export default function Anavi() {
  return (
    <div>
      <div className="header " style={{ height: "60px" }}>
        Hello Anavi
      </div>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam
        accusantium eveniet ullam delectus magnam natus, amet in labore minus
        qui libero dignissimos possimus ad, cum sunt sint! In magni quidem illo
        sapiente, itaque recusandae animi ratione blanditiis modi provident
        omnis doloribus similique tempora rerum architecto ducimus culpa
        deleniti nobis maxime placeat assumenda, explicabo fuga. Autem
        blanditiis animi, dolorem dicta earum quidem iusto repellendus est
        ducimus atque enim, similique vel dolores eius nesciunt? Commodi quis
        cupiditate fugit nam dolore ratione magni aliquam repellat non.
        Similique, omnis iste! Nihil, omnis. Ullam sequi exercitationem
        explicabo inventore quidem velit odio, a dolores cupiditate provident,
        mollitia atque quia facere vel? Suscipit voluptate accusantium
        exercitationem nulla, voluptatum obcaecati dolores. Amet cupiditate
        maiores eius suscipit id atque culpa animi quia veritatis? Tempore quod
        debitis porro unde assumenda esse illum eveniet delectus officiis
        temporibus! Nihil sunt ipsam nam, ex inventore maiores et sed veritatis
        dolor perferendis minima error ducimus numquam porro id rem cum?
        Blanditiis repellat quod ex asperiores harum dicta distinctio animi
        officia culpa quo aspernatur ut veritatis quas nesciunt debitis
        similique expedita unde, autem quam. Ullam sed eligendi nam aut eaque
        voluptates optio dolorem maxime ipsam ducimus vel a, explicabo ipsa
        culpa dicta quo impedit!
      </p>
      <div className="row">
        <div className="col">
          <input
            className="btn btn-outline-danger w-75 bg-alert alert-danger"
            type="button"
            value="Like"
          />
        </div>
        <div className="col">
          <input
            className="btn btn-outline-danger w-75 bg-alert alert-danger"
            type="button"
            value="Dislike"
          />
        </div>
        <div className="col">
          <input
            className="form form-control"
            type="text"
            name=""
            id=""
            placeholder="comment here.."
          />
        </div>
        <div className="col">
          <input
            className="btn btn-outline-danger w-75 bg-alert alert-danger"
            type="button"
            value="Post"
          />
        </div>
      </div>
    </div>
  );
}
