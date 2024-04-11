import React from 'react'
import { Card, CardMedia, Chip, Rating, Stack, Switch, Typography } from '@mui/material';

const Cards = ({product={}}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product?.title}
        image={product?.thumbnail}
      />
      <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
        <Stack direction="column" spacing={0.5} useFlexGap>
          <Typography>{product?.title}</Typography>
          <Stack direction="row" spacing={1} useFlexGap>
            <Chip
              size="small"
              label={true ? "Active" : "Inactive"}
              color={true ? "success" : "default"}
            />
            <Rating defaultValue={1} size="small" />
          </Stack>
        </Stack>
        <Switch checked={true} />
      </Stack>
    </Card>
  );
}

export default Cards