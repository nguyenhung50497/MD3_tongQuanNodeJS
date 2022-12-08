const checkLicensePlateInHanoi = (licensePlate) => {
    const array = ['29', '30', '31', '32', '33', '40'];
    for (const value of array) {
        if (licensePlate.includes(value)) {
            return true;
        }
    }
    return false;
}

