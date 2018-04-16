var worldSettings = {
  Location: {
    name: {type:"string"},
    coordinate: {type: "coordinate"},
    minorRadius: {type: "decimal", units: "miles"},
    majorRadius: {type: "decimal", units: "miles"},
    government: {type:"choice", options: ["royal", "council", "military", "business", "guild", "republic", "democracic"]},
    count: {type:"log-range", min:1e2, max:1e7},
    raceDivision: {type:"divisions", by:"race"},
    occupationDivision: {type:"divisions", by:"occupation"},
    wealth: {type:"choice", options: ["poor", "diminishing", "wealthy", "bountiful", "royalty", "agrarian"]},
    technology: {type:"choice", options: ['Stone', 'Bronze', 'Iron', 'Steel', 'Industrial']},
    type: {type:"choice", options:["village", "city", "metropolis", "city-state", "colony", "county", "duchy", "barony", "fief", "shire", "district", "kingdom", "empire", "fort", "outpost"]},
    members: {type:"collection", of:"person"},
    population: {type:"subset", members:["count","raceDivision[]","occupationDivision[]","wealth","technology","type","members"]},
    connections: {type:"collection", of:"connections"},
  },
  "RaceDivision": ["Divisions by race"],
  "Government": {
    "type": ["royal", "council", "military", "business", "guild", "republic", "democracic"],
    "other": true,
    "head": "person",
    "members[]": "person"
  },
  "Race": {
    "name": "string",
    "description": "string",
    "genders": "choice",
    "ageCap": "number",
    "adultDivision": "number",
    "history": "string",
    "height": "distribution",
    "weight": "distribution"
  },
  "Occupation": {
    "name": "string",
    "income": "currency",
    "requirements": "string"
  },
  "Currency": {
    "type": "currencyDenomination",
    "count": "number"
  },
  "CurrencyDenomination": {
    "name": "string",
    "value": "number"
  },
  "Distribution": {
    "mean": "number",
    "standardDeviation": "number"
  },
  "Division": {
    "item": "inherit",
    "percent": "number"
  },
  "Connection": {
    "a": "Location",
    "b": "Location",
    "distance": "number",
    "direction": "string",
    "connectionDifficulty": "number",
    "type": ["road", "sea", "air"],
    "sortOrder": "number"
  },
  "Coordinate": {
    "x": "number",
    "y": "number"
  }
};