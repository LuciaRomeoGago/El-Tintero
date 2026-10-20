// Respuestas de las preguntas frecuentes que en Figma aparecen cerradas.
// Armadas con los textos del flujo de reserva de Figma; la clave es la pregunta sin signos ni mayúsculas.
const clave = (s) => s.toLowerCase().normalize("NFD").replace(/\s+/g, " ").replace(/[^a-z ]/g, "").replace(/ +/g, " ").trim();

const RESPUESTAS = {
  "puedo reservar para otra persona": "Sí. Al reservar ponés el nombre de quien va a la clase y tu WhatsApp; la confirmación te llega a vos.",
  "como son las clases online": "La clase se da por videollamada, con pantalla y pizarra compartidas. Mismo docente y misma duración que en la sede.",
  "que pasa si mi materia no aparece": "Escribinos por WhatsApp: la coordina secretaría con otro docente.",
  "y si tengo que cancelar": "Si cancelás hasta 48 horas antes de la clase, te devolvemos la seña. Después, queda para el instituto. El botón para cancelar está en el enlace que te llega por WhatsApp.",
  "cuando se paga el resto": "El resto se paga en el instituto el día de la clase.",
  "puedo empezar online y despues pasar a la sede": "Sí. Cada clase se reserva por separado, así que la próxima la podés elegir presencial.",
  "cuando pago la sena y cuando el resto": "La seña del 50% se paga al reservar. El otro 50%: en la sede, el día de la clase; si es online, por transferencia a un alias, al momento de la clase.",
  "y si no puedo ir": "Si cancelás hasta 48 horas antes de la clase, te devolvemos la seña. Después, queda para el instituto. Si querés cambiar el horario, escribinos por WhatsApp.",
  "que pasa si la materia que busco no aparece en ninguna modalidad": "Escribinos por WhatsApp: la coordina secretaría con otro docente.",
};

export const respuesta = (pregunta) => RESPUESTAS[clave(pregunta)];
