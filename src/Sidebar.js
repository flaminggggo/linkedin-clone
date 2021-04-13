import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hashtag">#</span>
            <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://img.lovepik.com/photo/40164/1688.jpg_wh860.jpg" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Zaki Samson</h2>
                <h4>zakisamson@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">15</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">20</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('frontend')}
                {recentItem('developer')}
                {recentItem('programming')}
                {recentItem('reactnative')}
            </div>
        </div>
    )
}

export default Sidebar
