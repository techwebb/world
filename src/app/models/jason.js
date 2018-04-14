var worldSettings = {
  "Location": {
    "name": "string",
    "parent": "Location",
    "coordinate": "coordinate",
    "minorRadius": "number",
    "majorRadius": "number",
    "population": "population",
    "government": "government",
    "Population": {
      "count": "number",
      "raceDivision[]": "divisions by race",
      "occupationDivision[]": "divisions by occupation",
      "wealth": ["poor", "diminishing", "wealthy", "bountiful", "royalty", "agrarian"],
      "technology": "string",
      "type": ["village", "city", "metropolis", "city-state", "colony", "county", "duchy", "barony", "fief", "shire", "district", "kingdom", "empire", "fort", "outpost"],
      "members[]": "person"
    },
    "connections[]": "connections",
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