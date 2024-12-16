function loadAddress() {
    const addressJSON = localStorage.getItem('address');

    if (addressJSON) {
        const address = JSON.parse(addressJSON);

        document.getElementById('city').value = address.city || '';
        document.getElementById('street').value = address.street || '';
        document.getElementById('streetNumber').value = address.houseNumber || '';
        document.getElementById('postalCode').value = address.postalCode || '';

        alert('Address loaded successfully!');
    } else {
        alert('No address found in localStorage!');
    }

    window.onload = function () {
        loadAddress();
    }
}

saveAddress() {
    const cityInput = document.getElementById('city');
    const streetInput = document.getElementById('street');
    const houseNumberInput = document.getElementById('streetNumber');
    const postalCodeInput = document.getElementById('postalCode');

    city = cityInput.value
    street = streetInput.value
    houseNumber = houseNumberInput.value
    postalCode = postalCodeInput.value

    let isValid = true;

    // Validation
    if (!city) {
        cityInput.style.backgroundColor = 'red';
        isValid = false;
    } else {
        cityInput.style.backgroundColor = '';
    }

    if (!street) {
        streetInput.style.backgroundColor = 'red';
        isValid = false;
    } else {
        streetInput.style.backgroundColor = '';
    }

    if (!houseNumber) {
        houseNumberInput.style.backgroundColor = 'red';
        isValid = false;
    } else {
        houseNumberInput.style.backgroundColor = '';
    }

    if (!postalCode) {
        postalCodeInput.style.backgroundColor = 'red';
        isValid = false;
    } else {
        postalCodeInput.style.backgroundColor = '';
    }

    if (!isValid) {
        alert('Please fill in all fields.');
        return;
    }

    const address = {
        city,
        street,
        houseNumber,
        postalCode
    };

    localStorage.setItem('address', JSON.stringify(address));
    alert('Address saved successfully!');
}
