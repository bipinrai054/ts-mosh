import React from 'react';
interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
export default function NewReminder({
  onAddReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = React.useState('');
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle('');
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='title'></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id='title'
        type='text'
        className='form-control'
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3 '>
        Add Reminder
      </button>
    </form>
  );
}
