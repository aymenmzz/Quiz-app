import { push } from "next/router";
import DarkModeButton from "./DarkModeButton";

export default function Layout({ children, dark, toggleDark }) {
  return (
    <div
      className={
        dark ? "bg-gray-900 text-blue-200" : "bg-gray-200 text-blue-900"
      }
    >
      <header
        className={`flex justify-between items-center text-xl lg:text-2xl py-4 px-2 ${
          dark ? "bg-gray-800 text-blue-300" : "bg-gray-300 text-blue-800"
        }`}
      >
        <div className="flex ml-2 items-center" onClick={() => push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <span className="ml-3 font-bold">Quizicall</span>
        </div>
        <DarkModeButton toggleDark={toggleDark} dark={dark} />
      </header>

      {children}
      <footer
        className={`py-3 flex justify-around items-center font-bold text-lg ${
          dark ? "bg-gray-800 text-blue-300" : "bg-gray-300 text-blue-800"
        }`}
      >
        <span onClick={() => push("/annexe")}>
          Annexe {"(pour employeur potentiel)"}
        </span>
      </footer>
    </div>
  );
}
