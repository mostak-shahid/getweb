import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileIcon from "../../assets/images/file.svg";
import Config from '../../Config.json';
import LazyImage from '../LazyImage';
import './FormValidation.scss';



const FormValidation = (props) => {
    // const {startProject} = props;
    // console.log(startProject);
    
    const [formProcessing, setFormPocessing] = useState(false);
    const [error, setError] = useState(false);
    const {
        register,
        handleSubmit,
        reset,        
        watch,
        formState: { errors },
    } = useForm();
    
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
            const formData = new FormData();
            formData.append('name',data.name);
            formData.append('email',data.email);
            formData.append('code',data.code);
            formData.append('phone',data.phone);
            formData.append('interested',data.interested);
            formData.append('budget',data.budget);
            formData.append('company',data.company);
            formData.append('message',data.message);
            formData.append('source',data.source);
            formData.append("cv", data.cv[0]);
            try {
                setFormPocessing(true);
                //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
                const rawResponse = await axios.post(Config.API_BASE + 'contact-data', formData,{ 
                    headers: {
                        'content-type': 'multipart/form-data',
                        'Accept': 'application/json',
                        "Content-type": "application/json; charset=UTF-8",
                        'Authorization': Config.Authorization
                    }
                })
                //const content = await rawResponse.json();
                console.log(rawResponse);
                if(rawResponse.data.req.data.status){
                    toast.success('Thank you for submitting this query.');
                    reset();
                    setError({
                        name: '',
                        email: '',
                        file: '',
                        phone: ''
                    });
                } else {
                    setError({
                        name: rawResponse.data.req.data.error.name,
                        email: rawResponse.data.req.data.error.email,
                        file: rawResponse.data.req.data.error.file
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
      <div
        className={`contactWrapper bgClrSolitude isRadius12 h-100 form-validation ${
          props.startProject && "p-0 bg-transparent"
        }`}
      >
        <ToastContainer />
        {(props?.title || props?.intro) && (
          <div className="contactHeader mb-30">
            {props?.title && (
              <div
                className="textClrThemeDark fs-24 fw-bold mb-10"
                dangerouslySetInnerHTML={{ __html: props.title }}
              />
            )}
            {props?.intro && (
              <div
                className="textClrGrayDark fs-6 fw-normal"
                dangerouslySetInnerHTML={{ __html: props.intro }}
              />
            )}
          </div>
        )}
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {props?.fields.find((element) => {
              return element === "name";
            }) === "name" && (
              <div
                className={`col-sm-6 mb-20 ${
                  props.startProject && "col-lg-12 mb-15"
                }`}
              >
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicName"
                  >
                    Name
                  </label>
                  <input
                    placeholder="Please enter your name"
                    type="text"
                    id="formBasicName"
                    className={`rounded-pill px-4 form-control ${
                      props.startProject && "bgClrDark5 border-0 disable-focus"
                    }`}
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z-_'. ]*$/,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <div className="text-danger mt-1">Name is required.</div>
                  )}
                  {errors.name?.type === "pattern" && (
                    <div className="text-danger mt-1">
                      Please enter a valid name.
                    </div>
                  )}
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "email";
            }) === "email" && (
              <div
                className={`col-sm-6 mb-20 ${
                  props.startProject && "col-lg-12 mb-15"
                }`}
              >
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicEmail"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Please enter your email"
                    type="email"
                    id="formBasicEmail"
                    className={`rounded-pill px-4 form-control ${
                      props.startProject && "bgClrDark5 border-0 disable-focus"
                    }`}
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <div className="text-danger mt-1">Email is required.</div>
                  )}
                  {errors.email?.type === "pattern" && (
                    <div className="text-danger mt-1">
                      Please enter a valid email.
                    </div>
                  )}
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "phone";
            }) === "phone" && (
              <div className="col-lg-12 mb-3">
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicContactNumberCode"
                  >
                    Contact Number
                  </label>
                  <div
                    className={`countryCode d-flex align-items-center rounded-pill border overflow-hidden ${
                      props.startProject && "border-0 focus-border"
                    }`}
                  >
                    <select
                      className={`border-0 rounded-0 px-3 form-select ${
                        props.startProject && "bgClrDark5 border-0 disable-focus"
                      }`}
                      id="formBasicContactNumberCode"
                      {...register("code", { onChange: handleChange })}
                    >
                      <option value="DZ" data-countrycode="213">
                        DZ (+213)
                      </option>
                      <option value="AD" data-countrycode="376">
                        AD (+376)
                      </option>
                      <option value="AO" data-countrycode="244">
                        AO (+244)
                      </option>
                      <option value="AI" data-countrycode="1264">
                        AI (+1264)
                      </option>
                      <option value="AG" data-countrycode="1268">
                        AG (+1268)
                      </option>
                      <option value="AR" data-countrycode="54">
                        AR (+54)
                      </option>
                      <option value="AM" data-countrycode="374">
                        AM (+374)
                      </option>
                      <option value="AW" data-countrycode="297">
                        AW (+297)
                      </option>
                      <option value="AU" data-countrycode="61">
                        AU (+61)
                      </option>
                      <option value="AT" data-countrycode="43">
                        AT (+43)
                      </option>
                      <option value="AZ" data-countrycode="994">
                        AZ (+994)
                      </option>
                      <option value="BS" data-countrycode="1242">
                        BS (+1242)
                      </option>
                      <option value="BH" data-countrycode="973">
                        BH (+973)
                      </option>
                      <option value="BD" data-countrycode="880">
                        BD (+880)
                      </option>
                      <option value="BB" data-countrycode="1246">
                        BB (+1246)
                      </option>
                      <option value="BY" data-countrycode="375">
                        BY (+375)
                      </option>
                      <option value="BE" data-countrycode="32">
                        BE (+32)
                      </option>
                      <option value="BZ" data-countrycode="501">
                        BZ (+501)
                      </option>
                      <option value="BJ" data-countrycode="229">
                        BJ (+229)
                      </option>
                      <option value="BM" data-countrycode="1441">
                        BM (+1441)
                      </option>
                      <option value="BT" data-countrycode="975">
                        BT (+975)
                      </option>
                      <option value="BO" data-countrycode="591">
                        BO (+591)
                      </option>
                      <option value="BA" data-countrycode="387">
                        BA (+387)
                      </option>
                      <option value="BW" data-countrycode="267">
                        BW (+267)
                      </option>
                      <option value="BR" data-countrycode="55">
                        BR (+55)
                      </option>
                      <option value="BN" data-countrycode="673">
                        BN (+673)
                      </option>
                      <option value="BG" data-countrycode="359">
                        BG (+359)
                      </option>
                      <option value="BF" data-countrycode="226">
                        BF (+226)
                      </option>
                      <option value="BI" data-countrycode="257">
                        BI (+257)
                      </option>
                      <option value="KH" data-countrycode="855">
                        KH (+855)
                      </option>
                      <option value="CM" data-countrycode="237">
                        CM (+237)
                      </option>
                      <option value="CA" data-countrycode="1">
                        CA (+1)
                      </option>
                      <option value="CV" data-countrycode="238">
                        CV (+238)
                      </option>
                      <option value="KY" data-countrycode="1345">
                        KY (+1345)
                      </option>
                      <option value="CF" data-countrycode="236">
                        CF (+236)
                      </option>
                      <option value="CL" data-countrycode="56">
                        CL (+56)
                      </option>
                      <option value="CN" data-countrycode="86">
                        CN (+86)
                      </option>
                      <option value="CO" data-countrycode="57">
                        CO (+57)
                      </option>
                      <option value="KM" data-countrycode="269">
                        KM (+269)
                      </option>
                      <option value="CG" data-countrycode="242">
                        CG (+242)
                      </option>
                      <option value="CK" data-countrycode="682">
                        CK (+682)
                      </option>
                      <option value="CR" data-countrycode="506">
                        CR (+506)
                      </option>
                      <option value="HR" data-countrycode="385">
                        HR (+385)
                      </option>
                      <option value="CU" data-countrycode="53">
                        CU (+53)
                      </option>
                      <option value="CY" data-countrycode="90392">
                        CY (+90392)
                      </option>
                      <option value="CY" data-countrycode="357">
                        CY (+357)
                      </option>
                      <option value="CZ" data-countrycode="42">
                        CZ (+42)
                      </option>
                      <option value="DK" data-countrycode="45">
                        DK (+45)
                      </option>
                      <option value="DJ" data-countrycode="253">
                        DJ (+253)
                      </option>
                      <option value="DM" data-countrycode="1809">
                        DM (+1809)
                      </option>
                      <option value="DO" data-countrycode="1809">
                        DO (+1809)
                      </option>
                      <option value="EC" data-countrycode="593">
                        EC (+593)
                      </option>
                      <option value="EG" data-countrycode="20">
                        EG (+20)
                      </option>
                      <option value="SV" data-countrycode="503">
                        SV (+503)
                      </option>
                      <option value="GQ" data-countrycode="240">
                        GQ (+240)
                      </option>
                      <option value="ER" data-countrycode="291">
                        ER (+291)
                      </option>
                      <option value="EE" data-countrycode="372">
                        EE (+372)
                      </option>
                      <option value="ET" data-countrycode="251">
                        ET (+251)
                      </option>
                      <option value="FK" data-countrycode="500">
                        FK (+500)
                      </option>
                      <option value="FO" data-countrycode="298">
                        FO (+298)
                      </option>
                      <option value="FJ" data-countrycode="679">
                        FJ (+679)
                      </option>
                      <option value="FI" data-countrycode="358">
                        FI (+358)
                      </option>
                      <option value="FR" data-countrycode="33">
                        FR (+33)
                      </option>
                      <option value="GF" data-countrycode="594">
                        GF (+594)
                      </option>
                      <option value="PF" data-countrycode="689">
                        PF (+689)
                      </option>
                      <option value="GA" data-countrycode="241">
                        GA (+241)
                      </option>
                      <option value="GM" data-countrycode="220">
                        GM (+220)
                      </option>
                      <option value="GE" data-countrycode="7880">
                        GE (+7880)
                      </option>
                      <option value="DE" data-countrycode="49">
                        DE (+49)
                      </option>
                      <option value="GH" data-countrycode="233">
                        GH (+233)
                      </option>
                      <option value="GI" data-countrycode="350">
                        GI (+350)
                      </option>
                      <option value="GR" data-countrycode="30">
                        GR (+30)
                      </option>
                      <option value="GL" data-countrycode="299">
                        GL (+299)
                      </option>
                      <option value="GD" data-countrycode="1473">
                        GD (+1473)
                      </option>
                      <option value="GP" data-countrycode="590">
                        GP (+590)
                      </option>
                      <option value="GU" data-countrycode="671">
                        GU (+671)
                      </option>
                      <option value="GT" data-countrycode="502">
                        GT (+502)
                      </option>
                      <option value="GN" data-countrycode="224">
                        GN (+224)
                      </option>
                      <option value="GW" data-countrycode="245">
                        GW (+245)
                      </option>
                      <option value="GY" data-countrycode="592">
                        GY (+592)
                      </option>
                      <option value="HT" data-countrycode="509">
                        HT (+509)
                      </option>
                      <option value="HN" data-countrycode="504">
                        HN (+504)
                      </option>
                      <option value="HK" data-countrycode="852">
                        HK (+852)
                      </option>
                      <option value="HU" data-countrycode="36">
                        HU (+36)
                      </option>
                      <option value="IS" data-countrycode="354">
                        IS (+354)
                      </option>
                      <option value="IN" data-countrycode="91">
                        IN (+91)
                      </option>
                      <option value="ID" data-countrycode="62">
                        ID (+62)
                      </option>
                      <option value="IR" data-countrycode="98">
                        IR (+98)
                      </option>
                      <option value="IQ" data-countrycode="964">
                        IQ (+964)
                      </option>
                      <option value="IE" data-countrycode="353">
                        IE (+353)
                      </option>
                      <option value="IL" data-countrycode="972">
                        IL (+972)
                      </option>
                      <option value="IT" data-countrycode="39">
                        IT (+39)
                      </option>
                      <option value="JM" data-countrycode="1876">
                        JM (+1876)
                      </option>
                      <option value="JP" data-countrycode="81">
                        JP (+81)
                      </option>
                      <option value="JO" data-countrycode="962">
                        JO (+962)
                      </option>
                      <option value="KZ" data-countrycode="7">
                        KZ (+7)
                      </option>
                      <option value="KE" data-countrycode="254">
                        KE (+254)
                      </option>
                      <option value="KI" data-countrycode="686">
                        KI (+686)
                      </option>
                      <option value="KP" data-countrycode="850">
                        KP (+850)
                      </option>
                      <option value="KR" data-countrycode="82">
                        KR (+82)
                      </option>
                      <option value="KW" data-countrycode="965">
                        KW (+965)
                      </option>
                      <option value="KG" data-countrycode="996">
                        KG (+996)
                      </option>
                      <option value="LA" data-countrycode="856">
                        LA (+856)
                      </option>
                      <option value="LV" data-countrycode="371">
                        LV (+371)
                      </option>
                      <option value="LB" data-countrycode="961">
                        LB (+961)
                      </option>
                      <option value="LS" data-countrycode="266">
                        LS (+266)
                      </option>
                      <option value="LR" data-countrycode="231">
                        LR (+231)
                      </option>
                      <option value="LY" data-countrycode="218">
                        LY (+218)
                      </option>
                      <option value="LI" data-countrycode="417">
                        LI (+417)
                      </option>
                      <option value="LT" data-countrycode="370">
                        LT (+370)
                      </option>
                      <option value="LU" data-countrycode="352">
                        LU (+352)
                      </option>
                      <option value="MO" data-countrycode="853">
                        MO (+853)
                      </option>
                      <option value="MK" data-countrycode="389">
                        MK (+389)
                      </option>
                      <option value="MG" data-countrycode="261">
                        MG (+261)
                      </option>
                      <option value="MW" data-countrycode="265">
                        MW (+265)
                      </option>
                      <option value="MY" data-countrycode="60">
                        MY (+60)
                      </option>
                      <option value="MV" data-countrycode="960">
                        MV (+960)
                      </option>
                      <option value="ML" data-countrycode="223">
                        ML (+223)
                      </option>
                      <option value="MT" data-countrycode="356">
                        MT (+356)
                      </option>
                      <option value="MH" data-countrycode="692">
                        MH (+692)
                      </option>
                      <option value="MQ" data-countrycode="596">
                        MQ (+596)
                      </option>
                      <option value="MR" data-countrycode="222">
                        MR (+222)
                      </option>
                      <option value="YT" data-countrycode="269">
                        YT (+269)
                      </option>
                      <option value="MX" data-countrycode="52">
                        MX (+52)
                      </option>
                      <option value="FM" data-countrycode="691">
                        FM (+691)
                      </option>
                      <option value="MD" data-countrycode="373">
                        MD (+373)
                      </option>
                      <option value="MC" data-countrycode="377">
                        MC (+377)
                      </option>
                      <option value="MN" data-countrycode="976">
                        MN (+976)
                      </option>
                      <option value="MS" data-countrycode="1664">
                        MS (+1664)
                      </option>
                      <option value="MA" data-countrycode="212">
                        MA (+212)
                      </option>
                      <option value="MZ" data-countrycode="258">
                        MZ (+258)
                      </option>
                      <option value="MN" data-countrycode="95">
                        MN (+95)
                      </option>
                      <option value="NA" data-countrycode="264">
                        NA (+264)
                      </option>
                      <option value="NR" data-countrycode="674">
                        NR (+674)
                      </option>
                      <option value="NP" data-countrycode="977">
                        NP (+977)
                      </option>
                      <option value="NL" data-countrycode="31">
                        NL (+31)
                      </option>
                      <option value="NC" data-countrycode="687">
                        NC (+687)
                      </option>
                      <option value="NZ" data-countrycode="64">
                        NZ (+64)
                      </option>
                      <option value="NI" data-countrycode="505">
                        NI (+505)
                      </option>
                      <option value="NE" data-countrycode="227">
                        NE (+227)
                      </option>
                      <option value="NG" data-countrycode="234">
                        NG (+234)
                      </option>
                      <option value="NU" data-countrycode="683">
                        NU (+683)
                      </option>
                      <option value="NF" data-countrycode="672">
                        NF (+672)
                      </option>
                      <option value="NP" data-countrycode="670">
                        NP (+670)
                      </option>
                      <option value="NO" data-countrycode="47">
                        NO (+47)
                      </option>
                      <option value="OM" data-countrycode="968">
                        OM (+968)
                      </option>
                      <option value="PW" data-countrycode="680">
                        PW (+680)
                      </option>
                      <option value="PA" data-countrycode="507">
                        PA (+507)
                      </option>
                      <option value="PG" data-countrycode="675">
                        PG (+675)
                      </option>
                      <option value="PY" data-countrycode="595">
                        PY (+595)
                      </option>
                      <option value="PE" data-countrycode="51">
                        PE (+51)
                      </option>
                      <option value="PH" data-countrycode="63">
                        PH (+63)
                      </option>
                      <option value="PL" data-countrycode="48">
                        PL (+48)
                      </option>
                      <option value="PT" data-countrycode="351">
                        PT (+351)
                      </option>
                      <option value="PR" data-countrycode="1787">
                        PR (+1787)
                      </option>
                      <option value="QA" data-countrycode="974">
                        QA (+974)
                      </option>
                      <option value="RE" data-countrycode="262">
                        RE (+262)
                      </option>
                      <option value="RO" data-countrycode="40">
                        RO (+40)
                      </option>
                      <option value="RU" data-countrycode="7">
                        RU (+7)
                      </option>
                      <option value="RW" data-countrycode="250">
                        RW (+250)
                      </option>
                      <option value="SM" data-countrycode="378">
                        SM (+378)
                      </option>
                      <option value="ST" data-countrycode="239">
                        ST (+239)
                      </option>
                      <option value="SA" data-countrycode="966">
                        SA (+966)
                      </option>
                      <option value="SN" data-countrycode="221">
                        SN (+221)
                      </option>
                      <option value="CS" data-countrycode="381">
                        CS (+381)
                      </option>
                      <option value="SC" data-countrycode="248">
                        SC (+248)
                      </option>
                      <option value="SL" data-countrycode="232">
                        SL (+232)
                      </option>
                      <option value="SG" data-countrycode="65">
                        SG (+65)
                      </option>
                      <option value="SK" data-countrycode="421">
                        SK (+421)
                      </option>
                      <option value="SI" data-countrycode="386">
                        SI (+386)
                      </option>
                      <option value="SB" data-countrycode="677">
                        SB (+677)
                      </option>
                      <option value="SO" data-countrycode="252">
                        SO (+252)
                      </option>
                      <option value="ZA" data-countrycode="27">
                        ZA (+27)
                      </option>
                      <option value="ES" data-countrycode="34">
                        ES (+34)
                      </option>
                      <option value="LK" data-countrycode="94">
                        LK (+94)
                      </option>
                      <option value="SH" data-countrycode="290">
                        SH (+290)
                      </option>
                      <option value="KN" data-countrycode="1869">
                        KN (+1869)
                      </option>
                      <option value="SC" data-countrycode="1758">
                        SC (+1758)
                      </option>
                      <option value="SD" data-countrycode="249">
                        SD (+249)
                      </option>
                      <option value="SR" data-countrycode="597">
                        SR (+597)
                      </option>
                      <option value="SZ" data-countrycode="268">
                        SZ (+268)
                      </option>
                      <option value="SE" data-countrycode="46">
                        SE (+46)
                      </option>
                      <option value="CH" data-countrycode="41">
                        CH (+41)
                      </option>
                      <option value="SI" data-countrycode="963">
                        SI (+963)
                      </option>
                      <option value="TW" data-countrycode="886">
                        TW (+886)
                      </option>
                      <option value="TJ" data-countrycode="7">
                        TJ (+7)
                      </option>
                      <option value="TH" data-countrycode="66">
                        TH (+66)
                      </option>
                      <option value="TG" data-countrycode="228">
                        TG (+228)
                      </option>
                      <option value="TO" data-countrycode="676">
                        TO (+676)
                      </option>
                      <option value="TT" data-countrycode="1868">
                        TT (+1868)
                      </option>
                      <option value="TN" data-countrycode="216">
                        TN (+216)
                      </option>
                      <option value="TR" data-countrycode="90">
                        TR (+90)
                      </option>
                      <option value="TM" data-countrycode="7">
                        TM (+7)
                      </option>
                      <option value="TM" data-countrycode="993">
                        TM (+993)
                      </option>
                      <option value="TC" data-countrycode="1649">
                        TC (+1649)
                      </option>
                      <option value="TV" data-countrycode="688">
                        TV (+688)
                      </option>
                      <option value="UG" data-countrycode="256">
                        UG (+256)
                      </option>
                      <option value="GB" data-countrycode="44">
                        GB (+44)
                      </option>
                      <option value="UA" data-countrycode="380">
                        UA (+380)
                      </option>
                      <option value="AE" data-countrycode="971">
                        AE (+971)
                      </option>
                      <option value="UY" data-countrycode="598">
                        UY (+598)
                      </option>
                      <option value="US" data-countrycode="1">
                        US (+1)
                      </option>
                      <option value="UZ" data-countrycode="7">
                        UZ (+7)
                      </option>
                      <option value="VU" data-countrycode="678">
                        VU (+678)
                      </option>
                      <option value="VA" data-countrycode="379">
                        VA (+379)
                      </option>
                      <option value="VE" data-countrycode="58">
                        VE (+58)
                      </option>
                      <option value="VN" data-countrycode="84">
                        VN (+84)
                      </option>
                      <option value="VG" data-countrycode="84">
                        VG (+84)
                      </option>
                      <option value="VI" data-countrycode="84">
                        VI (+84)
                      </option>
                      <option value="WF" data-countrycode="681">
                        WF (+681)
                      </option>
                      <option value="YE" data-countrycode="969">
                        YE (+969)
                      </option>
                      <option value="YE" data-countrycode="967">
                        YE (+967)
                      </option>
                      <option value="ZM" data-countrycode="260">
                        ZM (+260)
                      </option>
                      <option value="ZW" data-countrycode="263">
                        ZW (+263)
                      </option>
                    </select>
                    <input
                      placeholder="Please enter your number"
                      type="tel"
                      id="formBasicContactNumber"
                      className={`rounded-0 border-0 border-start px-3 form-control ${
                        props.startProject && "bgClrDark5 border-0 disable-focus"
                      }`}
                      {...register("phone", { onChange: handleChange })}
                    />
                  </div>
                  {error?.phone && (
                    <div className="text-danger mt-1">{error.phone}</div>
                  )}
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "interestedin";
            }) === "interestedin" && (
              <div
                className={`col-sm-6 mb-20 ${
                  props.startProject && "col-lg-12 mb-15"
                }`}
              >
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicName"
                  >
                    Interested In
                  </label>
                  <select
                    className={`rounded-pill px-4 form-control form-select ${
                      props.startProject &&
                      "bgClrDark5 border-0 focus-border text-white disable-focus"
                    }`}
                    id="formBasicName"
                    {...register("interested", { required: true })}
                  >
                    <option value="">Select</option>
                    <optgroup label="Ideation and Evaluation">
                      <option value="Ideation and Evaluation - Product Design Sprint">
                        Product Design Sprint
                      </option>
                      <option value="Ideation and Evaluation - Scoping Session">
                        Scoping Session
                      </option>
                      <option value="Ideation and Evaluation - UX Review">
                        UX Review
                      </option>
                      <option value="Ideation and Evaluation - Research &amp; Development">
                        Research &amp; Development
                      </option>
                    </optgroup>
                    <optgroup label="Product Design">
                      <option value="Product Design - Product Design">
                        Product Design
                      </option>
                      <option value="Product Design - UI design">
                        UI Design
                      </option>
                      <option value="Product Design - UX Design">
                        UX Design
                      </option>
                      <option value="Product Design - Branding">
                        Branding
                      </option>
                      <option value="Product Design - UX Writing">
                        UX Writing
                      </option>
                    </optgroup>
                    <optgroup label="Staff Augmentation">
                      <option value="Staff Augmentation - Front End Development">
                        Front End Developer
                      </option>
                      <option value="Staff Augmentation - Back End Developer">
                        Back End Developer
                      </option>
                      <option value="Staff Augmentation - Mobile App Developer">
                        Mobile App Developer
                      </option>
                      <option value="Staff Augmentation - Full Stack Developer">
                        Full Stack Developer
                      </option>
                    </optgroup>
                    <optgroup label="App Development">
                      <option value="App Development - Androin App Development">
                        Androin App Development
                      </option>
                      <option value="App Development - iOS App Development">
                        iOS App Development
                      </option>
                      <option value="App Development - Cross Platform Mobile Development">
                        Cross Platform Mobile Development
                      </option>
                    </optgroup>
                    <optgroup label="Web Applications">
                      <option value="Web Applications - Custom Web Apps">
                        Custom Web Apps
                      </option>
                      <option value="Web Applications - Progressive Web Apps">
                        Progressive Web Apps
                      </option>
                      <option value="Web Applications - Front End Development Services">
                        Front End Development Services
                      </option>
                    </optgroup>
                    <optgroup label="Product Engineering">
                      <option value="Product Engineering - SaaS Application Development">
                        SaaS Application Development
                      </option>
                      <option value="Product Engineering - Lean Product Development">
                        Lean Product Development
                      </option>
                      <option value="Product Engineering - Custom Application Development">
                        Custom Application Development
                      </option>
                    </optgroup>
                    <optgroup label="eCommerce &amp; CMS Development">
                      <option value="eCommerce &amp; CMS Development - WordPress">
                        WordPress
                      </option>
                      <option value="eCommerce &amp; CMS Development - Shopify">
                        Shopify
                      </option>
                      <option value="eCommerce &amp; CMS Development - Webflow">
                        Webflow
                      </option>
                      <option value="eCommerce &amp; CMS Development - Drupal">
                        Drupal
                      </option>
                      <option value="eCommerce &amp; CMS Development - Magento">
                        Magento
                      </option>
                    </optgroup>
                    <optgroup label="Quality Assurance">
                      <option value="Quality Assurance - WordPress">
                        WordPress
                      </option>
                      <option value="Quality Assurance - Shopify">
                        Shopify
                      </option>
                      <option value="Quality Assurance - Webflow">
                        Webflow
                      </option>
                    </optgroup>
                    <optgroup label="Cloud Solutions">
                      <option value="Cloud Solutions Aws">AWS</option>
                      <option value="Cloud Solutions Azure">Azure</option>
                      <option value="Cloud Solutions Google Cloud">
                        Google Cloud
                      </option>
                    </optgroup>
                  </select>
                  {errors.interested?.type === "required" && (
                    <div className="text-danger mt-1">Please select one.</div>
                  )}
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "budget";
            }) === "budget" && (
              <div
                className={`col-sm-6 mb-20 ${
                  props.startProject && "col-lg-12 mb-15"
                }`}
              >
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicEmail"
                  >
                    Select Budget Range
                  </label>
                  <select
                    className={`rounded-pill px-4 form-control form-select ${
                      props.startProject &&
                      "bgClrDark5 border-0 focus-border text-white disable-focus"
                    }`}
                    id="formBasicEmail"
                    {...register("budget", { required: true })}
                  >
                    <option value="">Select</option>
                    <option value="$501 - $1000">$501 - $1000</option>
                    <option value="$1001 - $5000">$1001 - $5000</option>
                    <option value="$5001 - $20000">$5001 - $20000</option>
                    <option value="$20001 - $35000">$20001 - $35000</option>
                    <option value="$35001 - $50000">$35001 - $50000</option>
                    <option value="More than $50000">More than $50000</option>
                  </select>
                  {errors.budget?.type === "required" && (
                    <div className="text-danger mt-1">Budget is required.</div>
                  )}
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "company";
            }) === "company" && (
              <div className="col-lg-12 mb-20">
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicName"
                  >
                    Company
                  </label>
                  <input
                    placeholder="Please enter your company name"
                    type="text"
                    id="formBasicName"
                    className={`rounded-pill px-4 form-control ${
                      props.startProject && "bgClrDark5 border-0 disable-focus"
                    }`}
                    {...register("company")}
                  />
                </div>
              </div>
            )}
            {props?.fields.find((element) => {
              return element === "message";
            }) === "message" && (
              <div
                className={`col-lg-12 mb-20 ${props.startProject && "mb-15"}`}
              >
                <div className="contactField">
                  <label
                    className={`textClrThemeDark fs-13 fwSemiBold form-label ${
                      props.startProject && "text-white"
                    }`}
                    htmlFor="formBasicMessage"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message here..."
                    id="formBasicMessage"
                    className={`isRadius16 p-3 form-control ${
                      props.startProject && "bgClrDark5 border-0 disable-focus"
                    }`}
                    {...register("message")}
                  ></textarea>
                </div>
              </div>
            )}
            <div className="mb-20">
              <label
                htmlFor="cv"
                className={`textClrThemeDark fs-13 fwSemiBold  d-block position-relative ${
                  props.startProject && "text-transparent"
                }`}
              >
                <p className={`mb-2 ${props.startProject && "d-none"}`}>
                  Attach File
                </p>
                <input
                  name="cv"
                  id="cv"
                  type="file"
                  className="opacity-0 position-absolute bottom-0 end-0 top-0 start-0 z-index-9"
                  {...register("cv")}
                  accept=".jpg, .jpeg, .png, .gif, .docx, .doc, .pdf"
                />
                <div
                  className={`fileBody bgClrWhite p-4 isRadius12 d-flex justify-content-center align-items-center ${
                    props.startProject && "h-62 bgClrDark5 file-border"
                  }`}
                >
                  <LazyImage src={FileIcon} alt="icon" />
                  <p className="fs-14 fw-medium textClrGray mb-0">
                    {cv && cv[0]?.name ? cv[0].name : "Attach your file"}
                  </p>
                </div>
                <div
                  className={`fileBody-info ${props.startProject && "d-none"}`}
                >
                  Allowed formates are .jpg, .jpeg, .png, .gif, .docx, .doc,
                  .pdf and maximum size 10MB
                </div>
                {error?.file && (
                  <div className="text-danger mt-1">{error.file}</div>
                )}
              </label>
            </div>
            <div className="sbm-btn text-center text-lg-start">
              <input
                type="hidden"
                value={window.location.pathname.replace("/", "")}
                {...register("source")}
              />
              {props.startProject ? (
                <button
                  type="submit"
                  className="bgClrGreen w-100 h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn btn-contact d-flex align-items-center justify-content-center gap-2"
                  disabled={formProcessing}
                >
                  {formProcessing
                    ? "Sending Mesage..."
                    : `Let’s start a project`}
                  {!formProcessing &&
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.79639 17.4303L13.5014 11.7253C14.1751 11.0516 14.1751 9.94906 13.5014 9.27531L7.79639 3.57031"
                      stroke="#121316"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>}
                </button>
              ) : (
                <button
                  type="submit"
                  className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn btn-contact"
                  disabled={formProcessing}
                >
                  {formProcessing ? "Sending Mesage..." : "Send Message "}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
}

export default FormValidation