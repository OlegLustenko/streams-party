// old wrong user
import { Address } from "../value-object/address";
import { Phone } from "../value-object/phone";
import { Name } from "../value-object/name";

class User {
  constructor(name, address, phone) {
    this.name = new Name(name);
    this.address = new Address(address);
    this.phone = new Phone(phone);
  }
}
