import React from 'react';
import Reminder from '../models/Reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li className='list-group-item' key={item.id}>
          {item.title}{' '}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className='btn btn-outline-danger rounded-pill mx-5'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
