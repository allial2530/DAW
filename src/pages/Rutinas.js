// import React from 'react'

// function Rutinas() {
//   return (
//     <div>Rutinas</div>
//   )
// }

// export default Rutinas


import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 

function Rutinas() {
  const [rutinas, setRutinas] = useState(null);

  useEffect(() => {
    const buscarRutinas = async () => {
      try {
        const rutinasSnapshot = await db.collection('rutinas').doc('WOD').get();
        if (rutinasSnapshot.exists()) {
          setRutinas(rutinasSnapshot.data());
        } else {
          console.log('El documento no existe');
        }
      } catch (error) {
        console.error('Error al obtener los datos de la rutina', error);
      }
    };

    buscarRutinas();
  }, []);

  return (
    <div>
      <h1>Rutinas</h1>
      {rutinas ? (
        <div>
          <h2>Ejercicio 1: {rutinas.Ejercicio1}</h2>
          <h2>Ejercicio 2: {rutinas.Ejercicio2}</h2>
          <h2>Ejercicio 3: {rutinas.Ejercicio3}</h2>
          <p>Tiempo: {rutinas.Tiempo}</p>
        </div>
      ) : (
        <p>Cargando rutinas...</p>
      )}
    </div>
  );
}

export default Rutinas;
