import React, {useEffect, useState, useRef} from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import $ from 'jquery';
import styles from "./MainMenu.module.css";
import explore from "../../assets/explore.svg";
import artist from "../../assets/mic.svg";
import playlist from "../../assets/playlist.svg";
import createPlaylist from "../../assets/addplaylist.svg";
import upload from "../../assets/upload.svg";
import guest from "../../assets/guest.svg";
import logo from '../../assets/widelogo.svg';
import TizikiLogo from '../../assets/Tiziki-logo.jpg';
import menu from "../../assets/menu.svg";
import pen from "../../assets/pen.svg";
import like from "../../assets/like.svg";
import profileIcon from "../../assets/profile.svg";
import { isAuthenticated } from "../../commonActions";

const MainMenu = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const [withModal, setWithModal] = useState(window.innerWidth < 1250);
    const container = useRef(null);

    const onResize = () => {
        if(window.innerWidth < 1250) {
            props.setShow(false);
            setWithModal(true);
        }
        else {
            props.setShow(true);
            setWithModal(false);
        }
    }

    useEffect(() => {
        authenticate(); 
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    useEffect(() => {

        if(container && container.current) {
            if(props.show) {
                open();
            }
            else {
                close();
            }
        }

    }, [props.show]);

    const open = () => {
        $(container.current).animate({left: '0px'}, 200);
    }
    const close = () => {
        $(container.current).animate({left: '-240px'}, 200);  
    }

    const authenticate = async () => {
        const auth = await isAuthenticated();
        if(auth) {
            setAuthenticated(true);
        }
        else {
            setAuthenticated(false);
        }
    }

    if(props.type.toLowerCase() === 'user' && authenticated) {
        return (
            <React.Fragment>
                {( withModal ? <div className={styles.modal} onClick={() => props.setShow(false)} style={{display: props.show ? 'block' : 'none'}} /> : null )}
                <div className={styles.menu} ref={container}>
                    <div className={styles.header}>
                            <button className={styles.menuButton} onClick={() => props.setShow(!props.show)}><img src={menu} className={styles.bars} alt="img" /></button>
                            <Link className={styles.logoContainer} to="/"><img src={TizikiLogo} className={styles.logo} alt="img" /></Link>
                    </div>
                    {/* <a href="http://3.140.102.246//heartbeats/assets/ahmed_sayed_resume.pdf" className={styles.menuItem}>
                        <img src={resume} className={styles.menuIcon}/>
                        <span className={styles.menuText}>My Resume</span>
                    </a> */}
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/profile">
                        <img src={profileIcon} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Your Profile</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/profile/edit">
                        <img src={pen} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Edit Your Profile</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/passwords">
                        <img src={pen} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Change Your Password</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/likes">
                        <img src={like} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Likes</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/Uploads">
                        <img src={upload} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Uploads</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/playlists">
                        <img src={playlist} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Playlists</span>
                    </NavLink>
                </div>
            </React.Fragment>
        );
    }
    else {

        return (
            <React.Fragment>
                {( withModal ? <div className={styles.modal} onClick={() => props.setShow(false)} style={{display: props.show ? 'block' : 'none'}} /> : null )}
                <div className={styles.menu} ref={container}>
                    <div className={styles.header}>
                        <button className={styles.menuButton} onClick={() => props.setShow(!props.show)}><img src={menu} className={styles.bars} alt="img" /></button>
                        <Link className={styles.logoContainer} to="/"><img src={TizikiLogo} className={styles.logo} alt="img" /></Link>
                    </div>
                    {(!authenticated ? <NavLink className={styles.menuItem} to={{ 
                        pathname: '/auth', 
                        state: { guest: true, comingFrom: '/explore' } 
                    }}>
                        <img src={guest} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Streamer</span>
                    </NavLink> : null)}
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/explore">
                        <img src={explore} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>login</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/artists">
                        <img src={artist} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Artist</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/playlists">
                        <img src={playlist} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Upload Songs</span>
                    </NavLink>
                    {/* <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/playlists">
                        <img src={createPlaylist} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Create playlist</span>
                    </NavLink>
                    <NavLink className={styles.menuItem} activeStyle={{ backgroundColor: '#555' }} to="/uploads">
                        <img src={upload} className={styles.menuIcon} alt="img"/>
                        <span className={styles.menuText}>Upload your songs</span>
                    </NavLink> */}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.showMenu
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setShow: (show) => dispatch({type: 'SHOW_MENU', show: show})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);