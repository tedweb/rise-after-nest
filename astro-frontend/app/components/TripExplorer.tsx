"use client";

import { useState } from "react";

const stops = [
  { day: "02", label: "Arrive", title: "Nassau", note: "Touch down, trade shoes for sandals, and settle into Royal Bahamian.", x: 46, y: 45 },
  { day: "03", label: "Reset", title: "Cable Beach", note: "A slow first morning: turquoise water, no alarm, nowhere else to be.", x: 31, y: 60 },
  { day: "05", label: "Dive", title: "The Wrecks", note: "Coral-covered wrecks, bright fins, and our first descent of the trip.", x: 68, y: 35 },
  { day: "07", label: "Go deep", title: "Shark Arena", note: "Reef sharks in the blue—calm, curious, and completely unforgettable.", x: 75, y: 66 },
];

export function TripExplorer() {
  const [active, setActive] = useState(0);
  return (
    <section className="journey" id="journey">
      <header><p className="sectionLabel">THE JOURNEY SO FAR</p><h2>One trip.<br /><i>Four chapters.</i></h2></header>
      <div className="explorer">
        <div className="map" role="img" aria-label="Stylized map showing stops around Nassau, Bahamas">
          <span className="island islandOne" /><span className="island islandTwo" /><span className="island islandThree" />
          <span className="route" aria-hidden="true" />
          {stops.map((stop, index) => <button key={stop.title} className={active === index ? "pin active" : "pin"} style={{left:`${stop.x}%`,top:`${stop.y}%`}} onClick={() => setActive(index)} aria-label={`Show ${stop.title}`}><span>{index + 1}</span></button>)}
          <div className="mapLabel">NEW PROVIDENCE<br /><strong>THE BAHAMAS</strong></div>
        </div>
        <div className="timeline" aria-label="Trip timeline">
          {stops.map((stop, index) => <button key={stop.title} onClick={() => setActive(index)} className={active === index ? "stop active" : "stop"}>
            <span className="date">MAY <b>{stop.day}</b></span><span><small>{stop.label}</small><strong>{stop.title}</strong><em>{stop.note}</em></span>
          </button>)}
        </div>
      </div>
    </section>
  );
}
