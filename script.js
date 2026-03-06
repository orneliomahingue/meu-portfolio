console.log("Portfólio carregado com sucesso");
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },

    size: { value: 3 },

    color: { value: "#ffffff" },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
    },

    move: {
      enable: true,
      speed: 2,
    },
  },
});

const ctx = document.getElementById("skillsChart");

new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["PHP", "Laravel", "JavaScript", "HTML", "CSS", "MySQL"],

    datasets: [
      {
        label: "Nível de habilidade",

        data: [90, 85, 75, 85, 80, 80],

        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  },
});
