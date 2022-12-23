import clsx from "clsx";

interface props {
  currentRoute: string;
}

const routes = [
  {
    name: "Home",
    route: "/2023",
  },
  {
    name: "FAQ",
    route: "/2023/faq",
  },
  {
    name: "Events",
    route: "/2023/events",
  },
  {
    name: "Contact",
    route: "/2023/contact",
  },
];

const Nav: React.FC<props> = ({ currentRoute }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center absolute bottom-6">
        <nav className="rounded-full bg-gray-900">
          <ul className="flex">
            {routes.map((item) => (
              <li
                key={item.name}
                className={clsx(
                  "no-underline py-2 px-4 rounded-[6rem] lg:py-4 lg:px-8",
                  item.route === currentRoute && "bg-black"
                )}
              >
                <a href={item.route} className="no-underline" rel="prefetch">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
