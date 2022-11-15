import { Heading, Text, Box, Image } from "theme-ui";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography, Stack } from "@mui/material";
import { jsx, Button } from "theme-ui";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
moment.locale("fr");

export default function ReviewCard({ review }) {
  return (
    <Box sx={styles.card} key={review.id}>
      <Typography variant="caption">
        {moment(review.postedDate).fromNow()}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Heading sx={styles.title} as="h3">
          {review.title}
        </Heading>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <LocationOnIcon />
        <Typography variant="body2">{review.location}</Typography>
      </Stack>

      <Text sx={styles.description}>
        {review.description.substring(0, 100)}
      </Text>
      <div className="card-footer">
        <div className="reviewer-info">
          {/* <Heading sx={styles.heading} as="h4">
            {review.location}
          </Heading> */}
          <Button variant="primary">Voir l'offre</Button>

          {/* <Text sx={styles.designation}>{review.postedDate}</Text> */}
        </div>
      </div>
    </Box>
  );
}

const styles = {
  card: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
