export class Citizen {
  constructor(
    public name: string,
    public surname: string,
    private _address: string,
  ) {
    this.name = name;
    this.surname = surname;
    this._address = _address;
  }
}

class Dev extends Citizen {
  getAddress() {
    return 'qwerty';
  }
}

class RegisteredCitizen extends Citizen {}

class City {
  public citizens: Array<Citizen> = [];

  addCitizen(citizen: Citizen): RegisteredCitizen {
    this.citizens.push(citizen);

    return new RegisteredCitizen(citizen.name, citizen.surname, 'UNIQUE ID');
  }
}

class Kharkiv extends City {
  addCitizen(dev: Dev): RegisteredCitizen {
    const citizen = new Citizen('someName', 'second name', 'idd');

    this.citizens.push(citizen);

    return new RegisteredCitizen(dev.name, dev.surname, dev.getAddress());
  }
}



// -------------




class HubSocket {}

class ApplicationHub extends HubSocket {}
class ExecuteHub extends HubSocket {}


// -------------






















