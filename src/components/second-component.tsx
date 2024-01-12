import { component$ } from "@builder.io/qwik";

export const SecondComp = component$(() => {
  return <button onClick$={() => console.log("hi!")}>I log out hi!</button>;
});
