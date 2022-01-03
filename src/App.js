export default function App() {
  return (
    <div>
      <HelloUniverse></HelloUniverse>
      <HelloUniverse />
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
