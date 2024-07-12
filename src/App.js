import data from "./components/data";
import SingleQuestion from "./components/SingleQuestion";

function App() {
  const queries = data;
  console.log(queries);

  return (
    <main className="main-container">
      <section className="side-bar">
        <h1>Questions and Answers about Login</h1>
      </section>
      <section className="queries-container">
        {queries.map((query) => {
          console.log(query);
          const { id, title, info } = query;
          return <SingleQuestion key={id} {...query} />;
        })}
      </section>
    </main>
  );
}

export default App;
