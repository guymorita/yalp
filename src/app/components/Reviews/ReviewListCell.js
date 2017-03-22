
import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class ReviewListCell extends Component {
  render() {
    const { rowData } = this.props
    console.log('rowData', rowData)
    const { categories, id, image_url, location, name, price, rating, review_count } = rowData
    const { address1, city} = location
    const tags = categories.map((cat) => {return cat.title})
    const cat = tags.join(', ')

    return (
      <View style={styles.cellRow}>
        <View>
          <Image
            style={{width: 80, height: 80}}
            source={{uri: image_url}}
          />
        </View>
        <View style={styles.detailsColumn}>
          <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.rating}>
            {rating} Stars, {review_count} Reviews
          </Text>
          <Text style={styles.address}>
            {address1}, {city}
          </Text>
          <Text style={styles.categories}>
            {cat}
          </Text>
        </View>
        <View style={styles.priceColumn}>
          <Text style={styles.price}>
            {price}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cellRow: {
    padding: 10,
    flexDirection: 'row'
  },
  detailsColumn: {
    flexDirection: 'column',
    flex: 0.9,
    paddingLeft: 10
  },
  priceColumn: {
    marginRight: 5,
    flex: 0.1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  rating: {

  },
  address: {

  },
  categories: {
    color: 'gray'
  },
  price: {
    color: 'green',
    textAlign: 'right'
  },
})
