import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClssClick';
// import EventBind from './components/EventBind';
// import ParentCompnent from './components/ParentCompnent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylsheet from './components/Stylesheet';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <HoverCounter name='jacek44'/>
      <ClickCounter name='Jacek33'/>
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo />
      <PureComp />
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Stylsheet />
      <NameList />
      <UserGreeting />
      <ParentCompnent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Component">
        <p>This is children props</p>
        <h3>Title H3</h3>
      </Greet>
      <Greet name="Component2" name2="Component3">
        <button>Action</button>
      </Greet>
      <Welcome rodzaj="Rodzaj1" rodzaj2="Rodzaj2"/>
      <Hello /> */}
    </div>
  );
}

export default App;
