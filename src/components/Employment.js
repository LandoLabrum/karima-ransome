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









    // if (typeof process.env.REACT_APP_KEY_ID !== "undefined") {
    //     alert(`Hi. Variable is defined. ${process.env.REACT_APP_KEY_ID}`);
    // }
    const [FormData, setFormData] = useState(<Form />)
    const grid = dta.gridlist.items
    const Hwc = dta.HowWeCare.items
    AWS.config.update({
        region: 'us-west-1',
        accessKeyId: process.env.REACT_APP_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_KEY
    });
    const { register, handleSubmit } = useForm();

    function MailFormatter(p) {
        return <div >
            
            {p.map((v) => (
                <p key={p}>
                        <span>{v}</span>
                </p>
            ))}
        </div>
    }

    function TextInput(p) {
        return <div className={p.class == null ? "col s12 m4" : p.class}>
            <label>{p.title}</label>
            <input
                name={p.register}
                type={p.type == null ? "text" : p.type}
                {...register(p.register)}
            />
        </div>
    }
    function BoolInput(p) {
        return <div className="col s12">
            {p.title}<br />
            <p>
                <label>
                    <input 
                    
                    name={p.register} type="radio" value={true} {...register(p.register)} />
                    <span>Yes</span>
                </label>
            </p>
            <p>
                <label>
                    <input name={p.register} type="radio" value={false} {...register(p.register)} />
                    <span>No</span>
                </label>
            </p>
        </div>
    }
    function RadioInput(p) {
        return <div className={p.class == null ? "col s12 m4" : p.class}>
            {p.title}<br />
            {p.values.map((v) => (
                <p>
                    <label>
                        <input name={p.register} type="radio" value={v} {...register(p.register)} />
                        <span>{v}</span>
                    </label>
                </p>
            ))}
        </div>
    }
    function CheckboxInput(p) {
        return <div className={p.class == null ? "col s12 m4" : p.class}>
            <p>
                <label>
                    <input type="checkbox" {...register(p.register)} />
                    <span>{p.title}</span>
                </label>
            </p>
        </div>
    }
    function OnSubmit(data) {
        // alert(JSON.stringify(data))
        var Email = 'mail@deepturn.com'
        // var Email = 'k.ransome@nubirthhcs.com'
        var params = {
        Destination: {
         ToAddresses: [
         Email,
         ]
        },
        Message: {
         Body: {
         Html: {
          Charset: "UTF-8",
          Data: `<h1>Employment Request</h1><br/>
          <h2>Name</h2> ${data.first_name} ${data.middle_name} ${data.last_name}<br/><br/>
          <h2>Contact</h2>
          <b>tel:</b> ${data.tel}<br/>
          <b>email:</b> ${data.email}<br/>
          <b>address:</b> ${data.address}<br/>
          <b>mailing address:</b> ${data.mailing_address}<br/>
          <b>Cell:</b> ${data.tel_cell}<br/>
          <b>Notes:</b> ${data.Notes}<br/>
          <b>is applicant eighteen years old:</b> ${data.is_eighteen}<br/>
          <b>alias:</b> ${data.alias}<br/>
          <b>position desired:</b> ${data.position_desired}<br/>
          <b>hours desired:</b> ${data.hours_desired}<br/>
          <b>certificates licenses:</b> ${data.certificates_licenses}<br/>
          <b>is license revoked:</b> ${data.is_license_revoked}<br/>
          <b>why license revoked:</b> ${data.why_license_revoked}<br/>
          <b>citizen status:</b> ${data.citizen_status}<br/>
          <b>previous applicant:</b> ${data.previous_applicant}<br/>
          <b>knows current staff:</b> ${data.knows_current_staff}<br/>
          <b>knows current staff names:</b> ${data.knows_current_staff_names}<br/>
          <h2>Reference 1</h2>
          <b>Name:</b> ${data.reference_1_name}<br/>
          <b>Address:</b> ${data.reference_1_address}<br/>
          <b>Relation:</b> ${data.reference_1_relation}<br/>
          <b>Phone:</b> ${data.reference_1_tel}<br/>
          <h2>Reference 2</h2>
          <b>name:</b> ${data.reference_2_name}<br/>
          <b>address:</b> ${data.reference_2_address}<br/>
          <b>relation:</b> ${data.reference_2_relation}<br/>
          <b>Phone:</b> ${data.reference_2_tel}<br/>
          <h2>Reference 3</h2>
          <b>name:</b> ${data.reference_3_name}<br/>
          <b>address:</b> ${data.reference_3_address}<br/>
          <b>relation:</b> ${data.reference_3_relation}<br/>
          <b>Phone:</b> ${data.reference_3_tel}<br/>
          <h2>Reference 4</h2>
          <b>name:</b> ${data.reference_4_name}<br/>
          <b>address:</b> ${data.reference_4_address}<br/>
          <b>relation:</b> ${data.reference_4_relation}<br/>
          <b>Phone:</b> ${data.reference_4_tel}<br/>
          <h2>Transportation</h2>
          <b>has drivers license:</b> ${data.has_drivers_license}<br/>
          <b>has insurance:</b> ${data.has_insurance}<br/>
          <h2>Emergency Contact 1</h2>
          <b>name:</b> ${data.emergency_contact_1_name}<br/>
          <b>relation:</b> ${data.emergency_contact_1_relation}<br/>
          <b>tel:</b> ${data.emergency_contact_1_tel}<br/>
          <h2>Emergency Contact 2</h2>
          <b>name:</b> ${data.emergency_contact_2_name}<br/>
          <b>relation:</b> ${data.emergency_contact_2_relation}<br/>
          <b>tel:</b> ${data.emergency_contact_2_tel}<br/>
          <h2>School</h2>
          <b>highschool name and address:</b> ${data.highschool_name_and_address}<br/>
          <b>highschool course of study:</b> ${data.highschool_course_of_study}<br/>
          <b>highschool years completed:</b> ${data.highschool_years_completed}<br/>
          <b>high school years graduated:</b> ${data.high_school_years_graduated}<br/>
          <b>undergrad name and address:</b> ${data.undergrad_name_and_address}<br/>
          <b>undergrad course of study:</b> ${data.undergrad_course_of_study}<br/>
          <b>undergrad years completed:</b> ${data.undergrad_years_completed}<br/>
          <b>undergrad years graduated:</b> ${data.undergrad_years_graduated}<br/>
          <b>grad name and address:</b> ${data.grad_name_and_address}<br/>
          <b>grad course of study:</b> ${data.grad_course_of_study}<br/>
          <b>grad years completed:</b> ${data.grad_years_completed}<br/>
          <b>grad years graduated:</b> ${data.grad_years_graduated}<br/>
          <h2>Experience</h2>
          <b>alzheimers dementia:</b> ${data.skill_alzheimers_dementia}<br/>
          <b>bathing male female:</b> ${data.skill_bathing_male_female}<br/>
          <b>bedpan:</b> ${data.skill_bedpan}<br/>
          <b>blind visually impared:</b> ${data.skill_blind_visually_impared}<br/>
          <b>blood sugar testing:</b> ${data.skill_blood_sugar_testing}<br/>
          <b>cancer:</b> ${data.skill_cancer}<br/>
          <b>pressure area:</b> ${data.skill_pressure_area}<br/>
          <b>colostomy bag:</b> ${data.skill_colostomy_bag}<br/>
          <b>depression mental instability:</b> ${data.skill_depression_mental_instability}<br/>
          <b>diabetic:</b> ${data.skill_diabetic}<br/>
          <b>epileptic:</b> ${data.skill_epileptic}<br/>
          <b>external foley care:</b> ${data.skill_external_foley_care}<br/>
          <b>feeding tube:</b> ${data.skill_feeding_tube}<br/>
          <b>foley catheter:</b> ${data.skill_foley_catheter}<br/>
          <b>foot edema:</b> ${data.skill_foot_edema}<br/>
          <b>heart disease:</b> ${data.skill_heart_disease}<br/>
          <b>medication monitoring:</b> ${data.skill_medication_monitoring}<br/>
          <b>mental handicap:</b> ${data.skill_mental_handicap}<br/>
          <b>mobility aid:</b> ${data.skill_mobility_aid}<br/>
          <b>non sterile dressing:</b> ${data.skill_non_sterile_dressing}<br/>
          <b>oxygen:</b> ${data.skill_oxygen}<br/>
          <b>parkinsons:</b> ${data.skill_parkinsons}<br/>
          <b>positioning:</b> ${data.skill_positioning}<br/>
          <b>special diet:</b> ${data.skill_special_diet}<br/>
          <b>stroke:</b> ${data.skill_stroke}<br/>
          <b>tempermental client:</b> ${data.skill_tempermental_client}<br/>
          <b>vitals:</b> ${data.skill_vitals}<br/>
          <b>weight:</b> ${data.skill_weight}<br/>
          <b>transfer bedridden:</b> ${data.skill_transfer_bedridden}<br/>
          <b>transfer wheelchair:</b> ${data.skill_transfer_wheelchair}<br/>
          <b>transfer hoyer lift:</b> ${data.skill_transfer_hoyer_lift}<br/>
          <b>transfer transfer board:</b> ${data.skill_transfer_transfer_board}<br/>
          <b>other:</b> ${data.skill_other}<br/>
          <b>other name:</b> ${data.skill_other_name}<br/>
          <b>wont do:</b> ${data.skill_wont_do}<br/>

        <h2>Interests/Hobbies</h2>
          <b>board or card games:</b> ${data.hobby_board_card_game}<br/>
          <b>conversationalist:</b> ${data.hobby_conversationalist}<br/>
          <b>cooking baking:</b> ${data.hobby_cooking_baking}<br/>
          <b>craft:</b> ${data.hobby_craft}<br/>
          <b>crochet knit:</b> ${data.hobby_crochet_knit}<br/>
          <b>gardening:</b> ${data.hobby_gardening}<br/>
          <b>hairdressing:</b> ${data.hobby_hairdressing}<br/>
          <b>manicure:</b> ${data.hobby_manicure}<br/>
          <b>puzzle:</b> ${data.hobby_puzzle}<br/>
          <b>reading to client:</b> ${data.hobby_reading_to_client}<br/>
          <b>sewing:</b> ${data.hobby_sewing}<br/>
          <b>other:</b> ${data.hobby_other}<br/>
          <b>other name:</b> ${data.hobby_other_name}<br/>

          <b>home cooked meals:</b> ${data.home_cooked_meals}<br/>
          <b>home cooked meals rating:</b> ${data.home_cooked_meals_rating}<br/>
          <b>comfortable cooking from scratch:</b> ${data.comfortable_cooking_from_scratch}<br/>
          <b>describe personality:</b> ${data.describe_personality}<br/>
          <h2>Medical</h2>
          <b>personal limitations:</b> ${data.personal_limitations}<br/>
          <h2>Job History</h2>
          <h3>Employer 1</h3>
          <b>name:</b> ${data.employer_name_1}<br/>
          <b>from:</b> ${data.employer_from_1}<br/>
          <b>wage:</b> ${data.employer_wage_1}<br/>
          <b>address:</b> ${data.employer_address_1}<br/>
          <b>job title:</b> ${data.employer_job_title_1}<br/>
          <b>job duties:</b> ${data.employer_job_duties_1}<br/>
          <b>tel:</b> ${data.employer_tel_1}<br/>
          <b>supervisor:</b> ${data.employer_supervisor_1}<br/>
          <b>leave reason:</b> ${data.employer_leave_reason_1}<br/>
          <b>time between job 1:</b> ${data.employer_time_between_job_1}<br/>
          <h3>Employer 2</h3>
          <b>name:</b> ${data.employer_name_2}<br/>
          <b>from:</b> ${data.employer_from_2}<br/>
          <b>wage:</b> ${data.employer_wage_2}<br/>
          <b>address:</b> ${data.employer_address_2}<br/>
          <b>job title:</b> ${data.employer_job_title_2}<br/>
          <b>job duties:</b> ${data.employer_job_duties_2}<br/>
          <b>tel:</b> ${data.employer_tel_2}<br/>
          <b>supervisor:</b> ${data.employer_supervisor_2}<br/>
          <b>leave reason:</b> ${data.employer_leave_reason_2}<br/>
          <b>time between job:</b> ${data.employer_time_between_job_2}<br/>
          <h3>Employer 3</h3>
          <b>name:</b> ${data.employer_name_3}<br/>
          <b>from:</b> ${data.employer_from_3}<br/>
          <b>wage:</b> ${data.employer_wage_3}<br/>
          <b>address:</b> ${data.employer_address_3}<br/>
          <b>job title:</b> ${data.employer_job_title_3}<br/>
          <b>job duties:</b> ${data.employer_job_duties_3}<br/>
          <b>tel:</b> ${data.employer_tel_3}<br/>
          <b>supervisor:</b> ${data.employer_supervisor_3}<br/>
          <b>leave reason:</b> ${data.employer_leave_reason_3}<br/>
          <b>time between job:</b> ${data.employer_time_between_job_3}<br/>
          <h3>Employer 4</h3>
          <b>name:</b> ${data.employer_name_4}<br/>
          <b>from:</b> ${data.employer_from_4}<br/>
          <b>wage:</b> ${data.employer_wage_4}<br/>
          <b>address:</b> ${data.employer_address_4}<br/>
          <b>job title:</b> ${data.employer_job_title_4}<br/>
          <b>job duties:</b> ${data.employer_job_duties_4}<br/>
          <b>tel:</b> ${data.employer_tel_4}<br/>
          <b>supervisor 4:</b> ${data.employer_supervisor_4}<br/>
          <b>leave reason 4:</b> ${data.employer_leave_reason_4}<br/>
          <b>time between job 4:</b> ${data.employer_time_between_job_4}<br/>
          <h3>Availability</h3>
          <b>why dependable:</b> ${data.why_dependable}<br/>
          <b>available day:</b> ${data.available_day}<br/>
          <b>available 12 hr daytime:</b> ${data.available_12_hr_daytime}<br/>
          <b>available 12 hr night:</b> ${data.available_12_hr_night}<br/>
          <b>available evenings:</b> ${data.available_evenings}<br/>
          <b>available 12 hr night awake:</b> ${data.available_12_hr_night_awake}<br/>
          <b>available on call:</b> ${data.available_on_call}<br/>
          <b>available holidays:</b> ${data.available_holidays}<br/>
          <b>available 24hr:</b> ${data.available_24hr}<br/>
          Tell us about you: ${data.non_work_experience}`
         },
         Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY"
         }
         },
         Subject: {
         Charset: 'UTF-8',
         Data: 'Nu-Birth Employment Request'
         }
        },
        Source: Email,
        ReplyToAddresses: [
         Email,
        ],
        };

        var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
        sendPromise.then(
        function () {
         console.error(`SUCCESSFULLY SENT EMAIL: ${data}`);
         setFormData(<><h4 className="green-text ">We've Successfully Received Your Request.</h4>Please allow us time to process your request and we will get back with you as soon as possible</>);
        }).catch(
         function (err) {
         console.error(err, err.stack);
         setFormData(<><h4 className="orange-text">An error occured.</h4>please contact us to resolve this issue</>)
         });
    }
    function Form() {
        return <form className="container" onSubmit={handleSubmit(OnSubmit)}>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="card">
                <div className="card-content black-text">
                    <div className="row">
                        <h5 className="deep-purple-text text-lighten-2">Employment Application</h5>
                        <TextInput title="First Name" type="text" register="first_name" />
                        <TextInput title="Middle Name" type="text" register="middle_name" />
                        <TextInput title="Last Name" type="text" register="last_name" />
                        <TextInput class="col s12" title="Address" type="text" register="address" />
                        <TextInput class="col s12" title="Mailing Address" type="text" register="mailing_address" />
                        <TextInput class="col s12 m6" title="Home Phone" type="tel" register="tel" />
                        <TextInput class="col s12 m6" title="Cell Phone" type="tel" register="tel_cell" />
                        <TextInput class="col s12" title="Email" register="email" />
                        <TextInput class="col s12" title="Notes" register="Notes" />
                        <BoolInput title="Are you 18 Years of age or older?" register="is_eighteen" />
                        <TextInput class="col s12" title="List other names and aliases you have been known by:" register="alias" />
                        <RadioInput class="col s12" title="Placement you are seeking:" values={["Full Time", "Part Time", "Relief"]} register="position_desired" />
                        <TextInput class="col s12" title="Hours prefered per week" register="hours_desired" />
                        <RadioInput class="col s12" title="Certified Licenses:" values={["Certified Caregiver", "CNA", "NAR", "Other"]} register="certificates_licenses" />
                        <BoolInput title="Has your license ever been limited, suspended, or revoked?" register="is_license_revoked" />
                        <TextInput class="col s12" title="If yes, explain." register="why_license_revoked" />
                        <BoolInput title="Are you prevented from lawfully becoming employed in this country because of visa or immigration status?" register="citizen_status" />
                        <BoolInput title="Have you ever applied here before?" register="previous_applicant" />
                        <BoolInput title="Do you have family members or friends employed at NuBirth?" register="knows_current_staff" />
                        <TextInput class="col s12" title="If yes, explain." register="knows_current_staff_names" />
                        <h4>Personal References</h4>
                        <div className="col s12">Reference 1</div>
                        <TextInput class="col s12 m3" title="Name" register="reference_1_name" />
                        <TextInput class="col s12 m3" title="Address" register="reference_1_address" />
                        <TextInput class="col s12 m3" title="Relation" register="reference_1_relation" />
                        <TextInput class="col s12 m3" title="Tel" type="tel" register="reference_1_tel" />
                        <div className="col s12">Reference 2</div>
                        <TextInput class="col s12 m3" title="Name" register="reference_2_name" />
                        <TextInput class="col s12 m3" title="Address" register="reference_2_address" />
                        <TextInput class="col s12 m3" title="Relation" register="reference_2_relation" />
                        <TextInput class="col s12 m3" title="Tel" type="tel" register="reference_2_tel" />
                        <div className="col s12">Reference 3</div>
                        <TextInput class="col s12 m3" title="Name" register="reference_3_name" />
                        <TextInput class="col s12 m3" title="Address" register="reference_3_address" />
                        <TextInput class="col s12 m3" title="Relation" register="reference_3_relation" />
                        <TextInput class="col s12 m3" title="Tel" type="tel" register="reference_3_tel" />
                        <div className="col s12">Reference 4</div>
                        <TextInput class="col s12 m3" title="Name" register="reference_4_name" />
                        <TextInput class="col s12 m3" title="Address" register="reference_4_address" />
                        <TextInput class="col s12 m3" title="Relation" register="reference_4_relation" />
                        <TextInput class="col s12 m3" title="Tel" type="tel" register="reference_4_tel" />
                        <h4>Transportation</h4>

                        <BoolInput title="Do you have a current Driver's License?" register="has_drivers_license" />
                        <BoolInput title="Proof of auto insurance?" register="has_insurance" />
                        <h4>Emergency Contact Info</h4>

                        <div className="col s12">Emergency Contact 1</div>
                        <TextInput class="col s12 m4" title="Name" register="emergency_contact_1_name" />
                        <TextInput class="col s12 m4" title="Relation" register="emergency_contact_1_relation" />
                        <TextInput class="col s12 m4" title="Tel" type="tel" register="emergency_contact_1_tel" />
                        <div className="col s12">Emergency Contact 2</div>
                        <TextInput class="col s12 m4" title="Name" register="emergency_contact_2_name" />
                        <TextInput class="col s12 m4" title="Relation" register="emergency_contact_2_relation" />
                        <TextInput class="col s12 m4" title="Tel" type="tel" register="emergency_contact_2_tel" />
                        <h4>Education</h4>
                        <div className="col s12">High School</div>
                        <TextInput class="col s12 m3" title="Name & Address of School" register="highschool_name_and_address" />
                        <TextInput class="col s12 m3" title="Course of Study" register="highschool_course_of_study" />
                        <TextInput class="col s12 m3" title="Years Completed" type="number" register="highschool_years_completed" />
                        <TextInput class="col s12 m3" title="Years Graduated" type="number" register="high_school_years_graduated" />

                        <div className="col s12">Undergraduate / College</div>
                        <TextInput class="col s12 m3" title="Name & Address of School" register="undergrad_name_and_address" />
                        <TextInput class="col s12 m3" title="Course of Study" register="undergrad_course_of_study" />
                        <TextInput class="col s12 m3" title="Years Completed" type="number" register="undergrad_years_completed" />
                        <TextInput class="col s12 m3" title="Years Graduated" type="number" register="undergrad_years_graduated" />

                        <div className="col s12">Graduate / Professional</div>
                        <TextInput class="col s12 m3" title="Name & Address of School" register="grad_name_and_address" />
                        <TextInput class="col s12 m3" title="Course of Study" register="grad_course_of_study" />
                        <TextInput class="col s12 m3" title="Years Completed" type="number" register="grad_years_completed" />
                        <TextInput class="col s12 m3" title="Years Graduated" type="number" register="grad_years_graduated" />

                        <h4>SPECIALIZED EXPERIENCE, VOLUNTEER WORK, TRAINING/SKILLS</h4>
                        <p>Please Indicate, <b>experience</b> in <b>Months</b></p>
                        <TextInput class="col s6 m4 l3" title="Alzheimer’s/Dementia " type="number" register="skill_alzheimers_dementia" />
                        <TextInput class="col s6 m4 l3" title="Bathing Males/Females" type="number" register="skill_bathing_male_female" />
                        <TextInput class="col s6 m4 l3" title="Bedpan Toileting/BSC " type="number" register="skill_bedpan" />
                        <TextInput class="col s6 m4 l3" title="Blind/Visually Impared" type="number" register="skill_blind_visually_impared" />
                        <TextInput class="col s6 m4 l3" title="Blood Sugar Testing" type="number" register="skill_blood_sugar_testing" />
                        <TextInput class="col s6 m4 l3" title="Cancer" type="number" register="skill_cancer" />
                        <TextInput class="col s6 m4 l3" title="Care of Pressure Area" type="number" register="skill_pressure_area" />
                        <TextInput class="col s6 m4 l3" title="Colostomy Bag" type="number" register="skill_colostomy_bag" />
                        <TextInput class="col s6 m4 l3" title="Depression/Mental Instability" type="number" register="skill_depression_mental_instability" />
                        <TextInput class="col s6 m4 l3" title="Diabetic" type="number" register="skill_diabetic" />
                        <TextInput class="col s6 m4 l3" title="Epileptic" type="number" register="skill_epileptic" />
                        <TextInput class="col s6 m4 l3" title="External Foley Care" type="number" register="skill_external_foley_care" />
                        <TextInput class="col s6 m4 l3" title="Feeding Tubes" type="number" register="skill_feeding_tube" />
                        <TextInput class="col s6 m4 l3" title="Foley Catheter" type="number" register="skill_foley_catheter" />
                        <TextInput class="col s6 m4 l3" title="Foot Edema" type="number" register="skill_foot_edema" />
                        <TextInput class="col s6 m4 l3" title="Heart Disease" type="number" register="skill_heart_disease" />
                        <TextInput class="col s6 m4 l3" title="Medication Monitoring" type="number" register="skill_medication_monitoring" />
                        <TextInput class="col s6 m4 l3" title="Mentally Handicapped" type="number" register="skill_mental_handicap" />
                        <TextInput class="col s6 m4 l3" title="Mobility Aid" type="number" register="skill_mobility_aid" />
                        <TextInput class="col s6 m4 l3" title="Non-Sterile Dressing" type="number" register="skill_non_sterile_dressing" />
                        <TextInput class="col s6 m4 l3" title="Oxygen" type="number" register="skill_oxygen" />
                        <TextInput class="col s6 m4 l3" title="Parkinson's Disease" type="number" register="skill_parkinsons" />
                        <TextInput class="col s6 m4 l3" title="Positioning" type="number" register="skill_positioning" />
                        <TextInput class="col s6 m4 l3" title="Preeparing Special Diets" type="number" register="skill_special_diet" />
                        <TextInput class="col s6 m4 l3" title="Stroke" type="number" register="skill_stroke" />
                        <TextInput class="col s6 m4 l3" title="Temperamental Client" type="number" register="skill_tempermental_client" />
                        <TextInput class="col s6 m4 l3" title="Vital Signs/Blood Pressure" type="number" register="skill_vitals" />
                        <TextInput class="col s6 m4 l3" title="Weight" type="number" register="skill_weight" />
                        <div className="col s12">Transfers</div>
                        <TextInput class="col s6 m4 l3" title="Bedridden Patients" type="number" register="skill_transfer_bedridden" />
                        <TextInput class="col s6 m4 l3" title="Wheelchair" type="number" register="skill_transfer_wheelchair" />
                        <TextInput class="col s6 m4 l3" title="Hoyer Lift" type="number" register="skill_transfer_hoyer_lift" />
                        <TextInput class="col s6 m4 l3" title="Transfer Board" type="number" register="skill_transfer_transfer_board" />
                        <div className="col s12"> <hr /></div>
                        <TextInput class="col s6 m4 l3" title="Other Skill Time ( Also in Months )" type="number" register="skill_other" />
                        <TextInput class="col s12" title="If Other, what skill?, ( Name Other Skill NOT listed )" type="text" register="skill_other_name" />
                        <TextInput class="col s12" title="What work duties are you NOT willing to do? ( list )" type="text" register="skill_wont_do" />
                        <div className="col s12"><h4>Interests/Hobbies</h4></div>
                        <div className="col s12">Please list any skills, hobbies, or other activities that would contribute to your proficiency as a caregiver. Many 12-24 hour jobs include considerable amounts of unstructured time, and leisure time participation with the client is important. Please indicate activities you enjoy and/or are able to teach to someone else.<br /><br />
                        </div>

                        <CheckboxInput class="col s6 m4 l3" title="Board / Card Games" register="hobby_board_card_game" />
                        <CheckboxInput class="col s6 m4 l3" title="Conversationalist" register="hobby_conversationalist" />
                        <CheckboxInput class="col s6 m4 l3" title="Cooking / Baking" register="hobby_cooking_baking" />
                        <CheckboxInput class="col s6 m4 l3" title="Crafts" register="hobby_craft" />
                        <CheckboxInput class="col s6 m4 l3" title="Crocheting / Knitting" register="hobby_crochet_knit" />
                        <CheckboxInput class="col s6 m4 l3" title="Gardening" register="hobby_gardening" />
                        <CheckboxInput class="col s6 m4 l3" title="Hairdressing" register="hobby_hairdressing" />
                        <CheckboxInput class="col s6 m4 l3" title="Manicures" register="hobby_manicure" />
                        <CheckboxInput class="col s6 m4 l3" title="Puzzles" register="hobby_puzzle" />
                        <CheckboxInput class="col s6 m4 l3" title="Reading to Client" register="hobby_reading_to_client" />
                        <CheckboxInput class="col s6 m4 l3" title="Sewing" register="hobby_sewing" />
                        <CheckboxInput class="col s6 m4 l3" title="" register="hobby_other" />
                        <TextInput class="col s12" title="If Other, what Hobby?, ( Name Other Hobby NOT listed )" type="text" register="hobby_other_name" />
                        <TextInput class="col s12" title="What meals do you typically cook at home?" type="text" register="home_cooked_meals" />
                        <RadioInput class="col s12" title="How would you rate your cooking" values={["Excellent", "Good", "Average", "TV Dinners"]} register="home_cooked_meals_rating" />
                        <BoolInput class="col s12" title="Are you comfortable cooking form scratch?" register="comfortable_cooking_from_scratch" />
                        <TextInput class="col s12" title="How would you describe your personality (quiet, bubbly, humorous)?" type="text" register="describe_personality" />
                        <div className="col s12"><h4>Medical</h4></div>
                        <div className="col s12">
                        </div>
                        <TextInput class="col s12" title="Due to the fact we match client needs with caregiver abilities, please list any physical or mental limitations and/or impairments that would have a direct effect on providing care to clients. For example: cannot lift more than 10 pounds due to back. On medication and cannot drive while taking it." type="text" register="personal_limitations" />
                        <div className="col s12"><h4>Work History</h4></div>
                        <div className="col s12"><hr />Previous Employer 1</div>
                        <TextInput class="col s12 m6" title="Employer" register="employer_name_1" />
                        <TextInput class="col s12 m2" title="From" type="date" register="employer_from_1" />
                        <TextInput class="col s12 m2" title="To" type="date" register="employer_from_1" />
                        <TextInput class="col s12 m2" title="Wage ( $ )" type="number" register="employer_wage_1" />
                        <TextInput class="col s12" title="Address (Street, City, State, Zip)" register="employer_address_1" />
                        <TextInput class="col s12" title="Job Title" register="employer_job_title_1" />
                        <TextInput class="col s12" title="Job Duties" register="employer_job_duties_1" />
                        <TextInput class="col s12 m6" title="Phone" type="tel" register="employer_tel_1" />
                        <TextInput class="col s12" title="Supervisor" register="employer_supervisor_1" />
                        <TextInput class="col s12" title="Reason for leaving" register="employer_leave_reason_1" />
                        <TextInput class="col s12" title="Explain Time Between Jobs" register="employer_time_between_job_1" />

                        <div className="col s12"><hr />Previous Employer 2</div>
                        <TextInput class="col s12 m6" title="Employer" register="employer_name_2" />
                        <TextInput class="col s12 m2" title="From" type="date" register="employer_from_2" />
                        <TextInput class="col s12 m2" title="To" type="date" register="employer_from_2" />
                        <TextInput class="col s12 m2" title="Wage ( $ )" type="number" register="employer_wage_2" />
                        <TextInput class="col s12" title="Address (Street, City, State, Zip)" register="employer_address_2" />
                        <TextInput class="col s12" title="Job Title" register="employer_job_title_2" />
                        <TextInput class="col s12" title="Job Duties" register="employer_job_duties_2" />
                        <TextInput class="col s12 m6" title="Phone" type="tel" register="employer_tel_2" />
                        <TextInput class="col s12" title="Supervisor" register="employer_supervisor_2" />
                        <TextInput class="col s12" title="Reason for leaving" register="employer_leave_reason_2" />
                        <TextInput class="col s12" title="Explain Time Between Jobs" register="employer_time_between_job_2" />

                        <div className="col s12"><hr />Previous Employer 3</div>
                        <TextInput class="col s12 m6" title="Employer" register="employer_name_3" />
                        <TextInput class="col s12 m2" title="From" type="date" register="employer_from_3" />
                        <TextInput class="col s12 m2" title="To" type="date" register="employer_from_3" />
                        <TextInput class="col s12 m2" title="Wage ( $ )" type="number" register="employer_wage_3" />
                        <TextInput class="col s12" title="Address (Street, City, State, Zip)" register="employer_address_3" />
                        <TextInput class="col s12" title="Job Title" register="employer_job_title_3" />
                        <TextInput class="col s12" title="Job Duties" register="employer_job_duties_3" />
                        <TextInput class="col s12 m6" title="Phone" type="tel" register="employer_tel_3" />
                        <TextInput class="col s12" title="Supervisor" register="employer_supervisor_3" />
                        <TextInput class="col s12" title="Reason for leaving" register="employer_leave_reason_3" />
                        <TextInput class="col s12" title="Explain Time Between Jobs" register="employer_time_between_job_3" />

                        <div className="col s12"><hr />Previous Employer 4</div>
                        <TextInput class="col s12 m6" title="Employer" register="employer_name_4" />
                        <TextInput class="col s12 m2" title="From" type="date" register="employer_from_4" />
                        <TextInput class="col s12 m2" title="To" type="date" register="employer_from_4" />
                        <TextInput class="col s12 m2" title="Wage ( $ )" type="number" register="employer_wage_4" />
                        <TextInput class="col s12" title="Address (Street, City, State, Zip)" register="employer_address_4" />
                        <TextInput class="col s12" title="Job Title" register="employer_job_title_4" />
                        <TextInput class="col s12" title="Job Duties" register="employer_job_duties_4" />
                        <TextInput class="col s12 m6" title="Phone" type="tel" register="employer_tel_4" />
                        <TextInput class="col s12" title="Supervisor" register="employer_supervisor_4" />
                        <TextInput class="col s12" title="Reason for leaving" register="employer_leave_reason_4" />
                        <TextInput class="col s12" title="Explain Time Between Jobs" register="employer_time_between_job_4" />
                        <TextInput class="col s12" title="Caregiving requires a high degree of dependability. Describe why you feel you are dependable. Give Examples. " register="why_dependable" />

                        <div className="col s12"><h4>Availability</h4></div>
                        <div className="col s12">Indicate (1) for first choice, (2) second choice; up to (5) in order of preferred shifts: </div>
                        <TextInput class="col s6 m4 l3" title="days" min="1" max="5" type="number" register="available_day" />
                        <TextInput class="col s6 m4 l3" title="12-Hour Daytime Shift" min="1" max="5" type="number" register="available_12_hr_daytime" />
                        <TextInput class="col s6 m4 l3" title="12-Hour Sleep Night Shift" min="1" max="5" type="number" register="available_12_hr_night" />
                        <TextInput class="col s6 m4 l3" title="Evenings" min="1" max="5" type="number" register="available_evenings" />
                        <TextInput class="col s6 m4 l3" title="12-Hour Awake Night Shift" min="1" max="5" type="number" register="available_12_hr_night_awake" />
                        <TextInput class="col s6 m4 l3" title="On Call" min="1" max="5" type="number" register="available_on_call" />
                        <TextInput class="col s6 m4 l3" title="Holidays" min="1" max="5" type="number" register="available_holidays" />
                        <TextInput class="col s6 m4 l3" title="24 Hr Shift" min="1" max="5" type="number" register="available_24hr" />
                        <div className="col s12"><h4>Tell us about you</h4></div>

                        <TextInput class="col s12" title="Please tell us about any caregiving experience you have that Is not included in your work history. Also include how long you performed those tasks.
                            (Example: Caregiving for parents or volunteer work.)" register="non_work_experience" />

                    </div>
                    <div className="row">
                        <div className="col s12"><h4>Disclosure</h4></div>
                        <div className="col s12">Applicants, employees, and registrants of this organization are subject to state laws that protect the clients we work with: vulnerable adults and the elderly. You are required to
                            sign this statement as part of our screening process, and annually thereafter as a requirement of employment.
                        </div>
                        <div className="col s12 center">WHAT WILL DISQUALIFY A PERSON FROM WORKING WITH VULNERABLE ADULTS?</div>
                        1. If your record shows a conviction for the following crimes, you are automatically disqualified:
                        <p>
                            • Aggravated Murder • Communication with a Minor for Immoral Purposes • Manslaughter 1st Degree • Sexual Exploitation of Minor
                            • Arson 1st Degree • Criminal Abandonment • Manslaughter 2nd Degree • Sexual Misconduct with Minor 1st Degree
                            • Assault 1st Degree • Criminal Mistreatment 1st Degree • Murder 1st Degree • Sexual Misconduct with Minor 2nd Degree
                            • Assault 2nd Degree • Criminal Mistreatment 2nd Degree • Murder 2nd Degree • Theft 1st Degree
                            • Assault 3rd Degree • Custodial Assault • Patronizing a Juvenile Prostitute • Theft 2nd Degree
                            • Assault 4th Degree (Simple Assault)• Custodial Interference 1st Degree • Promoting Pornography • Theft 3rd Degree
                            • Assault of Child 1st Degree • Custodial Interference 2nd Degree • Promoting Prostitution 1st Degree • Unlawful Imprisonment
                            • Assault of Child 2nd Degree • Extortion 1st Degree • Prostitution • Vehicular Homicide (Negligent Homicide)
                            • Assault of Child 3rd Degree • Extortion 2nd Degree • Rape 1st Degree • Violation of Child Abuse Restraining Order
                            • Burglary 1st Degree • Extortion 3rd Degree • Rape 2nd Degree • Mfg. and/or Delivery of Controlled Substance
                            • Child Abandonment • Felony Indecent Exposure • Rape 3rd Degree • Possession with Intent to Manufacture
                            • Child Abuse or Neglect • Forgery • Rape of Child 1st Degree and/or Deliver Controlled Substance
                            as defined in RCW 26.44.020 • Incest • Rape of Child 2nd Degree
                            • Child Buying or Selling • Indecent Liberties • Rape of Child 3rd Degree
                            • Child Molestation 1st Degree • Kidnapping 1st Degree • Robbery 1st Degree
                            • Child Molestation 2nd Degree • Kidnapping 2nd Degree • Robbery 2nd Degree
                            • Child Molestation 3rd Degree • Malicious Harassment • Selling or Distributing Erotic Material to Child
                        </p>
                        <br />
                        2. If your record shows that you have been convicted (in any state) of a crime that is equivalent to a crime on the list above or a crime that has been renamed, you may be
                        disqualified or terminated.
                        3. If a court, state department, disciplinary board, or dependency action has found that you have abuse, neglected, exploited, or sexually abused any minor or vulnerable adult, you
                        are automatically disqualified from employment and/or placement through this organization.
                        4. If your record shows that you have been convicted of other crimes related to care of vulnerable adults or children, you may be disqualified from employment and/or placement
                        through this organization.
                        <br />
                        <TextInput class="col s12" title="Have you ever been arrested or convicted of any of the crimes listed above?" register="available_24hr" />

                    </div>
                </div>
            </div>

            <input className={"btn btn-block ".concat(dta.style.primary.background)} type="submit" value="Submit" />
        </form>
    }
    return (<>
        {FormData}
    </>
    );
}