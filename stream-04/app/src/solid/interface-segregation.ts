export interface IPhoneDevice {
  sendSms(message: string): void;
  call(contact: string): void;
}

export interface ITabletDevice {
  openApp(appId: number): void;
  connectToWiFi(ssid: number, password: string): void;
}

export class Phone implements IPhoneDevice, ITabletDevice {
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

export class Tablet implements ITabletDevice {
  openApp(appId: number): void {
    console.log('Tablet opening app with id: ', appId);
  }

  connectToWiFi(ssid: number, password: string): void {
    console.log(
      `Tablet connecting WiFi with ssid: ${ssid} and password: ${password}`,
    );
  }
}
