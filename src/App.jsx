import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const HOLIDAYS = [
    {
      fecha: "2023-01-01",
      nombre: "Año Nuevo",
      efemerides: "Inicio del año civil.",
      significado_historico:
        "El Año Nuevo marca el comienzo del nuevo año en el calendario gregoriano y es celebrado en todo el mundo como una ocasión para hacer resoluciones, reflexionar sobre el pasado y mirar hacia el futuro.",
    },
    {
      fecha: "2023-03-24",
      nombre: "Día Nacional de la Memoria por la Verdad y la Justicia",
      efemerides:
        "Conmemora a las víctimas de la última dictadura militar en Argentina (1976-1983).",
      significado_historico:
        "Este día recuerda a las personas que sufrieron violaciones a los derechos humanos durante la última dictadura militar en Argentina. Es una oportunidad para reflexionar sobre ese período oscuro de la historia y promover la memoria, la verdad y la justicia.",
    },
    {
      fecha: "2023-04-02",
      nombre: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
      efemerides:
        "Rinde homenaje a los veteranos y caídos en la Guerra de las Malvinas en 1982.",
      significado_historico:
        "Este día honra a los soldados argentinos que participaron en la Guerra de las Malvinas y recuerda a aquellos que perdieron su vida en el conflicto. Es un momento para reconocer su valentía y sacrificio, así como para reflexionar sobre las consecuencias de la guerra.",
    },
    {
      fecha: "2023-05-01",
      nombre: "Día del Trabajador",
      efemerides:
        "Celebración internacional del Día del Trabajo y los derechos laborales.",
      significado_historico:
        "El Día del Trabajador es una fecha que conmemora la lucha de los trabajadores por mejores condiciones laborales y derechos laborales justos. Surge en el contexto de la lucha por la jornada laboral de ocho horas y se celebra en todo el mundo como un día de solidaridad y reivindicación de los derechos de los trabajadores.",
    },
    {
      fecha: "2023-05-25",
      nombre: "Día de la Revolución de Mayo",
      efemerides:
        "Conmemora la Revolución de Mayo de 1810, inicio del proceso de independencia de Argentina.",
      significado_historico:
        "El Día de la Revolución de Mayo conmemora el acontecimiento histórico en el cual se formó el primer gobierno patrio en Argentina. Marcó el inicio del proceso de independencia del país y es considerado uno de los momentos más importantes de la historia argentina.",
    },
    {
      fecha: "2023-06-17",
      nombre: "Paso a la Inmortalidad del General Martín Miguel de Güemes",
      efemerides:
        "Homenaje al general Güemes, héroe de la Guerra de Independencia y defensor del noroeste argentino.",
      significado_historico:
        "Este día rinde homenaje al general Martín Miguel de Güemes, quien fue un destacado líder militar en la Guerra de Independencia de Argentina. Güemes defendió valientemente el noroeste argentino y se convirtió en un símbolo de resistencia y lucha por la libertad.",
    },
    {
      fecha: "2023-06-20",
      nombre: "Día de la Bandera",
      efemerides:
        "En honor a Manuel Belgrano, creador de la bandera argentina.",
      significado_historico:
        "El Día de la Bandera conmemora a Manuel Belgrano, quien diseñó la bandera argentina en 1812. Belgrano fue un destacado patriota y luchador por la independencia de Argentina. En este día se celebra el símbolo nacional y se promueven los valores de unidad y patriotismo.",
    },
    {
      fecha: "2023-07-09",
      nombre: "Día de la Independencia",
      efemerides:
        "Celebra la declaración de independencia de Argentina el 9 de julio de 1816.",
      significado_historico:
        "El Día de la Independencia conmemora la declaración de independencia de Argentina el 9 de julio de 1816. En esta fecha, los representantes de las provincias argentinas proclamaron la independencia del país respecto a España. Es un día de celebración nacional y un recordatorio del logro de la libertad y la soberanía.",
    },
    {
      fecha: "2023-08-17",
      nombre: "Paso a la Inmortalidad del General José de San Martín",
      efemerides:
        "Rinde homenaje al prócer argentino José de San Martín, figura clave en la independencia de América del Sur.",
      significado_historico:
        "Este día rinde homenaje al general José de San Martín, quien fue un líder militar y político clave en la independencia de Argentina y otros países de América del Sur. San Martín es considerado uno de los próceres de la independencia y un símbolo de la lucha por la libertad en la región.",
    },
    {
      fecha: "2023-10-12",
      nombre: "Día del Respeto a la Diversidad Cultural",
      efemerides:
        "Conmemora la llegada de Cristóbal Colón a América y promueve el respeto por la diversidad cultural.",
      significado_historico:
        "El Día del Respeto a la Diversidad Cultural conmemora el encuentro de dos mundos con la llegada de Cristóbal Colón a América. Se celebra la diversidad cultural y se promueve el respeto por las diferentes etnias y culturas que conforman la sociedad argentina.",
    },
    {
      fecha: "2023-11-20",
      nombre: "Día de la Soberanía Nacional",
      efemerides:
        "Recuerda la Batalla de la Vuelta de Obligado en 1845, donde Argentina defendió su soberanía.",
      significado_historico:
        "El Día de la Soberanía Nacional recuerda la Batalla de la Vuelta de Obligado, que tuvo lugar el 20 de noviembre de 1845. En esa batalla, las fuerzas argentinas resistieron la invasión de las tropas anglo-francesas y defendieron la soberanía nacional. Es un día para reflexionar sobre la defensa de los intereses y la independencia del país.",
    },
    {
      fecha: "2023-12-08",
      nombre: "Día de la Inmaculada Concepción de María",
      efemerides:
        "Festividad religiosa que celebra la concepción sin pecado original de la Virgen María.",
      significado_historico:
        "El Día de la Inmaculada Concepción de María es una festividad religiosa que celebra la creencia de que María, madre de Jesús, fue concebida sin pecado original. Es una fecha importante en la tradición católica y se celebra con actos religiosos y devoción a la Virgen María.",
    },
    {
      fecha: "2023-12-25",
      nombre: "Navidad",
      efemerides:
        "Celebración del nacimiento de Jesús según la tradición cristiana.",
      significado_historico:
        "La Navidad es una festividad que celebra el nacimiento de Jesús según la tradición cristiana. Es un momento de alegría, reuniones familiares y actos religiosos para conmemorar el nacimiento del Salvador.",
    },
  ];

  const [nextHoliday, setNextHoliday] = useState();
  const [timeRemaining, setTimeRemaining] = useState();

  useEffect(() => {
    const today = Date.now();

    const upcomingHoliday = HOLIDAYS.find((holiday) => {
      const holidayDate = new Date(holiday.fecha);
      return holidayDate > today;
    });

    setNextHoliday(upcomingHoliday);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const nextHolidayDate = new Date(nextHoliday.fecha).getTime();
      const difference = nextHolidayDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });
    }, 60000);

    return () => clearInterval(interval);
  }, [nextHoliday]);

  const renderCounter = () => {
    if (!nextHoliday || !timeRemaining) {
      return null;
    }

    const { days, hours, minutes } = timeRemaining;
    console.log(timeRemaining);

    return (
      <div className="flex flex-col text-[#1B1C1E] ">
        <p className="text-[95px] font-medium">
          <span className="text-[100px] font-semibold text-purple-700 leading-none overflow-auto">
            {days}
          </span>{" "}
          días,
        </p>
        <p className="text-[95px] font-medium">
          <span className="text-[100px] font-semibold text-purple-700 leading-none">
            {hours}
          </span>{" "}
          horas,
        </p>
        <p className="text-[95px] font-medium">
          <span className="text-[100px] font-semibold text-purple-700 leading-none">
            {minutes}
          </span>{" "}
          minutos.
        </p>
      </div>
    );
  };

  const renderNextHolidayDetails = () => {
    if (!nextHoliday) {
      return null;
    }

    const nextHolidayDate = new Date(nextHoliday.fecha).toLocaleDateString(
      "es-AR",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    return (
      <div className="text-[#1B1C1E]">
        <h1 className="text-4xl font-bold text-center p-4">
          Faltan {timeRemaining && timeRemaining.days} días para el próximo
          feriado
        </h1>

        <div className="md:grid grid-cols-2 p-5 sm:flex">
          {!timeRemaining || !nextHoliday ? (
            <div
              className="ml-[300px] mt-20 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="flex justify-center !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <div className="md:grid place-items-center sm:flex">
              {renderCounter()}
            </div>
          )}

          <div className=" text-center text-2xl font-medium flex flex-col justify-center leading-8 rounded-md ">
            <h3>{nextHolidayDate}</h3>
            <h2>{nextHoliday.nombre}</h2>
            <h4 className="pt-4">{nextHoliday.efemerides}</h4>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="max-w-[1000px] text-center text-xl font-normal flex justify-center">
            {nextHoliday.significado_historico}
          </p>
        </div>
      </div>
    );
  };

  return <div className="max-w-screen">{renderNextHolidayDetails()}</div>;
}

export default App;
