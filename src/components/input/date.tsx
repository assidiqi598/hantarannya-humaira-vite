import { FC, memo } from 'react';

interface IDateInput {
  id: string;
  value: Date;
  onChange: Function;
}

const DateInput: FC<IDateInput> = ({
  id,
  value = new Date(),
  onChange = () => {},
}) => {
  return (
    <div className="relative">
      <input
        id={`${id}`}
        className="p-2 text-pink-600 rounded-xl focus:outline-none"
        type="date"
        value={value.toLocaleDateString('af-ZA')}
        onChange={e => onChange(e)}
      />
    </div>
  );
};

export default memo(DateInput);
