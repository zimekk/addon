import React, { Suspense, useCallback, useState } from "react";
import { createAsset } from "use-asset";

const Spinner = () => <span>Loading...</span>;

const hello = createAsset(async (name) => {
  const res = await fetch(`api/hello.json?name=${name}`);
  return await res.json();
});

function Hello({ children: name }) {
  const { greeting } = hello.read(name);

  return <div>{greeting}</div>;
}

export default function () {
  const [name, setName] = useState("World");
  const onChangeName = useCallback((e) => setName(e.target.value));

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <Suspense fallback={<Spinner />}>
        <Hello>{name}</Hello>
      </Suspense>
    </div>
  );
}
