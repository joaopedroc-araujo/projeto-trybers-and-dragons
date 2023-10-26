abstract class Race {
  name: string;
  dexterity: number;
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Method not implemented.');
  }

  abstract maxLifePoints(): number;
}

export default Race;