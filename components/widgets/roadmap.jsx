import React from "react";
import { createRoot } from "react-dom/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as cssText from "bundle-text:@/app/globals.css";

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

let domNode = document.getElementsByClassName("roadmap-widget")[0];
let symbol = domNode.dataset.symbol;
domNode = domNode.attachShadow({ mode: "open" });

// inject <style> tag
let style = document.createElement("style");
style.textContent = cssText;
domNode.appendChild(style);

// create the node for react component
const reactNode = document.createElement("div");
domNode.appendChild(reactNode);


const root = createRoot(reactNode);
root.render(<Roadmap symbol={symbol} />);