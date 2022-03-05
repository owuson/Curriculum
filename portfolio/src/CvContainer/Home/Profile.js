import React from 'react';
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
    return (
        <div className = "profile-container">
            <div className= "profile-parent">
                <div className = "profile-details">
                    <div className = "profile-details-name">
                        <span className = "primary-text">
                            {" "}
                            Bonjour, je m'appelle <span className = "hilighted-text">Phillip</span>
                        </span>
                    </div>
                    <div className = "profile-details-role">
                        <span className = "primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                    loop = {Infinity}
                                    steps = {[
                                        "Apprenti Développeur Web 💻",
                                        800,
                                        "PHP",
                                        800,
                                        "PYTHON",
                                        800,
                                        "REACT",
                                        800,
                                        "JAVA",
                                        800,
                                    ]}
                                />
                            </h1>
                            <span className = "profile-role-tagline">
                            
                            </span>
                        </span>
                        <div className = "profile-options">
                            <button className = "btn highlighted-btn">
                                {" "}
                                    Engagez-Moi
                                {" "}
                            </button>
                            <a href ='CVPhillipStage.pdf' download='CV CVPhillipStage.pdf'>
                                    <button className = "btn primary-btn">    
                                        Mon Curriculum Vitae
                                    </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "profile-picture">
                        <div className = "profile-picture-background">
                            
                        </div>
                    </div>
            </div>
        </div>
    );
}
