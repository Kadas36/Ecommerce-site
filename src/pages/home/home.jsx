import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainter">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
