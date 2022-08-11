// description: END POINT //
export const END_POINT = '/apis';

// description: AUTH END POINT //
export const AUTH_API = `${END_POINT}/auth`;

export const LOGIN_API = 'login';

// description: ADMIN END POINT //
export const ADMIN_API = `${END_POINT}/admin`;

export const DISPLAY_SETUP_API = 'displaySetup';
export const SETTING_SETUP_API = 'settingSetup';
export const DISPLAY_TRANSLATION_API = 'displayTranslation';
export const DISPLAY_TRANSLATION_ITEM_API = 'displayTranslationItem';
export const EDIT_TRANSLATION_API = 'editTranslation';

// description: LOG END POINT //
export const LOG_API = `${END_POINT}/log`;

export const ELECTRIFIED_ACCESS_LOG_API = 'electrifiedAccessLog';

// description: FILE END POINT //
export const FILE_API = `${END_POINT}/file`;

export const GET_IMAGE_API = 'getImage/:image';
export const GET_IMAGE2_API = 'getImage2/:item/:version/:image';

// description: ELECTRIFIED END POINT //
export const ELECTRIFIED_API = `${END_POINT}/electrified`;

export const ELECTRIFIED_DATA_API =
  'electrifiedData/:app_id/:app_version/:country_code';
export const ELECTRIFIED_INITIALIZE_API = 'electrifiedInitialize';
export const ELECTRIFIED_CHECK_API = 'electrifiedCheck';
export const TRANSLATION_CHECK = 'translationCheck';

// description: Just Constants //
export const ELECTRIFIED = 'ELECTRIFIED';
export const POWERTRAIN = 'POWERTRAIN';
export const CONNECTIVITY = 'CONNECTIVITY';

export const HIGHLIGHTS = 'Highlights';
export const CHARGING = 'Charging';
export const BENEFITS = 'Benefits';

export const MILD_HYBRID = 'MILD HYBRID';
export const HYDROGEN = 'HYDROGEN';
export const FULL_ELLECTRIC = 'FULL ELLECTRIC';
export const PLUG_IN_HYBRID = 'PLUG IN HYBRID';
export const HYBRID = 'HYBRID';

export const BLUELINK = 'BLUELINK';
export const CHARGE_MYHYUNDAI = 'CHARGE MYHYUNDAI';

export const TEMPLATE_1 = 'Template 1';
export const TEMPLATE_2 = 'Template 2';
export const TEMPLATE_3 = 'Template 3';
export const TEMPLATE_POWERTRAIN = 'Template Powertrain';
export const TEMPLATE_LOTTIE = 'Template Lottie';
export const TEMPLATE_CONNECTIVITY = 'Template Connnectivity';
export const TEMPLATE_CONNECTIVITY_SUB = 'Template Connectivity Sub';
export const TEMPLATE_CONNECTIVITY_SUB2 = 'Template Connectivity Sub 2';

// description: URL //
export const GET_TOKEN_URL =
  'https://hmetest.dealer-portal.net/irj/servlet/prt/portal/prtroot/hm.eu.myhyundai.auth.TokenGenerator';
export const DEALER_PORTAL =
  'https://hmetest.dealer-portal.net/irj/servlet/prt/portal/prtroot/hm.eu.myhyundai.auth.AuthValidator';

// description: Map Dealer Code to Country //
export const AUSTRIA = 'C11AB';
export const BELGIUM = 'C02AA';
export const DENMARK = 'C04AA';
export const FINLAND = 'C05AD';
export const FRANCE = 'C06AB';
export const GERMANY = 'C07AB';
export const ICELAND = 'C09AA';
export const ITALY = 'C11AB';
export const MALTA = 'C13AA';
export const NETHERRANDS1 = 'C14AB';
export const NETHERRANDS2 = 'C14AC';
export const NORWAY = 'C15AB';
export const PORTUGAL = 'C16AB';
export const SPAIN = 'C17AA';
export const SWEDEN = 'C18AA';
export const SWISS = 'C19AB';
export const UK = 'C21AC';
export const BULGARIA = 'C23AG';
export const CZECH = 'C24AC';
export const HUNGARY = 'C26AC';
export const POLAND = 'C27AG';
export const ROMANIA = 'C28AG';
export const SLOVENIA = 'C32AG';
export const CROATIA1 = 'C33AA';
export const CROATIA2 = 'C33AG';
export const SLOVAKIA = 'C50AB';
export const CYPRUS = 'D22AB';
export const GREECE = 'D27AB';
export const CANARY_ISLAND = 'E45AD';
export const REUNION = 'E49AA';
