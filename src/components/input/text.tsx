import { FC } from 'react';

interface ITextInput {
  id: string;
  value: string;
  onChange: Function;
}

const TextInput: FC<ITextInput> = ({ id, value = '', onChange = () => {} }) => {
  return (
    <input
      id={`${id}`}
      value={value}
      className="p-2 rounded-xl focus:outline-pink-600"
      type="text"
      onChange={e => onChange(e)}
    />
  );
};

export default TextInput;
