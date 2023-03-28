import { DateTime } from './luxon/src/luxon.js';

const showTime = document.querySelector('.showTime');

const currentTime = () => {
  const dateTime = DateTime.local();
  showTime.innerHTML = dateTime.toFormat('MMMM d, yyyy - hh:mm:ss a');
};

export default currentTime;