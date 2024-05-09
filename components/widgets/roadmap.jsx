import React from "react";
import { createRoot } from 'react-dom/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const domNode = document.getElementsByClassName('roadmap-widget');
const root = createRoot(domNode);
root.render(<Roadmap symbol={domNode.dataset.symbol} />);