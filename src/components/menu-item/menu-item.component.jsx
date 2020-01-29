import React from 'react';
import './menu-item.scss';
import{withRouter} from 'react-router-dom'

const MenuItem = ({title,imageUrl,id,size,match,history,linkUrl})=> {
    return (
        <div onClick={()=>history.push(linkUrl)}
         className={`menu-item ${size}`}>
            <div className={'background-image'}
                style={{
                    backgroundImage:`url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
