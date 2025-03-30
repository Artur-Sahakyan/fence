import ContactForm from '@/components/contact/ContactForm';
import React from 'react';
// import {REQUEST_URL} from "@/utils/constants";
// import Form from "@/components/form";

const FormPage = async () => {
    // const optionsRes = await fetch(REQUEST_URL + 'types/group', {
    //     next: {revalidate: 60}
    // });
    // const { data: options } = await optionsRes.json();

    return (
        <main className='padding-m py-12 bg-[#FCFCFC] min-h-screen sm:py-10 bg-'>
            <h1 className='text-3xl font-bold text-black text-center mb-5'>Fill Out Your Details</h1>
            <div className='bg-form-back-drop rounded-lg pb-5 mt-8 min-h-screen'>
                {/* <Form options={options}/> */}
                <ContactForm/>
            </div>
        </main>
    );
};

export default FormPage;