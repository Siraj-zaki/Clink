import React from 'react'
import Logo from './Logo'
import searchBar from '../assets/searchBar.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import tele from '../assets/tele.png'
import whatsapp from '../assets/whatsapp.png'
import '../css/Navbar.css'
import cross from '../assets/cross.png'
import cross2 from '../assets/cross2.png'
import email1 from '../assets/email1.png'
import eye from '../assets/eye.png'
import lock from '../assets/lock.png'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
        matches: window.matchMedia("(max-width: 768px)").matches,
        toggler: 0,
        toggler1: 0,
        toggler2: 0,
        passShow: false,
        passShow1: false

    };

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(max-width: 768px)").addListener(handler);
    }

    render() {
        console.log(document.body.style.position);

        return (
            <>
                <>
                    {
                        this.state.toggler2 === 1 ?
                            <>
                                <div style={{ zIndex: 30 }} onClick={() => this.setState({ toggler2: 0, toggler1: 0 })} ani={this.state.toggler1} className='signup-menu-back'>
                                </div>
                                <div style={{ zIndex: 31 }} ani={this.state.toggler1} className="signup-menu">
                                    <div className="signup-form" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: '60%', flexDirection: 'column' }}>
                                        <span className="signup-heading">Welcome to <span className="font" style={{ fontSize: 50 }}> Clink</span></span>
                                        <p className="signup-p" >Welcome back to clink sign in to place your<br />
                                        order.
                                            </p>
                                        <form action="">
                                            <div className="signup-form">
                                                <div style={{ position: 'relative' }}>
                                                    <label className="email-label" htmlFor="emal1"><img src={email1} alt="" /></label>

                                                    <input className="input-1-new" type="email" name="" id="email1" placeholder="Email" required />
                                                </div>
                                                <div style={{ position: 'relative', marginTop: 20 }}>
                                                    <label className="email-label" htmlFor="pass1"><img src={lock} alt="" /></label>
                                                    <label onMouseLeave={() => this.setState({ passShow: false })} onMouseEnter={() => this.setState({ passShow: true })} className="eye-label" htmlFor="emal1"><img src={eye} alt="" /></label>
                                                    <input className="input-1-new" type={this.state.passShow ? "text" : "password"} name="" id="pass1" placeholder="Password" required />
                                                </div>
                                                <div style={{ position: 'relative', marginTop: 20 }}>
                                                    <label className="email-label" htmlFor="pass1"><img src={lock} alt="" /></label>
                                                    {/* <label onMouseLeave={() => this.setState({ passShow1: false })} onMouseEnter={() => this.setState({ passShow: true })} className="eye-label" htmlFor="emal1"><img src={eye} alt="" /></label> */}
                                                    <input className="input-1-new" type="password" name="" id="pass1" placeholder="Confirm Password" required />
                                                </div>
                                                <div style={{ position: 'relative', marginTop: 20 }}>
                                                    <label className="email-label" htmlFor="pass1"><img src={lock} alt="" /></label>
                                                    {/* <label onMouseLeave={() => this.setState({ passShow1: false })} onMouseEnter={() => this.setState({ passShow: true })} className="eye-label" htmlFor="emal1"><img src={eye} alt="" /></label> */}
                                                    <input className="input-1-new" type="number" name="" id="pass1" placeholder="Age" required />
                                                </div>
                                                <div className="remember-me">
                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <input className="checking m-1" type="checkbox" required name="" id="" /><label htmlFor="checking" className="remember-heading m-1">I agree <label htmlFor="checking" className="remember-heading m-1" style={{ color: "#a10948" }}>that, I am 21 above</label> </label>
                                                        </div>
                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <input className="checking m-1" type="checkbox" required name="" id="" /><label htmlFor="checking" className="remember-heading m-1">I agree <label htmlFor="checking" className="remember-heading m-1" style={{ color: "#a10948" }}> terms & conditions and Privacy policy</label> </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="signup-btns">
                                                    <button className="signupbtn btn-1-new" type="submit">Sign Up</button>
                                                    <a className="signupbtn btn-2-new" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => this.setState({ toggler1: 1, toggler2: 0 })} >Login</a>
                                                </div>

                                            </div>
                                            <div style={{ marginTop: 20 }}>
                                                <span className="new-span m-3">Or Login with </span>
                                                <a href="/" className="new-span m-3" style={{ color: '#a10948' }} >Facebook </a>
                                                <a href="/" className="new-span m-3" style={{ color: '#a10948' }}>Google </a>
                                            </div>
                                        </form>
                                    </div>

                                    <div onClick={() => this.setState({ toggler2: 0, toggler1: 0 })} className="cross">
                                        <img width="100%" height="100%" src={cross2} alt="" />
                                    </div>

                                </div>
                            </>
                            :
                            null

                    }
                    {
                        this.state.toggler1 === 1 ?
                            <>
                                <div onClick={() => this.setState({ toggler1: 0 })} ani={this.state.toggler1} className='signup-menu-back'>
                                </div>
                                <div ani={this.state.toggler1} className="signup-menu">
                                    <div className="signup-form" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: '60%', flexDirection: 'column' }}>
                                        <span className="signup-heading">Welcome to <span className="font" style={{ fontSize: 50 }}> Clink</span></span>
                                        <p className="signup-p" >Welcome back to clink sign in to place your<br />
                                        order.
                                            </p>
                                        <div className="signup-form">
                                            <div style={{ position: 'relative' }}>
                                                <label className="email-label" htmlFor="emal1"><img src={email1} alt="" /></label>

                                                <input className="input-1-new" type="email" name="" id="email1" placeholder="Email" />
                                            </div>
                                            <div style={{ position: 'relative', marginTop: 20 }}>
                                                <label className="email-label" htmlFor="pass1"><img src={lock} alt="" /></label>
                                                <label onMouseLeave={() => this.setState({ passShow: false })} onMouseEnter={() => this.setState({ passShow: true })} className="eye-label" htmlFor="emal1"><img src={eye} alt="" /></label>
                                                <input className="input-1-new" type={this.state.passShow ? "text" : "password"} name="" id="pass1" placeholder="Password" />
                                            </div>
                                            <div className="remember-me">
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <input className="checking m-1" type="checkbox" name="" id="" /><label htmlFor="checking" className="remember-heading m-1">Remember Me</label>
                                                </div>
                                                <div>
                                                    <a href="#" className="forgot"> Forgot Passoword ?</a>
                                                </div>
                                            </div>
                                            <div className="signup-btns">
                                                <button className="signupbtn btn-1-new">Login</button>
                                                <button onClick={() => this.setState({ toggler2: 1, toggler1: 0 })} className="signupbtn btn-2-new">Create Profile</button>
                                            </div>

                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                            <span className="new-span m-3">Or Login with </span>
                                            <a href="/" className="new-span m-3" style={{ color: '#a10948' }} >Facebook </a>
                                            <a href="/" className="new-span m-3" style={{ color: '#a10948' }}>Google </a>
                                        </div>
                                    </div>
                                    <div onClick={() => this.setState({ toggler1: 0 })} className="cross">
                                        <img width="100%" height="100%" src={cross2} alt="" />
                                    </div>

                                </div>
                            </>
                            :
                            null

                    }
                    {
                        this.state.toggler === 1 ?
                            <>
                                <div ani={this.state.toggler} className="menu">
                                    <div>
                                        <li className="menu-li">Home</li>
                                        <li className="menu-li">About</li>
                                        <li className="menu-li">Products</li>
                                        <li className="menu-li">Blog</li>
                                        <li className="menu-li">Contact</li>
                                        <li className="menu-icons">
                                            <span className="menu-heading">Social Media</span>
                                            <div className="footer-icons">
                                                <img className="ico-footer" src={youtube} alt="" />
                                                <img className="ico-footer" src={instagram} alt="" />
                                                <img className="ico-footer" src={linkedin} alt="" />
                                                <img className="ico-footer" src={facebook} alt="" />
                                            </div>
                                        </li>
                                    </div>
                                    <div onClick={() => this.setState({ toggler: 0 })} className="cross">
                                        <img width="100%" height="100%" src={cross} alt="" />
                                    </div>
                                    <div>
                                        <span className="privacy">Privacy Policy   .   Terms & Condition</span>
                                    </div>
                                </div>
                                <div onClick={() => this.setState({ toggler: 0 })} ani={this.state.toggler} className="menu-back">

                                </div>
                            </>
                            :
                            null
                    }
                    <div className="Navbar">
                        <div className="left-side-nav" style={{ width: this.state.matches ? "100%" : '33%' }}>
                            <div style={{ height: this.state.matches ? "50px" : "110px" }}>
                                <Logo mainpage />
                            </div>
                        </div>
                        <div className="center-side-nav" style={{ display: this.state.matches ? "none" : 'flex' }}>
                            <form className="search-bar-nav" >
                                <input className="input-search-bar" type="text" placeholder="Enter your Zip code" name="search" id="search" required />
                                <button className="btn-search-bar" type="submit" >
                                    <img className="search-icon" src={searchBar} height="20px" width="20px" alt="" />
                                </button>
                            </form>
                        </div>
                        <div className="right-side-nav" style={{ width: this.state.matches ? "100%" : '33%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Link onClick={() => this.setState({ toggler1: 1 })} className="btn-nav" > Sign in / Sign up</Link>
                                <div className="icons-nav"  >
                                    <i onClick={() => window.location.href = "/CartPage"}  >
                                        <svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="30.393" height="33.804" viewBox="0 0 30.393 33.804">
                                            <path id="Path_30" data-name="Path 30" d="M33.888,23.947a5.065,5.065,0,0,0-3.208-4.693L33.838,7.436A1.618,1.618,0,0,0,32.2,5.376H9.071L8.514,3.249A1.688,1.688,0,0,0,6.876,2H3.5V5.376H5.577L9.763,21.01a1.688,1.688,0,0,0,1.688,1.249H28.824a1.688,1.688,0,0,1,0,3.376H6.876a1.688,1.688,0,1,0,0,3.376H8.869a5.065,5.065,0,1,0,9.522,0h3.984A5.065,5.065,0,1,0,32.2,30.7a4.963,4.963,0,0,0-.675-2.482A5.065,5.065,0,0,0,33.888,23.947Zm-6.6-5.065h-14.5L9.983,8.753H30.005ZM13.629,32.388A1.688,1.688,0,1,1,15.318,30.7,1.688,1.688,0,0,1,13.629,32.388Zm13.506,0A1.688,1.688,0,1,1,28.824,30.7,1.688,1.688,0,0,1,27.135,32.388Z" transform="translate(-3.5 -2)" fill="#a10948" />
                                        </svg>

                                    </i>
                                    <i onClick={() => this.setState({ toggler: 1 })}>
                                        <svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="38.375" height="26" viewBox="0 0 38.375 26">
                                            <g id="Group_7" data-name="Group 7" transform="translate(-1309 -175.546)">
                                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.668" cy="1.668" r="1.668" transform="translate(1309 187.086)" fill="#a10948" />
                                                <rect id="Rectangle_2" data-name="Rectangle 2" width="30.292" height="3.337" rx="0.94" transform="translate(1317.083 187.086)" fill="#a10948" />
                                                <rect id="Rectangle_3" data-name="Rectangle 3" width="38.375" height="3.337" rx="0.94" transform="translate(1309 198.209)" fill="#a10948" />
                                                <rect id="Rectangle_4" data-name="Rectangle 4" width="38" height="3" rx="0.94" transform="translate(1309.096 175.546)" fill="#a10948" />
                                            </g>
                                        </svg>
                                    </i>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            </>
        )
    }
}
export default Navbar