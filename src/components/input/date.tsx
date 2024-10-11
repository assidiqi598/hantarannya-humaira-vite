import { FC } from 'react';

interface IDateInput {
  id: string;
  onChange: Function;
}

const DateInput: FC<IDateInput> = ({ id, onChange = () => {} }) => {
  return <input id={`${id}`} className='p-2 focus:outline-pink-600' type='date' onChange={(e) => onChange(e)} />;
};

export default DateInput;
