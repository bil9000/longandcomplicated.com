import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class File {
  readonly id: string;
  readonly filename?: string;
  constructor(init: ModelInit<File>);
  static copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}