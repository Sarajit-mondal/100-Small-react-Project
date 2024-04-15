import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootPage() {
  return (
    <div className="w-11/12 mx-auto max-w-[1180px">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default RootPage;
