import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <div className="pb-10">{children}</div>
      <Footer />
    </div>
  );
}
