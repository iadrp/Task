import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function ContactScreen() {
  const { profile } = useSelector((state) => state.profile);
  return (
    <Card sx={{ minWidth: 275, my: "30px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          You can contact me using details below
        </Typography>
        <Typography variant="h5" component="div">
          {profile?.firstName} {profile?.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email
        </Typography>
        <Typography variant="body2">{profile?.email}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
