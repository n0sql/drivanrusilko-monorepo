
const MenuDrop = ({menus}:{menus:any}) => {
  return (
    <div
      id="mega-menu-full-cta-dropdown"
      className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="grid max-w-screen-xl  px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-6 md:px-6">
        {menus.map((menu:any, windex:number) => {
          return (
            <ul
              key={windex}
              className="space-y-4 sm:mb-0 mt-3"
              aria-labelledby="mega-menu-full-cta-button"
            >
              <p>{menu.name}</p>
              {menu.subcategories.map((sub:any, index:number) => {
                return (
                  <li key={index}>
                    <p className="hover:underline text-primary font-bold">{sub.name}</p>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export {MenuDrop}
