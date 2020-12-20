import React from 'react';
import './HomeGoodHands.css';

const HomeGoodHands = () => {
    const GoodHandsArray =[
        {
            icon: 'fas fa-chart-area p-3',
            title: 'Strategy & Planning',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        },
        {
            icon: 'fas fa-anchor p-3',
            title: 'B2B Public Relations',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        },
        {
            icon: 'fab fa-slack p-3',
            title: 'Digital Marketing',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        },
        {
            icon: 'fas fa-trophy p-3',
            title: 'Award-Winning Team',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        },
        {
            icon: 'fas fa-rocket p-3',
            title: 'Marketing Automation',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        },
        {
            icon: 'fas fa-flask p-3',
            title: 'Content Creation',
            desc: 'The Little-known Way To Increasing Your Traffic Without Content'
        }
    ]
    return (
        <section className="good_hands_area bg-white">
            <div className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="good_hands_details">
                            <h2 className="h2-responsive">You’re in good hands</h2>
                            <p>First see how your businesses are performing today. <br/> Then do more with insights from Webify team.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                    </div>
                </div>
                <div className="row pb-5">
                    {
                        GoodHandsArray.map(good => (
                            <div className="col-md-4 col-sm-12">
                                <div className="single_good_hands d-flex justify-content-center p-3">
                                    <div className="icon_box text-center me-2">
                                       <i className={good.icon}></i>
                                    </div>
                                    <div className="single_good_hands_details">
                                        <h3 className="h3-responsive">{good.title}</h3>
                                        <p className="p-responsive">{good.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeGoodHands;