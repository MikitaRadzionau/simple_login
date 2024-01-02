const start = async () => {
    const citySelect = document.getElementById("city");
  
    const response = await fetch("/api/cities");
    const data = await response.json();
    data.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  };
  
  start();