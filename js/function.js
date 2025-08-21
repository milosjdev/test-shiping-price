const data = {
  category: [
    {
      name: "Arco en C",
      value: "arco_en_c",
      shipping_price: 8000,
      installation_price: 240,
      heavy: 3,
    },
    {
      name: "RX Estacionario",
      value: "rx_estacionario",
      shipping_price: 7800,
      installation_price: 1620,
      heavy: 3,
    },
    {
      name: "Mamografo",
      value: "mamografo",
      shipping_price: 8000,
      installation_price: 1920,
      heavy: 3,
    },
    {
      name: "Digitalizador",
      value: "digitalizador",
      shipping_price: 3000,
      installation_price: 0,
      heavy: 1,
    },
    {
      name: "Ecografo M",
      value: "ecografo_m",
      shipping_price: 1300,
      installation_price: 0,
      heavy: 1,
    },
    {
      name: "tomografo/listo",
      value: "tomografo_listo",
      shipping_price: 15600,
      installation_price: 3600,
      heavy: 3,
    },
    {
      name: "RSM",
      value: "rsm",
      shipping_price: 25000,
      installation_price: 8900,
      heavy: 3,
    },
    {
      name: "RX Movil",
      value: "rx_movil",
      shipping_price: 3000,
      installation_price: 0,
      heavy: 2,
    },
    {
      name: "RX Portatil",
      value: "rx_portatil",
      shipping_price: 1000,
      installation_price: 0,
      heavy: 0,
    },
    {
      name: "Ecografo P",
      value: "ecografo_p",
      shipping_price: 1000,
      installation_price: 0,
      heavy: 0,
    },
    {
      name: "Flat panel",
      value: "flat_panel",
      shipping_price: 700,
      installation_price: 0,
      heavy: 0,
    },
    {
      name: "Carrito",
      value: "carrito",
      shipping_price: 500,
      installation_price: 0,
      heavy: 1,
    },
    {
      name: "Partes",
      value: "partes",
      shipping_price: 200,
      installation_price: 0,
      heavy: 0,
    },
    {
      name: "Equipos ligeros",
      value: "equipos_ligeros",
      shipping_price: 50,
      installation_price: 0,
      heavy: 0,
    },
    {
      name: "Kit Rx portatil",
      value: "kit_rx_portatil",
      shipping_price: 2241,
      installation_price: 0,
      heavy: 1,
    },
  ],
  state: [
    { name: "Barinas", value: "barinas", distance: 0, shipping_day: 0 },
    { name: "Merida", value: "merida", distance: 170, shipping_day: 1 },
    { name: "Portuguesa", value: "portuguesa", distance: 170, shipping_day: 1 },
    { name: "Trujillo", value: "trujillo", distance: 252, shipping_day: 1 },
    { name: "Apure", value: "apure", distance: 302, shipping_day: 1 },
    { name: "Cojedes", value: "cojedes", distance: 311, shipping_day: 2 },
    { name: "Yaracuy", value: "yaracuy", distance: 314, shipping_day: 2 },
    { name: "Lara", value: "lara", distance: 315, shipping_day: 2 },
    { name: "Tachira", value: "tachira", distance: 331, shipping_day: 2 },
    { name: "Carabobo", value: "carabobo", distance: 337, shipping_day: 2 },
    { name: "Aragua", value: "aragua", distance: 392, shipping_day: 2 },
    { name: "Guarico", value: "guarico", distance: 500, shipping_day: 2 },
    { name: "Capital", value: "capital", distance: 515, shipping_day: 2 },
    { name: "Miranda", value: "miranda", distance: 555, shipping_day: 3 },
    { name: "Zulia", value: "zulia", distance: 577, shipping_day: 3 },
    { name: "Vargas", value: "vargas", distance: 600, shipping_day: 3 },
    { name: "Falcon", value: "falcon", distance: 689, shipping_day: 3 },
    {
      name: "Federal Dependencies",
      value: "federal_dependencies",
      distance: 700,
      shipping_day: 3,
    },
    { name: "Amazonas", value: "amazonas", distance: 709, shipping_day: 3 },
    { name: "Anzoategui", value: "anzoategui", distance: 842, shipping_day: 3 },
    { name: "Sucre", value: "sucre", distance: 910, shipping_day: 3 },
    {
      name: "Nueva esparta",
      value: "nueva_esparta",
      distance: 979,
      shipping_day: 3,
    },
    { name: "Monagas", value: "monagas", distance: 1000, shipping_day: 3 },
    {
      name: "Delta Amacuro",
      value: "delta_amacuro",
      distance: 1106,
      shipping_day: 3,
    },
    { name: "Bolivar", value: "bolivar", distance: 1207, shipping_day: 3 },
  ],
  vehicle: [
    { name: "Camion", value: "camion", price: 1 },
    { name: "Silverado", value: "silverado", price: 0.7 },
    { name: "Berlingo", value: "berlingo", price: 0.5 },
    { name: "MRW", value: "mrw", price: 0.05 },
  ],
};

function populateSelect(id, options, placeholder) {
  const select = document.getElementById(id);
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.name;
    select.appendChild(o);
  });
  new Choices(select, {
    removeItemButton: id === "categories",
    searchEnabled: true,
    placeholderValue: placeholder,
    searchPlaceholderValue: "Search",
  });
}

populateSelect("state", data.state, "Select a state");
populateSelect("vehicle", data.vehicle, "Select a vehicle");
populateSelect("categories", data.category, "Select categories");

function calculate() {
  const stateVal = document.getElementById("state").value;
  const vehicleVal = document.getElementById("vehicle").value;
  const selectedCats = [
    ...document.getElementById("categories").selectedOptions,
  ].map((o) => o.value);
  const includeInstall = document.getElementById("installation").checked;

  if (!stateVal || !vehicleVal || selectedCats.length === 0) {
    alert("Please select state, vehicle, and at least one category.");
    return;
  }

  const state = data.state.find((s) => s.value === stateVal);
  const vehicle = data.vehicle.find((v) => v.value === vehicleVal);

  let viaticoCost =
    state.shipping_day === 1
      ? 160
      : state.shipping_day === 2
      ? 190
      : state.shipping_day === 3
      ? 250
      : 0;

  let multiplier = vehicle.value === "mrw" ? 1 : 2;

  let resultsHTML = `<h3>Shipping cost for ${state.name} with ${vehicle.name}</h3><div class="shipping_result">`;
  selectedCats.forEach((catVal) => {
    const cat = data.category.find((c) => c.value === catVal);
    let cost =
      cat.shipping_price +
      state.distance * vehicle.price * multiplier +
      viaticoCost;

    if (includeInstall) {
      cost += cat.installation_price;
    }

    resultsHTML += `<div class="shipping_result_row"><text>${
      cat.name
    }:</text> <text>${cost.toFixed(2)} VES</text></div>`;
  });
  resultsHTML += "</div>";
  document.getElementById("results").innerHTML = resultsHTML;
  document.getElementById("results").style.display = "block";
}
