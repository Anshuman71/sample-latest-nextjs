"use client";

import { getDataFromFile } from "./action";

export function FileButton() {
  return (
    <>
      <button
        onClick={async () => {
          const data = await getDataFromFile();
          console.log({ data });
        }}
      >
        Get file data with action
      </button>
      <button
        onClick={async () => {
          fetch("/api")
            .then((res) => res.json())
            .then((d) => console.log({ d }));
        }}
      >
        Get file data with fetch
      </button>
    </>
  );
}
