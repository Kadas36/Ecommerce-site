import "./rightbar.css";
import Online from "../online/online";
import { Users } from "../../dummyDate";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Nairobi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kenya</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof11.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof12.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof13.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof14.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof7.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/prof6.jpg"
              alt="img"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : HomeRightbar}
      </div>
    </div>
  );
}
