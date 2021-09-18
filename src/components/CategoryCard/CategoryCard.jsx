import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import CategoryCardImg from "../../assets/images/categoryCardImg.png";
import {
  ArrowBtn,
  BlackStar,
  LikeIcon,
  WhiteStar,
} from "../../assets/icons/icons";

import "./CategoryCard.scss";

const CategoryCard = () => {
  return (
    <div className="CategoryCard">
      <Link to="/detail">
        <Card
          sx={{ maxWidth: 345 }}
          className="d-flex justify-content-between categoryCard"
        >
          <div className="d-flex justify-content-between">
            <CardMedia
              className="categoryCardImg"
              component="img"
              image={CategoryCardImg}
              alt="CategoryImg"
            />
            <div className="textBlock">
              <CardContent className="">
                <Typography
                  gutterBottom
                  variant="h5"
                  className="categoryCardTitle"
                  component="div"
                >
                  Product title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Space for a small product description
                </Typography>

                <BlackStar />
                <BlackStar />
                <BlackStar />
                <BlackStar />
                <WhiteStar />

                <div className="mt-4 d-flex titles">
                  <div className="title1">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Fresheness
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Farm
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Delivery
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Stock
                    </Typography>
                  </div>

                  <div className="title2">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      New (Extra fresh)
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Grocery Tarm Fields
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      Europe
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-3 titleSty"
                    >
                      320 pcs
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="textBlock">
              <div className="ps-2 mb-3">
                <Typography
                  gutterBottom
                  variant="h5"
                  className="categoryCardTitle"
                  component="div"
                >
                  36.99 USD
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="price"
                >
                  <del>48.56</del>
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="price mt-4 mb-1"
                >
                  Free Shipping
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="titleSty smallTit"
                >
                  Delivery in 1 day
                </Typography>
              </div>

              <div>
                <CardActions>
                  <Link to="/detail">
                    <Button className="d-block categoryCardBtn" size="small">
                      Product Detail
                      <span className="ms-3">
                        <ArrowBtn />
                      </span>
                    </Button>
                  </Link>
                </CardActions>

                <CardActions>
                  <Button className="d-block categoryCardBtn2" size="small">
                    <span className="me-2">
                      <LikeIcon />
                    </span>
                    Add to wish list
                  </Button>
                </CardActions>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;