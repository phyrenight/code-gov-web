import { Component } from '@angular/core';
import { StateService } from '../../services/state';
import { SeoService } from '../../services/seo';

/**
 * Class representing a privacy policy.
 */

@Component({
  selector: 'privacy-policy',
  styles: [require('./privacy-policy.style.scss')],
  template: require('./privacy-policy.template.html')
})

export class PrivacyPolicyComponent {

  /**
   * Construct a PrivacyPolicyComponent.
   *
   * @constructor
   * @param {SeoService} seoService - A service for setting SEO related tags
   * @param {StateService} stateService - A service for managing the state of the site
   */
  constructor(
    private seoService: SeoService,
    public stateService: StateService
  ) {
    this.stateService.set('section', 'privacy-policy');
    this.seoService.setTitle('Privacy Policy', true);
    this.seoService.setMetaDescription('Learn about how Code.gov is using cookies and analytics.');
    this.seoService.setMetaRobots('Index, Follow');
  }
}
