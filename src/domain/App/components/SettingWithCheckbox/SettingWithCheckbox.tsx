import { Checkbox } from '@mui/material';
import React, { Dispatch, FC, SetStateAction } from 'react';
interface SettingWithCheckbox {
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}


const SettingWithCheckbox: FC<SettingWithCheckbox> = ({ setter, checked }) => {
  const handleOnChange = () => setter(!checked);

  return (

      <Checkbox style={{transform: 'scale(1.11, 1.11)', position: 'absolute', right: '10px'}} checked={checked} onChange={handleOnChange}/>

  );
};

export default SettingWithCheckbox;
