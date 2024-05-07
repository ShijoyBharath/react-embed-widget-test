
import React from 'react';
import ReactDOM from 'react-dom';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.roadmap-widget');

const Roadmap = ({symbol}) => {
    return(
        <div className="bg-blue-300 rounded-lg p-5">Hello {symbol}</div>
    )
}

// Inject our React App into each class
widgetDivs.forEach(div => {
    ReactDOM.render(
      <React.StrictMode>
        <Roadmap symbol={div.dataset.symbol}/>
      </React.StrictMode>,
        div
    );
});