export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Rani'
    },
    {
      id: 2,
      name: 'Firas'
    },
    {
      id: 3,
      name: 'Rien'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const server = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateUser(id: number, serverInfo: {name: string}) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    if (user) {
      user.name = serverInfo.name;
    }
  }

}
