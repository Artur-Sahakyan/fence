// import React from 'react';
// import SignatureBlock from "@/components/form/SignatureBlock";
// import InputError from "@/components/common/InputError";
// import {getShowingFormattedDate} from "@/utils/helpers";

// type Props = {
//     cardHolder?: string;
//     onEnd: (val: string) => void;
//     errorMessage?: string;
// }

// const SigninSection = ({cardHolder, onEnd, errorMessage}: Props) => {

//     const signingData = [
//         {label: 'Name of Person Signing', value: cardHolder || 'N/A'},
//         {label: 'Date signed', value: getShowingFormattedDate(new Date())},
//     ]

//     return (
//         <div
//             className="grid grid-cols-9 items-end gap-3 min-h-52 [&_>div]:h-full text-sm xl:grid-cols-4 sm:grid-cols-2">
//             {signingData.map((item, idx) => (
//                 <div key={idx}
//                      className='col-span-2 select-none border border-secondary rounded-lg p-3 flex flex-col items-center gap-14 font-semibold xl:gap-1'>
//                     <span className='text-primary-grey'>{item.label}</span>
//                     <span className='text-primary-grey-80 capitalize'>{item.value}</span>
//                 </div>
//             ))}
//             <div
//                 className={`col-span-2 border border-secondary select-none rounded-lg p-3 flex flex-col
// 							items-center gap-1 font-semibold form_block relative xl:min-h-52 ${errorMessage ? 'has_error' : ''}`}>
//                 <span className='text-primary-grey'>Signature</span>
//                 <SignatureBlock
//                     onEnd={(url: string) => onEnd(url)}
//                 />
//                 <InputError error={errorMessage || ''} className='-bottom-4'/>
//             </div>

//         </div>
//     );
// };

// export default SigninSection;
