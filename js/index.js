//Destructuring javascript.
const persona = {
  nombre: "tobias",
  edad: 20,
  clave: "testJavascript",
};

const { nombre, edad, clave } = persona;

const returnPerson = ({ nombre, clave, edad }) => {
  return {
    namePerson: nombre,
    clavePerson: clave,
    edadPerson: edad,
    location: {
      lat: 12.4325324,
      lng: 43.43243255,
    },
  };
};

const {
  namePerson,
  edadPerson,
  location: { lat, lng },
} = returnPerson(persona);

console.log(namePerson, lat, lng);
