/**
 * App => Captial ? why?
 * JSX => JavaScript+ XML
 * XML? -->Extended Markup Language
 * Function which returns XML that function is called component Component of React..
 * @returns
 */

export default function App() {
  return (
    <div>
      <div
        className="bg-dark text-light p-2 fw-bold"
        style={{ height: "50px" }}
      >
        Hello Vrushabh
      </div>
      <HelloWorld></HelloWorld>
      <HelloWorld></HelloWorld>
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

/**
 * HTML => Pre Defined Tags like <div> <h1> but HTML tags are in lowercase
 * react => user defined Tag => Component.
 * <<HelloWorld></HelloWorld>  //is userdefined tag
 *
 * @returns
 */
function HelloWorld() {
  return (
    <div>
      <div className="bg-alert alert-danger p-2">Hello World</div>
      <p className="bg-alert alert-info p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        blanditiis, reiciendis laborum ducimus explicabo provident corrupti
        consequatur quidem illum, ipsum adipisci asperiores fuga esse laudantium
        ipsa architecto. Ullam qui, provident est eligendi cumque delectus. Quis
        facere, laborum, consectetur iste aliquam ad necessitatibus minima
        obcaecati exercitationem repellat ipsum odit hic reiciendis?
      </p>
    </div>
  );
}
