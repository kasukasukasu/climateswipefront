// // tämä js.tiedosto mahdollistaisi sen, että kotivulle pääsee vain siten, että kirjautuu sisään
//
// // Tämä komponentti renderöi conditionally joko passed Component tai <Redirect/> blokin riippuen lähetetystä autentikaatio propsista.
//
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
//
// export default function PrivateRoute({component: Component, authenticated, ...rest}) {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 authenticated === true ? (
//                     <Component {...props} {...rest} />
//                 ) : (<Redirect to="/login" />
//                 )
//             }
//         />
//     );
// }