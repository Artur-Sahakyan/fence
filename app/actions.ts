// 'use server';
// import {cookies} from 'next/headers';
// import {REQUEST_URL} from "@/utils/constants";

// async function getFormId () {
//     const formIdJson = await fetch(REQUEST_URL + `getId`,{
//         next: { revalidate: 0 }, // Disable caching
//     });
//     const formIdInfo = await formIdJson.json();
//     const order_id = formIdInfo.order_id;
//     const cookieStore = await cookies();
//     cookieStore.delete('form_id');
//     return {formInfo: {id: order_id}, vehicles: []};
// }

// export async function fetchAndSetFormId() {
//     const cookieStore = await cookies();
//     const formId = cookieStore.get('form_id')?.value || '';
//     if (!formId) {
//         return await getFormId();
//     } else {
//         const res = await fetch(REQUEST_URL + `steps/get_info?order_id=${formId || ''}`, {
//             next: { revalidate: 0 }, // Disable caching
//         });
//         const result = await res.json();
//         if(result.success) {
//             return {formInfo: {...result.data, total_price: result.total_price}, vehicles: result.vehicles}
//         }else {
//             return await getFormId();
//         }
//     }
// }