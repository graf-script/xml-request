
const list = document.querySelector('li');

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
        const pos = document.createElement('p');
        const itemPhoto = document.createElement('img');

        item.innerText = users.name;
        itemPhoto.src = users.photo;
        pos.innerText = users.position;
        list.append(item);
        list.append(itemPhoto);
        list.append(pos);
    });
}, 'https://users-api-id.herokuapp.com/users');