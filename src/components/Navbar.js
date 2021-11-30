import React, { useState, useEffect } from 'react';
import data from '../delegate.json';
// import logo from '../media/logo.png';

export default function Nav() {
    function LinkHandler(i){
        let p = i.p
        if(p.class.includes("modal-trigger")){
            return <li><a className={p.class} data-target={p.link}>{p.text}</a></li>
        }else{
            return <li><a className={p.class} href={p.link}>{p.text}</a></li>
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
        <nav>
            <div className={"nav-wrapper ".concat(styleData && styleData.primary.background)}>
                <a href="/" class="brand-logo center"><img className="responsive-img" alt={logoData && logoData.alt} src={logoData && logoData.src}/></a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    {linkData && linkData.desktop.map(p => (
                        <LinkHandler key={p.text} p={p}/>
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
                p.class.includes("fab")?<a className={p.class} data-target={p.link}><i className="material-icons">{p.text}</i></a>
                :null
            )}
    </>
    )
};