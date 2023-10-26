import Race from './Race';

export default class Orc extends Race {
  private static _instances = 0;
        
  private _maxLifePoints: number;
        
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
        
    Orc._instances += 1;
    this._maxLifePoints = 74;
  }
         
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
        
  static createdRacesInstances(): number {
    return Orc._instances;
  }
}