// Header.js
import React from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    marginBottom: 20,
  },
  companyDetails: {
    fontSize: 12,
  },
});

const Header = () => (
  <View style={styles.header}>
    <View>
      <Image style={styles.logo} src="/maillogo.png" />
    </View>
    <View style={styles.companyDetails}>
      <Text>Company Name</Text>
      <Text>1234 Street Address</Text>
      <Text>City, State, Zip Code</Text>
      <Text>Phone: (123) 456-7890</Text>
      <Text>Email: info@company.com</Text>
    </View>
  </View>
);

export default Header;
