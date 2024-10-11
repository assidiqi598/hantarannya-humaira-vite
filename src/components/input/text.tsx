import { FC } from 'react';

interface ITextInput {
  id: string;
  onChange: Function;
}

const TextInput: FC<ITextInput> = ({ id, onChange = () => {} }) => {
  return <input id={`${id}`} className='p-2 focus:outline-pink-600' type="text" onChange={(e) => onChange(e)} />;
};

export default TextInput;
