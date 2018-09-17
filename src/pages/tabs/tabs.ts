import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CameraNativePage } from '../camera-native/camera-native';
import { SafariPage } from '../safari/safari';
import { BowserPage } from '../bowser/bowser';
import { InappbowserPage } from '../inappbowser/inappbowser';
import { AndriodPage } from '../andriod/andriod';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CameraNativePage;
  tab5Root = SafariPage;
  tab6Root = BowserPage;
  tab7Root = InappbowserPage;
  tab8Root = AndriodPage;

  constructor() {

  }
}
