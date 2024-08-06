import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="restaurant-menu">
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h2 className="menu-title">Cart List</h2>
            <p className="menu-count">Total {items.length} Items</p>
          </div>
          <div className="menu-items-list">
            {items.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button
                    className="add-btn"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="clear-btn" onClick={handleClearCart}>
            Clear Cart 🧹
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
