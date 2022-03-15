import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
