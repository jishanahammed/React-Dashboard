import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font,Image } from '@react-pdf/renderer';
import Header from '../ReportUtility/Header';
import Footer from '../ReportUtility/Footer';



// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    flexDirection: 'column',
    height: '100%',
    position: 'relative', // Ensure position is relative for footer
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  invoiceDetails: {
    fontSize: 12,
    marginBottom: 20,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: '#99cf84',
    borderWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1, // Add border to bottom of each row
    borderBottomColor: '#808080', // Color for the row border
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#99cf84', // Set the background color for the header
    borderBottomWidth: 1, // Add border to bottom of the header
    borderBottomColor: '#808080', // Color for the header border
  },
  tableCol: {
    width: '25%',
    borderStyle: '#808080',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },



  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  logo: {
    width: 70,
    // marginBottom: 20,
  },
  companyDetails: {
    fontSize: 10,
  },
//   outerBorder: {
//     borderBottomWidth: 2, // Adjust to create the outer border
//     borderColor: '#ddd',
//     padding: 5,
//   },

//   invoiceTitleText: {
//     textAlign: 'center',
//     marginBottom: 5,
//   },
outerBorder: {
    marginBottom:13
  },
  innerBorder: {
    borderBottomWidth: 2,
    borderColor: '#ddd',
    paddingTop:5,
    paddingBottom:5,
    borderStyle: 'dashed',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centers the title and logo horizontally
  },

  invoiceTitleText: {
    textAlign: 'center',
    flex: 1, // Ensures the title takes up available space
    fontSize:15,
    fontWeight:'bold'
  },
  date:{
    display:'flex',
    justifyContent:'center',
    textAlign: 'center',
    fontSize:10,
    fontWeight:'bold',
    marginBottom:10
  },

  gross: {
    flexDirection: 'column', // Stack items vertically
    width: '100%', // Ensure it uses the full width available
  },
  
  textContainer: {
    flexDirection: 'row', // Arrange text parts horizontally
    width: '100%', // Ensure it uses the full width available
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
     fontWeight: '700',
  },
  
  text70: {
    flex: 8.4, // Takes up 70% of the width
    textAlign: 'left', // Align text to the left
    fontSize: 10,
    marginBottom:5,
  },
  
  text30: {
    flex: 1.6, // Takes up 30% of the width
    textAlign: 'left', // Align text to the right
    fontSize: 10,
    marginBottom:7,
  },
  
// gross: {
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     position: 'relative',
//   },
  
//   textgross: {
//     textAlign: 'right',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     fontSize: 10,
//     fontWeight: '700',
//     paddingBottom: 5,
//     width: '100%', // Ensures Text component spans full width
//   },
termsContainer: {
    marginTop: 40,
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    paddingTop: 10,
  },
  
  termsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  termsText: {
    fontSize: 10,
    marginBottom:2,
  },
  
});

const Invoice = () => (
 
  <Document>
    <Page size="A4" style={styles.page}>

<View style={styles.outerBorder}>
  <View style={styles.innerBorder}>
    <View style={styles.headerContainer}>
    <Image style={styles.logo} src="/maillogo.png" />
      <Text style={styles.invoiceTitleText}>Recipient Created Quotation Invoice</Text>
    </View>
  </View>
</View>

<View style={styles.date}>
  <View style={{ alignSelf: 'center' }}>
    <Text style={{ borderWidth: 1, borderColor: '#ddd', padding: 4 }}>Quotation Date:{"10-17-2024"} </Text>
  </View>
</View>




  <View style={styles.header}>
  <View style={{...styles.companyDetails,textAlign:'left'}}>
  <Text style={{fontSize: 12, fontWeight: '700', marginBottom: 5,borderBottomWidth: 1, width:50, borderBottomColor: '#999999'}}>
  From
</Text>

      <Text>Cvr: </Text>
      <Text>Name:</Text>
      <Text>Company Name:</Text>
      <Text>Email: </Text>
    </View>
    <View style={{...styles.companyDetails,textAlign:'left'}}>
    <Text style={{fontSize: 12, fontWeight: '700', marginBottom: 5,borderBottomWidth: 1, width: 40, borderBottomColor: '#999999'}}>
  To
</Text>

      <Text>Cvr: </Text>
      <Text>Name:</Text>
      <Text>Email: </Text>
      <Text>Mobile:</Text>
      <Text>Address: </Text>
    </View>
  </View>


      <View style={styles.table}>
        <View style={styles.tableHeader} fixed>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>SL</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Item Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Brand</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Model</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Size</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Price</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantity</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Total Price</Text>
          </View>
        </View>


        <View style={styles.tableRow}>
            <View >
              <Text style={styles.tableCell}>   Equipment</Text>
            </View>
        </View>
 <View style={styles.tableRow} >
<View style={styles.tableCol}>
<Text style={styles.tableCell}>1</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>Solar Panel </Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>Risen</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>RISEN RSM40-8-415M</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>415</Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>91</Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>1</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>91</Text>
</View>

</View>



<View style={styles.tableRow} >
<View style={styles.tableCol}>
<Text style={styles.tableCell}>2</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>Solar Panel </Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>Risen</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>RISEN RSM40-8-415M</Text>
</View>
<View style={styles.tableCol}>
<Text style={styles.tableCell}>415</Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>91</Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>1</Text>
</View>

<View style={styles.tableCol}>
<Text style={styles.tableCell}>91</Text>
</View>
</View>




 </View>






<View style={styles.termsContainer}>
    <Text style={styles.termsTitle}>Terms and Conditions</Text>
    <Text style={styles.termsText}>
      1. Payment is due within 15 days from the date of the invoice. Late payments may incur a fee.
      </Text>
      <Text style={styles.termsText}>
      2. Please ensure that the invoice number is referenced in all payments.
      </Text>
      <Text style={styles.termsText}>
      3. For any discrepancies or issues with this invoice, please contact us within 7 days.
      </Text>
      <Text style={styles.termsText}>
      4. All goods and services are subject to our standard terms and conditions available upon request.
    </Text>
  </View>


      <Footer /> {/* Ensure Footer is included */}
    </Page>
  </Document>
);

export default Invoice;
