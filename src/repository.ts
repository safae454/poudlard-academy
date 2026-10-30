import { ValidateSpellPower } from "./decorators";
import type { Entity, NewWizard, Spell, Wizard } from "./types";

export class Repository<T extends Entity> {
  protected readonly items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  protected nextId(): number {
    return this.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
  }
}

export class WizardRepository extends Repository<Wizard> {
  register(newWizard: NewWizard): Wizard {
    const wizard: Wizard = { ...newWizard, id: this.nextId() };
    this.add(wizard);
    return wizard;
  }

  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter((wizard) => wizard.house === house);
  }
}

export class SpellRepository extends Repository<Spell> {
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}