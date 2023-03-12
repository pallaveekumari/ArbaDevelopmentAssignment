import * as types from "../AuthReducer/actionTypes";

export const login = (payload: any) => (dispatch: any) => {
  dispatch({ type: types.LOGIN__REQUEST });

  return fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.token));
      dispatch({ type: types.LOGIN__SUCEESS, payload: res });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: types.LOGIN__FAILURE });
    });
};
