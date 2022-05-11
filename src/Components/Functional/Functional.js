import React, { useEffect, useState } from 'react';


function Functional(props) {
    const [dataOptions,setDataOptions]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const url='http://mdshahalam.design/getwebapi/wp-json/mos-getweb-api/v1/options';//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setDataOptions(resp))//setting response to state posts
    },[]);
    useEffect(() => {
        if (dataOptions.length !== 0) {
          setIsLoading(false);
        }
        console.log(dataOptions);
      }, [dataOptions]);
    return (
        <div className="App">
            <h1 align="center">React-App</h1>
            {/* lopping through each object and dispaying id and title of posts */}
            {
                isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    dataOptions.contactAddress[2]
                )
            }
        </div>
    );
}

export default Functional;