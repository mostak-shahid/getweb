import MenuItems from "./MenuItems";
const Dropdown = ({submenus,dropdown,depthLevel}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    // console.log(submenus);
    // console.count();
    const data = Array.isArray(submenus)?submenus:Object.values(submenus);
    return ( 
        <>
        {
            data.length?
                <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} >
                    {
                        data.map((submenu, index) => ( 
                            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
                        ))
                    } 
                </ul>
            :''
        }
        </>
    );
};

export default Dropdown;