import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import {
  deleteContactById,
  getAllContacts,
} from 'redux/contacts/contactsOperations';

import { Lishka, NotUglyBtn } from './ListOfContacts.styled';

const ListOfContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contactDeleter = id => {
    dispatch(deleteContactById(id));
  };

  const listToRender = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {listToRender.map(({ id, name, number }) => {
          return (
            <Lishka key={id}>
              <span>
                {name}: {number}
              </span>
              <NotUglyBtn type="button" onClick={() => contactDeleter(id)}>
                Delete
              </NotUglyBtn>
            </Lishka>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfContacts;
