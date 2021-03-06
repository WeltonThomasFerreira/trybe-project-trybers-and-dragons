import { EnergyType } from '../Energy';

export default abstract class Archetype {
  static _createdArchetypeInstances = 0;

  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  static createdArchtypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;
}
