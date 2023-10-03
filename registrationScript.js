function updateUserInfo(userData) {
    document.querySelector('#userName').textContent = userData.name;
    document.querySelector('#userSurname').textContent = userData.surname;
    document.querySelector('#userBirthDate').textContent = userData.birthdate;
    document.querySelector('#userSex').textContent = userData.sex;
    document.querySelector('#userCity').textContent = userData.city;
    document.querySelector('#userAddress').textContent = userData.address;
    document.querySelector('#userLanguages').textContent = userData.language.join(', ');
}

const userData = {
    name: '',
    surname: '',
    birthdate: '',
    sex: '',
    city: 'Kharkiv',
    address: '',
    language: [],
};

const formElements = {
    name: document.querySelector('#name'),
    nameError: document.querySelector('#nameError'),
    surname: document.querySelector('#surname'),
    surnameError: document.querySelector('#surnameError'),
    birthdate: document.querySelector('#birthDate'),
    birthError: document.querySelector('#birthError'),
    sex: document.querySelectorAll('input[name="sex"]'),
    sexError: document.querySelector('#sexError'),
    city: document.querySelector('#city-select'),
    cityError: document.querySelector('#cityError'),
    address: document.querySelector('#address'),
    addressError: document.querySelector('#addressError'),
    languageCheckboxes: document.querySelectorAll('input[name="language"]'),
    languageError: document.querySelector('#languageError'),
    saveButton: document.querySelector('#save-btn'),
    form: document.querySelector('#registration-form'),
    successMessage: document.querySelector('.success'),
    userInfoTable: document.querySelector('.info-table'),
    registrationForm: document.querySelector('.registration-form'),
};

formElements.name.addEventListener('input', (e) => {
    userData.name = e.target.value;
});

formElements.surname.addEventListener('input', (e) => {
    userData.surname = e.target.value;
});

formElements.birthdate.addEventListener('input', (e) => {
    userData.birthdate = e.target.value;
});

formElements.sex.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        if (radio.checked) {
            userData.sex = radio.value;
        }
    });
});

formElements.city.addEventListener('change', (e) => {
    userData.city = e.target.value;
});

formElements.address.addEventListener('input', (e) => {
    userData.address = e.target.value;
});

formElements.saveButton.addEventListener('click', (e) => {
    userData.language = [];
    formElements.languageCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            userData.language.push(checkbox.value);
        }
    });
    formElements.userInfoTable.style.display = 'block';
    updateUserInfo(userData);
});

formElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    let errorMarker = false;

    if (userData.name === '') {
        formElements.nameError.textContent = 'Please, input your name';
        errorMarker = true;
    } else {
        formElements.nameError.textContent = '';
    }

    if (userData.surname === '') {
        formElements.surnameError.textContent = 'Please, input your surname';
        errorMarker = true;
    } else {
        formElements.surnameError.textContent = '';
    }

    if (userData.birthdate === '') {
        formElements.birthError.textContent = 'Please, input your birthdate';
        errorMarker = true;
    } else {
        formElements.birthError.textContent = '';
    }

    if (userData.sex === '') {
        formElements.sexError.textContent = 'Please, select your sex';
        errorMarker = true;
    } else {
        formElements.sexError.textContent = '';
    }

    if (userData.city === '') {
        formElements.cityError.textContent = 'Please, select your city';
        errorMarker = true;
    } else {
        formElements.cityError.textContent = '';
    }

    if (userData.address === '') {
        formElements.addressError.textContent = 'Please, input your address';
        errorMarker = true;
    } else {
        formElements.addressError.textContent = '';
    }

    if (userData.language.length === 0) {
        formElements.languageError.textContent = 'Please, select at least one language';
    } else {
        formElements.languageError.textContent = '';
    }

    if (!errorMarker) {
        formElements.successMessage.style.display = 'block';
        updateUserInfo(userData);
        formElements.userInfoTable.style.display = 'flex';
        formElements.registrationForm.style.display = 'none';
    }
    else {
        formElements.userInfoTable.style.display = 'none';
        formElements.registrationForm.style.display = 'flex';
    }
});