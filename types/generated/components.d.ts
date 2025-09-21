import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_benefits_benefits_sections';
  info: {
    displayName: 'BenefitsSection';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    subdescription1: Schema.Attribute.Text & Schema.Attribute.Required;
    subdescription2: Schema.Attribute.String & Schema.Attribute.Required;
    subdescription3: Schema.Attribute.Text & Schema.Attribute.Required;
    subheading1: Schema.Attribute.String & Schema.Attribute.Required;
    subheading2: Schema.Attribute.String & Schema.Attribute.Required;
    subheading3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DummyFaqsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_dummy_faqs_faqs';
  info: {
    displayName: 'FAQS';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Qestion: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeatureFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_feature_feature_sections';
  info: {
    displayName: 'featureSection';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HeroSectionHerosection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_herosections';
  info: {
    displayName: 'herosection';
  };
  attributes: {
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InvestorApproachApproachsection
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_approach_approachsections';
  info: {
    displayName: 'approachsection';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InvestorsPageApproachSection extends Struct.ComponentSchema {
  collectionName: 'components_investors_page_approach_sections';
  info: {
    displayName: 'approach-section';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading_approach: Schema.Attribute.String & Schema.Attribute.Required;
    image_1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image_3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface InvestorsPageInvestors extends Struct.ComponentSchema {
  collectionName: 'components_investors_page_investors';
  info: {
    displayName: 'investors';
  };
  attributes: {
    approach: Schema.Attribute.Component<
      'investors-page.approach-section',
      true
    >;
    investorssection: Schema.Attribute.Component<
      'investors-page.investors-section',
      true
    >;
  };
}

export interface InvestorsPageInvestorsSection extends Struct.ComponentSchema {
  collectionName: 'components_investors_page_investors_sections';
  info: {
    displayName: 'investors-section';
  };
  attributes: {
    author_info: Schema.Attribute.Blocks & Schema.Attribute.Required;
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    linkedIn_url: Schema.Attribute.String & Schema.Attribute.Required;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface InvestorsFaq extends Struct.ComponentSchema {
  collectionName: 'components_investors_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    Question: Schema.Attribute.String;
  };
}

export interface InvestorsInvestorSecText extends Struct.ComponentSchema {
  collectionName: 'components_investors_investor_sec_texts';
  info: {
    displayName: 'investor-sec-text';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface InvestorsInvestorsform extends Struct.ComponentSchema {
  collectionName: 'components_investors_investorsforms';
  info: {
    displayName: 'investorsform';
  };
  attributes: {
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageDummyData extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_dummy_data';
  info: {
    displayName: 'DUMMY-DATA';
  };
  attributes: {};
}

export interface LandingPageGrowYourBusinessSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_grow_your_business_sections';
  info: {
    displayName: 'grow your business section';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface LandingPageHerosection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_herosections';
  info: {
    displayName: 'herosection';
  };
  attributes: {
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageOtasService extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_otas_services';
  info: {
    displayName: 'otas-service';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface LandingPageTravellersLove extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_travellers_loves';
  info: {
    displayName: 'travellers-love';
  };
  attributes: {
    author_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    country_name: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface LandingPageVisasection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_visasections';
  info: {
    displayName: 'visasection';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface MainheadingMainheading extends Struct.ComponentSchema {
  collectionName: 'components_mainheading_mainheadings';
  info: {
    displayName: 'mainheading';
  };
  attributes: {
    mainheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProbTravelagentProb extends Struct.ComponentSchema {
  collectionName: 'components_prob_travelagent_probs';
  info: {
    displayName: 'travelagentProb';
  };
  attributes: {
    description1: Schema.Attribute.Text & Schema.Attribute.Required;
    description2: Schema.Attribute.Text & Schema.Attribute.Required;
    description3: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    subheading1: Schema.Attribute.String & Schema.Attribute.Required;
    subheading2: Schema.Attribute.String & Schema.Attribute.Required;
    subheading3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TravelagentProbTravelagentProb extends Struct.ComponentSchema {
  collectionName: 'components_travelagent_prob_travelagent_probs';
  info: {
    displayName: 'travelagent-prob';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.String;
  };
}

export interface TravelagentloveTravelagentlove extends Struct.ComponentSchema {
  collectionName: 'components_travelagentlove_travelagentloves';
  info: {
    displayName: 'travelagentlove';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TravelagentsolTravelagentsolution
  extends Struct.ComponentSchema {
  collectionName: 'components_travelagentsol_travelagentsolutions';
  info: {
    displayName: 'travelagentsolution';
  };
  attributes: {
    description1: Schema.Attribute.Text & Schema.Attribute.Required;
    description2: Schema.Attribute.Text & Schema.Attribute.Required;
    description3: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    subheading1: Schema.Attribute.String & Schema.Attribute.Required;
    subheading2: Schema.Attribute.String & Schema.Attribute.Required;
    subheading3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VisaProcessVisaprocess extends Struct.ComponentSchema {
  collectionName: 'components_visa_process_visaprocesses';
  info: {
    displayName: 'visaprocess';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface VisaapplicationVisaApplicationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_visaapplication_visa_application_sections';
  info: {
    displayName: 'visaApplicationSection';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'benefits.benefits-section': BenefitsBenefitsSection;
      'dummy-faqs.faqs': DummyFaqsFaqs;
      'feature.feature-section': FeatureFeatureSection;
      'hero-section.hero': HeroSectionHero;
      'hero-section.herosection': HeroSectionHerosection;
      'investor-approach.approachsection': InvestorApproachApproachsection;
      'investors-page.approach-section': InvestorsPageApproachSection;
      'investors-page.investors': InvestorsPageInvestors;
      'investors-page.investors-section': InvestorsPageInvestorsSection;
      'investors.faq': InvestorsFaq;
      'investors.investor-sec-text': InvestorsInvestorSecText;
      'investors.investorsform': InvestorsInvestorsform;
      'landing-page.dummy-data': LandingPageDummyData;
      'landing-page.grow-your-business-section': LandingPageGrowYourBusinessSection;
      'landing-page.herosection': LandingPageHerosection;
      'landing-page.otas-service': LandingPageOtasService;
      'landing-page.travellers-love': LandingPageTravellersLove;
      'landing-page.visasection': LandingPageVisasection;
      'mainheading.mainheading': MainheadingMainheading;
      'prob.travelagent-prob': ProbTravelagentProb;
      'travelagent-prob.travelagent-prob': TravelagentProbTravelagentProb;
      'travelagentlove.travelagentlove': TravelagentloveTravelagentlove;
      'travelagentsol.travelagentsolution': TravelagentsolTravelagentsolution;
      'visa-process.visaprocess': VisaProcessVisaprocess;
      'visaapplication.visa-application-section': VisaapplicationVisaApplicationSection;
    }
  }
}
