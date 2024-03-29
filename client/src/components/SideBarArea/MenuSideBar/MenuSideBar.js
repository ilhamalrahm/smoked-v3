import React from "react"
import { Link } from "react-router-dom"
import styles from "./MenuSideBar.module.css"

const MenuSideBar = (props) => {
    return (
        <div className="h-100 position-fixed dashboard" id="dash" style={{ zIndex: 100, right: 0 }}>
            <div className="dash-col-1">
                <div className="trapezium" onClick={props.handleMenuClick}></div>
            </div>
            <div className="dash-col-2 flex flex-column px-3" id="hidebar">
                <div className="d-flex p-md-5 px-4 flex-column justify-content-center align-items-end" style={{ borderBottom: "0.8px solid gray", height: "88%" }}>
                    <Link to="#" className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p className="my-auto text-right">Dashboard</p>
                    </Link>
                    <Link 
                        to="#" 
                        className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} 
                        style={{ textDecoration: "none", fontSize: "1.4rem" }}
                        onClick={() => props.handleSidebarClick("rules")}
                    >
                        <p className="my-auto text-right">Rules</p>
                    </Link>
                    <Link to="#" className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p className="my-auto text-right">Walkthrough</p>
                    </Link>
                    <Link 
                        to="#" 
                        className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} 
                        style={{ textDecoration: "none", fontSize: "1.4rem" }}
                        onClick={() => props.handleSidebarClick("leaderboard")}
                    >
                        <p className="my-auto text-right">Leaderboard</p>
                    </Link>
                    <Link 
                        to="#" 
                        className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} 
                        style={{ textDecoration: "none", fontSize: "1.4rem" }}
                        onClick={() => props.handleSidebarClick("answerlog")}
                    >
                        <p className="my-auto text-right">Answer Log</p>
                    </Link>
                    <Link 
                        to="#" 
                        className={`${styles["side-nav-button"]} side-nav-button text-white w-100 py-2 px-3 lora-regular`} 
                        style={{ textDecoration: "none", fontSize: "1.4rem" }}
                        onClick={() => props.handleSidebarClick("announcements")}
                    >
                        <p className="my-auto text-right">Announcements</p>
                    </Link>
                </div>
                <div className="d-flex flex-column w-100 my-3 align-items-center justify-content-end">
                    <div className="d-flex justify-content-center align-items-center link-bar">
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-discord mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="https://instagram.com/sudo.mist" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-facebook-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-linkedin-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                    </div>
                    <div className="my-2 text-dark">
                        <tt>Made with love at <span><a className="text-muted" href="https://wearemist.in" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>MIST</a></span></tt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSideBar