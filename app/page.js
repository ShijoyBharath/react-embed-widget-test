import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div data-symbol="SYMBOL FROM THE EMBED DIV" class="roadmap-widget"></div>
      <Script src="roadmap.js"></Script>
      <roadmap/>
    </div>
  );
}
