import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);

    Necromancer._instances += 1;
    this._energyType = 'mana';
  }
 
  get energyType(): EnergyType {
    return this._energyType;
  }
 
  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}
