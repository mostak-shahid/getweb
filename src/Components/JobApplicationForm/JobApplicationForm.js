import axios from 'axios';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileIcon from "../../assets/images/file.svg";
import Config from "../../Config.json";
import LazyImage from '../LazyImage';
import Section from '../Section/Section';
import SeoMeta from '../SeoMeta/SeoMeta';
import SuccessfulModal from '../SuccessfulModal/SuccessfulModal';
import "./JobApplicationForm.scss";
const JobApplicationForm = (props) => {
    //const location = useLocation();
    const params = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);  

    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [jobs,setJobs]=useState([]);
    
    const [formProcessing, setFormPocessing] = useState(false);
    const [error, setError] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(()=>{
        const url = Config.API_BASE + "data-list/job/0";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobs(resp))//setting response to state posts
    },[]); 

    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.JOB_APPLICATION_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]); 
    
    useEffect(() => {
        if (jobs.length !== 0 && pageData.length !== 0) {
            setLoading(false);
        }
    }, [jobs,pageData]);
    const onSubmit = async (data) => {
        //console.log(data);
        let  isValidNumberForRegion = true;
        if (data.phone && data.code){
            // Get an instance of `PhoneNumberUtil`.
            const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
            // Parse number with country code and keep raw input.
            const number = phoneUtil.parseAndKeepRawInput(data.phone, data.code);
            // Result from isValidNumberForRegion().
            isValidNumberForRegion = phoneUtil.isValidNumberForRegion(number, data.code);
            // Print the phone's country code.
            //console.log(number.getCountryCode());
            //console.log(isValidNumberForRegion);
        }
        if (isValidNumberForRegion){
            setFormPocessing(true);
            const formData = new FormData();
            formData.append('job_id',data.job_id);
            formData.append('first_name',data.first_name);
            formData.append('last_name',data.last_name);
            formData.append('code',data.code);
            formData.append('phone',data.phone);
            formData.append('email',data.email);
            formData.append('country',data.country);
            formData.append("cv", data.cv[0]);
            try {
                //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
                const rawResponse = await axios.post(Config.API_BASE + 'job-apply', formData,{ 
                    headers: {
                        'content-type': 'multipart/form-data',
                        'Accept': 'application/json',
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
                //const content = await rawResponse.json();
                console.log(rawResponse);
                if(rawResponse.data.req.data.status){
                    //toast.success('Thank you for submitting this query.');
                    setShow(true);
                    reset();
                } else {
                    toast.error('You have already applied for position.');
                    setError({
                        first_name: rawResponse.data.req.data.error.first_name,
                        last_name: rawResponse.data.req.data.error.last_name,
                        email: rawResponse.data.req.data.error.email,
                        file: rawResponse.data.req.data.error.file,                        
                        phone: ''
                    });
                }
            } catch (error) {
                toast.error('Please try again.');
                //console.log(error);
            }
            setFormPocessing(false);
        } else {            
            setError({
                phone: 'Please re-check your phone number',
            });
        }
    };   
    
    /*const onSubmit = (data) => {
        console.log(data);
        reset();
    }*/
    const cv = watch("cv");
    function handleChange(event) {
        var code=document.getElementById("formBasicContactNumberCode").value; 
        //var phone=event.target.value;
        var phone=document.getElementById("formBasicContactNumber").value; ;
        var isValidNumberForRegion = true;
        if (!phone.length){           
            setError({
                phone:'',
            });
        }
        else if (phone.length>=4){
            var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
            var number = phoneUtil.parseAndKeepRawInput(phone, code);
            isValidNumberForRegion = phoneUtil.isValidNumberForRegion(number, code);

            if (isValidNumberForRegion) {           
                setError({
                    phone: '',
                });
            } else {            
                setError({
                    phone: 'Please re-check your phone number',
                });
            }
        } else {         
            setError({
                phone: 'Please re-check your phone number',
            });
        }
        // console.log(code);
        // console.log(event.target.value);
    }
    return (
        loading
        ?<div className="textClrGreen text-center loder-text d-none">loading...</div>
        :        
        <>
            <SeoMeta pageData={pageData}/>
            {/* <JobDetailsBanner  title={pageData?.meta?._mosacademy_page_banner_title} content={pageData?.meta?._mosacademy_page_banner_intro}/> */}
            <section className="section-wrapper JobApplicationForm secPadding">
                <div className="container-lg">
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="part-one">
                                <div className="secIntro text-center">
                                    <div dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_page_banner_title}}></div>
                                    <p dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_page_banner_intro}}></p>
                                    <hr />
                                </div>                                
                                <div className="ApplicationForm bgClrSolitude isRadius16 form-validation">
                                    <div className="contactHeader mb-4 text-center">
                                        <div className="textClrThemeDark fs-4 fw-bold mb-10">Fillup the job application form</div>
                                        <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
                                    </div>
                                    <form className="form-job-application" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="selectJobTitle mb-3">
                                            <label htmlFor="job_id" className="textClrThemeDark fs-13 fwSemiBold">Job Title</label>
                                            <select id="job_id" className="form-select rounded-pill h-42 px-4"  {...register('job_id', { required: true })} defaultValue={params.slug?params.slug:0}>
                                                <option value="0">Position applying for</option>
                                                {
                                                    jobs.map((item, index) => (
                                                        <option value={item.slug} key={index} dangerouslySetInnerHTML={{__html: item.title}} />
                                                    ))                                                    
                                                }
                                            </select>
                                            {errors.job_id?.type === "required" && <div className='text-danger mt-1'>Please select a job.</div>}
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 mb-4">
                                                <div className="field">
                                                    <label htmlFor="first_name" className="textClrThemeDark fs-13 fwSemiBold">First Name</label><input id="first_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your first name" {...register('first_name', { required: true, pattern: /^[A-Za-z .]+$/ })}/>
                                                </div>
                                                {errors.first_name?.type === "required" && <div className='text-danger mt-1'>First name is required.</div>}
                                                {errors.first_name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <div className="field"><label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Last Name</label><input id="last_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your last name" {...register('last_name', {pattern: /^[A-Za-z .]+$/ })}/></div>
                                                {errors.last_name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                        <div className="contactField">
                                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicContactNumberCode">Contact Number</label>
                                            <div className="countryCode d-flex align-items-center rounded-pill border overflow-hidden">
                                                <select className="border-0 rounded-0 px-3 form-select" id="formBasicContactNumberCode" {...register('code', {onChange: handleChange})}>
                                                    <option value="DZ" data-countrycode="213">DZ (+213)</option>
                                                    <option value="AD" data-countrycode="376">AD (+376)</option>
                                                    <option value="AO" data-countrycode="244">AO (+244)</option>
                                                    <option value="AI" data-countrycode="1264">AI (+1264)</option>
                                                    <option value="AG" data-countrycode="1268">AG (+1268)</option>
                                                    <option value="AR" data-countrycode="54">AR (+54)</option>
                                                    <option value="AM" data-countrycode="374">AM (+374)</option>
                                                    <option value="AW" data-countrycode="297">AW (+297)</option>
                                                    <option value="AU" data-countrycode="61">AU (+61)</option>
                                                    <option value="AT" data-countrycode="43">AT (+43)</option>
                                                    <option value="AZ" data-countrycode="994">AZ (+994)</option>
                                                    <option value="BS" data-countrycode="1242">BS (+1242)</option>
                                                    <option value="BH" data-countrycode="973">BH (+973)</option>
                                                    <option value="BD" data-countrycode="880">BD (+880)</option>
                                                    <option value="BB" data-countrycode="1246">BB (+1246)</option>
                                                    <option value="BY" data-countrycode="375">BY (+375)</option>
                                                    <option value="BE" data-countrycode="32">BE (+32)</option>
                                                    <option value="BZ" data-countrycode="501">BZ (+501)</option>
                                                    <option value="BJ" data-countrycode="229">BJ (+229)</option>
                                                    <option value="BM" data-countrycode="1441">BM (+1441)</option>
                                                    <option value="BT" data-countrycode="975">BT (+975)</option>
                                                    <option value="BO" data-countrycode="591">BO (+591)</option>
                                                    <option value="BA" data-countrycode="387">BA (+387)</option>
                                                    <option value="BW" data-countrycode="267">BW (+267)</option>
                                                    <option value="BR" data-countrycode="55">BR (+55)</option>
                                                    <option value="BN" data-countrycode="673">BN (+673)</option>
                                                    <option value="BG" data-countrycode="359">BG (+359)</option>
                                                    <option value="BF" data-countrycode="226">BF (+226)</option>
                                                    <option value="BI" data-countrycode="257">BI (+257)</option>
                                                    <option value="KH" data-countrycode="855">KH (+855)</option>
                                                    <option value="CM" data-countrycode="237">CM (+237)</option>
                                                    <option value="CA" data-countrycode="1">CA (+1)</option>
                                                    <option value="CV" data-countrycode="238">CV (+238)</option>
                                                    <option value="KY" data-countrycode="1345">KY (+1345)</option>
                                                    <option value="CF" data-countrycode="236">CF (+236)</option>
                                                    <option value="CL" data-countrycode="56">CL (+56)</option>
                                                    <option value="CN" data-countrycode="86">CN (+86)</option>
                                                    <option value="CO" data-countrycode="57">CO (+57)</option>
                                                    <option value="KM" data-countrycode="269">KM (+269)</option>
                                                    <option value="CG" data-countrycode="242">CG (+242)</option>
                                                    <option value="CK" data-countrycode="682">CK (+682)</option>
                                                    <option value="CR" data-countrycode="506">CR (+506)</option>
                                                    <option value="HR" data-countrycode="385">HR (+385)</option>
                                                    <option value="CU" data-countrycode="53">CU (+53)</option>
                                                    <option value="CY" data-countrycode="90392">CY (+90392)</option>
                                                    <option value="CY" data-countrycode="357">CY (+357)</option>
                                                    <option value="CZ" data-countrycode="42">CZ (+42)</option>
                                                    <option value="DK" data-countrycode="45">DK (+45)</option>
                                                    <option value="DJ" data-countrycode="253">DJ (+253)</option>
                                                    <option value="DM" data-countrycode="1809">DM (+1809)</option>
                                                    <option value="DO" data-countrycode="1809">DO (+1809)</option>
                                                    <option value="EC" data-countrycode="593">EC (+593)</option>
                                                    <option value="EG" data-countrycode="20">EG (+20)</option>
                                                    <option value="SV" data-countrycode="503">SV (+503)</option>
                                                    <option value="GQ" data-countrycode="240">GQ (+240)</option>
                                                    <option value="ER" data-countrycode="291">ER (+291)</option>
                                                    <option value="EE" data-countrycode="372">EE (+372)</option>
                                                    <option value="ET" data-countrycode="251">ET (+251)</option>
                                                    <option value="FK" data-countrycode="500">FK (+500)</option>
                                                    <option value="FO" data-countrycode="298">FO (+298)</option>
                                                    <option value="FJ" data-countrycode="679">FJ (+679)</option>
                                                    <option value="FI" data-countrycode="358">FI (+358)</option>
                                                    <option value="FR" data-countrycode="33">FR (+33)</option>
                                                    <option value="GF" data-countrycode="594">GF (+594)</option>
                                                    <option value="PF" data-countrycode="689">PF (+689)</option>
                                                    <option value="GA" data-countrycode="241">GA (+241)</option>
                                                    <option value="GM" data-countrycode="220">GM (+220)</option>
                                                    <option value="GE" data-countrycode="7880">GE (+7880)</option>
                                                    <option value="DE" data-countrycode="49">DE (+49)</option>
                                                    <option value="GH" data-countrycode="233">GH (+233)</option>
                                                    <option value="GI" data-countrycode="350">GI (+350)</option>
                                                    <option value="GR" data-countrycode="30">GR (+30)</option>
                                                    <option value="GL" data-countrycode="299">GL (+299)</option>
                                                    <option value="GD" data-countrycode="1473">GD (+1473)</option>
                                                    <option value="GP" data-countrycode="590">GP (+590)</option>
                                                    <option value="GU" data-countrycode="671">GU (+671)</option>
                                                    <option value="GT" data-countrycode="502">GT (+502)</option>
                                                    <option value="GN" data-countrycode="224">GN (+224)</option>
                                                    <option value="GW" data-countrycode="245">GW (+245)</option>
                                                    <option value="GY" data-countrycode="592">GY (+592)</option>
                                                    <option value="HT" data-countrycode="509">HT (+509)</option>
                                                    <option value="HN" data-countrycode="504">HN (+504)</option>
                                                    <option value="HK" data-countrycode="852">HK (+852)</option>
                                                    <option value="HU" data-countrycode="36">HU (+36)</option>
                                                    <option value="IS" data-countrycode="354">IS (+354)</option>
                                                    <option value="IN" data-countrycode="91">IN (+91)</option>
                                                    <option value="ID" data-countrycode="62">ID (+62)</option>
                                                    <option value="IR" data-countrycode="98">IR (+98)</option>
                                                    <option value="IQ" data-countrycode="964">IQ (+964)</option>
                                                    <option value="IE" data-countrycode="353">IE (+353)</option>
                                                    <option value="IL" data-countrycode="972">IL (+972)</option>
                                                    <option value="IT" data-countrycode="39">IT (+39)</option>
                                                    <option value="JM" data-countrycode="1876">JM (+1876)</option>
                                                    <option value="JP" data-countrycode="81">JP (+81)</option>
                                                    <option value="JO" data-countrycode="962">JO (+962)</option>
                                                    <option value="KZ" data-countrycode="7">KZ (+7)</option>
                                                    <option value="KE" data-countrycode="254">KE (+254)</option>
                                                    <option value="KI" data-countrycode="686">KI (+686)</option>
                                                    <option value="KP" data-countrycode="850">KP (+850)</option>
                                                    <option value="KR" data-countrycode="82">KR (+82)</option>
                                                    <option value="KW" data-countrycode="965">KW (+965)</option>
                                                    <option value="KG" data-countrycode="996">KG (+996)</option>
                                                    <option value="LA" data-countrycode="856">LA (+856)</option>
                                                    <option value="LV" data-countrycode="371">LV (+371)</option>
                                                    <option value="LB" data-countrycode="961">LB (+961)</option>
                                                    <option value="LS" data-countrycode="266">LS (+266)</option>
                                                    <option value="LR" data-countrycode="231">LR (+231)</option>
                                                    <option value="LY" data-countrycode="218">LY (+218)</option>
                                                    <option value="LI" data-countrycode="417">LI (+417)</option>
                                                    <option value="LT" data-countrycode="370">LT (+370)</option>
                                                    <option value="LU" data-countrycode="352">LU (+352)</option>
                                                    <option value="MO" data-countrycode="853">MO (+853)</option>
                                                    <option value="MK" data-countrycode="389">MK (+389)</option>
                                                    <option value="MG" data-countrycode="261">MG (+261)</option>
                                                    <option value="MW" data-countrycode="265">MW (+265)</option>
                                                    <option value="MY" data-countrycode="60">MY (+60)</option>
                                                    <option value="MV" data-countrycode="960">MV (+960)</option>
                                                    <option value="ML" data-countrycode="223">ML (+223)</option>
                                                    <option value="MT" data-countrycode="356">MT (+356)</option>
                                                    <option value="MH" data-countrycode="692">MH (+692)</option>
                                                    <option value="MQ" data-countrycode="596">MQ (+596)</option>
                                                    <option value="MR" data-countrycode="222">MR (+222)</option>
                                                    <option value="YT" data-countrycode="269">YT (+269)</option>
                                                    <option value="MX" data-countrycode="52">MX (+52)</option>
                                                    <option value="FM" data-countrycode="691">FM (+691)</option>
                                                    <option value="MD" data-countrycode="373">MD (+373)</option>
                                                    <option value="MC" data-countrycode="377">MC (+377)</option>
                                                    <option value="MN" data-countrycode="976">MN (+976)</option>
                                                    <option value="MS" data-countrycode="1664">MS (+1664)</option>
                                                    <option value="MA" data-countrycode="212">MA (+212)</option>
                                                    <option value="MZ" data-countrycode="258">MZ (+258)</option>
                                                    <option value="MN" data-countrycode="95">MN (+95)</option>
                                                    <option value="NA" data-countrycode="264">NA (+264)</option>
                                                    <option value="NR" data-countrycode="674">NR (+674)</option>
                                                    <option value="NP" data-countrycode="977">NP (+977)</option>
                                                    <option value="NL" data-countrycode="31">NL (+31)</option>
                                                    <option value="NC" data-countrycode="687">NC (+687)</option>
                                                    <option value="NZ" data-countrycode="64">NZ (+64)</option>
                                                    <option value="NI" data-countrycode="505">NI (+505)</option>
                                                    <option value="NE" data-countrycode="227">NE (+227)</option>
                                                    <option value="NG" data-countrycode="234">NG (+234)</option>
                                                    <option value="NU" data-countrycode="683">NU (+683)</option>
                                                    <option value="NF" data-countrycode="672">NF (+672)</option>
                                                    <option value="NP" data-countrycode="670">NP (+670)</option>
                                                    <option value="NO" data-countrycode="47">NO (+47)</option>
                                                    <option value="OM" data-countrycode="968">OM (+968)</option>
                                                    <option value="PW" data-countrycode="680">PW (+680)</option>
                                                    <option value="PA" data-countrycode="507">PA (+507)</option>
                                                    <option value="PG" data-countrycode="675">PG (+675)</option>
                                                    <option value="PY" data-countrycode="595">PY (+595)</option>
                                                    <option value="PE" data-countrycode="51">PE (+51)</option>
                                                    <option value="PH" data-countrycode="63">PH (+63)</option>
                                                    <option value="PL" data-countrycode="48">PL (+48)</option>
                                                    <option value="PT" data-countrycode="351">PT (+351)</option>
                                                    <option value="PR" data-countrycode="1787">PR (+1787)</option>
                                                    <option value="QA" data-countrycode="974">QA (+974)</option>
                                                    <option value="RE" data-countrycode="262">RE (+262)</option>
                                                    <option value="RO" data-countrycode="40">RO (+40)</option>
                                                    <option value="RU" data-countrycode="7">RU (+7)</option>
                                                    <option value="RW" data-countrycode="250">RW (+250)</option>
                                                    <option value="SM" data-countrycode="378">SM (+378)</option>
                                                    <option value="ST" data-countrycode="239">ST (+239)</option>
                                                    <option value="SA" data-countrycode="966">SA (+966)</option>
                                                    <option value="SN" data-countrycode="221">SN (+221)</option>
                                                    <option value="CS" data-countrycode="381">CS (+381)</option>
                                                    <option value="SC" data-countrycode="248">SC (+248)</option>
                                                    <option value="SL" data-countrycode="232">SL (+232)</option>
                                                    <option value="SG" data-countrycode="65">SG (+65)</option>
                                                    <option value="SK" data-countrycode="421">SK (+421)</option>
                                                    <option value="SI" data-countrycode="386">SI (+386)</option>
                                                    <option value="SB" data-countrycode="677">SB (+677)</option>
                                                    <option value="SO" data-countrycode="252">SO (+252)</option>
                                                    <option value="ZA" data-countrycode="27">ZA (+27)</option>
                                                    <option value="ES" data-countrycode="34">ES (+34)</option>
                                                    <option value="LK" data-countrycode="94">LK (+94)</option>
                                                    <option value="SH" data-countrycode="290">SH (+290)</option>
                                                    <option value="KN" data-countrycode="1869">KN (+1869)</option>
                                                    <option value="SC" data-countrycode="1758">SC (+1758)</option>
                                                    <option value="SD" data-countrycode="249">SD (+249)</option>
                                                    <option value="SR" data-countrycode="597">SR (+597)</option>
                                                    <option value="SZ" data-countrycode="268">SZ (+268)</option>
                                                    <option value="SE" data-countrycode="46">SE (+46)</option>
                                                    <option value="CH" data-countrycode="41">CH (+41)</option>
                                                    <option value="SI" data-countrycode="963">SI (+963)</option>
                                                    <option value="TW" data-countrycode="886">TW (+886)</option>
                                                    <option value="TJ" data-countrycode="7">TJ (+7)</option>
                                                    <option value="TH" data-countrycode="66">TH (+66)</option>
                                                    <option value="TG" data-countrycode="228">TG (+228)</option>
                                                    <option value="TO" data-countrycode="676">TO (+676)</option>
                                                    <option value="TT" data-countrycode="1868">TT (+1868)</option>
                                                    <option value="TN" data-countrycode="216">TN (+216)</option>
                                                    <option value="TR" data-countrycode="90">TR (+90)</option>
                                                    <option value="TM" data-countrycode="7">TM (+7)</option>
                                                    <option value="TM" data-countrycode="993">TM (+993)</option>
                                                    <option value="TC" data-countrycode="1649">TC (+1649)</option>
                                                    <option value="TV" data-countrycode="688">TV (+688)</option>
                                                    <option value="UG" data-countrycode="256">UG (+256)</option>
                                                    <option value="GB" data-countrycode="44">GB (+44)</option>
                                                    <option value="UA" data-countrycode="380">UA (+380)</option>
                                                    <option value="AE" data-countrycode="971">AE (+971)</option>
                                                    <option value="UY" data-countrycode="598">UY (+598)</option>
                                                    <option value="US" data-countrycode="1">US (+1)</option>
                                                    <option value="UZ" data-countrycode="7">UZ (+7)</option>
                                                    <option value="VU" data-countrycode="678">VU (+678)</option>
                                                    <option value="VA" data-countrycode="379">VA (+379)</option>
                                                    <option value="VE" data-countrycode="58">VE (+58)</option>
                                                    <option value="VN" data-countrycode="84">VN (+84)</option>
                                                    <option value="VG" data-countrycode="84">VG (+84)</option>
                                                    <option value="VI" data-countrycode="84">VI (+84)</option>
                                                    <option value="WF" data-countrycode="681">WF (+681)</option>
                                                    <option value="YE" data-countrycode="969">YE (+969)</option>
                                                    <option value="YE" data-countrycode="967">YE (+967)</option>
                                                    <option value="ZM" data-countrycode="260">ZM (+260)</option>
                                                    <option value="ZW" data-countrycode="263">ZW (+263)</option>
                                                </select>
                                                {/* <input id="formBasicContactNumber" type="text" className="rounded-0 border-0 border-start px-3 form-control" placeholder="Please enter your number" {...register('phone')}/> */}
                                                <input placeholder="Please enter your number" type="text" id="formBasicContactNumber" className="rounded-0 border-0 border-start px-3 form-control" {...register('phone', {onChange: handleChange})}/>
                                            </div>   
                                            {/* {phoneNumber.phone}                              */}
                                            {error?.phone && <div className='text-danger mt-1'>{error.phone}</div>}
                                        </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 mb-4">
                                                <div className="field">
                                                    <label htmlFor="email" className="textClrThemeDark fs-13 fwSemiBold">Email</label>
                                                    <input id="email" type="email" className="form-control rounded-pill h-42 px-4" placeholder="Enter your email" {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ })}/>
                                                    {errors.email?.type === "required" && <div className='text-danger mt-1'>Email is required.</div>}
                                                    {errors.email?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid email.</div>}
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <div className="field">
                                                    <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Country</label>
                                                    <select id="country" className="form-select rounded-pill h-42 px-4" defaultValue="0" {...register('country')}>
                                                        <option value="0">Select your country</option>
                                                        <option>Bangladesh</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="cv" className="textClrThemeDark fs-13 fwSemiBold d-block position-relative">
                                                <p className="mb-2">Upload CV</p>
                                                <input name='cv' id='cv' type="file" className="opacity-0 position-absolute bottom-0 end-0 top-0 start-0 z-index-9"  {...register('cv',{ required: true})} accept=".jpg, .jpeg, .png, .gif, .docx, .doc, .pdf"/>
                                                <div className="fileBody bg-white p-4 isRadius12 d-flex justify-content-center align-items-center">
                                                    <LazyImage src={FileIcon} alt="icon" />
                                                    <p className="fs-14 fw-medium textClrGray mb-0">{(cv && cv[0]?.name)?cv[0].name:'Upload your CV'}</p>
                                                </div>
                                                <div className="fileBody-info">Allowed formates are .jpg, .jpeg, .png, .gif, .docx, .doc, .pdf and maximum size 10MB</div>
                                                {errors.cv?.type === "required" && <div className='text-danger mt-1'>CV is required.</div>}
                                                {error?.file && <div className='text-danger mt-1'>{error.file}</div>}
                                            </label>                                            
                                        </div>
                                        <div className="sbm-btn text-end">
                                            <button type="submit" className="btn bgClrGreen h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn-job-application" disabled={formProcessing}>{formProcessing? 'Submitting Application...' : 'Submit Application'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>               
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (                 
                    <Section data={item} key={index} />                      
                ))
            }
            <SuccessfulModal show={show} handleClose={handleClose} />
            <ToastContainer /> 
        </>
        
    );
};

export default JobApplicationForm;
