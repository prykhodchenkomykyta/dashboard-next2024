import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                  Jon Snow
                </div>
              </td>
              <td>jon@email.com</td>
              <td>20.04.2024</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/users/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
