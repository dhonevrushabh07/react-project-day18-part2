export default function App() {
  return (
    <div>
      <HelloUniverse></HelloUniverse>
      <HelloUniverse />
      <Vrushabh></Vrushabh>
      <Vrushabh />
    </div>
  );
}

/**
 *
 */

function HelloUniverse() {
  return (
    <div>
      <div
        className="fs-1 bg-link-light p-2 fw-bold font-monospace mt-2"
        style={{ borderBottom: "red solid 5px", borderTop: "black solid 5px" }}
      >
        Hello Universe
      </div>
      <p
        className="bg-dark text-light p-2 "
        style={{ borderBottom: "red solid 5px" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi
        pariatur quae hic reiciendis suscipit? Optio sapiente dignissimos eos
        voluptatum odit consequatur ab vitae quaerat deleniti officiis dolorem,
        harum iste nam facere est impedit minima distinctio tenetur accusantium!
        A illum cupiditate animi dolor. Incidunt distinctio exercitationem
        repellendus? Necessitatibus dolores nam temporibus voluptatum officia
        provident quasi nulla unde tempora vitae iure reiciendis obcaecati,
        magni debitis est commodi quidem praesentium enim molestiae sequi
        repudiandae totam possimus! Labore aliquam facilis eligendi iure alias
        itaque cum ipsam soluta sed iusto enim magnam ex doloribus voluptatem
        sequi aliquid facere numquam consequatur quasi eos, fugiat eaque?
      </p>
      <input
        className="btn btn-outline-danger mx-2 w-25"
        type="button"
        value="Like"
      />
      <input
        className="btn btn-outline-danger w-25"
        type="button"
        value="Dislike"
      />
    </div>
  );
}

export function Vrushabh() {
  return (
    <div>
      <div
        className="bg-info p-2 fs-1 fw-bolder text-light mt-1"
        style={{ height: "70px", borderBottom: "black solid" }}
      >
        Hello Vrushabh Its your Tag
      </div>
      <p className="bg-secondary text-light p-2 font-monospace">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        praesentium illo architecto enim rerum ratione fugiat quaerat cumque
        velit nihil vitae suscipit commodi, quia necessitatibus odit doloremque
        at provident accusamus reprehenderit iste atque recusandae! Nemo fugit
        doloribus reprehenderit reiciendis sint voluptatem labore eaque magnam
        provident minus recusandae adipisci tempora, eligendi aspernatur
        architecto. Repudiandae modi doloremque molestiae rem, officia ipsum
        commodi id velit ipsam corporis recusandae quisquam enim qui odio! Id
        facilis fugiat ea. Laborum quia repellendus ea quam optio aspernatur
        debitis eligendi molestiae minus tenetur! Magnam, earum, voluptatum
        pariatur, voluptatem id ex numquam voluptates repudiandae aut ullam
        aperiam repellendus quo?
      </p>
    </div>
  );
}
