import React from 'react';
import Grid from '../Grid';

const test2 = () => fetch('https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=face&source=lnms&tbm=isch').then(data=>data.text()).then(data=>{
  const regExp = /<img.+?data-src="(?<source>.+?)".+?alt="(?<alt>.+?)".+?>/g;
  let result1 = data.match(/src="(?<source>.+?)"/);
  
  console.log(result1);
  let result2 = data.matchAll(regExp);
  let imgCounter = 0;
  for(const key of result2) {
    if(imgCounter >= 14) break;
    imgCounter++;
    let {source, alt} = key.groups;
    console.log(source, alt);
  }
});

const test1 = () => {
  let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30-2019";

let groups = str.match(dateRegexp).groups;

console.log(groups.year); // 2019
};

const App = () => {
  // test2();
  return (
    <div className="App">
      <img src="" />
      test
      <Grid />
    </div>
  );
}

export default App;
