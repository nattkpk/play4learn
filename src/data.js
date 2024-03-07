//https://docs.google.com/spreadsheets/d/1Pv5pJjORIJGZ2dXBf7CMV2t9FJVycPFe8nDthwjeEkU/edit?usp=sharing



const url = 'https://docs.google.com/spreadsheets/d/1Pv5pJjORIJGZ2dXBf7CMV2t9FJVycPFe8nDthwjeEkU/gviz/tq?';

fetch(url)
.then(res => res.text())
.then(data => {
    console.log(data);
})