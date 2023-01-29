/* eslint-disable no-loop-func */
/* eslint-disable array-callback-return */
import './App.css';
import React from 'react';

function App() {
  const [words, setWords] = React.useState("");
  const [families, setFamilies] = React.useState("");
  const [familyMembers, setFamilyMembers] = React.useState("");
  const vowels = ["a", "i", "u", "e", "o"];

  const checkLetter = () => {
    let newWords = words.toLowerCase().split(" ").join("").split("");
    let vowelsResult = ""
    let consonantsResult = ""
    for(let i=0; i < newWords.length; i++){
      if (vowels.indexOf(newWords[i]) >= 0) {
        vowelsResult += newWords[i];
      } else {
        consonantsResult += newWords[i];
      }
    }
    document.getElementById("vowels-test").innerHTML = "Vowels: " + vowelsResult;
    document.getElementById("consonant-test").innerHTML = "Consonant: " + consonantsResult;
  }

  const checkBusMinimum = () => {
    let numbers = familyMembers.split(" ").join("").split("");
    if(families > numbers.length){
      document.getElementById("test-2").innerHTML = "Input must be equal with count of family";
    } else {
      let busTotal = 0;
      let tempData = familyMembers.split(" ").join("").split("");
      numbers.map((number) => {
        let newNumber = parseInt(number);
        let index = tempData.findIndex((number) => parseInt(number) + newNumber <= 4)
        tempData.splice(index, 1)
        tempData.splice(tempData.indexOf(newNumber), 1)
        busTotal++
      })
      document.getElementById("test-2").innerHTML = `Minimum bus required is : ${busTotal}`;
    }
    
  }

  return (
    <div className="App">
      <div>
        <h6>Test 1</h6>
        <p id="vowels-test"></p>
        <p id="consonant-test"></p>
        <input
          type="text"
          value={words}
          onChange={(e) => setWords(e.target.value)}
          placeholder="Masukkan Kata"
        />
        <button onClick={checkLetter}>Check</button>
      </div>
      <div>
        <h6>Test 2</h6>
        <p id="test-2"></p>
        <input
          type="number"
          value={families}
          onChange={(e) => setFamilies(e.target.value)}
          placeholder="Masukkan Jumlah Keluarga"
        />
        <input
          type="text"
          value={familyMembers}
          onChange={(e) => setFamilyMembers(e.target.value)}
          placeholder="Masukkan Jumlah Anggota Keluarga"
        />
        <button onClick={checkBusMinimum}>Check</button>
      </div>
    </div>
  );
}

export default App;
