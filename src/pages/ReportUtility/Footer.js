// Footer.js
import React from 'react';
import { View, Text, StyleSheet,Link  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
});

const Footer = () => (
  <View style={styles.footer}>
    <Text>
      This is a system generated invoice that doesn't require any signature.
    </Text>
    <Text>
      Powered by: <Link src="https://www.solarpedia.com.au/"  style={styles.link} >https://www.solarpedia.com.au </Link> 
     
    </Text>
  </View>
);

export default Footer;
