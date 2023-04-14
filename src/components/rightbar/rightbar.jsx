import "./rightbar.css";
import Online from "../online/online";
import { Users } from "../../dummyDate";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="AD" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tom</b> and <b>3 others</b> have birthdays today
          </span>
        </div>
        <img src="/assets/ad.png" alt="Img" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
