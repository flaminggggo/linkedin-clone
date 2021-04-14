import React from 'react'
import './Widgets.css'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
             <div className="widgets_header">
                <h3>Linkedin News</h3>
                <InfoOutlinedIcon />
             </div>
             {newsArticle("Zaki learned React", "999 readers")}
             {newsArticle("Ona is now working", "1000 readers")}
             {newsArticle("Corona virus Surabaya", "998 readers")}
        </div>
    )
}

export default Widgets
