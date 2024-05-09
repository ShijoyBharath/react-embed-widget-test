import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div data-symbol="SYMBOL FROM THE EMBED DIV" className="roadmap-widget"></div>
      <Script src="roadmap.js"></Script>
    </div>
  );
}
