export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const LOGO_URL =
  "https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png";

// export const MENU_API =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

export const MENU_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.985459&lng=72.6032893&page_type=DESKTOP_WEB_LISTING";

export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

export const ITEM_IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

export const shimmer_card_unit = 20;

export const shimmer_menu_card_unit = 4;

// Filter the restaurant data according input type
export const filterData = (searchText, restaurants) => {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
};

// Github - username
export const Github_UserName = "meetdshah26";
export const Github_Repository_Name = "Chat-app";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/meetshah2698/";
export const Twitter_Link = "https://twitter.com/";
export const Github_Link = "https://github.com/meetdshah26";
export const Email_Link = "mailto:meetdshah98@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};
