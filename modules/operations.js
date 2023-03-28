import variables from './link.js';

export const addClick = () => {
  variables.showList.classList.add('display-none');
  variables.contact.classList.add('display-none');
  variables.addNew.classList.remove('display-none');
  variables.AddLink.classList.add('addNewSelected');
  variables.ContactLink.classList.remove('contactSelected');
  variables.ListLink.classList.remove('listSelected');
};

export const contactClick = () => {
  variables.showList.classList.add('display-none');
  variables.contact.classList.remove('display-none');
  variables.ContactLink.classList.add('contactSelected');
  variables.ListLink.classList.remove('listSelected');
  variables.AddLink.classList.remove('addNewSelected');
  variables.addNew.classList.add('display-none');
};

export const listClick = () => {
  variables.showList.classList.remove('display-none');
  variables.ListLink.classList.add('listSelected');
  variables.AddLink.classList.remove('addNewSelected');
  variables.ContactLink.classList.remove('contactSelected');
  variables.contact.classList.add('display-none');
  variables.addNew.classList.add('display-none');
};
