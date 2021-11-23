import React from 'react';
import Avatar from '../assets/images/avatar.png';
import DavisLogo from '../assets/images/berkeley.png';
import MercedLogo from '../assets/images/pittsburgh.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                       Full Stack Web Developer with a background in Management and Business Economics. Background in various programming lanagues such as CSS, JavaScript, SQL, React.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University of California, Davis</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.ucdavis.edu' target='_blank'><img className='university-logo' src={DavisLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University of California, Merced</div>
                                        <div className='title-concentration'>Bachelor of Science in Management and Business Economics</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.ucmerced.edu' target='_blank'><img className='university-logo' src={MercedLogo} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;