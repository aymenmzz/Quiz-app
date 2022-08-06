import { push } from "next/router";
import DarkModeButton from "./DarkModeButton";

export default function Layout({ children, dark, toggleDark }) {
  return (
    <div>
      <header
        className={`flex justify-between py-4 px-2 ${
          dark ? "bg-gray-900 text-blue-200" : "bg-gray-200 text-blue-900"
        }`}
      >
        Quiz + logo
        <DarkModeButton toggleDark={toggleDark} dark={dark} />
      </header>

      {children}
      <footer>
        <span onClick={() => push("/")}>
          Annexe {"(pour employeur potentiel)"}
        </span>
      </footer>
    </div>
  );
}
