import React from 'react';
import StrongCustomer from '../../images/about/strong_cus.png';
import Signature from '../../images/about/Signature.png';
import './AboutStrongCustomer.css';

const AboutStrongCustomer = () => {
    return (
        <section className="strong_customer_area bg-white">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-7">
                        <div className="strong_customer_details">
                             <h3 className="h3-responsive mb-5">Strong customer relationships always drive sales, sustainability, and rapid growth.</h3>
                             <p className="p-responsive me-5 pr-5">Deployment long tail monetization strategy equity basic of team of conversion. Supply chain freemium investor long tail agile wrokers prototype validation influencer market share.</p>
                             <p className="p-responsive me-5 pr-5">Client social proof funding innovator. First mover advantage business-to-consumer customer vesting period premium term sheet venture rate learning curve for startups in valley for life.</p>
                             <p className="p-responsive me-5 pr-5">Funding innovator always irst mover advantage business-to-consumer customer vesting period freemium termsheet venture rate learning.curve focused drive for success.</p>
                             <img className="img-fliud" src={Signature} alt={Signature} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="strong_customer_img d-flex justify-content-center">
                            <img className="img-fluid" src={StrongCustomer} alt={StrongCustomer} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStrongCustomer;