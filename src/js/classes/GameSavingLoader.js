import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const promise = read();
      promise.then((data) => {
        return json(data);
      })
        .then((value) => {
          resolve(new GameSaving(value.id, value.created, value.userInfo.id, value.userInfo.name, value.userInfo.level, value.userInfo.points));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}
