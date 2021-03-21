import React, { useState } from 'react';
import { Container, Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import Product from './Product/Product';
import Search from '@material-ui/icons/Search';
import data from './data.json'

import useStyles from './styles';

const products = data
// [
//   { id: 1, name: 'Gateron Blue', type: 'clicky', image: './bluegateron.jpg' },
//   { id: 2, name: 'Gateron Brown', type: 'tactile', image: './browngateron.jpg' },
//   { id: 3, name: 'Gateron Red', type: 'linear', image: './redgateron.jpg' },
//   { id: 4, name: 'Gateron Yellow', type: 'linear', image: './yellowgateron.jpg' },
//   { id: 5, name: 'Gateron Black', type: 'linear', image: './blackgateron.jpg' },
//   { id: 6, name: 'Gateron Clear', type: 'tactile', image: './cleargateron.jpg' }
// ];


const Products = () => {
  const classes = useStyles();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    if (
      product.name.toLowerCase().includes(search) ||
      product.type.toLowerCase().includes(search)
    ) {
      return product;
    }
  });

  return (
    <main>
      <Container justify = "center" maxWidth = "sm">
          <TextField className={classes.searchBar} label = "Filter" type = "search" variant ="filled" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}></TextField>
      </Container>
      <Grid container justify = "center" spacing = {4}>
        {filteredProducts.map((product) => (
          <Grid item key = {product.id} xs = {12} sm = {6} med = {4} lg = {3}>
            <Product product={product} />
          </Grid> 
        ))}
      </Grid>
    </main>
  )
};

export default Products;