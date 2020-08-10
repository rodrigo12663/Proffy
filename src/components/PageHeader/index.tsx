import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps{
    title:string;
    description?:string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="">
                        <img src={ backIcon } alt="Voltar"/>
                    </Link>
                    <Link to="/" className="give-classes">
                         <img id="proffy" src={ logoImg  } alt="Proffy"/>
                    </Link>
                </div>
                <div className="header-content">
                     <strong>{props.title}</strong>
                    
                </div>
                {props.children}

                {props.description && <p>{props.description}</p>}
        </header>
    )
}
export default PageHeader;