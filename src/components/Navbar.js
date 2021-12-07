import '../main.css';
import React, { useState, useEffect } from 'react';
import data from '../delegate';
import logo from '../media/logo.png';


export default function Nav() {
    function LinkHandler(i){
        let p = i.p
        if(p.class.includes("modal-trigger")){
            return <li ><a key={p.text} className={p.class} href={p.link}>{p.text}</a></li>
        }else{
            return <li  ><a key={p.text} className={p.class} href={p.link}>{p.icon?<i className="material-icons">{p.icon}</i>:null}{p.text}</a></li>
        }
    }
    const [styleData, setstyleData] = useState(null)
    const [titleData, settitleData] = useState(null)
    const [logoData, setlogoData] = useState(null)
    const [linkData, setlinkData] = useState(null)
    useEffect(() => {
        setstyleData(data.style);
        settitleData(data.title);
        setlogoData(data.brand.logo);
        setlinkData(data.nav.links);
    }, [])
    return (<>
        <title>{ titleData }</title>
        <nav className="">
            <div key={styleData && styleData.primary.background} className={"nav-wrapper ".concat(styleData && styleData.primary.background)}>
                <a key={logoData && logoData.alt} href="/" className="brand-logo"><img className="logo" alt={logoData && logoData.alt} src={logo}/></a>
                <a href="mobile-demo" className="sidenav-trigger white-text"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    {linkData && linkData.desktop.map(p => (
                        <span key={p.text}>
                        <LinkHandler p={p}/>
                        </span>
                    ))}
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            {linkData && linkData.mobile.map(p => 
                !p.class.includes("fab")?<LinkHandler key={p.text} p={p}/>:null
            )}
        </ul>
        {linkData && linkData.mobile.map(p => 
                p.class.includes("fab")?<a className={p.class.concat(data.style.primary.background)} href={p.link}><i className="material-icons">{p.text}</i></a>
                :null
            )}
    </>
    )
};