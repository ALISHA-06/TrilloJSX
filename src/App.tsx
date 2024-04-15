import Header from "./Markup/header";
import Content from "./Markup/content";
import "./Sass/base.scss";
import "./Sass/components.scss";
import "./Sass/layout.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
