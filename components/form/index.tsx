'use client';
// import React, {useState} from 'react';
// import {getCookie, setCookie} from "cookies-next";
// import FormContainer from "@/components/form/FormContainer";
// import {fetchAndSetFormId} from "@/app/actions";
import {Option} from "@/types/types";
// import LoaderBook from "@/components/common/LoaderBook";

type Props = {
    options: { [key: string]: Option[] }
}

const Form = ({options}: Props) => {
    console.log(options);
    

    return (
        <>
       
          {/* <FormContainer formInfo={formInfo} formVehicles={formVehicles} options={options} /> */}
        </>
    )
};

export default Form;