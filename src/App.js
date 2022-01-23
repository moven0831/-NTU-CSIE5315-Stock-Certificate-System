import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

import AppContext from './components/AppContext';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import GetStarted from './views/Getstarted';
import OperationBoard from './views/OperationBoard';
import SCNlist from './views/SCNlist'
import Login from './views/LoginPage';
import SignUp from './views/SignUpPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  const [publicaddressvalue, setPublicaddress] = useState("");
  const [passwordvalue, setPassword] = useState("");
  const [loginpublicaddressvalue, setLoginpublicaddress] = useState("");
  const [loginpasswordvalue, setLoginpassword] = useState("");
  const [loginpressed, setLoginpressed] = useState(false);

  const userSettings = {
    publicaddress: publicaddressvalue,
    password: passwordvalue,
    loginpublicaddress: loginpublicaddressvalue,
    loginpassword: loginpasswordvalue,
    loginpressed: loginpressed,
    setPublicaddress,
    setPassword,
    setLoginpublicaddress,
    setLoginpassword,
    setLoginpressed
  };

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AppContext.Provider value={userSettings}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/getstarted" component={GetStarted} layout={LayoutDefault} />
            <AppRoute exact path="/scnlist" component={SCNlist} layout={LayoutDefault} />
            <AppRoute exact path="/operationboard" component={OperationBoard} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
            <AppRoute exact path="/sign-up" component={SignUp} layout={LayoutDefault} />
          </Switch>
        )} />
    </AppContext.Provider>
  );
}

export default App;