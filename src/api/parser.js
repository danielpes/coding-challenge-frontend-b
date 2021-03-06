import 'core-js/fn/array/find';

function parseDeparture(rawDeparture, locations, operators) {
  // Get operator
  const operator = operators.find(op => op.id === rawDeparture.operator_id);

  // Get locations
  let originLocation = null;
  let destLocation = null;
  locations.some((loc) => {
    if (!originLocation && loc.id === rawDeparture.origin_location_id) {
      originLocation = loc;
    } else if (!destLocation && loc.id === rawDeparture.destination_location_id) {
      destLocation = loc;
    }
    return originLocation && destLocation;
  });

  return {
    id: rawDeparture.id,
    departureDate: new Date(Date.parse(rawDeparture.departure_time)),
    arrivalDate: new Date(Date.parse(rawDeparture.arrival_time)),
    duration: rawDeparture.duration,
    price: rawDeparture.prices.total / 100.0,
    currency: rawDeparture.prices.currency,
    operatorName: operator.name,
    operatorLogoUrl: operator.logo_url,
    origin: originLocation.name,
    destination: destLocation.name,
  };
}

// Returns a list of departures
export default function parseDepartures(data) {
  return data.departures.map(dep => parseDeparture(dep, data.locations, data.operators));
}
