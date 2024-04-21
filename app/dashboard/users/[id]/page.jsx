import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="" />
        </div>
        Jon Snow
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Jon Snow" />
          <label>Email</label>
          <input type="email" name="email" placeholder="jonsnow@email.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="+123123" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Winterfell" />
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
