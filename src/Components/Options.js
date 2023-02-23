import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="超辣" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="中辣" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="微辣" />
        <FormControlLabel disabled control={<Checkbox />} label="不辣" />
    </FormGroup>
  );
}