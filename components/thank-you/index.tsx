// 'use client';
// import React, {useEffect} from 'react';
// import Link from "next/link";
// import Button from "@/components/common/Button";
// import {useRouter} from "next/navigation";
// import {deleteCookie} from "cookies-next";
// import {contactInfo} from "@/utils/data/contactInfo";



// const ThankYou = ({isPaid}: {isPaid: boolean}) => {
//     const router = useRouter()
//     if (!isPaid) {
//         router.push('/');
//         return null;
//     }

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         return (() => {
//             deleteCookie('form_id');
//         })
//     }, []);

//     return (
//         <>
//             <div className='flex flex-col gap-8 mb-6 max-w-[800px] md:gap-4'>
//                 <h1 className='text-4xl text-center font-bold text-primary mb-6 md:mb-2'>Thank You for Choosing Us!</h1>
//                 <p className='text-center'>We have successfully received your information. Our
//                     team is
//                     processing your
//                     details, and you will receive your certification via email soon.
//                 </p>
//                 <div className='mt-8 flex flex-col items-center md:mt-4'>
//                     <p className='font-bold text-lg mb-4'>Next Steps</p>
//                     <ul className='list-disc pl-4'>
//                         <li><span className='font-bold'>Check Your Email:</span> You will receive your certification
//                             within 72 hours.
//                         </li>
//                         <li><span className='font-bold'>Have Questions?</span> Our support team is here to help if you
//                             need
//                             anything <a href={`tel: ${contactInfo.phone}`}
//                                         className='font-bold'>call us!</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='flex justify-center'>
//                     <Link href='/'>
//                         <Button className='contained'>Return to Homepage</Button>
//                     </Link>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default ThankYou;