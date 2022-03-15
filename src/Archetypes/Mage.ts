import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
