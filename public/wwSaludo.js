/* Este es un hilo que se ejecuta al mismo tiempo que el hilo principal. */

/** Recibe datos del hilo principal y los procesa.
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  postMessage(`Saludos a ${evt.data.nombre1} y a ${evt.data.nombre2}`);
};