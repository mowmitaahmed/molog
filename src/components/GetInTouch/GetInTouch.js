import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './GetInTouch.css';

const GetInTouch = () => {
    // Google Map
    const mapStyles = {        
        height: "80vh",
        width: "100%",
        borderRadius: '0px'
    };
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
    return (
        <section className="GetInTouch_area bg-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                           <LoadScript googleMapsApiKey='AIzaSyCyBnJ4TLedX4tF1BI58Wf_HA1sJE5qQCQ'>
                                <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={13}
                                center={defaultCenter}
                                />
                           </LoadScript>
                    </div>
                    <div className="col-md-6">
                        <h1 className="h1-responsive mb-1">Get In Touch</h1>
                        <p className="p-responsive mb-4">we will answer your questions, scope your project <br/>and discuss your potential fit in style.</p>
                        <form action="">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <input placeholder="Your Name" type="text" id="name" name="name" className="form-control" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input placeholder="Your Email" type="email" id="email" name="email" className="form-control" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input placeholder="Your Subject" type="text" id="subject" name="subject" className="form-control" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <textarea placeholder="Your Message" name="your-message" cols="40" rows="10" className="form-control"></textarea>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input type="submit" value="Submit" className="form-control w-25 hvr-float-shadow text-white py-2" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;