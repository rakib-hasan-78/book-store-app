
export const namePattern = (name, subject) => {
     const nameRegex = new RegExp("^[A-Za-z\\s]+$");
     const trimmedName = name.trim();

     if (trimmedName==='') {
        return {
            isValid: false,
            error: `ERROR : ${subject} Can't Be Empty!`,
        }
     }

     if (!nameRegex.test(trimmedName)) {
        return {
            isValid : false,
            error: `ERROR: ${subject} Contains Letters & Spaces  Only!`
        }
     }
     if (trimmedName.length<=3) {
        return {
            isValid: false,
            error: `ERROR : ${subject} Must be More Than 3 Letters!`
        }
     }
     return {
        isValid :  true,
        error: null,
     }
}

export const isbnPattern = (value) => {
   const regExPattern = new RegExp(/^(?:\d{9}X|\d{10}|\d{13}|\d{1,5}-\d{1,7}-\d{1,7}-[\dX])$/);
   const trimmedRegEx = value.trim();

   if (trimmedRegEx==='') {
      return {
         isValid : false,
         error: `ERROR: ISBN Pattern Can't Be Empty!`
      }
   }

   if (trimmedRegEx.length<10) {
      return {
         isValid : false,
         error: `ERROR: ISBN Can't Be Less Than 10 Digits!`
      }
   }

   if (trimmedRegEx.length>13) {
      return {
         isValid : false,
         error: `ERROR: ISBN Can't Be More Than 13 Digits!`
      }
   }

   if (!regExPattern.test(trimmedRegEx)) {
      return {
         isValid : false,
         error : `ERROR : Invalid ISBN Value type !`
      }
   }

   return {
      isValid : true,
      error : null
   }
   
}

