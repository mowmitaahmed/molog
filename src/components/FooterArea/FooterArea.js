import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FooterHeightContext } from '../../App';
import './FooterArea.css';

const FooterArea = () => {
    const dWidth = window.innerWidth;
    const [height, setHeight] = useContext(FooterHeightContext);
    const ref = useRef(null);
  
    useEffect(() => {
      setHeight(ref.current.offsetHeight);
    });

    const mB = dWidth <= 767;

    const MarginBottom = {
        position: 'fixed',
    };

    const MarginBottomZero = {
        position: 'static',
    };
    return (
        <footer style={mB ? {MarginBottomZero} : MarginBottom} id="footer_area" ref={ref} >
            <div className="footer_top">
                <hr className="mt-0" />
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-9">
                            <h6 className="h6-responsive m-0">Ready to revolutionize your website?</h6>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-light px-4 hvr-float-shadow">Learn More</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-0"/>
            </div>
            <div className="footer_middle py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="text-secondary">Resources</h6>
                            <ul className="list-unstyled">
                                <li><Link className="text-decoration-none" to="/">Home</Link></li>
                                <li><Link className="text-decoration-none" to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6 className="text-secondary">Product</h6>
                            <ul className="list-unstyled">
                                <li><Link className="text-decoration-none" to="/help">Help</Link></li>
                                <li><Link className="text-decoration-none" to="/faq">FAQ</Link></li>
                                <li><Link className="text-decoration-none" to="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link className="text-decoration-none" to="/termsandcondition">Terms & Condition</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 social_menu">
                            <h6 className="text-secondary">Get Social</h6>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-twitter"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-pinterest-p"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6 className="text-secondary">Get Social</h6>
                            <form className="input-group" method="post">
                                <input className="form-control" type="email" name="ne" required="" placeholder="Enter Email Address" />
                                <button type="submit" className="tb-newsletter-submit"><i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom pb-5">
                <hr className="mt-0"/>
                <div className="container">
                    <div className="row text-center pb-3">
                        <div className="col-md-12">
                            <p className="p-responsive">© Built with pride and caffeine. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterArea;