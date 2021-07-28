
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';



export default function App() {
  const [darkmode, setDarkmode] = useState()
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")


  // function for calculation numbers
  function calculator() {
    const splitNumber = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumber[0])
    const operator = splitNumber[1]
    const lastNumber = parseFloat(splitNumber[2])
    var porcent = (firstNumber/ lastNumber)*100

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString())
        return
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString())
        return
      
      
    }

  }

  function handleInput(buttonPress: string) {
    if (buttonPress === "+" || buttonPress === "-" || buttonPress === "*" || buttonPress === "/") {
      setCurrentNumber(currentNumber + " " + buttonPress + " ");
      return
    }
    switch (buttonPress) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setCurrentNumber(currentNumber + "=");
        calculator()
        return

      case '+/-':
        return
    }
    setCurrentNumber(currentNumber + buttonPress)

  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkmode ? "black" : "white",
      width: '100%',
      minHeight: 297,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      margin: 30,
      fontSize: 25,
      color: darkmode ? "white" : "black"
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: 50,
      margin: 10,
      backgroundColor: darkmode ? "#7b8084" : "#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      backgroundColor: darkmode ? "black" : "white",
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      backgroundColor: darkmode ? "black" : "white",
      borderColor: darkmode ? "white" : "black",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90,
      minHeight: 100,
      flex: 2,
      borderRadius: 20,
    },
    textButton: {
      color: darkmode ? "white" : "black",
      fontSize: 25,
    },
    historyText: {
      color: darkmode ? "#B5B7BB" : "#7c7c7c",
      margin: 10,
      fontSize: 25,

    }

  });




  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkmode ? "light-up" : "moon"} size={25} color={darkmode ? "white" : "black"} onPress={() => darkmode ? setDarkmode(false) : setDarkmode(true)} />

        </TouchableOpacity>
        <Text style={styles.historyText}> {lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: '#9DBC7B' }]}>
              <Text style={[styles.textButton, { color: 'white', fontSize: 25 }]}>{button}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: typeof (button) === 'number' ? darkmode === true ? '#303946' : '#fff' : darkmode === true ? '#414853' : '#ededed' }]}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>

        )}

      </View>
    </View>

  );
}



