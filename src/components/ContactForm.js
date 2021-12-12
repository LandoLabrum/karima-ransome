import { useForm } from "react-hook-form";
import dta from '../delegate';
import React, { useState } from 'react';
var AWS = require('aws-sdk');

const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
        if (cvLength < 4) return currentValue;
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
};

const validateInput = value => {
    let error = ""

    if (!value) error = "Required!"
    else if (value.length !== 14) error = "Invalid phone format. ex: (555) 555-5555";

    return error;
};
export default function App() {

    if (typeof process.env.REACT_APP_KEY_ID !== "undefined") {
        // alert(`Hi. Variable is defined. ${process.env.REACT_APP_KEY_ID}`);
    }
    const [FormData, setFormData] = useState(<Form />)
    const grid = dta.gridlist.items
    AWS.config.update({
        region: 'us-west-1',
        accessKeyId: process.env.REACT_APP_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_KEY
    });
    const { register, handleSubmit } = useForm();
    function OnSubmit(data) {

        var params = {
            Destination: {
                ToAddresses: [
                    'mail@deepturn.com',
                ]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `Name: ${data.firstName} ${data.lastName} <br/> Phone: ${data.tel}<br/> Email: ${data.email}<br/> service requested: ${data.service}`
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: "TEXT_FORMAT_BODY"
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Nu-Birth Service Request'
                }
            },
            Source: 'mail@deepturn.com',
            ReplyToAddresses: [
                'mail@deepturn.com',
            ],
        };
        // alert(JSON.stringify(params));

        var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
        sendPromise.then(
            function () {
                console.error(data.MessageId);
                setFormData(<><h4 className="green-text">We've Successfully Received Your Request.</h4>Please allow us time to process your request and we will get back with you as soon as possible</>);
            }).catch(
                function (err) {
                    console.error(err, err.stack);
                    setFormData(<><h4 className="orange-text">An error occured.</h4>please contact us to resolve this issue</>)
                });
    }
    function Form() {
        return <form onSubmit={handleSubmit(OnSubmit)}>
            <h4>Contact Us</h4>
            <div>
                <label className="text-secondary" htmlFor="firstName">First Name</label>
                <input {...register("firstName")} />
            </div>

            <div>
                <label className="text-secondary" htmlFor="lastName">Last Name</label>
                <input {...register("lastName")} />
            </div>
            <div>
                <label className="text-secondary" htmlFor="tel">Phone</label>
                <input
                    id="tel"
                    type="text"
                    {...register("tel")}
                />
            </div>
            <div>
                <label className="text-secondary" htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register("email")}
                />
            </div>
            <p>Service Type</p>
            <div className="row">
                {grid && grid.map(p =>
                    <div className="col s3">
                        <label className="no-radio text-secondary">
                            <input name="service" type="radio" value={p.title} {...register("service")} required />
                            <span>{p.title}</span>
                        </label>
                    </div>
                )}
                <div className="col s3">
                    <label className="no-radio text-secondary">
                        <input name="service" type="radio" value="employment" required />
                        <span>Employment</span>
                    </label>
                </div>
            </div>
            <input className={"btn btn-block ".concat(dta.style.primary.background)} type="submit" value="Request Services" />
        </form>
    }
    return (<>
        {FormData}
    </>
    );
}