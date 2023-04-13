// Again this is my solution. The most "optimal" solution didn't have a Person component.

const Person = ({
  id,
  name,
  job,
  image,
  text,
  nextPerson,
  previousPerson,
  randomPerson,
}) => {
  return (
    <div
      className="person"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        margin: "auto 10px",
        minHeight: "100vh",
      }}
    >
      <figure
        style={{
          paddingBottom: "0",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "150px", paddingBottom: "0", borderRadius: "25px" }}
        />
      </figure>
      <h2 style={{ paddingBottom: "10px" }}>{name}</h2>
      <h3 style={{ paddingBottom: "10px" }}>{job}</h3>
      <p
        style={{
          textAlign: "justify",
          paddingBottom: "10px",
          lineHeight: "1.3rem",
          fontWeight: "300",
        }}
      >
        {text}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => previousPerson(id)}
          className="btn"
          style={{ width: "80px", height: "30px" }}
        >
          Previous
        </button>
        <button
          onClick={() => randomPerson()}
          className="btn"
          style={{ width: "80px", height: "30px" }}
        >
          Random
        </button>
        <button
          onClick={() => nextPerson(id)}
          className="btn"
          style={{ width: "80px", height: "30px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Person;
