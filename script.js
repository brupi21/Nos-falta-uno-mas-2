const matchForm = document.getElementById("matchForm");
const matchList = document.getElementById("matchList");

matchForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const equipo1 = document.getElementById("equipo1").value;
  const equipo2 = document.getElementById("equipo2").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const lugar = document.getElementById("lugar").value;

  const match = {
    equipo1,
    equipo2,
    fecha,
    hora,
    lugar
  };

  agregarPartido(match);
  matchForm.reset();
});

function agregarPartido(match) {
  const div = document.createElement("div");
  div.className = "match";
  div.innerHTML = `
    <strong>${match.equipo1} vs ${match.equipo2}</strong>
    Fecha: ${match.fecha} - Hora: ${match.hora}<br>
    Lugar: ${match.lugar}
  `;
  matchList.appendChild(div);
}
