import Badge from '@mui/material/Badge';
import WarningIcon from '@mui/icons-material/Warning';
import * as React from 'react';

export default function WarningBadge() {
  const [invisible, setInvisible] = React.useState(false);

  return (
    <Badge color="warning" variant="dot" invisible={invisible}>
      <WarningIcon color="primary"/>
    </Badge>
  );
}