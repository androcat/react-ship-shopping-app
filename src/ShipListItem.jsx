import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ShipListItem({ data, index }) {
  console.log(data.name);
  return (
    <>
      {/* <h2>{data.name}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quas
        voluptatum provident quae porro hic? Eos officia iusto voluptates!
        Laboriosam quam temporibus eos culpa obcaecati ipsum maiores consectetur
        error qui?
      </p> */}
      <li style={{ margin: "10px" }}>
        <Card sx={{ width: 345, height: 345 }}>
          <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.manufacturer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.cost_in_credits} Credits
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Buy</Button>
          </CardActions>
        </Card>
      </li>
    </>
  );
}
