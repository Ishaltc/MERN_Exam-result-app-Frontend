import Cookies from "js-cookie";

export function adminReducer(
  state = Cookies.get("admin") ? JSON.parse(Cookies.get("admin")) : null,
  action
) {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}
