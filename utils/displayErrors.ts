import {toast} from "react-toastify";
import {UseFormSetError, UseFormSetFocus} from "react-hook-form";

export function displayErrors (errors: {
    [key: string]: string
} | null, setError: UseFormSetError<any>, message?: string | null, setFocus?: UseFormSetFocus<any>) {
    if(message) {
        toast.error(message || 'Something went wrong');
    }
    if(errors) {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach(error => {
            setError(error, {
                type: "manual",
                message: errors[error][0]
            });
        })
        if(setFocus) {
            setFocus(errorKeys[0]);
        }
    }
}