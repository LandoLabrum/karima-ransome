import React from 'react';
import data from '../delegate';

export default function Contact() {
    var brandData = data.brand.contact;
    return <div id="contact" className="modal">
        <div className="modal-content">
            <ul className="collection with-header">
                <li className="collection-header"><h4>Contact</h4></li>
                <li className="collection-item valign-wrapper"><a href={"tel://+".concat(brandData.tel)} >
                    <p><i className="material-icons left">phone</i><span id="tel">{brandData.tel}</span></p>
                </a></li>
                <li className="collection-item valign-wrapper"><a href={"mailTo://+".concat(brandData.email)} >
                    <p><i className="material-icons left">email</i>{brandData.email}</p>
                </a></li>
                <li className="collection-item valign-wrapper"><a href={brandData.address.link} target="_blank" rel="noreferrer" >
                    <p><i className="material-icons left"> map</i>{brandData.address.text}</p>
                </a></li>
            </ul>
        </div>
        <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat">X</button>
        </div>
    </div>
};
