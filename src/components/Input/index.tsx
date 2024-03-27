import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

export function Input({ isLoading = false, ...rest }: InputProps) {
  return (
    <div className="input" >
      <input type='text' {...rest} />
      {isLoading && <Spin />}
    </div>
  )
}