const url = 'https://secret-ocean-49575-d51c4c8d7e6d.herokuapp.com/api/contact';
export const sendData = (data) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });

export const getData = () =>
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });