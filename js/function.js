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
    { name: "Other", value: "other", distance: 0, shipping_day: 0 },
  ],
  vehicle: [
    { name: "Camion", value: "camion", price: 1 },
    { name: "Silverado", value: "silverado", price: 0.7 },
    { name: "Berlingo", value: "berlingo", price: 0.5 },
    { name: "MRW", value: "mrw", price: 0.05 },
  ],
  extra: [
    { name: "load_lift", price: 300 },
    { name: "ferry", price: 300 },
  ],
};

let selectedVehicle,
  selectedState,
  stateChoices,
  vehicleChoices,
  categoryChoices;
const ferryCheckbox = document.getElementById("ferry");
const loadLiftCheckbox = document.getElementById("load_lifter");
const installationCheckbox = document.getElementById("installation");
const distanceInput = document.getElementById("distance");

distanceInput.parentElement.style.display = "none";

function getShippingDay(distance) {
  if (distance === 0) return 0;
  if (distance > 0 && distance <= 300) {
    return 1;
  } else if (distance > 300 && distance <= 515) {
    return 2;
  } else if (distance > 515 && distance <= 1250) {
    return 3;
  } else {
    return -1; // or throw error if out of range
  }
}

function populateSelect(id, options, placeholder) {
  const select = document.getElementById(id);
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.name;
    select.appendChild(o);
  });

  const choices = new Choices(select, {
    removeItemButton: id === "categories",
    searchEnabled: true,
    placeholderValue: placeholder,
    searchPlaceholderValue: "Search",
    shouldSort: false,
  });
  if (id === "state") stateChoices = choices;
  if (id === "vehicle") vehicleChoices = choices;
  if (id === "categories") categoryChoices = choices;
}

populateSelect("state", data.state, "Select a state");
populateSelect("vehicle", data.vehicle, "Select a vehicle");
populateSelect("categories", data.category, "Select categories");

// Auto-enable ferry for Nueva Esparta
document.getElementById("state").addEventListener("change", function () {
  selectedState = this.value;
  const distanceElement = distanceInput.parentElement;

  if (selectedState === "other") {
    distanceElement.style.display = "flex";
  } else {
    distanceElement.style.display = "none";
  }

  if (selectedVehicle === "mrw") {
    ferryCheckbox.checked = false;
    ferryCheckbox.disabled = true;
    loadLiftCheckbox.checked = false;
    loadLiftCheckbox.disabled = true;
  } else {
    if (this.value === "nueva_esparta") {
      ferryCheckbox.checked = true;
      ferryCheckbox.disabled = true;
    } else {
      ferryCheckbox.checked = false;
      ferryCheckbox.disabled = false;
    }
  }
});

// --- Restriction Logic ---
document.getElementById("vehicle").addEventListener("change", function () {
  selectedVehicle = this.value;
  if (selectedVehicle === "mrw") {
    // MRW only allows categories with heavy === 1
    categoryChoices.clearStore();
    categoryChoices.setChoices(
      data.category.map((c) => ({
        value: c.value,
        label: c.name,
        disabled: c.heavy !== 0,
      })),
      "value",
      "label",
      true
    );
    ferryCheckbox.checked = false;
    ferryCheckbox.disabled = true;
    loadLiftCheckbox.checked = false;
    loadLiftCheckbox.disabled = true;
  } else {
    // Restore all categories
    categoryChoices.clearStore();
    categoryChoices.setChoices(
      data.category.map((c) => ({
        value: c.value,
        label: c.name,
        disabled: c.heavy == 0,
      })),
      "value",
      "label",
      true
    );
    if (selectedState === "nueva_esparta") {
      ferryCheckbox.checked = true;
      ferryCheckbox.disabled = true;
    } else {
      ferryCheckbox.checked = false;
      ferryCheckbox.disabled = false;
    }
    loadLiftCheckbox.checked = false;
    loadLiftCheckbox.disabled = false;
  }
});

