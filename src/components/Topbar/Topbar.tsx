import styles from "./Topbar.module.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Topbar(): JSX.Element {
  const user = {
    name: "John Doe",
    initials: "JD",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="https://remazing.eu/logo/logo.svg"
          alt="Remazing Logo"
        />
      </div>
      <div className={styles.profileItems}>
        <NotificationsActiveIcon
          className={styles.notificationBell}
          onClick={() =>
            /* Just to simulate a notification menu */
            alert("Notification Menu")
          }
        />
        <span className={styles.initials}>{user.initials}</span>
        <img
          onClick={() =>
            /* Just to simulate a notification menu */
            alert("Profile Menu")
          }
          className={styles.userAvatar}
          src={user.avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
}
