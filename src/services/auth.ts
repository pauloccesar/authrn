interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'o1i2hjouegv09swubuihn2ffkj23hjiod8c89sdvcqw3jkfndq2df',
        user: {
          name: 'Paulo',
          email: 'pauloccesar.131@gmail.com',
        },
      });
    }, 2000);
  });
}