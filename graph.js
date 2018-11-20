const list = document.querySelector('#user-list ul');

const addUserToList = (username) => {
    const usersList = document.getElementById('users');
    const newLi = document.createElement('li');
    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const firstContent = document.createTextNode(username);
    const secondContent = document.createTextNode('delete');
    firstSpan.className = 'name';
    secondSpan.className = 'delete';

    firstSpan.appendChild(firstContent);
    secondSpan.appendChild(secondContent);
    newLi.appendChild(firstSpan);
    newLi.appendChild(secondSpan);

    usersList.appendChild(newLi);
};

const addOnSubmitHandler = () => {
    const form = document.getElementById('add-user');
    form.onsubmit = (event) => {
        event.preventDefault();
        const usernameInput = document.getElementById('username-input');
        const username = usernameInput.value;
        addUserToList(username);
        usernameInput.value = null;
    };
};

addOnSubmitHandler();

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });