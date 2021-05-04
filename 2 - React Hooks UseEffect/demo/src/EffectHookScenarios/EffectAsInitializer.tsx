import React, { useEffect } from "react";

/**
 * after 5 seconds, some string will be returned simulating a kind of "initialized value" e.g. like a result of an API call
 */
async function someInitializingFunction() {
  await new Promise((r) => setTimeout(r, 5000));
  return "Initialized Value";
}

export const EffectAsInitializer: React.FC<{}> = () => {
  // No dependencies necessary
  useEffect(() => {
    console.log(someInitializingFunction());
  }, []);

  // dynamic callback which utilizes a 
  const dynamicInitializationCallback = async () => {
    await new Promise((r) => setTimeout(r, 5000));
    return "Initialized Value";
  };

  return <div></div>;
};
