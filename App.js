import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = () => {
    fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json')
      .then(res => res.json())
      .then(data => setQuote(data));
  }

  // const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>ВдохновисЪ</Text>
        <Text style={styles.headerSubText}>Сервис для поиска вдохновения</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.quote}>
          <Text style={styles.quoteText}>{quote?.quoteText}</Text>
        </View>
        <View style={styles.author}>
          <Text style={styles.authorText}>{quote?.quoteAuthor}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={fetchQuote}>
        <Text style={styles.buttonText}>Следующая цитата</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    display: 'flex',
    justifyContent: "center",
    backgroundColor: '#e0e0e0',
    paddingLeft: 40,
  },
  headerText: {
    fontSize: 30,
    color: '#2a3eb1'
  },
  headerSubText: {
    fontSize: 12,
    color: '#1a237e'
  },
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quote: {
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  quoteText: {
    fontSize: 20,
  },
  author: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 40,
  },
  authorText: {
    fontStyle: 'italic',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2196f3",
    padding: 20
  },
  buttonText: {
    color: '#ffffff',
  }
});
