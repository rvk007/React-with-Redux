App.js

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const one = () => {
return (
<div>
One!
{/_ Bad Approach
<a href="/two">Navigate to Two</a> _/}
<Link to="/two"> Navigate to two</Link>
</div>
);
};

const two = () => {
return (
<div>
<h1>Two!</h1>
{/_ Bad Approach
<a href="/">Navigate to One</a> _/}
<Link to="/">Navigate to one</Link>
</div>
);
};

const App = () => {
return (
<h1>
<BrowserRouter>
<h1>
<Route path="/" exact component={one} />
<Route path="/two" component={two} />
</h1>
</BrowserRouter>
</h1>
);
};

export default App;
