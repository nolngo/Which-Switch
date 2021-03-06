import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { addShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image} title={product.name} />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
            </div>
              <Typography variant="body2" color="textSecondary">
                {product.type}
              </Typography>
          </CardContent>
        </Card>
    );
}

export default Product;
