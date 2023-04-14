import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/7.jpg"
                alt="Img"
                className="profileCoverImg"
              />
              <img
                src="assets/person/prof10.jpg"
                alt="Img"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kadas Tom</h4>
              <span className="profileInfoDesc">Never give up</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
