import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid flex-grow-1 container-p-y">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
