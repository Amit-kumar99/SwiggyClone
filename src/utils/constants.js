const PROXY_URL="https://zwiggy-backend-proxy-1.onrender.com/api";

export const LOGO_URL = 
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png";

export const SWIGGY_SEARCH_API=
  `${PROXY_URL}/dapi/restaurants/search/suggest?lat=17.4801969&lng=78.4171028&str=`;

export const SUGGESTIONS_IMG_CDN_URL = 
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";

export const RESTAURANTS_API =
  `${PROXY_URL}/dapi/restaurants/list/v5?lat=17.4300414&lng=78.38945939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_ITEMS_URL =
  `${PROXY_URL}/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4801969&lng=78.4171028&restaurantId=`;

export const MENU_ITEMS_IMG_API=
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";