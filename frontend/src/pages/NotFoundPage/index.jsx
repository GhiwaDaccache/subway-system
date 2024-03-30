import React from 'react';

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found 404</h1>
      <div>
        <Link to="/">Home from Link</Link>{' '}
        {/*
        in case we use a normal anchor tag it will perform a whole new referesh to the page on the other side link will act as an usual SPA's page */}
      </div>
      <div>
        <a href="/">Home From A</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
