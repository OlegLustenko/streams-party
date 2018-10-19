export class Address {
  constructor(country, city, zip, lines) {
    this.country = this.validateCountry(country);
    this.city = this.validateCity(city);
    this.zip = this.validateZip(zip);
    this.lines = this.validateLines(lines);
  }

  validateCountry(country) {
    if (!country) {
      throw new Error('wrong country choosed');
    }

    return country;
  }

  validateCity(city) {
    if (!city) {
      throw new Error('wrong country choosed');
    }

    return city;
  }
  validateZip(zip) {
    if (!zip) {
      throw new Error('wrong country choosed');
    }

    return zip;
  }

  validateLines(lines) {
    if (!lines.length) {
      throw new Error('wrong country choosed');
    }

    return lines;
  }
}
