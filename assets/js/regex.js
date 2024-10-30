
export const namePattern = (name) => {
     const nameRegex = new RegExp("^[A-Za-z\\s]+$");
     const trimmedName = name.trim();

     if (trimmedName==='') {
        return {
            isValid: false,
            error: `ERROR : Author Name Can't Be Empty!`,
        }
     }
     if (trimmedName.length<=3) {
        return {
            isValid: false,
            error: `ERROR : Author Name Must be More Than 3 Letters!`
        }
     }
     if (!nameRegex.test(trimmedName)) {
        return {
            isValid : false,
            error: `ERROR: Author Name Contains Letters & Spaces  Only!`
        }
     }
     return {
        isValid :  true,
        error: null,
     }
}

