import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import foto from './gerasimov.jpg'; import okno from './okno.jpg'; import darioseni from './darioseni.jpg'; import afterrain from './afterrain.jpg'; import pion from './pion.jpg'; import roza from './roza.jpg'; import stalin from './stalin.jpg'; import stalinVorosh from './stalinVorosh.jpg';



function Biography() {
  return (
    <div>
      <h2>Биография</h2>
      <div  id="biography">
        <img src={ foto } alt="gerasimov"></img> 
        <div id="text">
          <strong>Александр Герасимов</strong> родился 31 июля (12 августа) 1881 года (по другим источникам — в 1880) в Козлове (ныне Мичуринск, Тамбовская область) в купеческой семье.
          <p>В 1903—1915 годах обучался в Московском училище живописи, ваяния и зодчества у К. А. Коровина, А. Е. Архипова и В. А. Серова. В 1915 году был мобилизован в армию и до 1917 года находился на фронтах Первой мировой войны. Как нестроевой солдат, служил в санитарном поезде на южном (галицийском) фронте. После демобилизации в 1918—1925 годах жил и работал в Козлове.</p>
          <p>В 1925 году переехал в Москву, вступил в Ассоциацию художников революционной России, преподавал в Училище памяти 1905 года. Летом 1934 года получил творческую командировку на три месяца в Германию, Францию, Италию и Турцию. В 1939—1954 годах был председателем оргкомитета Союза художников СССР. В 1943 году передал свои личные сбережения, 50 000 рублей, в Фонд обороны.</p>
          <p>Один из первых носителей почётного звания <strong>«Народный художник СССР»</strong>, учреждённого 26 июля 1943 года.</p>
          <p>В 1951 году стал <strong>доктором искусствоведения</strong>. Один из крупнейших советских художников 1930-х — 1950-х годов. Увлекавшийся в молодости импрессионизмом, в 1920-е годы начал писать картины в жанре социалистического реализма. Картины написаны яркими, насыщенными красками и часто посвящены советской и партийной истории.</p>
          <p>Был любимым художником <i>И. В. Сталина</i>. Его портреты работы художника при жизни вождя считались каноническими.</p>
          <p>С началом правления <i>Н. С. Хрущёва</i> был постепенно освобождён от всех постов, а картины художника были удалены из музейных экспозиций.</p>
          <p>Член ВКП с 1950 года. Депутат Верховного Совета РСФСР II—IV созывов.</p>
          <p><strong>Александр Герасимов</strong> умер 23 июля 1963 года в Москве. Похоронен на Новодевичьем кладбище (участок № 8).</p>
        </div>  
      </div>
    </div>
  ); 
}

function FamousPict() {
  return (
    <figure id="famous">
      <img src={ okno } alt="okno"></img>
      <figcaption>Полдень. Теплый дождь (1939г)</figcaption>
    </figure> 
  );
}

function Gallery() { 
  return (
    <div id="galery">
        <h2>Галерея картин</h2>
        <div id="picts">
          <figure>
            <img src={ afterrain } alt="after-rain"></img>
            <figcaption>После дождя (1935г)</figcaption>
          </figure>
          <figure>
            <img src={ darioseni } alt="gifts-autumn"></img>
            <figcaption>Дары осени (1935г)</figcaption>
          </figure>
          <figure>
            <img src={ pion } alt="pions"></img>
            <figcaption>Пионы (1914г)</figcaption>
          </figure>
          <figure>
            <img src={ roza } alt="roses"></img>
            <figcaption>Розы (1948г)</figcaption>
          </figure>
          <figure>
            <img src={ stalin } alt="stalin"></img>
            <figcaption>Портерт И.В.Сталина на XVII съезде ВКП(б) (1934г)</figcaption>
          </figure>
          <figure>
            <img src={ stalinVorosh } alt="stalinVorosh"></img>
            <figcaption>И.В.Сталин и К.Е.Ворошилов в Кремле (1938г)</figcaption>
          </figure>
        </div>
    </div>
  );
}


function NavMenu(props) {
  const  links = props.links;
  
  return(
    <nav id="global-nav">
      { links.map((link, i) => 
              <Link 
                key={ i }
                to={ link.path }
                className="link" 
              >
                { link.value }
              </Link>
      )}
    </nav>
  );
}

function App() {
  const links = [
    {
      path: '/',
      value: 'Биография'
    },
    {
      path: '/famous',
      value: 'Известная работа художника'
    },
    {
      path: '/gallery',
      value: 'Картины'
    }
  ]
  return (
    <>
      <Router>
        <NavMenu links={ links } />
        <Switch>
          <Route exact path="/" component={ Biography } />
          <Route path="/famous" component={ FamousPict } />
          <Route path="/gallery" component={ Gallery } />
          <Route children={ () => <h2>Not Found</h2> } />
        </Switch>
      </Router>
    </>
  );
} 


ReactDom.render(<App />, document.getElementById('root'));
