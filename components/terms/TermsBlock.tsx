import React from 'react';
import {contactInfo} from "@/utils/data/contactInfo";

type Props = {
	data: Array<{
		title?: string;
		desc?: string;
		list?: string[];
		short_desc?: string;
		numberList?: boolean;
    }>,
    title: string,
    type?: string,
}

const TermsBlock = ({data, title, type}: Props) => {

	return (
		<div>
			<div className='bg-white padding-m padding-vertical flex flex-col items-center gap-8'>
				<div>
					<h2 className='text-[32px] mobile:text-2xl font-bold'>{title}</h2>
				</div>
				<div className='max-w-3xl flex flex-col gap-4'>
					{data.map((item, idx) => (
						<div key={idx} className='flex flex-col gap-4'>
							{item.title && <h2 className='text-xl font-bold'>{item.title}</h2>}
							{item.desc && <p className='text-black text-sm leading-[21px]'>{item.desc}</p>}
							{item.list && (
								<ul className={`text-primary-grey text-sm pl-8 ${item.numberList ? 'list-decimal' : 'list-disc'}`}>
									{item.list.map((listItem, listIdx) => (
                                        <li key={listIdx} className='mb-3 last:mb-0'>{listItem}</li>
                                    ))}
								</ul>
							)}
							{item.short_desc && <p className='text-primary-grey text-sm leading-[21px]'>{item.short_desc}</p>}

						</div>
					))}
					{type === 'terms' && (
						<div className='flex flex-col gap-4'>
							<h2 className='text-xl font-bold'>Contact Details</h2>
							<p className='text-black text-sm leading-[21px]'>Please contact us if you have any questions
								or concerns. Our contact details are as follows:</p>
							<ul className='text-primary-grey text-sm pl-8 list-disc font-semibold'>
								<li className='mb-3'>
									<a href={`tel: ${contactInfo.phone}`}>{contactInfo.phone}</a>
								</li>
								<li className='mb-0'>
									<a href={`mailTo: ${contactInfo.email}`}>{contactInfo.email}</a>
								</li>
							</ul>
						</div>
					)}

				</div>
			</div>
		</div>
	);
};

export default TermsBlock;