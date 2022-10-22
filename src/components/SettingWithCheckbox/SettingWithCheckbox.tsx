import { Checkbox } from '@mui/material';
import React, { Dispatch, FC, SetStateAction } from 'react';
interface SettingWithCheckbox {
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}


const SettingWithCheckbox: FC<SettingWithCheckbox> = ({ setter, checked }) => {
  const handleOnChange = () => setter(!checked);

  return (

      <Checkbox checked={checked} onChange={handleOnChange} style={{color: `white`, display: 'flex', position: 'absolute', right: '20px', bottom: '22px' , padding: '0px', transform: "scale(1.3)", zIndex:' 999'}} />

  );
};

export default SettingWithCheckbox;
