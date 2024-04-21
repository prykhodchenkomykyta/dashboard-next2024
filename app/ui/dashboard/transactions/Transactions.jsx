import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jon Snow
              </div>
            </td>
            <td className={`${styles.status} ${styles.pending}`}>Pending</td>
            <td>14.04.2024</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jon Snow
              </div>
            </td>
            <td className={`${styles.status} ${styles.done}`}>Done</td>
            <td>14.04.2024</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jon Notsnow
              </div>
            </td>
            <td className={`${styles.status} ${styles.cancelled}`}>
              Cancelled
            </td>
            <td>14.04.2024</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jon Snow
              </div>
            </td>
            <td className={`${styles.status} ${styles.pending}`}>Pending</td>
            <td>14.04.2024</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
