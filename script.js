
const list = document.querySelector('ul');

function request(callback, url, method = 'GET', body = null, headers = {}) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
    });

    xhr.send(body ? JSON.stringify(body) : null);
    xhr.onload = () => {
        callback(xhr.response);
    }
}

request((response) => {
    const data = JSON.parse(response);

    Object.values(data).forEach((users) => {
        const item = document.createElement('li');
        const itemName = document.createElement('h1');
        const itemPosition = document.createElement('p');
        const itemPhoto = document.createElement('img');

        itemName.innerText = users.name;
        itemPhoto.src = users.photo;
        itemPosition.innerText = users.position;
        list.append(item);
        item.append(itemName);
        item.append(itemPhoto);
        item.append(itemPosition);
    });
}, 'https://users-api-id.herokuapp.com/users');