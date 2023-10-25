import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  doc: {
    margin: "0%",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily: "Times-Roman",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  listItem: {
    marginBottom: 5,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document style={styles.doc}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <View style={styles.listItem}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Item 3</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
