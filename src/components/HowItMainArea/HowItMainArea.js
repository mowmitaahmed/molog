import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppStore from '../../images/appleStore.svg';
import GooglePlay from '../../images/googlePlay.svg';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';
import { FooterHeightContext } from '../../App';
import './HowItMainArea.css';

const HowItMainArea = () => {
    const [selected, setSelected] = useState(0);
    const [imgSel, setImgSel] = useState("https://i.ibb.co/LN2LCMz/howitworks1sg.png");
    const [id, setId] = useState(1);
    const dWidth = window.innerWidth;
    console.log('Inner Width:', dWidth);
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;
    console.log(mB);

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
       
    const sliderArray =[
        {
            id: 1,
            img: "https://i.ibb.co/LN2LCMz/howitworks1sg.png"
        },
        {
            id: 2,
            img: "https://i.ibb.co/CQH0crZ/howitworks2sg.png"
        },
        {
            id: 3,
            img: "https://i.ibb.co/BVkFgNC/howitworks3sg.png"
        },
        {
            id: 4,
            img: "https://i.ibb.co/TMJktDW/howitworks4sg.png"
        }
    ]

    console.log(sliderArray[selected]);
    const eventValue =(e)=>{
        var id = e.currentTarget.attributes['id'].value;
        const found = sliderArray.find(element => element.id == id);
        console.log('Found:', found);
        setImgSel(found.img);
        setId(found.id);
    }

    const handleAssigneeOnClickMinus = () => {
        setSelected(prev => {
            if (prev === 0) {
                return sliderArray.length -1;
            }
            if(prev>= 1){
                return prev - 1
            }
          });
          var sel = sliderArray[selected];
          setImgSel(sel.img);
          setId(sel.id);
      };
    const handleAssigneeOnClickAdd = () => {
        setSelected(prev => {
          if (prev === sliderArray.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
        var sel = sliderArray[selected];
        setImgSel(sel.img);
        setId(sel.id);
      };
      const backgroundBlue ={
          background: 'rgb(43, 50, 178)',
          color: 'white'
      }
      const backgroundWhite ={
          background: 'white',
          color: 'rgb(43, 50, 178)'
      }
    return (
        <section className="howit_main_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-5 howit_slider">
                        <ul className="list-unstyled list-inline d-flex justify-content-center align-items-center">
                            <li onClick={()=> handleAssigneeOnClickMinus()} className="list-inline-item left_arrow"><img src={Left} alt={Left}/></li>
                            <li className="list-inline-item w-50"><img className="w-100" src={imgSel} alt={imgSel}/></li>
                            <li onClick={() => handleAssigneeOnClickAdd()} className="list-inline-item right_arrow"><img src={Right} alt={Right}/></li>
                        </ul>
                    </div>
                    <div className="col-md-7">
                        <div className="howit_details py-4">
                            <ul className="list-unstyled" id="howit_details_ul">
                                <li id="1" onClick={(e) => eventValue(e)} className="d-flex mb-3">
                                    <div className="serial_num" style={(()=> {
                                      switch (id){
                                        case 1:  return backgroundBlue;
                                        case 2:  return backgroundWhite;
                                        case 3:  return backgroundWhite;
                                        case 4:  return backgroundWhite;
                                        default: return backgroundWhite;
                                      }
                                    })()}>1</div>
                                    <div className="how_it_box">
                                        <h6 className="h6-responsive">Pick a campaign</h6>
                                        <p className="p-responsive">Browse from a wide variety of campaigns and pick one that you like.</p>
                                    </div>
                                </li>
                                <li onClick={(e) => eventValue(e)} className="d-flex mb-3" id="2">
                                    <div className="serial_num" style={(()=> {
                                      switch (id){
                                        case 1:  return backgroundWhite;
                                        case 2:  return backgroundBlue;
                                        case 3:  return backgroundWhite;
                                        case 4:  return backgroundWhite;
                                        default: return backgroundWhite;
                                      }
                                    })()}>2</div>
                                    <div className="how_it_box">
                                        <h6 className="h6-responsive">Submit your post</h6>
                                        <p className="p-responsive">Snap a photo and submit your post based on the campaign requirements. Your post will then sent to the brand for approval.</p>
                                    </div>
                                </li>
                                <li onClick={(e) => eventValue(e)} className="d-flex mb-3" id="3">
                                    <div className="serial_num" style={(()=> {
                                      switch (id){
                                        case 1:  return backgroundWhite;
                                        case 2:  return backgroundWhite;
                                        case 3:  return backgroundBlue;
                                        case 4:  return backgroundWhite;
                                        default: return backgroundWhite;
                                      }
                                    })()}>3</div>
                                    <div className="how_it_box">
                                        <h6 className="h6-responsive">Post on social media</h6>
                                        <p className="p-responsive">Once your post is approved by the brand, you can then share your post on social media with your friends and followers. The more engagement you receive, the more you earn!</p>
                                    </div>
                                </li>
                                <li onClick={(e) => eventValue(e)} className="d-flex mb-3" id="4">
                                    <div className="serial_num" style={(()=> {
                                      switch (id){
                                        case 1:  return backgroundWhite;
                                        case 2:  return backgroundWhite;
                                        case 3:  return backgroundWhite;
                                        case 4:  return backgroundBlue;
                                        default: return backgroundWhite;
                                      }
                                    })()}>4</div>
                                    <div className="how_it_box">
                                        <h6 className="h6-responsive">Withdraw your earnings</h6>
                                        <p className="p-responsive">Withdraw your earnings from the app to your bank account with just the tap of a button!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 mb-4">
                        <div className="single_how_it p-5">
                            <h3 className="h3-responsive">Brands & Agencies</h3>
                            <p className="p-responsive mb-4">Get thousands of Partiposters talking about your brand today.</p>
                            <button className="btn single_how_it_button text-white px-5 rounded shadow-lg py-2">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="single_how_it p-5">
                            <h3 className="h3-responsive">Join Partipost</h3>
                            <p className="p-responsive">Download the Partipost app today and start earning.</p>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><Link to="/"><img src={AppStore} alt={AppStore}/></Link></li>
                                <li className="list-inline-item"><Link to="/"><img src={GooglePlay} alt={GooglePlay}/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItMainArea;