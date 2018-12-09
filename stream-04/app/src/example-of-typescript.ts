const myName: string = 'Oleh';
const age: number = 29;

type User = {
  name: string;
  surname: string;
  isActive: boolean;
};

const user: User = {
  name: 'User #1',
  surname: 'Surname Of User 1',
  isActive: true,
};

export function updateIsActive(user: User) {
  user.isActive = true;
  user.name = user.name.toUpperCase();
}

const users: Array<User> = [
  {
    name: 'User #1',
    surname: 'Surname Of User 1',
    isActive: true,
  },
  {
    name: 'User #2',
    surname: 'Surname Of User 2',
    isActive: true,
  },
  {
    name: 'User #3',
    surname: 'Surname Of User 3',
    isActive: false,
  },
];

function updateUsers(subscribers: User[]): void {
  subscribers.forEach((subscriber) => {
    subscriber.surname = subscriber.surname.toUpperCase();
  });
}

export function add(number1: number, number2: number): number {
  return number1 + number2;
}

console.log(add(10, 20)); // 30
console.log(add(20, 50));

/* INTERFACE */

interface Device {
  sendSms(message: string): void;
  openApp(appId: number): void;
  connectToWiFi(ssid: number, password: string): void;
  call(contact: string): void;
}

class Phone implements Device {
  sendSms(message: string): void {
    console.log('Sending sms');
  }

  openApp(appId: number): void {
    console.log('Opening App with id', appId);
  }

  connectToWiFi(ssid: number, password: string): void {
    console.log(
      `Connection to WiFi with ssid: ${ssid} and password: ${password}`,
    );
  }

  call(contact: string): void {
    console.log('Calling to ', contact);
  }
}
