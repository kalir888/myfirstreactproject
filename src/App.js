import './App.css';
import { Greet } from './concepts/functionalcomponents/FunctionalComponentOne';
import Recieve from './concepts/functionalcomponents/FunctionalComponentTwo';
import Wish from './concepts/classbasedcomponents/ClassComponentOne';
import DeepawaliWish from './concepts/classbasedcomponents/ClassComponentTwo';
import Thank from './concepts/jsx/UsingJSX';
import Namaste from './concepts/jsx/WithoutUsingJSX';
import WishUser from './concepts/props/PropsOne';
import Birthday from './concepts/props/PropsTwo';
import Message from './concepts/state/StateOne';
import Surprise from './concepts/state/StateTwo';
import Counter from './concepts/setstate/SetStateOne';
import Hero from './concepts/destructpropsandstate/destructpropsandstate';
import Invention from './concepts/destructpropsandstate/destructpropsandstatetwo';
import FunctionClick from './concepts/eventhandling/EventHandlingOne';
import PlayVideo from './concepts/eventhandling/EventHandlingTwo';
import ParentComponent from './concepts/methodsasprops/parentcomponent';
import HookCounter from './concepts/statehook/statehookone';
import HookWish from './concepts/statehook/statehooktwo';
import HookCounterTwo from './concepts/prevstatehook/prevstatehook';
import HookCounterThree from './concepts/statewithobject/statewithobjectone';
import StateWithArrayOne from './concepts/statewitharray/StateWithArrayOne';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Recieve/>
      <Wish name="Kalimuthu"/>
      <DeepawaliWish name="Kalimuthu"/>
      <Thank/>
      <Namaste/>
      <WishUser name="Sachin"/>
      <Birthday name="Dhoni" age="40"/>
      <Message/>
      <Surprise/>
      <Counter/>
      <Hero name='Kalimuthu' heroName='Vijay' />
      <Invention inventor='AryaBhatta' invented='0' />
      <Invention inventor='Indians' invented='Numbers' />
      <FunctionClick/>
      <PlayVideo/>
      <ParentComponent/>
      <HookCounter/>
      <HookWish/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <StateWithArrayOne/>
    </div>
  );
}

export default App;
