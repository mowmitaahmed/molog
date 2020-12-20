import React from 'react';
import Newsletter from '../../images/blog/newsletter1.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="newletter_area text-center">
                        <h4>Sign up for Newsletter</h4>
                        <p>Hottest articles on your inbox!</p>
                        <img className="w-25" src={Newsletter} alt={Newsletter} />
                        <form action="">
                           <input className="c-input mb-2" type="text" name="nn" required="" placeholder="First Name" />
                           <input className="c-input mb-2" type="email" name="ne" required="" placeholder="Enter Email Address" />
                           <button className="btn w-100 text-white mb-2">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="popular_posts">
                        {/* <h2>Popular Posts</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;