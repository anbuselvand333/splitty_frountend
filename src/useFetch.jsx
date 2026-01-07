import { useState, useEffect, use } from "react";

const useFetchbill=(url)=>{
    const [item, setItem]=useState(null);

    useEffect(()=>{
        fetch(url,{
            method:"GET"
        }

        )
            .then(response=>{
                if(!response.ok){
                    throw Error("Could't retrive the Data");
                }
              
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                setItem(data);
            })
            .catch((error)=>{
            console.log("Error =",error);});
      

    },[]);

    return [item];
};

const useFetchamt=(url)=>{
    const [amount, setAmount]=useState({amount:0});

    const pur_item =(body)=>{

        console.log("it is called",body);
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        }

        )
            .then(response=>{
                if(!response.ok){
                    throw Error("Could't retrive the Data");
                }
               
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                setAmount(data);
            })
            .catch((error)=>{
            console.log("Error =",error);});
      

    };

    return {amount, pur_item};
};

export {useFetchbill,useFetchamt};