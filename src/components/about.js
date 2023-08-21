import { useState } from "react"
import React from 'react'
    
export default function About(props){

    // let [mystyle,setmystyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    let [btnname,setbtnname] = useState("Enable Dark Mode")

    // let darkmodefun = ()=>{
    //       if(mystyle.color == "black"){
    //         setmystyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setbtnname("Enable White Mode")
    //       }

    //       else{
    //         setmystyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setbtnname("Enable Dark Mode")
    //       }
    // }
    return(
    <div className="container-fluid">
        <div className="container py-3">
            <h1>About Us</h1>
        <div className="card my-3" style={{backgroundColor:props.mode ==='dark' ? 'grey':'white'}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, corporis.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

            <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ab, aperiam reprehenderit tenetur similique suscipit odio aliquam iusto ipsam cumque consectetur, alias vel qui atque?</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

            <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ab, aperiam reprehenderit tenetur similique suscipit odio aliquam iusto ipsam cumque consectetur, alias vel qui atque?</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>


            <div className="btn btn-primary">{btnname}</div>
        </div>
        
        </div>
    )
}