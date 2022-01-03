/**
 * style=""
 * style="background-color:red"
 *
 *
 * Rule
 * style={{backgroundColor:"red"}}
 *
 * 1)First two letters CSS property are now Converted into camelcase property
 * 2)The value of the property must be in "Double Qoute"
 */

export default function App() {
  return (
    <div>
      <div
        style={{
          height: "50px",
          backgroundColor: "royalblue",
          fontWeight: "bolder",
          fontSize: "20px",
          padding: "5px",
          textAlign: "center",
          color: "white",
        }}
      >
        Hello Guys
      </div>
    </div>
  );
}
