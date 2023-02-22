import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';

export default function SimpleBadge() {
    const [invisible, setInvisible] = React.useState(false);
  return (
    <Badge color="secondary" variant="dot" invisible={invisible}>
      <MailIcon color="primary" />
    </Badge>
  );
}