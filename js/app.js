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

const userList = document.querySelector('userList');
const submitBtn = document.querySelector('submitBtn');

function paintDocument(user) {
  for (let item of user) {
    const userListEl = document.createElement('li');
    const userLabel = document.createElement('label');
    const userCheckbox = document.createElement('input');
    
  }
}

document.addEventListener('DOMContentLoaded', function () {
  paintDocument(user);
});
