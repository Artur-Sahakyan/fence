// Check card number by Luhn algorithm and return is valid or not
export function isValidLuhnAlgorithm(value: string) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = value.length - 1; i >= 0; i--) {
        let digit = parseInt(value.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// get format of price to show
export function priceFormat (price: number) {
    return price && price > 0 ? Number(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.00'
}

// Get date of format need to show
export function getShowingFormattedDate (originalDateString: Date) {
    const dateObject = new Date(originalDateString);
    return `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getDate().toString().padStart(2, '0')}/${dateObject.getFullYear()}`;
}

// Format the date as DD-MM-YYYY
export function formatDateForRequest(dateStr: string): string {
    const date = new Date(dateStr)

    // Improved check for Date object using toString.call
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        console.error('Error: The passed value is not a Date object.');
    } else if (isNaN(date.getTime())) {
        console.error('Error: The passed Date object is invalid.');
    }

    // Final validation after improved check
    if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
        throw new Error('Invalid Date object passed to formatDateForRequest');
    }

    const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits (e.g., "02")
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return encodeURIComponent(formattedDate);
}

