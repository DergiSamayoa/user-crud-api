import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  useEffect(() => {
    const endDate = new Date("2023-12-12T23:59:00Z"); // Fecha de inicio del temporizador
    const interval = setInterval(() => {
      const currentDate = new Date(); // Fecha actual
      const elapsedSeconds = Math.floor((endDate - currentDate) / 1000); // Segundos transcurridos
      setDays(Math.floor(elapsedSeconds / 86400)); // Días
      setHours(Math.floor((elapsedSeconds % 86400) / 3600)); // Horas
      setMinutes(Math.floor(((elapsedSeconds % 86400) % 3600) / 60)); // Minutos
      setSeconds(Math.floor(((elapsedSeconds % 86400) % 3600) % 60)); // Segundos
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  });

  return (
    <section className="flex flex-row justify-center mb-10">
      <div>
        <h4 className="font-bold">Delivery countdown</h4>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
