import Main from "./main";
import Sidebar from "./sidebar";
function Content() {
  return (
    <>
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default Content;
