import React from 'react';
import Title from "@/components/common/Title";

const Compliance = () => {
    const complianceData = [
        {
            title: 'What is the Truck and Bus Certificate?',
            details: 'The Truck and Bus Certificate is a certification needed to prove a vehicle is aligned with the Truck and Bus regulations set by the California Air Resources Board. The regulations have been in place since 2008 and have been updated as recently as 2023. The regulations were put in place in order to improve air quality in the state and ideally help fight in the climate crisis, as it aims to reduce harmful emissions from heavy-duty vehicles.'
        },
        {
            title: 'Purpose',
            details: 'The certificate shows that qualifying vehicles (vehicles with a gross vehicle weight over 14,000 pounds) have a 2010 or newer engine and emission system.'
        },
        {
            title: 'How is it Issued?',
            details: 'For vehicles that qualify to require the Truck and Bus certification, you must report details of the engine in the TRUCRS, also known as the Truck Regulations, Upload, and Compliance Reporting System. The DMV then verifies this information, and you receive your certificate which allows you to operate the vehicle on California roads.'
        },
    ]

    return (
        <div id='regulation' className='scrollTopMargin'>
            <Title>Truck & Bus Compliance</Title>
            <div className='grid grid-cols-2 gap-3 text-xl [&_.box]:p-4 [&_.box]:rounded-2xl xl:text-base md:grid-cols-1 sm:text-sm'>
                <div className='box border border-pale-red bg-white shadow-compliance'>
                    <h4 className='font-bold mb-5'>{complianceData[0].title}</h4>
                    <p>{complianceData[0].details}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    {complianceData.slice(1,complianceData.length).map((item, idx) => (
                        <div key={idx} className={`box shadow-compliance ${idx === 0 ? 'bg-white border border-pale-red' : 'bg-primary text-white'}`}>
                            <h4 className='font-bold mb-5'>{item.title}</h4>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Compliance;