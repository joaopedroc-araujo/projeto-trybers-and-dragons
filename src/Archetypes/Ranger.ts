import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    
    this._energyType = 'stamina';
  }
 
  get energyType(): EnergyType {
    return this._energyType;
  }
 
  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}
