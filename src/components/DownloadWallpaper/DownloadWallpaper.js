import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import DownloadImg from '../../images/downloadWallpaperImage.png';
import './DownloadWallpaper.css';

const DownloadWallpaper = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    return (
        <section className="download_wallpaper_area" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 download_wallpaper_details text-white my-5">
                        <h5>Power up your workflow with Webify <br/>multi-purpose wordpress theme.</h5>
                        <button className="btn text-white px-4 py-2 mt-3 hvr-float-shadow">Download Wallpaper</button>
                    </div>
                    <div className="col-md-5 download_wallpaper_img d-md-block d-none">
                        <img className="img-responsive" src={DownloadImg} alt={DownloadImg}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadWallpaper;