import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    aboutUs_heading: Schema.Attribute.String & Schema.Attribute.Required;
    aboutUs_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    aboutUs_intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface AdvisorsSectionAdvisors extends Struct.ComponentSchema {
  collectionName: 'components_advisors_section_advisors';
  info: {
    displayName: 'advisors';
  };
  attributes: {
    advisor_des: Schema.Attribute.String & Schema.Attribute.Required;
    advisor_title: Schema.Attribute.String & Schema.Attribute.Required;
    advisors_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface ApiSectionVisaIntegrationApi extends Struct.ComponentSchema {
  collectionName: 'components_api_section_visa_integration_apis';
  info: {
    displayName: 'visaIntegration_api';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

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

export interface BulltePointsBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_bullte_points_bullet_points';
  info: {
    displayName: 'bulletPoints';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    point: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CardsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface CardsMetricCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_metric_cards';
  info: {
    displayName: 'metric_cards';
  };
  attributes: {
    desc: Schema.Attribute.String & Schema.Attribute.Required;
    percentage: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface FeaturesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'cards.card', true> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    button1: Schema.Attribute.String & Schema.Attribute.Required;
    button2: Schema.Attribute.String & Schema.Attribute.Required;
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String & Schema.Attribute.Required;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface HeroHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    desc: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
    logos: Schema.Attribute.Component<'logos.hero-logo', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface LogosHeroLogo extends Struct.ComponentSchema {
  collectionName: 'components_logos_hero_logos';
  info: {
    displayName: 'hero_logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface LogosLogos extends Struct.ComponentSchema {
  collectionName: 'components_logos_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    logo1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logo2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logo3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logo4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface MeetTheTeamMeetTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_meet_the_team_meet_the_teams';
  info: {
    displayName: 'meet the team';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetricsMetrics extends Struct.ComponentSchema {
  collectionName: 'components_metrics_metrics';
  info: {
    displayName: 'metrics';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.metric-cards', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface MissionSectionMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_mission_section_mission_sections';
  info: {
    displayName: 'mission-section';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MissionVisionMissionVisionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_mission_vision_mission_vision_sections';
  info: {
    displayName: 'mission_vision_section';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface OurTeamAndAdvisorsOurTeamAndAdvisors
  extends Struct.ComponentSchema {
  collectionName: 'components_our_team_and_advisors_our_team_and_advisors';
  info: {
    displayName: 'our_team_and_advisors';
  };
  attributes: {
    advisor_heading: Schema.Attribute.String & Schema.Attribute.Required;
    advisors: Schema.Attribute.Component<'advisors-section.advisors', true> &
      Schema.Attribute.Required;
    intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
    team_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
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

export interface RoadmapSlidesSlides extends Struct.ComponentSchema {
  collectionName: 'components_roadmap_slides_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface RoadmapRoadmapSection extends Struct.ComponentSchema {
  collectionName: 'components_roadmap_roadmap_sections';
  info: {
    displayName: 'roadmap_section';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    roadmap_slides: Schema.Attribute.Component<'roadmap-slides.slides', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFairAdventure extends Struct.ComponentSchema {
  collectionName: 'components_section_fair_adventures';
  info: {
    displayName: 'fairAdventure';
  };
  attributes: {
    bulletPoints: Schema.Attribute.Component<
      'bullte-points.bullet-points',
      true
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface TermsSection extends Struct.ComponentSchema {
  collectionName: 'components_terms_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    section_detail: Schema.Attribute.Blocks & Schema.Attribute.Required;
    section_heading: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ValueSlidesSlides extends Struct.ComponentSchema {
  collectionName: 'components_value_slides_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface ValueSlidesValueSlides extends Struct.ComponentSchema {
  collectionName: 'components_value_slides_value_slides';
  info: {
    displayName: 'value-slides';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ValueValueSection extends Struct.ComponentSchema {
  collectionName: 'components_value_value_sections';
  info: {
    displayName: 'value_section';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value_slides: Schema.Attribute.Component<'value-slides.slides', true> &
      Schema.Attribute.Required;
  };
}

export interface ValuesCreatingPropellusValues extends Struct.ComponentSchema {
  collectionName: 'components_values_creating_propellus_values';
  info: {
    displayName: 'creating_propellus_values';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface VisionSectionVisionSection extends Struct.ComponentSchema {
  collectionName: 'components_vision_section_vision_sections';
  info: {
    displayName: 'vision_section';
  };
  attributes: {
    desc: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.hero-section': AboutUsHeroSection;
      'advisors-section.advisors': AdvisorsSectionAdvisors;
      'api-section.visa-integration-api': ApiSectionVisaIntegrationApi;
      'benefits.benefits-section': BenefitsBenefitsSection;
      'bullte-points.bullet-points': BulltePointsBulletPoints;
      'cards.card': CardsCard;
      'cards.metric-cards': CardsMetricCards;
      'dummy-faqs.faqs': DummyFaqsFaqs;
      'feature.feature-section': FeatureFeatureSection;
      'features.features': FeaturesFeatures;
      'hero-section.hero': HeroSectionHero;
      'hero-section.herosection': HeroSectionHerosection;
      'hero.hero-section': HeroHeroSection;
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
      'logos.hero-logo': LogosHeroLogo;
      'logos.logos': LogosLogos;
      'mainheading.mainheading': MainheadingMainheading;
      'meet-the-team.meet-the-team': MeetTheTeamMeetTheTeam;
      'metrics.metrics': MetricsMetrics;
      'mission-section.mission-section': MissionSectionMissionSection;
      'mission-vision.mission-vision-section': MissionVisionMissionVisionSection;
      'our-team-and-advisors.our-team-and-advisors': OurTeamAndAdvisorsOurTeamAndAdvisors;
      'prob.travelagent-prob': ProbTravelagentProb;
      'roadmap-slides.slides': RoadmapSlidesSlides;
      'roadmap.roadmap-section': RoadmapRoadmapSection;
      'section.fair-adventure': SectionFairAdventure;
      'terms.section': TermsSection;
      'travelagent-prob.travelagent-prob': TravelagentProbTravelagentProb;
      'travelagentlove.travelagentlove': TravelagentloveTravelagentlove;
      'travelagentsol.travelagentsolution': TravelagentsolTravelagentsolution;
      'value-slides.slides': ValueSlidesSlides;
      'value-slides.value-slides': ValueSlidesValueSlides;
      'value.value-section': ValueValueSection;
      'values.creating-propellus-values': ValuesCreatingPropellusValues;
      'visa-process.visaprocess': VisaProcessVisaprocess;
      'visaapplication.visa-application-section': VisaapplicationVisaApplicationSection;
      'vision-section.vision-section': VisionSectionVisionSection;
    }
  }
}
