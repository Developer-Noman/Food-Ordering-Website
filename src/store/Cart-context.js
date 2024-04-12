import React from "react";

const Cartcontext= React.createContext( {
items:[],
amount:0,
addItem: (item) =>{},
removeItem: (id)=>{}

})

export default Cartcontext;