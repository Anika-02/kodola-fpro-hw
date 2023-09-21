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
    surname: document.querySelector('#surname'),
    birthdate: document.querySelector('#birthDate'),
    sex: document.querySelectorAll('input[name="sex"]'),
    city: document.querySelector('#city-select'),
    address: document.querySelector('#address'),
    languageCheckboxes: document.querySelectorAll('input[name="language"]'),
    saveButton: document.querySelector('#save-btn'),
    form: document.querySelector('#registration-form'),
    errorMessage: document.querySelector('.error'),
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

    for (let key in userData) {
        if (userData[key] === '' || (Array.isArray(userData[key]) && userData[key].length === 0)) {
            formElements.errorMessage.style.display = 'block';
            formElements.errorMessage.textContent = `Please, input your ${key}`;
            errorMarker = true;
        }
    }

    if (!errorMarker) {
        formElements.errorMessage.style.display = 'none';
        formElements.successMessage.style.display = 'block';
        updateUserInfo(userData);
        formElements.userInfoTable.style.display = 'flex';
        formElements.registrationForm.style.display = 'none';
    }
});
