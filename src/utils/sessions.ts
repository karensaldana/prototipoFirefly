import Cookies from "js-cookies";

export const setSessionCookies = (session: any): void => {
  Cookies.remove("session");
  Cookies.setItem("session", session, { expires: 14 });
};