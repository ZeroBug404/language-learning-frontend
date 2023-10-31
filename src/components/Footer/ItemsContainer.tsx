import Item from "./Item";
import { COMPANY, PRODUCTS, RESOURCES, SUPPORT } from "./Menus";

const ItemsContainer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-[#41246d] w-10/12 m-auto">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
    );
  };
  
  export default ItemsContainer;