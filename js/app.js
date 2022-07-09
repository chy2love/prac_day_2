const user = [
  { name: '윤소희', age: 28, birthday: '0831', phoneNumber: '01025042452' },
  { name: '최하영', age: 25, birthday: '0209', phoneNumber: '01064089889' },
  { name: '이혜수', age: 32, birthday: '0406', phoneNumber: '01025042452' },
  { name: '김상진', age: 40, birthday: '0229', phoneNumber: '01064089889' },
  { name: '고동영', age: 48, birthday: '0101', phoneNumber: '01025042452' },
  { name: '곽두팔', age: 43, birthday: '1228', phoneNumber: '01064089889' },
  { name: '김콩삼', age: 18, birthday: '0103', phoneNumber: '01025042452' },
  { name: '최수진', age: 17, birthday: '0706', phoneNumber: '01034567891' },
  { name: '우추동', age: 31, birthday: '0709', phoneNumber: '01023456789' },
  { name: '김별빛나리', age: 22, birthday: '0512', phoneNumber: '01012345678' },
];

const userList = document.querySelector('#userList');
const submitBtn = document.querySelector('#submitBtn');
const checkedList = document.querySelector('#checkedList');
let checkedUsers = [];
let paintedUser = [];
let paintNewUser = [];

function paintDocument(user) {
  for (let item of user) {
    const userListEl = document.createElement('li');
    const userLabel = document.createElement('label');
    const userCheckbox = document.createElement('input');
    userLabel.innerText = item.name;
    userLabel.setAttribute('for', item.name);
    userCheckbox.type = 'checkbox';
    userCheckbox.id = item.name;
    userCheckbox.className = 'indivCheckbox';
    userList.appendChild(userListEl);
    userListEl.appendChild(userCheckbox);
    userListEl.appendChild(userLabel);
    userCheckbox.addEventListener('change', handleCheckbox);
  }
}
function handleCheckbox(event) {
  if (event.target.checked) {
    for (let item of user) {
      if (item.name === event.target.id && !checkedUsers.includes(item)) {
        checkedUsers.push(item);
      }
    }
  } else {
    checkedUsers = checkedUsers.filter((user) => user.name !== event.target.id);
  }
}

function paintCheckedUser(paintNewUser) {
  for (let user of paintNewUser) {
    const checkedListEl = document.createElement('li');
    const checkedListBtn = document.createElement('button');
    const checkedListSpan = document.createElement('span');
    checkedListEl.className = user.name;
    checkedListBtn.type = 'button';
    checkedListBtn.innerText = 'X';
    checkedListSpan.innerText = user.name;
    checkedListBtn.name = user.name;
    checkedList.appendChild(checkedListEl);
    checkedListEl.appendChild(checkedListBtn);
    checkedListEl.appendChild(checkedListSpan);
    paintedUser.push(user);
    checkedListBtn.addEventListener('click', deleteUser);
  }
}

function handleSubmitBtn() {
  let duplicatedUser = [];
  for (let item of checkedUsers) {
    if (paintedUser.includes(item)) {
      duplicatedUser.push(item.name);
    }
  }
  if (duplicatedUser.length !== 0) {
    alert('이미 선택된 유저입니다: ' + duplicatedUser);
  } else {
    for (let item of checkedUsers) {
      paintNewUser.push(item);
    }
    paintCheckedUser(paintNewUser);
    const everyCheckbox = document.querySelectorAll('.indivCheckbox');
    for (let checkbox of everyCheckbox) {
      checkbox.checked = false;
    }
    paintNewUser = [];
    checkedUsers = [];
  }
  console.log(paintedUser);
}

function deleteUser(event) {
  for (let item of paintedUser) {
    if (item.name === event.target.parentElement.className) {
      $('li').remove('.' + item.name);
      paintedUser = paintedUser.filter((user) => user.name !== item.name);
      console.log(paintedUser);
    }
  }
}

submitBtn.addEventListener('click', handleSubmitBtn);
document.addEventListener('DOMContentLoaded', function () {
  paintDocument(user);
});
