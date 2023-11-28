//switch/ifs anidados

const ciudadesDisponibles=["Bogota", "Santiago", "Quito", "Mendoza"];
const ciudadSolicitada="Mendoza";

switch(ciudadSolicitada){
    case "Bogota":
        valorPasaje=500;
        break;
    case "Santiago":
        valorPasaje=400;
        break;
    case "Quito":
        valorPasaje=380;
        break;
    case "Mendoza":
        valorPasaje=200;
        break;
    default:
        console.log("No se encuentra la ciudad indicada, porfavor intente de nuevo");
        break;
}
if(valorPasaje>0)
    console.log(`El valor del pasaje es: ${valorPasaje}`);

    