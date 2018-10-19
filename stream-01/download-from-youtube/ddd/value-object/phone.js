export class Phone {
  constructor(phone) {
    this.phone = this.validatePhone(phone);
  }

  validatePhone(phone) {
    if (!phone) {
      throw new Error('please enter correct phone');
    }

    return phone;
  }
}
