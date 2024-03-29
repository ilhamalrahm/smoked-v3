import React from "react"
import styles from "./../forms.module.css"
import { Link } from "react-router-dom"

const Forms1 = ({ click, vals, valset }) => {

    const stateUpdate = (input) => (e) => {
        valset(prevState => {
            return { ...prevState, [input]: e.target.value }
        });
    }

    return(
        <div className="py-1 px-1 d-flex justify-content-center text-left">
            <form autoComplete="off" className={`${styles["form-box"]} py-4 px-md-5 px-3 text-white`} style={{ borderRadius:"10px", opacity:"90%" }}>
                <h1 className="lora-bold text-white text-center">Sign<b className="bold" style={{ color:"#7027CE" }}>Up</b></h1>
                <div className="form-group">
                    <label for="name" className={`lora-regular ${styles.label}`}>Name</label>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="name" onChange={stateUpdate("name")} placeholder={vals.name}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label for="learner" className={`lora-regular ${styles.label}`}>Learner ID</label>
                    <p className="mb-2" style={{ fontSize: "0.8rem", color: "#7a5e5e" }}>If you do not have a college learner ID, please enter a valid email address</p>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="learner" onChange={stateUpdate("learner")} placeholder={vals.learner}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label for="reg" className={`lora-regular ${styles.label}`}>Registration Number</label>
                    <p className="mb-2" style={{ fontSize: "0.8rem", color: "#7a5e5e" }}>College Registration Number or ID</p>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="reg" onChange={stateUpdate("reg")} placeholder={vals.reg}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label for="college" className={`lora-regular ${styles.label}`}>College</label>
                    <input type="college" className={`${styles.textfield} form-control shadow-none`} id="college" onChange={stateUpdate("college")} placeholder={vals.college}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <Link to="/"> 
                    <button className="btn bg-black text-white">
                        Back Home
                    </button>
                </Link>
                <button style={{ backgroundColor:"#7027CE", borderRadius: "1.5rem" }} onClick={click} className="btn px-4 float-end text-white">Next</button>
            </form>
        </div>
    )
      
}


const Forms2 = ({ vals, clicks2, valset, handleSubmit }) => {

    const stateUpdate = (input) => (e) => {
        valset(prevState => {
            return{...prevState, [input]: e.target.value}
        });
    }

    return(
        <div className="d-flex py-1 px-1 justify-content-center text-left">
            <form autoComplete="off" className={`${styles["form-box"]} py-4 px-md-5 px-3 text-white`} style={{ borderRadius:"10px", opacity:"90%" }}>
                <h1 className="lora-bold text-white text-center">Sign<b className="bold" style={{ color: "#7027CE" }}>Up</b></h1>
                <div className="form-group ">
                    <label className={`lora-regular ${styles.label}`}>Username</label>
                    <p className="mb-2" style={{ fontSize: "0.8rem", color: "#7a5e5e" }}>Pick a unique username for yourself</p>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="username" onChange={stateUpdate("username")} placeholder={vals.username}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label className={`lora-regular ${styles.label}`}>Contact Number</label>
                    <p className="mb-2" style={{ fontSize: "0.8rem", color: "#7a5e5e" }}>Enter a valid contact number</p>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="contact" onChange={stateUpdate("contact")} placeholder={vals.contact}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label className={`lora-regular ${styles.label}`}>Password</label>
                    <input type="password" className={`${styles.textfield} form-control shadow-none`} id="password" onChange={stateUpdate("password")}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label className={`lora-regular ${styles.label}`}>Confirm Password</label>
                    <input type="password" className={`${styles.textfield} form-control shadow-none`} id="conf-password" onChange={stateUpdate("confPass")}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <button onClick={clicks2} className="btn bg-black text-white">Previous</button>
                <button type="submit" style={{ backgroundColor:"#7027CE", borderRadius: "1.5rem" }} onClick={(e) => handleSubmit(e)} className="btn px-4 float-end text-white">Signup</button>
            </form>
        </div>
    )
}

const SignUpForm = ({ state, click1, click2, vals, valset }) => {

    // function to check for matching passwords
    const checkPassMatch = () => {

    }

    // function to check for empty text fields
    const checkEmptyFields = () => {

    }

    // function to handle sign up operation
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    switch(state) {
        case 0: 
            return(
                <Forms1 click={click1} vals={vals} valset={valset}/>
            )
        case 1:
            return(
                <Forms2 clicks2={click2} vals={vals} valset={valset} handleSubmit={handleSubmit} />
            )
    }
}

export default SignUpForm