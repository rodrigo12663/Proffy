import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import './style.css';
import api from '../../services/api';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';



function Landing(){ 
    const [totalConnections,setTotalConnections] = useState(0);
    useEffect(()=>{
        api.get('connections').then(response=>{
            const {total} =response.data;
            setTotalConnections(total);
            console.log(response.data.total);
        })
    },[]);
 
    return(
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudo online.</h2>
                </div>
                <img src={landingImg} alt="plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">Estudar
                        <img src={studyIcon} alt="Estudar"/> 
                    </Link>
                    <Link to="/give-classes" className="give-classes">Dar aulas
                        <img  src={giveClassesIcon}  alt="Estudar mais"/>
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}
export default Landing;