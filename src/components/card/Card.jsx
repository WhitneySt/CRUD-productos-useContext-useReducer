import React, { memo, useMemo } from "react";
import {
  Card,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../context/AppContext";

const Cards = memo(({ product = {}, colorCategory = "" }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component="img"
        alt={product?.title}
        image={product?.thumbnail}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "200px",
          objectPosition: "center",
        }}
      />
      <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
        <Stack direction="column" spacing={0.5} useFlexGap>
          <Typography>{product?.title}</Typography>
          <Stack direction="row" spacing={1} useFlexGap>
            <Chip
              size="small"
              label={product?.category}
              sx={{
                textTransform: "capitalize",
                backgroundColor: colorCategory ? colorCategory : "#937de4",
              }}
            />
            <Rating
              defaultValue={product?.rating}
              size="small"
              readOnly
              precision={0.5}
            />
          </Stack>
        </Stack>
        <Chip
          label={`$ ${product?.price} US`}
          sx={{ backgroundColor: "#937de4", color: "white", fontWeight: "700" }}
        />
      </Stack>
    </Card>
  );
});

export default Cards;
