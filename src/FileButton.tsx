"use client";

import { getDataFromFile } from "./action";

export function FileButton() {
  return (
    <>
      <button
        onClick={async () => {
          const data = await getDataFromFile();
          console.log("From action: ", { data });
        }}
      >
        Get file data with action
      </button>
      <button
        onClick={async () => {
          fetch("/api")
            .then((res) => res.json())
            .then((d) => {
              console.log("From route handler: ", d);
            });
        }}
      >
        Get file data with fetch
      </button>
    </>
  );
}
