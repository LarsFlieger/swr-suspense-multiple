"use client";

import useSWR from "swr";

const fetchWithDelay = async (url: string) => {
  const delay = parseInt(url) * 1000;
  await new Promise((resolve) => setTimeout(() => resolve(url), delay));
  return url;
};

export const ComponentExample: React.FC = () => {
  const { data: dataAfter1 } = useSWR("1", fetchWithDelay, {
    suspense: true,
  });
  console.log(dataAfter1);

  const { data: dataAfter2 } = useSWR("2", fetchWithDelay, {
    suspense: true,
  });
  console.log(dataAfter2);

  const { data: dataAfter3 } = useSWR("3", fetchWithDelay, {
    suspense: true,
  });
  console.log(dataAfter3);

  const { data: dataAfter4 } = useSWR("4", fetchWithDelay, {
    suspense: true,
  });
  console.log(dataAfter4);

  return (
    <main>
      <p>Page loaded!</p>
    </main>
  );
};
