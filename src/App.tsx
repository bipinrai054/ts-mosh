import './styles.css';
import React from 'react';
import Reminder from './models/Reminder';
import ReminderList from './components/ReminderList';
import ReminderService from './services/reminders';
import NewReminder from './components/NewReminder';
export default function App() {
  const [reminder, setReminder] = React.useState<Reminder[]>([]);
  React.useEffect(() => {
    loadReminders();
  }, []);
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminder(reminders);
  };
  const removeReminder = async (id: number) => {
    setReminder(reminder.filter((reminder) => reminder.id !== id));
  };
  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    setReminder([newReminder, ...reminder]);
  };
  return (
    <div className='App'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminder} onRemoveReminder={removeReminder} />
    </div>
  );
}
