import { Injectable } from "@angular/core";


const users = [
  {
    username: 'user',
    password: 'user',
  },
];

const remoteModules = [
  {
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    remoteName: 'react_mfe_app',
    exposedModule: 'ReactAppLoader',
  },
];

@Injectable({
  providedIn: 'root',
})


export class AppService {
  loggedUser: { username: string; password: string } | null = null;
  authorized_modules: typeof remoteModules = [];
  constructor() {
    this.authorized_modules = remoteModules;
  }
  login(username: string, password: string) {
    const user = users.find(
      (item) => item.username === username && item.password === password
    );

    if (!user) return false;

    this.loggedUser = user;

    // this.authorized_modules = remoteModules;

    return true;
  }
}
