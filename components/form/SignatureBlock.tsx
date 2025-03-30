import React, {useRef} from 'react';
import SignatureCanvas from "react-signature-canvas";
import {Controller, useFormContext} from "react-hook-form";
import Button from "@/components/common/Button";

type Props = {
    onEnd: (val: string) => void;
}

const SignatureBlock = ({onEnd}: Props) => {
    const {control} = useFormContext();
    /* eslint-disable */
    const signCanvas = useRef(null) as React.MutableRefObject<any>;

    // Convert to base64 and return
    const formatIntoPng = () => {
        if (signCanvas.current) {
            return signCanvas.current.toDataURL();
        }
    };

    // Clear signature
    const handleSignatureClear = () => {
        signCanvas.current.clear();
        onEnd('');
    };
    return (
        <div className={`flex flex-col h-full gap-2 signature-block w-full`}>
            <Controller
                name='signature'
                control={control}
                render={({field}) => (
                    <SignatureCanvas
                        {...field}
                        ref={signCanvas}
                        penColor="black"
                        canvasProps={{ className: "sign-canvas" }}
                        onEnd={() => field.onChange(formatIntoPng())}
                        clearOnResize={false}
                    />
                )}
            />

            <Button type='button' className='border border-secondary !h-7 !min-h-7 !p-0 !text-sm' onClick={handleSignatureClear}>Clear Signature</Button>
        </div>
    );
};

export default SignatureBlock;