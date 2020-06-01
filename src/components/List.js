import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./List.css";

const STATUS = {
  Alive: "👍",
  Dead: "👎",
  unknown: "👎",
};

export default class List extends React.Component {
  render() {
    return (
      <Grid container spacing={4}>
        {this.props.items.map((person) => (
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card key={person.id}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "250px" }}
                  image={person.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="personName"
                  >
                    {person.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {STATUS[person.status]} {person.status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