document.getElementById("categories").addEventListener("change", function () {
  const selected = [...this.selectedOptions].map((o) => o.value);
  const selectedCats = data.category.filter((c) => selected.includes(c.value));
  if (selectedCats.some((c) => c.heavy === 0)) {
    // If heavy==1 is selected → only MRW allowed
    vehicleChoices.clearStore();
    vehicleChoices.setChoices(
      data.vehicle.map((v) => ({
        value: v.value,
        label: v.name,
        // disabled: v.value !== "mrw",
      })),
      "value",
      "label",
      true
    );
    vehicleChoices.setChoiceByValue("mrw");
  } else {
    // Restore all vehicles
    vehicleChoices.clearStore();
    vehicleChoices.setChoices(
      data.vehicle.map((v) => ({
        value: v.value,
        label: v.name,
        // disabled: v.value === "mrw",
      })),
      "value",
      "label",
      true
    );
    vehicleChoices.setChoiceByValue(selectedVehicle);
  }
});

// --- Calculation ---
function calculate() {
  let totalCost = 0;
  let viaticoCost = 0;
  const stateVal = document.getElementById("state").value;
  const vehicleVal = document.getElementById("vehicle").value;
  const selectedCats = [
    ...document.getElementById("categories").selectedOptions,
  ].map((o) => o.value);
  const includeInstall = installationCheckbox.checked;
  const includeLoadLift = loadLiftCheckbox.checked;
  const includeFerry = ferryCheckbox.checked;

  if (!stateVal || !vehicleVal || selectedCats.length === 0) {
    alert("Please select state, vehicle, and at least one category.");
    return;
  }

  if (stateVal === "other" && getShippingDay(distanceInput.value) === -1) {
    alert("Please enter a valid distance (0-1250 km).");
  }

  const state = data.state.find((s) => s.value === stateVal);
  const vehicle = data.vehicle.find((v) => v.value === vehicleVal);

  if (vehicle.value === "mrw") {
    viaticoCost = 0;
  } else {
    // if state is "other" -> use distance-based calculation
    if (state.value === "other") {
      const dist = parseFloat(distanceInput.value) || 0;
      const shippingDay = getShippingDay(dist);

      viaticoCost =
        shippingDay === 1
          ? 160
          : shippingDay === 2
          ? 190
          : shippingDay === 3
          ? 250
          : 0;
    } else {
      // use predefined state shipping_day
      viaticoCost =
        state.shipping_day === 1
          ? 160
          : state.shipping_day === 2
          ? 190
          : state.shipping_day === 3
          ? 250
          : 0;
    }
  }

  let multiplier = vehicle.value === "mrw" ? 1 : 2;

  let resultsHTML =
    (distanceInput.value && distanceInput.value > 700) || state.distance > 700
      ? `<div class="shipping_result">
          <div class="warning_for_distance">It is recommended to use air transport instead of ground
            vehicles.
          </div>`
      : `<div class="shipping_result">`;
  resultsHTML += `<div class="shipping_result_row">
                    <text>Estimated Distance:</text>
                    <text>${
                      state.value === "other"
                        ? distanceInput.value
                        : state.distance
                    } km
                    </text>
                  </div>
                  <div class="shipping_result_row">
                    <text>Shipping Method:</text>
                    <text>${vehicle.name}</text>
                  </div>
                  <div class="shipping_result_row">
                    <text>Estimated Viatic Days:</text>
                    <text>${
                      state.value === "other"
                        ? getShippingDay(distanceInput.value)
                        : state.shipping_day
                    }${state.shipping_day < 2 ? "Day" : "Days"}
                    </text>
                  </div>
                  <div class="divider">
                </div>`;
  selectedCats.forEach((catVal) => {
    const cat = data.category.find((c) => c.value === catVal);
    let cost =
      cat.shipping_price +
      (state.value === "other" ? distanceInput.value : state.distance) *
        vehicle.price *
        multiplier +
      viaticoCost;
    if (includeInstall) cost += cat.installation_price;
    if (includeLoadLift)
      cost += data.extra.find((e) => e.name === "load_lift").price;
    if (includeFerry) cost += data.extra.find((e) => e.name === "ferry").price;
    totalCost += cost;
    resultsHTML += `<div class="shipping_result_row">
                      <text>${cat.name}:</text> 
                      <text>${cost.toFixed(2)} USD</text>
                    </div>`;
  });
  resultsHTML += `<div class="divider">
                </div>
                <div class="shipping_result_row">
                  <text>Estimated Total Cost:</text>
                  <text>${totalCost.toFixed(2)} USD
                  </text>
                </div>
              </div>`;
  document.getElementById("results").innerHTML = resultsHTML;
  document.getElementById("results").style.display = "block";
}
