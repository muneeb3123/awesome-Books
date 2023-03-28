/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
const showTime = document.querySelector('.showTime');

const currentTime = () => {
  const dateTime = luxon.DateTime.local();
  showTime.innerHTML = dateTime.toFormat('MMMM d, yyyy - hh:mm:ss a');
};

export default currentTime;