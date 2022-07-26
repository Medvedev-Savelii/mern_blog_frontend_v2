import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://img.freepik.com/free-photo/close-up-of-happy-redhead-man-face-smiling-with-white-teeth-at-camera-wearing-glasses-for-better-sig_1258-77602.jpg?t=st=1658742181~exp=1658742781~hmac=f7f6aa3d49ea470f482dbbfd4e97ba3d69377875d7aff498b4b07d8833936257&w=1380"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Saveliy" name="name" />
          <label>Email</label>
          <input
            type="email"
            placeholder="savamedvedevv@gmail.com"
            name="email"
          />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
