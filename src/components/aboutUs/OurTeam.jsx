import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../../data/aboutPageData';

const OurTeam = () => {
    return (
        // <!-- ***** TEAM ***** -->
        <section className="sec-normal sec-bg2 bg-colorstyle tophalfpadding nobottompadding">
            <div className="team">
                <div className="container">
                    <div className="randomline">
                        <div className="bigline"></div>
                        <div className="smallline"></div>
                    </div>
                    {
                        teamData?.map((team, index) => (
                            <div className="row pb-5" key={index}>
                                <div className="col-sm-12 col-md-12 text-center">
                                    <h2 className="section-heading mergecolor ">{team.title}</h2>
                                    <p className="section-subheading mergecolor">{team.details}</p>
                                </div>
                                {team.members?.map((member, index2) => (
                                    <div key={index2} className="col-sm-12 col-md-4">
                                        <div className="wrapper">
                                            <div className="img-section">
                                                <div className="soc-icons-wrap">
                                                    <div className="icons">
                                                        {member.socialMedia?.map((media, index3) => (
                                                            <Link key={index3} to={media.link}><i className={`${media.icon}`}></i></Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team-info bg-seccolorstyle noshadow">
                                                {member.batch !== null &&
                                                    <div className={`plans badge feat ${member.batch_color}`}>{member.batch}</div>}
                                                <img className="svg" src={member.img} alt="team" />
                                                <h3 className="heading mergecolor">{member.name}</h3>
                                                <div className="subheading seccolor">{member.department}</div>
                                                <div className="desc seccolor">{member.about}</div>
                                                <Link to={member.contactUrl} className="btn btn-default-yellow-fill mt-4">Contact</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default OurTeam;