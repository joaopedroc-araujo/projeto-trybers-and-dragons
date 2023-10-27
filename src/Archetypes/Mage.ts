// Mage.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instances += 1;
    this._energyType = 'mana';
  }
 
  get energyType(): EnergyType {
    return this._energyType;
  }
 
  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}
