import React from 'react'
import { Card, CardMedia, Chip, Rating, Stack, Switch, Typography } from '@mui/material';

const Cards = ({product={}}) => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardMedia
        component="img"
        alt={product?.title}
        image={product?.thumbnail}
        sx={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
      <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
        <Stack direction="column" spacing={0.5} useFlexGap>
          <Typography>{product?.title}</Typography>
          <Stack direction="row" spacing={1} useFlexGap>
            <Chip
              size="small"
              label={product?.category}
              color={true ? "success" : "default"}
              sx={{ textTransform: "capitalize" }}
            />
            <Rating
              defaultValue={product?.rating}
              size="small"
              readOnly
              precision={0.1}
            />
          </Stack>
        </Stack>
        <Chip
          size="small"
          label={`$ ${product?.price} US`}
          sx={{ backgroundColor: "#937de4", color: "white", fontWeight: "700" }}
        />
      </Stack>
    </Card>
  );
}

export default Cards