import React from 'react';
import '../css/StartPage.css';
import logo from '../images/logo-lib.png';
import title from '../images/bbti-title.png';

const StartPage = ({ onStart }) => {
    return (
        <div className="start-page page">
            <header>
                <img src={logo} alt="영진전문대학교 도서관"/>
            </header>
            <div className="section-title">
                <img src={title} alt="영진 BBTI"/>
            </div>
            <button className="black-btn" onClick={onStart}>시작하기</button>
        </div>
    );
};

export default StartPage;
