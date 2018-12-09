import React from "react"
import {Redirect} from "react-router-dom"
import Index from "../view/index";
import Book from "../view/book";
import About from "../view/about";
import Page404 from "../view/page404";
let routerComponent =[
   {
        render:()=>{
            return <Redirect to="/index" />
        }
   },
   {
       render:(props)=>{
           return <Index {...props} />
       }
   },
   {
        render:(props)=>{
            return <Book {...props} />
        }
    },
    {
        render:(props)=>{
            return <About {...props} />
        }
    },
    {
        render:(props)=>{
            return <Page404 {...props} />
        }
    },
]
export default routerComponent;