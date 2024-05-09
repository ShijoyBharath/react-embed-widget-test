import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Find all widget divs
const widgetDivs = document.querySelectorAll(".roadmap-widget");

const Roadmap = ({ symbol }) => {
  return (
    <div className="bg-blue-300 rounded-lg p-5">
      Hello {symbol}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

// Inject our React App into each class
widgetDivs.forEach((div) => {
  ReactDOM.render(
    <React.StrictMode>
      <Roadmap symbol={div.dataset.symbol} />
    </React.StrictMode>,
    div
  );
});
