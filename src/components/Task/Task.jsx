import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Task({ text }) {
  return (
    <Card sx={{ minWidth: 275, display: 'flex' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
