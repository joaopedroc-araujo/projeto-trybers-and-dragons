import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    
    Ranger._instances += 1;
    this._energyType = 'stamina';
  }
 
  get energyType(): EnergyType {
    return this._energyType;
  }
 
  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}
