import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

import React, { FC } from 'react';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({ name, label, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          fullWidth
          label={label}
          autoComplete='off'
          error={error !== undefined}
          helperText={error ? error.message : ''}
        />
      )}
    />
  );
};

export default FormInput;
