import Link from "next/link";
import style from "@/pages/components/styles/SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h2>Menú</h2>
      <ul>
        <li>
          <Link href="/">MetodoCRUD</Link>
        </li>
        <li>
          <Link href="/">...</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
