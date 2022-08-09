import {useState} from 'react';

const services = [{
  "rating": '5.0',
  "name": "sisanje",
  "description": "Svako će se složiti da je lijepa, njegovana kosa najljepši ukras žene, ali da bi ona izgledala sjajno, potrebno je izabrati pravu frizuru. Tu na scenu stupaju iskusni frizeri koji zahvaljujući svom bogatom iskustvu, uz pomoć makaza i češlja, umiju da na pravi način ošišaju i oblikuju vašu kosu, bez obzira na njenu dužinu, gustinu, teksturu i kvalitet dlake.",
  "image_link": "https://www.sredime.me/image/guide/sisanje-md.jpg",
  "price": "3",
  "like": true
},{
  "rating": '4.8',
  "name": "feniranje",
  "description": "Lokne su oduvek u modi, a to ne čudi jer doprinose ženstvenom izgledu, ležernosti i udobnosti. Bilo da imate kratku ili dugu kosu, lokne uvek možete da uradite tako da izgledaju perfektno! Da, postoji dosta načina kako da napravite lokne – uz pomoć prese, ili bez nje, prirodno. Koji ćete način odabrati zavisi od toga kakav efekat želite da postignete, odnosno šta vam je neophodno.",
  "image_link": "https://frizuromanija.com/wp-content/uploads/2018/09/feniranje-na-lokne.jpg",
  "price": "2.88",
  "like": false
},
{
  "rating": '4.7',
  "name": "masaza",
  "description": "Masaža je, kako se veruje, najstariji oblik lečenja. Masaža snažno deluje na zdravlje i raspoloženje i pogodna je za sve uzraste. Vršenjem pritiska na kožu stimulišu se unutrašnje tačke, čime se omogućava bolja cirkulacija, rastežu se tetive, a zglobovi postaju zdravi i gipki.",
  "image_link": "https://www.deja.rs/wp-content/uploads/2016/05/Masaza-Deja.jpg",
  "price": "2.77",
  "like": true
}];

function Services(){
  const [servicec, setServicec] = useState(services);

  return {servicec, setServicec};
}

export default Services;