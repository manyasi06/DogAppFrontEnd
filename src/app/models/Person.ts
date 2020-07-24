export interface Dogs {
  id: number;
  breed: string;
  nameofdog: string;
}

export class Person {

  id: number;
  firstname: string;
  lastname: string;
  dogs: Dogs[];

}
