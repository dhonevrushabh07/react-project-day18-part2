/**
 * class --in Javascript class reserved keyword
 * because of that we have to use "className" stead of "class".  class--->className
 * @returns
 */

export default function App() {
  return (
    <div>
      <h1 className="bg-alert alert-danger p-4 text-black">Hello World</h1>
      <h1 className="bg-alert alert-success p-4 fs-3 text-danger">
        Hello Universe
      </h1>
    </div>
  );
}
