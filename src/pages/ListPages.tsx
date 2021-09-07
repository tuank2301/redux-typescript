import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import Home from './homePage/Home';
import AccordionApp from './projects/accordion/AccordionApp';
import BirthdayReminder from './projects/birthday-reminder/BirthdayReminder';
import Projects from './projects/Projects';
import Reviews from './projects/reviews/Reviews';
import Tours from './projects/tours/Tours';

const ListPages = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects/pj1' component={BirthdayReminder} />
        <Route path='/projects/pj2' component={Tours} />
        <Route path='/projects/pj3' component={Reviews} />
        <Route path='/projects/pj4' component={AccordionApp} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default ListPages;
