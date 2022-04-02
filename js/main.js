var montoCapital = parseFloat(prompt("Ingrese el Capital"));
document.write("<h3> Capital: " + montoCapital + "</h3>");

var nroPeriodos = parseInt(
  prompt("Ingrese el numero de periodos de inversión")
);
document.write("<h3> Nro. Periodos de Inversión : " + nroPeriodos + "</h3>");

var tasaMensual = parseFloat(
  prompt("Ingrese la tasa mensual en formato decimal Ejm. 4%=0.04")
);
document.write("<h3> Tasa de Interés Mensual: " + tasaMensual + "</h3>");

function CuotaCapital(montoCapital, nroPeriodos) {
  return montoCapital / nroPeriodos;
}

function SaldoCapital(montoCapital, cuotaCapital) {
  return montoCapital - cuotaCapital;
}

function CuotaGanancia(saldoCapital, tasaMensual) {
  return saldoCapital * tasaMensual;
}

function CuotaMensual(cuotaCapital, cuotaGanancia) {
  return cuotaCapital + cuotaGanancia;
}

document.write("<table>");
document.write("<tr>");
document.write("<th>Nro</th>");
document.write("<th>Saldo Capital</th>");
document.write("<th>Capital</th>");
document.write("<th>Ganancia Mensual</th>");
document.write("<th>Cuota Total Mensual <br> Capital + Ganancia Mensual</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Capital Inicial</td>");
document.write("<td>" + montoCapital.toFixed(2) + "</td>");
document.write("<td></td>");
document.write("<td></td>");
document.write("<td></td>");
document.write("</tr>");

var saldoCapitaAnterior = montoCapital;
var cuotaCapitalF;
var saldoCapitalF;
var cuotaGananciaF;
var cuotaTotalMensualF;
var gananciaTotal = 0;

for (let i = 1; i <= nroPeriodos; i++) {
  cuotaCapitalF = CuotaCapital(montoCapital, nroPeriodos);
  saldoCapitalF = SaldoCapital(saldoCapitaAnterior, cuotaCapitalF);
  cuotaGananciaF = CuotaGanancia(saldoCapitaAnterior, tasaMensual);
  cuotaTotalMensualF = CuotaMensual(cuotaCapitalF, cuotaGananciaF);
  gananciaTotal = gananciaTotal + cuotaGananciaF;
  saldoCapitaAnterior = saldoCapitalF;

  document.write("<tr>");
  document.write("<td>" + i + "</td>");
  document.write("<td>" + saldoCapitalF.toFixed(2) + "</td>");
  document.write("<td>" + cuotaCapitalF.toFixed(2) + "</td>");
  document.write("<td>" + cuotaGananciaF.toFixed(2) + "</td>");
  document.write("<td>" + cuotaTotalMensualF.toFixed(2) + "</td>");
  document.write("</tr>");
}

document.write("<td></td>");
document.write("<td></td>");
document.write("<td>Ganacia Total</td>");
document.write("<td>" + gananciaTotal.toFixed(2) + "</td>");
document.write("<td></td>");
document.write("</tr>");

document.write("</table>");
