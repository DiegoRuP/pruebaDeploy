const obtenerBono = (categoria) => {
    switch (categoria.toUpperCase()) {
      case 'A':
        return 3000;
      case 'B':
        return 2500;
      case 'C':
        return 2000;
      default:
        return 0;
    }
  };
  
  const calcularSueldoBruto = (horasTrabajadas, pagoPorHora) => {
    return horasTrabajadas * pagoPorHora;
  };
  
  const calcularSueldoNetoAntesImpuestos = (sueldoBruto, bono) => {
    return sueldoBruto + bono;
  };
  
  const calcularSueldoNetoDespuesImpuestos = (sueldoNetoAntesImpuestos) => {
    const porcentajeImpuesto = 0.1; 
    return sueldoNetoAntesImpuestos - (sueldoNetoAntesImpuestos * porcentajeImpuesto);
  };
  
  module.exports = {
    obtenerBono,
    calcularSueldoBruto,
    calcularSueldoNetoAntesImpuestos,
    calcularSueldoNetoDespuesImpuestos,
  };
  