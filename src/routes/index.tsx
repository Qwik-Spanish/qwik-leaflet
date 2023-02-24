import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { LeafletMap } from '~/components/leaflet';

export default component$(() => {
  return (
    <>
      <h1>Leaflet en Qwik</h1>
      <LeafletMap />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
