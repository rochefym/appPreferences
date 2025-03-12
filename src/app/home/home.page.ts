import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  isFeatureEnabled1: boolean = false;
  isFeatureEnabled2: boolean = false;
  isFeatureEnabled3: boolean = false;

  rangeNo: number = 50;

  isChecked1: boolean = false; 
  isChecked2: boolean = false; 
  isChecked3: boolean = false; 

  selectedOption: string = '';

  constructor() {}

  async ngOnInit() {
    await this.loadSettings();
  }

  async saveSettings() {
    await Preferences.set({
      key: 'selectedOption',
      value: this.selectedOption,
    });

    await Preferences.set({
      key: 'rangeNo',
      value: this.rangeNo.toString(),
    });

    await Preferences.set({
      key: 'isChecked1',
      value: this.isChecked1.toString(),
    });
  }

  async loadSettings() {
    const { value: selectedOption } = await Preferences.get({ key: 'selectedOption' });
    const { value: rangeNo } = await Preferences.get({ key: 'rangeNo' });
    const { value: isChecked } = await Preferences.get({ key: 'isChecked' });

    if (selectedOption) {
      this.selectedOption = selectedOption;
    }

    if (rangeNo) {
      this.rangeNo = parseInt(rangeNo, 10);
    }

    if (isChecked) {
      this.isChecked1 = isChecked === 'true';
    }
  }

  resetValues() {
    this.isFeatureEnabled1 = false;
    this.isFeatureEnabled2 = false;
    this.isFeatureEnabled3 = false;

    this.rangeNo = 50;

    this.isChecked1 = false;
    this.isChecked2 = false;
    this.isChecked3 = false;

    this.selectedOption = ''; 
    this.saveSettings();             
  }



}
