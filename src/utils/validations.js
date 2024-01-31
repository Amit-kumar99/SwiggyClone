export const checkValidSignupData = (mobileNumber, name, email) => {
    const isMobileNumberValid = /^[0-9]{10}$/.test(mobileNumber);
    const isNameValid = /^[\D]/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if(!isMobileNumberValid) return "Phone Number is not valid";
    if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email ID is not valid";

    return null;
}

export const checkValidSigninData = (mobileNumber) => {
    const isMobileNumberValid = /^[0-9]{10}$/.test(mobileNumber);
    
    if(!isMobileNumberValid) return "Mobile Number is not valid";

    return null;
}

export const checkAddressValid = (door, landmark) => {
    const isDoorValid = door.length > 0;
    const isLandmarkValid = landmark.length > 0;

    if(!isDoorValid) return "Door is not valid";
    if(!isLandmarkValid) return "Landmark is not valid";
    
    return null;
}