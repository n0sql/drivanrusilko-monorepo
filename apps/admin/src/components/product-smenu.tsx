
export default function ProductsMenu ({children}:{children: React.ReactNode}):JSX.Element
{
    return(
        <ul
      className="relative list-none px-6 space-y-6 overflow-y-scroll h-[calc(100vh-8rem)] mylist "
      data-te-sidenav-menu-ref
    >
      <h4 className="text-left text-gray-300  px-2">Shop Our Products</h4>
      {children}
    </ul>
    )
}