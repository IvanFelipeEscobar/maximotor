// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { getUserInfo } from "./utils/api-requests";
// import { Auth } from "./utils/auth";
// import { User } from "./utils/types";
// interface GlobalState {
//   user: User | null;
// }

// const initialState: GlobalState = {
//   user: null,
// };

// const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// export const useGlobalState = () => {
//   const context = useContext(GlobalStateContext);
//   if (!context) {
//     throw new Error("useGlobalState must be used within a GlobalStateProvider");
//   }
//   return context;
// };
// interface GlobalStateProviderProps {
//   children: ReactNode;
// }
// export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
//   children,
// }) => {
//   const [state, setState] = useState<GlobalState>(initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = Auth.isLoggedIn() ? Auth.getToken() : null; //token is saved in local storage when user signs in
//       if (!token || Auth.isTokenExpired(token)) {
//         Auth.logout();
//         return;
//       } //handling expired tokens
//       try {
//         const res = await getUserInfo(token);
//         const data: User = await res.json();
//           setState((prevState) => ({
//             ...prevState,
//             user: data,
//           }));
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <GlobalStateContext.Provider value={state}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };
