let user = [
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
const allCheckbox = document.querySelector('#allCheckbox');
let checkedUsers = [];
let paintedUser = [];
let paintNewUser = [];
let everyCheckbox;
let count = 1;
const date = new Date();
for (let item of user) {
  //user에 생일 추가
  item.bornAt = `${String(date.getFullYear()) - item.age + 1}${item.birthday}`;
  //user에 index 추가
  item.index = count;
  count++;
}

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
  everyCheckbox = document.querySelectorAll('.indivCheckbox');
  allCheckbox.addEventListener('change', handleAllCheckbox);
}
function handleAllCheckbox() {
  if (allCheckbox.checked === true) {
    for (let item of everyCheckbox) {
      if (item.disabled !== true) {
        item.checked = true;
        paintNewUser.push(
          ...user.filter((element) => element.name === item.id)
        );
      }
    }
  } else {
    for (let item of everyCheckbox) {
      if (item.disabled !== true) {
        item.checked = false;
        paintNewUser = [];
      }
    }
  }
}
function handleCheckbox(event) {
  if (event.target.checked) {
    for (let item of user) {
      if (item.name === event.target.id && !paintNewUser.includes(item)) {
        paintNewUser.push(item);
        if (paintNewUser.length === user.length) {
          allCheckbox.checked = true;
        }
      }
    }
  } else {
    allCheckbox.checked = false;
    paintNewUser = paintNewUser.filter((user) => user.name !== event.target.id);
  }
}

function paintCheckedUser(paintList) {
  paintList = paintList.sort(function (a, b) {
    return a.index - b.index;
  });
  for (let user of paintList) {
    const checkedListEl = document.createElement('li');
    const checkedListBtn = document.createElement('button');
    const checkedListSpan = document.createElement('span');
    const disableCheckbox = document.getElementById(user.name);
    checkedListEl.className = user.name;
    checkedListBtn.type = 'button';
    checkedListBtn.innerText = 'X';
    checkedListSpan.innerText = user.name;
    checkedListBtn.name = user.name;
    checkedList.appendChild(checkedListEl);
    checkedListEl.appendChild(checkedListBtn);
    checkedListEl.appendChild(checkedListSpan);
    paintedUser.push(user);
    disableCheckbox.setAttribute('disabled', true);
    checkedListBtn.addEventListener('click', deleteUser);
  }
}

function handleSubmitBtn() {
  paintCheckedUser(paintNewUser);
  for (let checkbox of everyCheckbox) {
    checkbox.checked = false;
  }
  allCheckbox.checked = false;
  paintNewUser = [];
  console.log(checkedUsers);
  console.log(paintedUser);
}

function deleteUser(event) {
  for (let item of paintedUser) {
    if (item.name === event.target.parentElement.className) {
      const enableCheckbox = document.getElementById(item.name);
      enableCheckbox.disabled = false;
      paintedUser = paintedUser.filter((user) => user.name !== item.name);
      event.target.parentElement.remove();
    }
  }
  console.log(paintedUser);
}

submitBtn.addEventListener('click', handleSubmitBtn);
document.addEventListener('DOMContentLoaded', function () {
  paintDocument(user);
});
