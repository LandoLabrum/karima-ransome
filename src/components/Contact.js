import React from 'react';

export default function Contact() {
    return <div id="contact" className="modal">
        <div className="modal-content">

            <table className='col s12 m6'>
                <thead>
                    <tr>
                        <th className='center grey-text text-darken-3'>Myrtle Beach, SC</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className='center-align'>
                            <a className='btn btn-flat transparent small' href="tel://+12679689779" >
                                <i className="material-icons left">phone</i><span id="tel">1 (267) 968 - 9779</span>
                            </a>
                        </td>
                  
                    </tr>
                    <tr>
                        <td className='center-align address'>
                            <a className='btn btn-flat transparent small ' href="https://goo.gl/maps/4szxncMQBtG3NQLQ8" target="_blank" rel="noreferrer" >
                                <i className="material-icons left">map</i><span id="tel">1293 Professional Drive Suite #D-218, Myrtle Beach, SC 29577</span>
                            </a>
                        </td>
           
                    </tr>
            
                </tbody>
             
            </table>
            <table className='col s12 m6'>
             
                <thead>
                <span className='hide-on-med-and-up'>
                    <br/>
                </span>
                    <tr>
                        <th className='center grey-text text-darken-3'>Philadelphia, PA</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className='center-align'>
                            <a className='btn btn-flat transparent small' href="tel://+18432511724" >
                                <i className="material-icons left">phone</i><span id="tel">1 (843) 251 - 1724</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className='center-align address'>
                            <a className='btn btn-flat transparent small ' href="https://goo.gl/maps/tWSzDqe9JR1JgPwb8" target="_blank" rel="noreferrer" >
                                <i className="material-icons left">map</i><span id="tel">2423 N Sydenham Street.  Philadelphia PA 19132</span>
                            </a>
                        </td>
                    </tr>
                </tbody>
             
            </table>
          

        </div>
        <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat">X</button>
        </div>
    </div>
};