import React,{createContext,useState,useContext} from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const initialRecipes =[
        {
            id:1, nome:'Bolo de Chocolate', ingredientes:'farinha, Ovos, Chocolate', preparo:'Misture tudo e asse por 40 min', imagem:require('../assets/img/bolo.jpg'),
        },
        {
            id:2, nome:'Brigadeiro', ingredientes:'farinha, Ovos e Chocolate', preparo:'Conzinhe ate engrossar e enrole', imagem:require('../assets/img/briga.jpg'),
        },
        {
            id:3, nome:'Panqueca', ingredientes:'Farinha,Leite e Ovos ', preparo:'Misture tudo e frite em uma frigideira', imagem:require('../assets/img/panqueca.jpg'),
        },
    ]
}