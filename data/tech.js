// =============================================================
//  TECH TREE DATA: Феодализм → Ранний киберпанк (~2040)
//  5 деревьев, ~500-600 нод
// =============================================================

const TREES = {
  bio:      { name: "Медицина и биотехнологии",         color: "#1a7a3c" },
  weapons:  { name: "Вооружение и тактика",              color: "#8b1a1a" },
  space:    { name: "Космос и астрофизика",              color: "#1a3a7a" },
  materials:{ name: "Материалы и производство",          color: "#7a4a1a" },
  it:       { name: "Информационные технологии и ИИ",    color: "#4a1a7a" }
};

// =============================================================
//  SUBTREES
// =============================================================
const SUBTREES = {

  // --- БИО ---
  bio_medicine: {
    name: "Медицина и хирургия", tree: "bio", color: "#2ecc71",
    nodeIds: ["bio_herbs","bio_anatomy","bio_surgery_basic","bio_anesthesia","bio_aseptics",
              "bio_blood_types","bio_vaccination","bio_antibiotics","bio_surgery_modern",
              "bio_organ_transplant","bio_microsurgery","bio_robotic_surgery","bio_nanomed"]
  },
  bio_genetics: {
    name: "Генетика и геномика", tree: "bio", color: "#27ae60",
    nodeIds: ["bio_cell_theory","bio_genetics_basic","bio_dna_struct","bio_pcr",
              "bio_genome_seq","bio_crispr","bio_gene_therapy","bio_synthetic_genome",
              "bio_designer_organs"]
  },
  bio_pharma: {
    name: "Фармакология", tree: "bio", color: "#16a085",
    nodeIds: ["bio_herbal_pharma","bio_chemistry_pharma","bio_synthesis_drugs",
              "bio_targeted_drugs","bio_immunotherapy","bio_nootropics","bio_longevity_drugs"]
  },
  bio_neuro: {
    name: "Нейронауки и бионика", tree: "bio", color: "#1abc9c",
    nodeIds: ["bio_neuro_basic","bio_eeg","bio_bmi_passive","bio_cochlear",
              "bio_retinal_implant","bio_bmi_active","bio_neural_mesh","bio_brain_upload_proto"]
  },
  bio_augment: {
    name: "Биоаугментации", tree: "bio", color: "#0e7a60",
    nodeIds: ["bio_prosthetics_basic","bio_myoelectric","bio_exo_rehab",
              "bio_smart_prosthetics","bio_cyber_limb","bio_subdermal_sensors",
              "bio_full_replacement"]
  },

  // --- ОРУЖИЕ ---
  wp_melee: {
    name: "Холодное оружие и доспехи", tree: "weapons", color: "#c0392b",
    nodeIds: ["wp_iron_sword","wp_steel_blade","wp_plate_armor","wp_crossbow",
              "wp_pike_formation","wp_gunpowder_intro"]
  },
  wp_firearms: {
    name: "Стрелковое оружие", tree: "weapons", color: "#e74c3c",
    nodeIds: ["wp_musket","wp_rifling","wp_bolt_action","wp_semi_auto",
              "wp_assault_rifle","wp_caseless_ammo","wp_smart_rifle","wp_rail_personal"]
  },
  wp_artillery: {
    name: "Артиллерия и тяжёлое вооружение", tree: "weapons", color: "#a93226",
    nodeIds: ["wp_cannon","wp_howitzer","wp_tank_basic","wp_tank_modern",
              "wp_artillery_guided","wp_loitering_munition","wp_hypervelocity_cannon"]
  },
  wp_missiles: {
    name: "Ракетное вооружение", tree: "weapons", color: "#922b21",
    nodeIds: ["wp_rocket_basic","wp_guided_missile","wp_cruise_missile",
              "wp_icbm","wp_hypersonic","wp_swarm_missiles"]
  },
  wp_cyber: {
    name: "Кибервооружение и дроны", tree: "weapons", color: "#7b241c",
    nodeIds: ["wp_drone_recon","wp_drone_strike","wp_drone_swarm",
              "wp_cyberweapon_basic","wp_ai_targeting","wp_autonomous_weapon",
              "wp_emp_weapon","wp_laser_weapon","wp_railgun_field"]
  },
  wp_tactics: {
    name: "Тактика и командование", tree: "weapons", color: "#6e2a2a",
    nodeIds: ["wp_tactics_feudal","wp_tactics_linear","wp_tactics_combined",
              "wp_logistics_modern","wp_c2_network","wp_battlespace_ai"]
  },

  // --- КОСМОС ---
  sp_rocketry: {
    name: "Ракетостроение", tree: "space", color: "#2980b9",
    nodeIds: ["sp_rocket_theory","sp_liquid_engine","sp_staging","sp_reusable_rocket",
              "sp_heavy_lift","sp_nuclear_thermal","sp_advanced_propulsion"]
  },
  sp_satellites: {
    name: "Спутники и орбитальная инфраструктура", tree: "space", color: "#1a6fa8",
    nodeIds: ["sp_sputnik","sp_comm_sat","sp_gps","sp_spy_sat",
              "sp_space_station","sp_orbital_solar","sp_megaconstellation"]
  },
  sp_exploration: {
    name: "Исследование Солнечной системы", tree: "space", color: "#154d7a",
    nodeIds: ["sp_moon_landing","sp_mars_probe","sp_outer_planets",
              "sp_asteroid_mining","sp_mars_colony","sp_space_elevator"]
  },
  sp_astro: {
    name: "Астрофизика и телескопы", tree: "space", color: "#2471a3",
    nodeIds: ["sp_optics_basic","sp_spectroscopy","sp_radio_telescope",
              "sp_space_telescope","sp_gravitational_waves","sp_exoplanet_survey",
              "sp_seti_active"]
  },
  sp_defense: {
    name: "Космическая оборона", tree: "space", color: "#1f5580",
    nodeIds: ["sp_early_warning","sp_asat","sp_orbital_defense","sp_planetary_defense"]
  },

  // --- МАТЕРИАЛЫ ---
  mat_metals: {
    name: "Металлургия", tree: "materials", color: "#e67e22",
    nodeIds: ["mat_iron_smelting","mat_steel_basic","mat_alloy_basic",
              "mat_aluminum","mat_titanium","mat_superalloy","mat_amorphous_metal"]
  },
  mat_polymers: {
    name: "Полимеры и композиты", tree: "materials", color: "#d35400",
    nodeIds: ["mat_rubber","mat_plastics","mat_fiberglass","mat_carbon_fiber",
              "mat_kevlar","mat_aerogel","mat_meta_material"]
  },
  mat_energy: {
    name: "Энергетика и двигатели", tree: "materials", color: "#ca6f1e",
    nodeIds: ["mat_steam_engine","mat_combustion_engine","mat_turbine",
              "mat_nuclear_fission","mat_solar_cell","mat_battery_liion",
              "mat_solid_battery","mat_fusion_proto","mat_wireless_power"]
  },
  mat_nano: {
    name: "Нанотехнологии", tree: "materials", color: "#b9770e",
    nodeIds: ["mat_micro_fab","mat_nano_materials","mat_cnt","mat_graphene",
              "mat_nano_coating","mat_nano_factory","mat_smart_material"]
  },
  mat_manufacturing: {
    name: "Производство и автоматизация", tree: "materials", color: "#a04000",
    nodeIds: ["mat_guild_craft","mat_mass_production","mat_assembly_line",
              "mat_cnc","mat_3d_print","mat_bioprint","mat_robotic_factory",
              "mat_self_replicating"]
  },

  // --- ИТ ---
  it_computing: {
    name: "Вычисления и архитектура", tree: "it", color: "#8e44ad",
    nodeIds: ["it_abacus","it_mechanical_calc","it_vacuum_tube","it_transistor",
              "it_microchip","it_microprocessor","it_parallel_computing",
              "it_quantum_computing","it_neuromorphic"]
  },
  it_networks: {
    name: "Сети и коммуникации", tree: "it", color: "#7d3c98",
    nodeIds: ["it_telegraph","it_telephone","it_radio","it_television",
              "it_arpanet","it_internet","it_mobile_4g","it_mobile_6g",
              "it_mesh_implant"]
  },
  it_software: {
    name: "Программирование и ПО", tree: "it", color: "#6c3483",
    nodeIds: ["it_algorithm_basic","it_os_basic","it_compiler","it_oop",
              "it_distributed","it_cloud","it_blockchain","it_self_modifying_code"]
  },
  it_ai: {
    name: "Искусственный интеллект", tree: "it", color: "#5b2c6f",
    nodeIds: ["it_expert_system","it_ml_basic","it_deep_learning","it_nlp",
              "it_cv_basic","it_reinforcement","it_foundation_model",
              "it_agi_proto","it_ai_control"]
  },
  it_security: {
    name: "Кибербезопасность", tree: "it", color: "#4a235a",
    nodeIds: ["it_crypto_basic","it_public_key","it_firewall","it_intrusion_detect",
              "it_zero_trust","it_quantum_crypto","it_ai_security"]
  }
};

// =============================================================
//  TECHS — все технологии
// =============================================================
const TECHS = [

  // ============================================================
  //  ДЕРЕВО: МЕДИЦИНА И БИОТЕХНОЛОГИИ
  // ============================================================

  // --- Корень ---
  {
    id: "bio_root", name: "Знахарство и траволечение", tree: "bio", level: 0, deps: [],
    desc: {
      what: "Первичные медицинские знания: использование трав, ритуалов и эмпирических наблюдений для лечения болезней",
      appearance: "Деревня с травником; связки сухих трав, деревянные чаши, тихое бормотание заклинаний",
      gives: "Открывает базовые ветки медицины и фармакологии"
    }
  },

  // --- Медицина и хирургия ---
  {
    id: "bio_herbs", name: "Фитотерапия", tree: "bio", level: 0, deps: [{id:"bio_root",type:"direct"}],
    desc: {
      what: "Систематизация лечебных растений: составление гербариев, первые рецепты настоев и мазей",
      appearance: "Рукописные травники с рисунками растений, аптекарский огород",
      gives: "Основа для фармакологии; снижает смертность от простых инфекций"
    }
  },
  {
    id: "bio_anatomy", name: "Анатомия человека", tree: "bio", level: 1, deps: [{id:"bio_root",type:"direct"}],
    desc: {
      what: "Вскрытие трупов и систематическое изучение строения тела — от Везалия до первых анатомических атласов",
      appearance: "Анатомический театр: наклонные ряды зрителей вокруг стола с телом, свечи, запах уксуса",
      gives: "Открывает хирургию и понимание болезней органов"
    }
  },
  {
    id: "bio_surgery_basic", name: "Полевая хирургия", tree: "bio", level: 1, deps: [{id:"bio_anatomy",type:"direct"}],
    desc: {
      what: "Ампутации, извлечение стрел и пуль, трепанации. Без наркоза — только скорость и сила воли",
      appearance: "Хирург в окровавленном переднике, кипящий котёл с инструментами, крики пациента",
      gives: "Выживаемость в бою +20%; открывает путь к современной хирургии"
    }
  },
  {
    id: "bio_anesthesia", name: "Анестезия", tree: "bio", level: 2,
    deps: [{id:"bio_surgery_basic",type:"direct"},{id:"bio_chemistry_pharma",type:"indirect"}],
    desc: {
      what: "Эфир, хлороформ, затем местные анестетики — операция перестаёт быть пыткой",
      appearance: "Хирург надевает на пациента маску с резервуаром; тот закрывает глаза и расслабляется",
      gives: "Сложные операции стали возможны; смертность на столе резко падает"
    }
  },
  {
    id: "bio_aseptics", name: "Асептика и антисептика", tree: "bio", level: 2,
    deps: [{id:"bio_surgery_basic",type:"direct"}],
    desc: {
      what: "Листер и Земмельвейс доказали: мытьё рук и стерилизация инструментов спасают больше жизней, чем скальпель",
      appearance: "Хирург в белом халате, автоклав шипит паром, операционная залита белым светом",
      gives: "Послеоперационная выживаемость ×3; открывает трансплантологию"
    }
  },
  {
    id: "bio_blood_types", name: "Группы крови и переливание", tree: "bio", level: 2,
    deps: [{id:"bio_anatomy",type:"direct"}],
    desc: {
      what: "Открытие АВ0 системы и резус-фактора. Переливание крови из смертельной лотереи стало рутинной процедурой",
      appearance: "Стеклянные флаконы с тёмно-красной жидкостью, маркированные буквами; тихое гудение холодильников",
      gives: "Спасение при массивных кровопотерях; военная медицина качественный скачок"
    }
  },
  {
    id: "bio_vaccination", name: "Вакцинация", tree: "bio", level: 2,
    deps: [{id:"bio_herbs",type:"direct"}],
    desc: {
      what: "От оспенного материала Дженнера до живых и убитых вакцин — управляемый иммунитет против инфекций",
      appearance: "Очередь детей с закатанными рукавами; медсестра с коробкой ампул",
      gives: "Ликвидация оспы, резкое снижение детской смертности; открывает иммунотерапию"
    }
  },
  {
    id: "bio_antibiotics", name: "Антибиотики", tree: "bio", level: 3,
    deps: [{id:"bio_aseptics",type:"direct"},{id:"bio_synthesis_drugs",type:"indirect"}],
    desc: {
      what: "Пенициллин Флеминга и его последователи — молекулы, убивающие бактерии. Величайший прорыв медицины XX века",
      appearance: "Жёлтая плесень в чашке Петри; цеха синтеза с ферментёрами высотой с дом",
      gives: "Смертность от бактериальных инфекций падает на 80%; открывает целенаправленные препараты"
    }
  },
  {
    id: "bio_surgery_modern", name: "Современная хирургия", tree: "bio", level: 3,
    deps: [{id:"bio_anesthesia",type:"direct"},{id:"bio_aseptics",type:"direct"}],
    desc: {
      what: "Операции на сердце, мозге, сосудах — искусственное кровообращение, микроскопы, имплантируемые устройства",
      appearance: "Операционная с мониторами, хирург в лупах-бинокулярах, тихий ритм кардиомонитора",
      gives: "АКШ, клапаны, кардиостимуляторы; открывает трансплантологию и роботизированную хирургию"
    }
  },
  {
    id: "bio_organ_transplant", name: "Трансплантология", tree: "bio", level: 3,
    deps: [{id:"bio_surgery_modern",type:"direct"},{id:"bio_blood_types",type:"direct"}],
    desc: {
      what: "Пересадка сердца, почек, печени — от первых экспериментов до плановых операций. Главная проблема: отторжение",
      appearance: "Орган в льду, перелёт на вертолёте, команда из 10 хирургов",
      gives: "Продление жизни при отказе органов; открывает тканевую инженерию"
    }
  },
  {
    id: "bio_microsurgery", name: "Микрохирургия", tree: "bio", level: 3,
    deps: [{id:"bio_surgery_modern",type:"direct"}],
    desc: {
      what: "Операции под микроскопом: пришивание пальцев, сосудов толщиной с волос, нервных пучков",
      appearance: "Хирург неподвижен как статуя; инструменты тоньше иглы; микроскоп увеличивает поле ×25",
      gives: "Реплантация конечностей; основа для роботизированной хирургии"
    }
  },
  {
    id: "bio_robotic_surgery", name: "Роботизированная хирургия", tree: "bio", level: 4,
    deps: [{id:"bio_microsurgery",type:"direct"},{id:"it_cv_basic",type:"indirect"}],
    desc: {
      what: "Система da Vinci и её потомки: хирург управляет манипуляторами из соседней комнаты — или другого города",
      appearance: "Паукообразный робот над пациентом; хирург в кресле с джойстиками, 3D-экран во весь рост",
      gives: "Точность ±0,1 мм; телехирургия; снижение травмы для пациента"
    }
  },
  {
    id: "bio_nanomed", name: "Наномедицина", tree: "bio", level: 5,
    deps: [{id:"bio_robotic_surgery",type:"direct"},{id:"mat_nano_factory",type:"indirect"}],
    desc: {
      what: "Наноботы в кровотоке: находят опухолевые клетки, доставляют препараты точно в цель, чинят сосуды изнутри",
      appearance: "Инъекция прозрачной жидкости; на экране — рой светящихся точек, ползущих по карте сосудов",
      gives: "Лечение рака без химиотерапии; репарация тканей in vivo; возможная иммортальность"
    }
  },

  // --- Генетика ---
  {
    id: "bio_cell_theory", name: "Клеточная теория", tree: "bio", level: 1,
    deps: [{id:"bio_anatomy",type:"direct"}],
    desc: {
      what: "Шлейден и Шванн: все живые существа состоят из клеток. Первый микроскоп открывает невидимый мир",
      appearance: "Латунный микроскоп на столе учёного; тетрадь с зарисовками инфузорий и клеток пробки",
      gives: "Понимание инфекций; основа для генетики и фармакологии"
    }
  },
  {
    id: "bio_genetics_basic", name: "Законы Менделя", tree: "bio", level: 2,
    deps: [{id:"bio_cell_theory",type:"direct"}],
    desc: {
      what: "Горох в монастырском саду раскрыл законы наследственности. Доминантность, рецессивность, расщепление",
      appearance: "Грядки гороха, разделённые по цвету; монах с блокнотом считает стручки",
      gives: "Основа селекции; понимание наследственных болезней"
    }
  },
  {
    id: "bio_dna_struct", name: "Структура ДНК", tree: "bio", level: 3,
    deps: [{id:"bio_genetics_basic",type:"direct"}],
    desc: {
      what: "Уотсон и Крик расшифровали двойную спираль — молекулярный код жизни. Рентгеновские снимки Франклин это доказали",
      appearance: "Модель двойной спирали из металлических шариков и прутьев; лаборатория в полутьме",
      gives: "Возможность читать и изменять геном; открывает ПЦР и секвенирование"
    }
  },
  {
    id: "bio_pcr", name: "ПЦР — полимеразная реакция", tree: "bio", level: 3,
    deps: [{id:"bio_dna_struct",type:"direct"},{id:"bio_synthesis_drugs",type:"indirect"}],
    desc: {
      what: "Метод Мюллиса: из единственной молекулы ДНК за час сделать миллиард копий. Термоциклер как фотоаппарат для генов",
      appearance: "Маленький прибор с тихим щелчком; на экране — кривые амплификации",
      gives: "Диагностика инфекций (COVID, ВИЧ); криминалистика; открывает секвенирование"
    }
  },
  {
    id: "bio_genome_seq", name: "Геномное секвенирование", tree: "bio", level: 4,
    deps: [{id:"bio_pcr",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Прочитать все 3 миллиарда букв ДНК человека. Проект «Геном человека» занял 15 лет; сегодня это делается за сутки",
      appearance: "Стойки секвенаторов с мигающими огнями; потоки данных на экране — как матрица",
      gives: "Персональная медицина; поиск генов болезней; открывает CRISPR"
    }
  },
  {
    id: "bio_crispr", name: "CRISPR-Cas9", tree: "bio", level: 4,
    deps: [{id:"bio_genome_seq",type:"direct"}],
    desc: {
      what: "Молекулярные ножницы, способные вырезать и вставить любой участок ДНК с точностью до буквы",
      appearance: "Пипетка вводит реагент в культуру клеток; на экране — схема гена до и после редактирования",
      gives: "Лечение наследственных болезней; создание устойчивых к болезням организмов; открывает генную терапию"
    }
  },
  {
    id: "bio_gene_therapy", name: "Генная терапия", tree: "bio", level: 4,
    deps: [{id:"bio_crispr",type:"direct"},{id:"bio_targeted_drugs",type:"indirect"}],
    desc: {
      what: "Доставка исправленных генов прямо в клетки пациента — вирусными векторами или наночастицами",
      appearance: "Капельница с прозрачным раствором; на экране МРТ видно, как маркер распространяется по органу",
      gives: "Лечение муковисцидоза, гемофилии, некоторых форм рака на уровне ДНК"
    }
  },
  {
    id: "bio_synthetic_genome", name: "Синтетический геном", tree: "bio", level: 5,
    deps: [{id:"bio_gene_therapy",type:"direct"},{id:"mat_nano_factory",type:"indirect"}],
    desc: {
      what: "Создание организма с нуля: синтез полного генома, сборка клетки из компонентов, запуск жизни",
      appearance: "ДНК-синтезатор размером с холодильник; чашка Петри с первой колонией искусственных бактерий",
      gives: "Программируемые микроорганизмы-заводы; революция в промышленной биологии"
    }
  },
  {
    id: "bio_designer_organs", name: "Дизайнерские органы", tree: "bio", level: 5,
    deps: [{id:"bio_synthetic_genome",type:"direct"},{id:"mat_bioprint",type:"indirect"}],
    desc: {
      what: "Органы, напечатанные на биопринтере из клеток пациента — никакого отторжения, никакой очереди",
      appearance: "Печатающая головка ползёт по желеобразной сетке, слой за слоем выстраивая сердечный клапан",
      gives: "Конец очереди на донорские органы; персонализированные органы без иммуносупрессии"
    }
  },

  // --- Фармакология ---
  {
    id: "bio_herbal_pharma", name: "Аптекарское дело", tree: "bio", level: 1,
    deps: [{id:"bio_herbs",type:"direct"}],
    desc: {
      what: "Первые аптеки: стандартизация рецептур, весы и меры, хранение препаратов, фармакопея",
      appearance: "Аптека с деревянными ящиками, латинскими ярлыками, запахом камфоры и лаванды",
      gives: "Стандартные дозы; снижение случайных отравлений; основа для химической фармакологии"
    }
  },
  {
    id: "bio_chemistry_pharma", name: "Химия лекарственных веществ", tree: "bio", level: 2,
    deps: [{id:"bio_herbal_pharma",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Выделение активных веществ из растений (морфин из мака, аспирин из коры ивы), понимание их структуры",
      appearance: "Колбы над горелкой, кристаллы на фильтровальной бумаге, запах эфира",
      gives: "Точные дозы активных веществ; основа для синтеза и направленных препаратов"
    }
  },
  {
    id: "bio_synthesis_drugs", name: "Химический синтез препаратов", tree: "bio", level: 3,
    deps: [{id:"bio_chemistry_pharma",type:"direct"}],
    desc: {
      what: "Создание молекул лекарств искусственным путём: сульфаниламиды, барбитураты, первые антидепрессанты",
      appearance: "Промышленный реактор объёмом 10 000 литров; учёные в масках проверяют pH",
      gives: "Масштабное производство; снижение стоимости; открывает антибиотики и таргетные препараты"
    }
  },
  {
    id: "bio_targeted_drugs", name: "Таргетная терапия", tree: "bio", level: 4,
    deps: [{id:"bio_synthesis_drugs",type:"direct"},{id:"bio_dna_struct",type:"indirect"}],
    desc: {
      what: "Препараты, направленные против конкретного белка или рецептора — убивают раковые клетки, не трогая здоровые",
      appearance: "Молекулярная модель антитела, стыкующегося с онкобелком; минимум побочных эффектов",
      gives: "Революция онкологии; лечение аутоиммунных болезней"
    }
  },
  {
    id: "bio_immunotherapy", name: "Иммунотерапия", tree: "bio", level: 4,
    deps: [{id:"bio_vaccination",type:"direct"},{id:"bio_targeted_drugs",type:"indirect"}],
    desc: {
      what: "CAR-T клетки, чекпойнт-ингибиторы: собственная иммунная система пациента переобучается убивать опухоль",
      appearance: "Пакет с переработанными Т-клетками пациента; вливание занимает 30 минут — потом ждёшь чуда",
      gives: "Полная ремиссия у части онкобольных; основа для генной терапии"
    }
  },
  {
    id: "bio_nootropics", name: "Ноотропы и нейрохимия", tree: "bio", level: 4,
    deps: [{id:"bio_synthesis_drugs",type:"direct"},{id:"bio_neuro_basic",type:"indirect"}],
    desc: {
      what: "Препараты, прицельно усиливающие когнитивные функции: рацетамы, модафинил, следующее поколение — умные молекулы",
      appearance: "Таблетки в хромированных блистерах; офисный работник принимает утреннюю дозу с кофе",
      gives: "Ускорение обучения, повышение концентрации; полулегальный рынок когнитивного допинга"
    }
  },
  {
    id: "bio_longevity_drugs", name: "Препараты против старения", tree: "bio", level: 5,
    deps: [{id:"bio_nootropics",type:"direct"},{id:"bio_gene_therapy",type:"indirect"}],
    desc: {
      what: "Сенолитики, ингибиторы mTOR, теломеразные активаторы — вмешательство в сами механизмы клеточного старения",
      appearance: "Клиника долголетия: белые стены, пожилой пациент выглядит на 40; капельница с прозрачным раствором",
      gives: "Замедление старения на 20–30%; продление здорового периода жизни"
    }
  },

  // --- Нейронауки ---
  {
    id: "bio_neuro_basic", name: "Нейрофизиология", tree: "bio", level: 2,
    deps: [{id:"bio_cell_theory",type:"direct"}],
    desc: {
      what: "Изучение нервной системы: нейроны, синапсы, потенциал действия. Открытие электрической природы нервного импульса",
      appearance: "Лаборатория: лягушачья лапка на электродах дёргается от разряда; учёный записывает осциллограмму",
      gives: "Понимание мозга; основа для интерфейсов мозг-компьютер и нейрофармакологии"
    }
  },
  {
    id: "bio_eeg", name: "ЭЭГ и нейровизуализация", tree: "bio", level: 3,
    deps: [{id:"bio_neuro_basic",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "Электроэнцефалография, МРТ, ПЭТ — способы «видеть» работу мозга без вскрытия черепа",
      appearance: "Пациент в шапочке с электродами; за стеклом врач смотрит на карту активности мозга в реальном времени",
      gives: "Диагностика эпилепсии, инсульта, опухолей; основа для пассивных ИМК"
    }
  },
  {
    id: "bio_bmi_passive", name: "Пассивный интерфейс мозг-компьютер", tree: "bio", level: 3,
    deps: [{id:"bio_eeg",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Мозг отдаёт команды компьютеру через считывание ЭЭГ: управление курсором, набор текста силой мысли",
      appearance: "Пациент с парализованными руками смотрит на экран и водит курсором; шлем покрыт электродами",
      gives: "Коммуникация для парализованных; прото-телепатия; основа для активных ИМК"
    }
  },
  {
    id: "bio_cochlear", name: "Кохлеарный имплант", tree: "bio", level: 3,
    deps: [{id:"bio_neuro_basic",type:"direct"},{id:"mat_micro_fab",type:"indirect"}],
    desc: {
      what: "Электрод в улитке уха преобразует звук в нервные импульсы — первый массовый нейронный имплант",
      appearance: "Дуга на ухе, магнит на голове; включают — и мир снова звучит",
      gives: "Слух для глухих; прецедент сенсорных протезов"
    }
  },
  {
    id: "bio_retinal_implant", name: "Ретинальный имплант", tree: "bio", level: 4,
    deps: [{id:"bio_cochlear",type:"direct"},{id:"mat_micro_fab",type:"indirect"}],
    desc: {
      what: "Матрица электродов на сетчатке, камера на очках — грубое зрение для слепых, 60 пикселей → 1000",
      appearance: "Человек в умных очках; хаотичные серые пятна складываются в контуры двери",
      gives: "Частичное зрение для незрячих; путь к дополненному зрению"
    }
  },
  {
    id: "bio_bmi_active", name: "Активный имплант мозг-компьютер", tree: "bio", level: 4,
    deps: [{id:"bio_bmi_passive",type:"direct"},{id:"it_deep_learning",type:"indirect"}],
    desc: {
      what: "Нейралинк и аналоги: массив электродов в мозге читает тысячи нейронов и пишет обратно",
      appearance: "Небольшая монетка под кожей головы; пациент управляет смартфоном без рук — взглядом и мыслью",
      gives: "Прямое управление устройствами; передача ощущений; основа для нейроинтерфейсной сети"
    }
  },
  {
    id: "bio_neural_mesh", name: "Нейронная сетка", tree: "bio", level: 5,
    deps: [{id:"bio_bmi_active",type:"direct"},{id:"mat_nano_materials",type:"indirect"}],
    desc: {
      what: "Гибкая электронная сетка разворачивается в мозге через иглу и покрывает кору: 10 000 каналов записи",
      appearance: "МРТ: мозг покрыт серебристой плёнкой; человек видит данные прямо в поле зрения",
      gives: "Высокоскоростной интерфейс с ИИ; память как внешнее хранилище; армейские применения"
    }
  },
  {
    id: "bio_brain_upload_proto", name: "Прото-загрузка сознания", tree: "bio", level: 5,
    deps: [{id:"bio_neural_mesh",type:"direct"},{id:"it_foundation_model",type:"indirect"}],
    desc: {
      what: "Первые попытки оцифровать структуру нейронных связей и воссоздать их в виртуальной модели",
      appearance: "Умирающий подключён к стойке серверов; через сутки в облаке запускается что-то, называющее себя его именем",
      gives: "Экспериментальное цифровое бессмертие; правовой статус неясен; общество потрясено"
    }
  },

  // --- Биоаугментации ---
  {
    id: "bio_prosthetics_basic", name: "Механические протезы", tree: "bio", level: 1,
    deps: [{id:"bio_surgery_basic",type:"direct"}],
    desc: {
      what: "Деревянная нога, крюк вместо руки, первые шарнирные протезы из кожи и металла",
      appearance: "Ветеран на деревянной ноге; чуть позже — изящный шарнирный протез из вороненой стали",
      gives: "Базовая мобильность; основа для миоэлектрических протезов"
    }
  },
  {
    id: "bio_myoelectric", name: "Миоэлектрический протез", tree: "bio", level: 3,
    deps: [{id:"bio_prosthetics_basic",type:"direct"},{id:"bio_neuro_basic",type:"indirect"}],
    desc: {
      what: "Электроды снимают сигналы мышц культи и управляют электромотором протеза — рука двигается по мысли",
      appearance: "Человек с бело-синим протезом руки берёт стакан воды; легкий жужжащий звук",
      gives: "Функциональная замена руки; открывает умные и кибернетические протезы"
    }
  },
  {
    id: "bio_exo_rehab", name: "Экзоскелет для реабилитации", tree: "bio", level: 3,
    deps: [{id:"bio_prosthetics_basic",type:"direct"},{id:"mat_alloy_basic",type:"indirect"}],
    desc: {
      what: "Лёгкий экзоскелет помогает парализованным заново учиться ходить, снимая нагрузку с повреждённых путей",
      appearance: "Пациент в клинике делает первые шаги в белой металлической обвязке; физиотерапевт рядом",
      gives: "Восстановление двигательных функций; нейропластичность"
    }
  },
  {
    id: "bio_smart_prosthetics", name: "Умный протез", tree: "bio", level: 4,
    deps: [{id:"bio_myoelectric",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Протез с тактильной обратной связью и машинным обучением: адаптируется к хозяину, учит новые хваты",
      appearance: "Рука из чёрного карбона нежно берёт яйцо, не раздавливая; владелец ощущает давление",
      gives: "Почти полноценная замена конечности; начало превосходства над биологической рукой"
    }
  },
  {
    id: "bio_cyber_limb", name: "Кибернетическая конечность", tree: "bio", level: 5,
    deps: [{id:"bio_smart_prosthetics",type:"direct"},{id:"bio_bmi_active",type:"indirect"}],
    desc: {
      what: "Протез, подключённый напрямую к нервной системе через имплант: скорость, сила и точность выше биологической",
      appearance: "Хромированная рука со светодиодными полосами; атлет выжимает 300 кг — и улыбается",
      gives: "Превосходит человеческую физику; военные, рабочие и спортивные применения"
    }
  },
  {
    id: "bio_subdermal_sensors", name: "Подкожные сенсоры", tree: "bio", level: 4,
    deps: [{id:"bio_cochlear",type:"direct"},{id:"mat_nano_coating",type:"indirect"}],
    desc: {
      what: "Вживлённые чипы отслеживают глюкозу, ЧСС, сатурацию — непрерывный мониторинг здоровья изнутри",
      appearance: "Маленький пластырь под кожей запястья; приложение показывает биометрику в реальном времени",
      gives: "Превентивная медицина; «квантифицированное тело»; основа для боевой брони"
    }
  },
  {
    id: "bio_full_replacement", name: "Полная биоаугментация", tree: "bio", level: 5,
    deps: [{id:"bio_cyber_limb",type:"direct"},{id:"bio_subdermal_sensors",type:"direct"}],
    desc: {
      what: "Большинство органов и конечностей заменены кибернетическими аналогами — человек становится больше машиной, чем плотью",
      appearance: "Существо с человеческим лицом; под одеждой — титан, карбон и провода. Паспорт человека, тело машины",
      gives: "Кибернетическое превосходство; долголетие; нарастающий экзистенциальный кризис"
    }
  },

  // ============================================================
  //  ДЕРЕВО: ВООРУЖЕНИЕ И ТАКТИКА
  // ============================================================

  {
    id: "wp_root", name: "Племенная война", tree: "weapons", level: 0, deps: [],
    desc: {
      what: "Копья, луки, боевое искусство передаётся устно. Стратегия — численностью и внезапностью",
      appearance: "Воины с раскрашенными телами, копья и топоры из камня и кости",
      gives: "Открывает холодное оружие и первые тактические доктрины"
    }
  },

  // --- Холодное оружие ---
  {
    id: "wp_iron_sword", name: "Железный меч", tree: "weapons", level: 1,
    deps: [{id:"wp_root",type:"direct"},{id:"mat_iron_smelting",type:"indirect"}],
    desc: {
      what: "Переход от бронзы к железу: дешевле, тверже, ковать может почти каждый кузнец",
      appearance: "Прямой клинок с простой крестовиной; кузница с красным светом наковальни",
      gives: "Массовое вооружение пехоты; феодальное рыцарство"
    }
  },
  {
    id: "wp_steel_blade", name: "Стальное клинковое оружие", tree: "weapons", level: 2,
    deps: [{id:"wp_iron_sword",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Дамасская сталь, катана, рапира — холодное оружие достигает пика совершенства",
      appearance: "Мастер-оружейник держит клинок на свет; волнистый узор на металле",
      gives: "Баланс и твёрдость; искусство фехтования; последний расцвет перед огнестрелом"
    }
  },
  {
    id: "wp_plate_armor", name: "Пластинчатый доспех", tree: "weapons", level: 2,
    deps: [{id:"wp_iron_sword",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Полный рыцарский доспех: анатомически подогнанные пластины защищают от стрел и мечей",
      appearance: "Рыцарь в зерцале — живая статуя из полированной стали; оруженосец помогает надеть перчатку",
      gives: "Максимальная защита всадника; становится бесполезным против пик и мушкетов"
    }
  },
  {
    id: "wp_crossbow", name: "Арбалет и составной лук", tree: "weapons", level: 1,
    deps: [{id:"wp_root",type:"direct"}],
    desc: {
      what: "Арбалет пробивает доспех без многолетней тренировки; английский длинный лук — скорострельный и точный",
      appearance: "Арбалетчик у крепостной стены натягивает воротом тетиву; болт улетает с глухим щелчком",
      gives: "Дальнобойная пехота; контрмера против конницы"
    }
  },
  {
    id: "wp_pike_formation", name: "Пиковая тактика", tree: "weapons", level: 2,
    deps: [{id:"wp_crossbow",type:"direct"},{id:"wp_tactics_feudal",type:"direct"}],
    desc: {
      what: "Швейцарские пикинеры и испанский терцио: дисциплина и строй важнее рыцарского героизма",
      appearance: "Квадрат из 200 солдат с пятиметровыми пиками; конница разворачивается, не решаясь атаковать",
      gives: "Конец рыцарской кавалерии; переход к профессиональным армиям"
    }
  },
  {
    id: "wp_gunpowder_intro", name: "Введение пороха", tree: "weapons", level: 2,
    deps: [{id:"wp_crossbow",type:"direct"}],
    desc: {
      what: "Первые бомбарды и ручницы — громкие, ненадёжные, медленно заряжаемые, но меняющие всё",
      appearance: "Каменное ядро влетает в стену замка; облако белого дыма; осаждённые в панике",
      gives: "Артиллерия делает замки устаревшими; открывает эпоху огнестрельного оружия"
    }
  },

  // --- Стрелковое оружие ---
  {
    id: "wp_musket", name: "Мушкет", tree: "weapons", level: 2,
    deps: [{id:"wp_gunpowder_intro",type:"direct"}],
    desc: {
      what: "Кремнёвый мушкет — дёшев, прост, убивает без обучения. Тактика шеренг и залповый огонь",
      appearance: "Шеренга солдат в треугольных шляпах, белый дым залпа, запах серы",
      gives: "Массовые армии вместо профессиональных; конец феодальной пехоты"
    }
  },
  {
    id: "wp_rifling", name: "Нарезное оружие", tree: "weapons", level: 3,
    deps: [{id:"wp_musket",type:"direct"}],
    desc: {
      what: "Спиральные нарезы в стволе закручивают пулю — точность и дальность ×3. Штуцер и пуля Минье",
      appearance: "Снайпер укрыт за камнем; один выстрел — и всадник падает с 400 метров",
      gives: "Снайперская война; тактика рассыпного строя вместо шеренг"
    }
  },
  {
    id: "wp_bolt_action", name: "Магазинная винтовка", tree: "weapons", level: 3,
    deps: [{id:"wp_rifling",type:"direct"}],
    desc: {
      what: "Скользящий затвор, обойма на 5 патронов. Маузер 98, Мосин, Ли-Энфилд — оружие двух мировых войн",
      appearance: "Солдат в окопе досылает затвором патрон; гильза летит в сторону",
      gives: "Плотный огонь пехоты; окопная война"
    }
  },
  {
    id: "wp_semi_auto", name: "Самозарядное оружие", tree: "weapons", level: 3,
    deps: [{id:"wp_bolt_action",type:"direct"}],
    desc: {
      what: "Автоматический перезаряд за счёт энергии выстрела: M1 Garand, SVT, Вальтер П38",
      appearance: "Боец поднимается из окопа, стреляет восемь раз не думая о затворе",
      gives: "Скорострельность пехоты ×2; шаг к штурмовым винтовкам"
    }
  },
  {
    id: "wp_assault_rifle", name: "Штурмовая винтовка", tree: "weapons", level: 4,
    deps: [{id:"wp_semi_auto",type:"direct"}],
    desc: {
      what: "АК-47, M16 — оружие войн второй половины XX века. Промежуточный патрон, отъёмный магазин, автоогонь",
      appearance: "Солдат кладёт рожок под углом и передёргивает затвор; характерный щелчок",
      gives: "Доминирование пехоты ближнего боя; АК — самое распространённое оружие в мире"
    }
  },
  {
    id: "wp_caseless_ammo", name: "Безгильзовый патрон", tree: "weapons", level: 4,
    deps: [{id:"wp_assault_rifle",type:"direct"},{id:"mat_polymers",type:"indirect"}],
    desc: {
      what: "Пуля и пороховой заряд без металлической гильзы — меньше вес боеприпасов, выше темп стрельбы",
      appearance: "Боец несёт вдвое больше патронов той же массой; пластиковые кубики вместо латунных цилиндров",
      gives: "Увеличение носимого боезапаса; упрощение автоматики"
    }
  },
  {
    id: "wp_smart_rifle", name: "Умная винтовка", tree: "weapons", level: 5,
    deps: [{id:"wp_caseless_ammo",type:"direct"},{id:"it_cv_basic",type:"indirect"}],
    desc: {
      what: "Прицел с компьютерным зрением: сам отслеживает цель, учитывает ветер и движение, спускает курок в нужный момент",
      appearance: "Снайпер видит метки на цели через экран; курок нажимается сам, когда прицел совпадает",
      gives: "Точность профессионального снайпера — у любого бойца"
    }
  },
  {
    id: "wp_rail_personal", name: "Рельсотрон личный", tree: "weapons", level: 5,
    deps: [{id:"wp_smart_rifle",type:"direct"},{id:"mat_solid_battery",type:"indirect"}],
    desc: {
      what: "Портативный электромагнитный ускоритель: беззвучный, без гильз, скорость снаряда 2 км/с",
      appearance: "Матовое оружие с сотовой батарей в прикладе; выстрел — только щелчок и сверхзвуковой хлопок снаряда",
      gives: "Бронепробиваемость нового уровня; ни дыма, ни звука выстрела"
    }
  },

  // --- Артиллерия ---
  {
    id: "wp_cannon", name: "Осадная артиллерия", tree: "weapons", level: 2,
    deps: [{id:"wp_gunpowder_intro",type:"direct"}],
    desc: {
      what: "Бронзовые и чугунные пушки сносят стены замков — феодальная фортификация устаревает за столетие",
      appearance: "Огромная бомбарда на деревянных катках; грохот и дымовая стена после выстрела",
      gives: "Конец средневековой крепостной архитектуры; звезчатые форты в ответ"
    }
  },
  {
    id: "wp_howitzer", name: "Гаубица и полевая артиллерия", tree: "weapons", level: 3,
    deps: [{id:"wp_cannon",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Стальные орудия с нарезным стволом и переменным зарядом — стреляют навесом из укрытия за холмом",
      appearance: "Орудие в окопе задирает ствол под 70°; расчёт работает как единый механизм",
      gives: "Непрямой огонь; артиллерия становится «богом войны»"
    }
  },
  {
    id: "wp_tank_basic", name: "Первый танк", tree: "weapons", level: 3,
    deps: [{id:"wp_howitzer",type:"direct"},{id:"mat_combustion_engine",type:"indirect"}],
    desc: {
      what: "Ромбовидный металлический монстр 1916 года ползёт через траншеи — пулемёты его не берут",
      appearance: "Марк I переваливается через окоп; пехота следует за ним в пыли и выхлопе",
      gives: "Прорыв линии окопной обороны; новый вид войск"
    }
  },
  {
    id: "wp_tank_modern", name: "Основной боевой танк", tree: "weapons", level: 4,
    deps: [{id:"wp_tank_basic",type:"direct"},{id:"mat_alloy_basic",type:"indirect"}],
    desc: {
      what: "Т-72, Abrams, Leopard — 60-тонные машины с составной бронёй, лазерным дальномером и ночным прицелом",
      appearance: "Приземистая машина с реактивной бронёй, стабилизированная пушка поворачивается в движении",
      gives: "Доминирование в бронетанковом бою; символ военной мощи"
    }
  },
  {
    id: "wp_artillery_guided", name: "Управляемые боеприпасы", tree: "weapons", level: 4,
    deps: [{id:"wp_howitzer",type:"direct"},{id:"sp_gps",type:"indirect"}],
    desc: {
      what: "Снаряды с GPS-коррекцией (Excalibur) или лазерным наведением: КВО 5 метров вместо 200",
      appearance: "Снаряд корректирует траекторию рулевыми плоскостями; попадание в окно здания",
      gives: "«Хирургические» удары без массовых разрушений; революция точности"
    }
  },
  {
    id: "wp_loitering_munition", name: "Барражирующий боеприпас", tree: "weapons", level: 5,
    deps: [{id:"wp_artillery_guided",type:"direct"},{id:"wp_drone_strike",type:"indirect"}],
    desc: {
      what: "Камикадзе-дрон: барражирует часами в районе цели, сам выбирает момент атаки и пикирует",
      appearance: "Тихий самолётик кружит над полем боя; оператор видит мир его камерой; удар — и вспышка",
      gives: "Точечное поражение без тяжёлой авиации; меняет артиллерийскую тактику"
    }
  },
  {
    id: "wp_hypervelocity_cannon", name: "Гиперзвуковая пушка", tree: "weapons", level: 5,
    deps: [{id:"wp_hypersonic",type:"direct"},{id:"mat_superalloy",type:"indirect"}],
    desc: {
      what: "Электромагнитная пушка корабельного или берегового базирования: снаряд летит на 400 км за 6 минут",
      appearance: "Орудие длиной 30 метров на военном корабле; вспышка плазмы при выстреле видна с берега",
      gives: "Замена крылатых ракет в противокорабельном бою; дешевле ракеты в 100 раз"
    }
  },

  // --- Ракеты ---
  {
    id: "wp_rocket_basic", name: "Боевые ракеты", tree: "weapons", level: 2,
    deps: [{id:"wp_cannon",type:"direct"}],
    desc: {
      what: "Ракеты Конгрива, РСЗО «Катюша» — неточные, но психологически сокрушительные",
      appearance: "Залп «Катюши»: 40 огненных хвостов уходит в небо за две секунды; земля дрожит",
      gives: "Массированный неточный огонь; предшественник управляемых ракет"
    }
  },
  {
    id: "wp_guided_missile", name: "Управляемая ракета", tree: "weapons", level: 3,
    deps: [{id:"wp_rocket_basic",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "Fritz-X, V-1 — первые ракеты с наведением. После войны: ПТУР, зенитные ракеты, AGM",
      appearance: "Оператор ведёт ракету джойстиком по проводу; на экране — танк приближается и исчезает в огне",
      gives: "Противотанковое оружие в руках пехоты; ПВО"
    }
  },
  {
    id: "wp_cruise_missile", name: "Крылатая ракета", tree: "weapons", level: 4,
    deps: [{id:"wp_guided_missile",type:"direct"},{id:"sp_gps",type:"indirect"}],
    desc: {
      what: "Tomahawk и аналоги: летят 1500 км на высоте 50 метров, огибают рельеф, бьют в окно",
      appearance: "Серая сигара с крылышками выходит из пусковой трубы на корабле; пропадает за горизонтом",
      gives: "Точный удар без риска для экипажа; основа современной военной авиации"
    }
  },
  {
    id: "wp_icbm", name: "Межконтинентальные баллистические ракеты", tree: "weapons", level: 4,
    deps: [{id:"wp_rocket_basic",type:"direct"},{id:"sp_rocket_theory",type:"indirect"}],
    desc: {
      what: "МБР с ядерными боеголовками: 30 минут от пуска до Нью-Йорка. Взаимное гарантированное уничтожение",
      appearance: "Ракета выходит из шахты в облаке пара; 8000 км через космос, 10 боеголовок расходятся",
      gives: "Ядерное сдерживание; холодная война; MAD"
    }
  },
  {
    id: "wp_hypersonic", name: "Гиперзвуковое оружие", tree: "weapons", level: 5,
    deps: [{id:"wp_cruise_missile",type:"direct"},{id:"mat_superalloy",type:"indirect"}],
    desc: {
      what: "Планирующие боеголовки Mach 20+ и гиперзвуковые крылатые ракеты: ПРО их не видит вовремя",
      appearance: "Плазменный конус окружает корпус на скорости 6 км/с; цель поражена через 10 минут после пуска",
      gives: "Невозможность перехвата существующими средствами ПРО"
    }
  },
  {
    id: "wp_swarm_missiles", name: "Роевые ракеты", tree: "weapons", level: 5,
    deps: [{id:"wp_hypersonic",type:"direct"},{id:"it_reinforcement",type:"indirect"}],
    desc: {
      what: "Сотни малых ракет с коллективным ИИ: один носитель выпускает рой, который сам распределяет цели",
      appearance: "Корабль с сотней пусковых ячеек; облако ракет расходится в разные стороны",
      gives: "Насыщение любой ПРО; кооперативная тактика беспилотников и ракет"
    }
  },

  // --- Кибервооружение и дроны ---
  {
    id: "wp_drone_recon", name: "Разведывательный БПЛА", tree: "weapons", level: 3,
    deps: [{id:"wp_guided_missile",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "Беспилотник в роли воздушного глаза: Global Hawk, Hermes — часами барражирует и передаёт видео",
      appearance: "Белый самолётик без кабины на высоте 15 км; оператор в трейлере в тысяче миль",
      gives: "Видеть поле боя в реальном времени; данные для артиллерии"
    }
  },
  {
    id: "wp_drone_strike", name: "Ударный БПЛА", tree: "weapons", level: 4,
    deps: [{id:"wp_drone_recon",type:"direct"}],
    desc: {
      what: "Predator, Reaper, Bayraktar: беспилотники несут ракеты и бьют по целям без риска для пилота",
      appearance: "Экран оператора в Неваде, цель в Йемене; нажатие кнопки — вспышка на экране",
      gives: "Асимметричная воздушная мощь; этические споры о дистанционном убийстве"
    }
  },
  {
    id: "wp_drone_swarm", name: "Дроновый рой", tree: "weapons", level: 5,
    deps: [{id:"wp_drone_strike",type:"direct"},{id:"it_reinforcement",type:"indirect"}],
    desc: {
      what: "Тысячи малых БПЛА с коллективным ИИ действуют как единый организм: слепят ПВО, ищут и атакуют цели",
      appearance: "Тёмное небо над городом пронизано тысячами светящихся точек; они движутся как стая птиц",
      gives: "Насыщение любой традиционной ПВО; новая тактическая парадигма"
    }
  },
  {
    id: "wp_cyberweapon_basic", name: "Кибероружие", tree: "weapons", level: 3,
    deps: [{id:"it_algorithm_basic",type:"indirect"},{id:"wp_root",type:"direct"}],
    desc: {
      what: "Stuxnet и его потомки: вирусы, направленные против промышленных систем и критической инфраструктуры",
      appearance: "Центрифуги на заводе начинают вибрировать не так, как надо; экраны мониторинга не замечают ничего",
      gives: "Физические разрушения без бомб; атаки на электросети и банки"
    }
  },
  {
    id: "wp_ai_targeting", name: "ИИ-целеуказание", tree: "weapons", level: 4,
    deps: [{id:"wp_drone_recon",type:"direct"},{id:"it_cv_basic",type:"indirect"}],
    desc: {
      what: "Системы компьютерного зрения автоматически классифицируют цели на видео с дронов и предлагают удар",
      appearance: "На экране аналитика — видео с подсвеченными прямоугольниками: танк/машина/люди",
      gives: "Скорость обработки разведданных ×100; спорные вопросы об автономных убийствах"
    }
  },
  {
    id: "wp_autonomous_weapon", name: "Автономное летальное оружие", tree: "weapons", level: 5,
    deps: [{id:"wp_ai_targeting",type:"direct"},{id:"it_foundation_model",type:"indirect"}],
    desc: {
      what: "Система самостоятельно находит, идентифицирует и поражает цели без участия человека в петле",
      appearance: "Дрон размером с лопату: садится на крышу, ждёт, атакует когда проходит цель",
      gives: "Войны без солдат; международный запрет обсуждается но не принят; гонка вооружений"
    }
  },
  {
    id: "wp_emp_weapon", name: "ЭМИ-оружие", tree: "weapons", level: 4,
    deps: [{id:"wp_guided_missile",type:"direct"},{id:"mat_nuclear_fission",type:"indirect"}],
    desc: {
      what: "Электромагнитный импульс выводит из строя электронику: от ядерного взрыва до направленных генераторов",
      appearance: "Над городом вспышка — не взрыв, только свет; все экраны гаснут, машины останавливаются",
      gives: "Нейтрализация высокотехнологичного противника; нелетальная победа"
    }
  },
  {
    id: "wp_laser_weapon", name: "Боевой лазер", tree: "weapons", level: 5,
    deps: [{id:"wp_emp_weapon",type:"direct"},{id:"mat_solid_battery",type:"indirect"}],
    desc: {
      what: "Мегаваттный лазер на кораблях и машинах: сбивает дроны, ракеты и самолёты со скоростью света",
      appearance: "Незаметный луч с корабля — дрон-мишень вспыхивает и падает через 2 секунды",
      gives: "Боеприпасы стоят $1 за выстрел; ограничение — атмосфера и мощность генератора"
    }
  },
  {
    id: "wp_railgun_field", name: "Полевой рельсотрон", tree: "weapons", level: 5,
    deps: [{id:"wp_hypervelocity_cannon",type:"direct"},{id:"mat_solid_battery",type:"indirect"}],
    desc: {
      what: "Мобильная электромагнитная пушка на гусеничном шасси: нет пороха, нет дыма, снаряд Mach 6",
      appearance: "Приземистая машина с длинным стволом и горбом конденсаторов; выстрел — синяя вспышка",
      gives: "Точная гиперзвуковая кинетика без ракет; дёшево, быстро перезаряжается"
    }
  },

  // --- Тактика ---
  {
    id: "wp_tactics_feudal", name: "Феодальная тактика", tree: "weapons", level: 1,
    deps: [{id:"wp_root",type:"direct"}],
    desc: {
      what: "Конная рыцарская атака в центре, пехота по флангам, замок как база — логика феодальной войны",
      appearance: "Рыцарь ведёт конную атаку; копьё опущено; пехота бежит сзади",
      gives: "Скоординированная феодальная армия; основа линейной тактики"
    }
  },
  {
    id: "wp_tactics_linear", name: "Линейная тактика", tree: "weapons", level: 2,
    deps: [{id:"wp_tactics_feudal",type:"direct"},{id:"wp_musket",type:"direct"}],
    desc: {
      what: "Три шеренги мушкетёров дают циклические залпы; артиллерия на флангах; штыковой удар завершает",
      appearance: "Два войска сходятся в 100 метрах и стреляют в упор; красные мундиры тают на глазах",
      gives: "Максимальная концентрация огня из гладкоствольного оружия"
    }
  },
  {
    id: "wp_tactics_combined", name: "Общевойсковой бой", tree: "weapons", level: 3,
    deps: [{id:"wp_tactics_linear",type:"direct"},{id:"wp_tank_basic",type:"indirect"}],
    desc: {
      what: "Взаимодействие танков, пехоты, артиллерии и авиации как единого организма — основа XX-XXI века",
      appearance: "Танки идут вперёд, пехота за ними, вертолёты прикрывают фланги, штаб на связи",
      gives: "Современная армия; открывает сетецентрическую войну"
    }
  },
  {
    id: "wp_logistics_modern", name: "Военная логистика", tree: "weapons", level: 3,
    deps: [{id:"wp_tactics_combined",type:"direct"},{id:"mat_combustion_engine",type:"indirect"}],
    desc: {
      what: "«Война — дело логистики»: цепочки снабжения, железные дороги, автоколонны, военные порты",
      appearance: "Огромный склад с ящиками до потолка; грузовики выезжают один за другим",
      gives: "Операции на 1000+ км; поддержание темпа наступления"
    }
  },
  {
    id: "wp_c2_network", name: "Цифровое командование C2", tree: "weapons", level: 4,
    deps: [{id:"wp_tactics_combined",type:"direct"},{id:"it_mobile_4g",type:"indirect"}],
    desc: {
      what: "Единая цифровая карта поля боя: каждый солдат виден как точка, данные разведки обновляются в реальном времени",
      appearance: "Штаб в бронированном трейлере; стена экранов с живой картой, офицеры в гарнитурах",
      gives: "Децентрализованное выполнение — командир задаёт цель, подразделение само находит путь"
    }
  },
  {
    id: "wp_battlespace_ai", name: "ИИ управления боем", tree: "weapons", level: 5,
    deps: [{id:"wp_c2_network",type:"direct"},{id:"it_foundation_model",type:"indirect"}],
    desc: {
      what: "ИИ обрабатывает весь поток данных, предлагает оптимальные решения и отдаёт часть команд автоматически",
      appearance: "Экран показывает «Оптимальный манёвр: бросить 3-й батальон на юг». Командир нажимает «Принять»",
      gives: "Скорость принятия решений в разы выше противника; исход боя решается до его начала"
    }
  },

  // ============================================================
  //  ДЕРЕВО: КОСМОС И АСТРОФИЗИКА
  // ============================================================

  {
    id: "sp_root", name: "Небесная механика", tree: "space", level: 0, deps: [],
    desc: {
      what: "Наблюдение за звёздами невооружённым глазом: календари, навигация, астрологические таблицы",
      appearance: "Астроном на крыше башни чертит дуги на пергаменте; небо полно звёзд",
      gives: "Открывает оптику, спектроскопию и ракетные теории"
    }
  },

  // --- Ракетостроение ---
  {
    id: "sp_rocket_theory", name: "Теория ракетного движения", tree: "space", level: 1,
    deps: [{id:"sp_root",type:"direct"}],
    desc: {
      what: "Циолковский, Оберт, Годдард: уравнение ракеты, жидкостные двигатели, идея многоступенчатых носителей",
      appearance: "Рукописные формулы и эскизы ракет на листах бумаги в скромном кабинете; Циолковский смотрит в окно",
      gives: "Концептуальная база для реального ракетостроения"
    }
  },
  {
    id: "sp_liquid_engine", name: "Жидкостный ракетный двигатель", tree: "space", level: 2,
    deps: [{id:"sp_rocket_theory",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Годдард, затем Фау-2 и советская Р-7: жидкий кислород и керосин дают управляемую тягу",
      appearance: "Испытательный стенд: двигатель рявкает огнём и дымом, стрелки приборов прыгают",
      gives: "Первые баллистические ракеты; путь к орбите"
    }
  },
  {
    id: "sp_staging", name: "Многоступенчатые ракеты", tree: "space", level: 3,
    deps: [{id:"sp_liquid_engine",type:"direct"}],
    desc: {
      what: "Сатурн-5, Р-7: сброс пустых ступеней на пути к орбите — единственный способ добраться до неё с разумной массой",
      appearance: "Ракета поднимается; первая ступень с грохотом отделяется и медленно падает назад",
      gives: "Орбитальные полёты; полёт на Луну"
    }
  },
  {
    id: "sp_reusable_rocket", name: "Многоразовые ракеты", tree: "space", level: 4,
    deps: [{id:"sp_staging",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Falcon 9 и Starship: первая ступень возвращается и садится вертикально. Стоимость запуска падает в 10 раз",
      appearance: "Первая ступень пикирует на посадочную площадку и мягко приземляется на огненных струях",
      gives: "Резкое удешевление запусков; коммерческий космос"
    }
  },
  {
    id: "sp_heavy_lift", name: "Сверхтяжёлый носитель", tree: "space", level: 4,
    deps: [{id:"sp_reusable_rocket",type:"direct"},{id:"mat_superalloy",type:"indirect"}],
    desc: {
      what: "SLS, Starship, New Glenn: 100+ тонн на орбиту. Только такие ракеты могут доставить людей на Марс",
      appearance: "Ракета высотой 120 м медленно поднимается; огненный хвост видно за 100 км",
      gives: "Марсианские миссии; крупные орбитальные конструкции"
    }
  },
  {
    id: "sp_nuclear_thermal", name: "Ядерный тепловой двигатель", tree: "space", level: 5,
    deps: [{id:"sp_heavy_lift",type:"direct"},{id:"mat_nuclear_fission",type:"indirect"}],
    desc: {
      what: "Реактор нагревает водород до 3000°C: Isp вдвое выше химического двигателя — Марс за 3 месяца",
      appearance: "Ракета с характерным синим свечением вокруг дюзы; термозащита вокруг реактора",
      gives: "Быстрые межпланетные перелёты; Юпитер достижим"
    }
  },
  {
    id: "sp_advanced_propulsion", name: "Ионные и плазменные двигатели", tree: "space", level: 5,
    deps: [{id:"sp_nuclear_thermal",type:"direct"},{id:"mat_fusion_proto",type:"indirect"}],
    desc: {
      what: "Hall-thruster и VASIMR: малая тяга, но немыслимый импульс — идеально для межпланетных роботов и будущих кораблей",
      appearance: "Голубое свечение плазменного факела размером с ладонь; корабль разгоняется месяцами",
      gives: "Дальний космос без огромных запасов топлива"
    }
  },

  // --- Спутники ---
  {
    id: "sp_sputnik", name: "Первый спутник", tree: "space", level: 3,
    deps: [{id:"sp_staging",type:"direct"}],
    desc: {
      what: "Спутник-1 — металлический шар с антеннами, пищащий «бип-бип» из космоса. Мир изменился за 98 минут",
      appearance: "Полированная сфера в ангаре; потом ночное небо и радиоприёмник ловит сигнал",
      gives: "Начало космической гонки; прецедент свободного пролёта над любой страной"
    }
  },
  {
    id: "sp_comm_sat", name: "Спутник связи", tree: "space", level: 3,
    deps: [{id:"sp_sputnik",type:"direct"},{id:"it_radio",type:"indirect"}],
    desc: {
      what: "Telstar, Intelsat — ретрансляторы на геостационарной орбите делают глобальную связь мгновенной",
      appearance: "Золотая конструкция с зеркальными панелями висит над планетой; ТВ-сигнал идёт через неё",
      gives: "Мировое телевидение; международная телефония; интернет-инфраструктура"
    }
  },
  {
    id: "sp_gps", name: "Глобальная навигация (GPS/ГЛОНАСС)", tree: "space", level: 4,
    deps: [{id:"sp_comm_sat",type:"direct"}],
    desc: {
      what: "24 спутника синхронизируют время и позволяют любому устройству узнать координаты с точностью до метра",
      appearance: "Смартфон в кармане; синяя точка на карте движется по улице",
      gives: "Революция навигации, логистики, военной точности; открывает умные боеприпасы"
    }
  },
  {
    id: "sp_spy_sat", name: "Разведывательный спутник", tree: "space", level: 3,
    deps: [{id:"sp_sputnik",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "KH-11, «Янтарь»: оптика разрешением 10 см с орбиты. Считают самолёты на аэродромах",
      appearance: "Спутник размером с автобус; ниже — военная база, видная как на ладони",
      gives: "Разведка без нарушения границ; контроль ядерных договоров"
    }
  },
  {
    id: "sp_space_station", name: "Орбитальная станция", tree: "space", level: 4,
    deps: [{id:"sp_sputnik",type:"direct"},{id:"sp_heavy_lift",type:"direct"}],
    desc: {
      what: "МКС, Мир, Тяньгун — постоянное человеческое присутствие в космосе, научная лаборатория на орбите",
      appearance: "Решётчатая конструкция с золотыми панелями медленно плывёт на закатном небе",
      gives: "Длительные полёты; медицина микрогравитации; опыт для межпланетных миссий"
    }
  },
  {
    id: "sp_orbital_solar", name: "Орбитальная солнечная электростанция", tree: "space", level: 5,
    deps: [{id:"sp_space_station",type:"direct"},{id:"mat_wireless_power",type:"indirect"}],
    desc: {
      what: "Гигантская панель собирает солнце 24/7 и передаёт энергию микроволнами на Землю",
      appearance: "Структура размером с город медленно вращается; луч микроволн невидим, но приёмник светится",
      gives: "Неиссякаемая чистая энергия; независимость от погоды"
    }
  },
  {
    id: "sp_megaconstellation", name: "Мегасозвездие спутников", tree: "space", level: 5,
    deps: [{id:"sp_gps",type:"direct"},{id:"sp_reusable_rocket",type:"direct"}],
    desc: {
      what: "Starlink, OneWeb: тысячи мелких спутников дают широкополосный интернет в любой точке Земли",
      appearance: "Ночью — цепочка огоньков, как жемчуг через всё небо; деревня в Антарктиде смотрит YouTube",
      gives: "Глобальный интернет без наземной инфраструктуры; новые задачи для астрономов"
    }
  },

  // --- Исследование Солнечной системы ---
  {
    id: "sp_moon_landing", name: "Лунная программа", tree: "space", level: 3,
    deps: [{id:"sp_staging",type:"direct"}],
    desc: {
      what: "Аполлон-11: люди на Луне. 600 млн зрителей смотрели в прямом эфире. «Один маленький шаг...»",
      appearance: "Лунный модуль стоит на сером реголите; два скафандра под чёрным небом со звёздами",
      gives: "Технологии систем жизнеобеспечения; импульс всей космической науки"
    }
  },
  {
    id: "sp_mars_probe", name: "Зонды на Марс", tree: "space", level: 3,
    deps: [{id:"sp_sputnik",type:"direct"}],
    desc: {
      what: "Маринер, Викинг, Марс Патфайндер, Curiosity — каждое поколение роверов узнаёт о красной планете больше",
      appearance: "Ровер на ржавой равнине; колёса оставляют следы в пыли миллионов лет",
      gives: "Карты Марса; данные об атмосфере и воде; готовность к пилотируемой миссии"
    }
  },
  {
    id: "sp_outer_planets", name: "Исследование внешних планет", tree: "space", level: 4,
    deps: [{id:"sp_mars_probe",type:"direct"},{id:"sp_advanced_propulsion",type:"indirect"}],
    desc: {
      what: "Вояджер, Кассини, Юнона: гравитационные манёвры уносят аппараты к Юпитеру, Сатурну и дальше",
      appearance: "Снимок Земли с расстояния 6 млрд км — бледно-голубая точка в луче света",
      gives: "Спутники с океанами (Европа, Энцелад); возможная внеземная жизнь"
    }
  },
  {
    id: "sp_asteroid_mining", name: "Добыча ресурсов на астероидах", tree: "space", level: 5,
    deps: [{id:"sp_outer_planets",type:"direct"},{id:"mat_robotic_factory",type:"indirect"}],
    desc: {
      what: "Роботы-горнодобытчики летят к металлическим астероидам класса М за железом, никелем и платиноидами",
      appearance: "Аппарат разворачивает буровую установку на поверхности тёмной скалы; Земля видна как звёздочка",
      gives: "Ресурсная независимость в космосе; угроза земным рынкам металлов"
    }
  },
  {
    id: "sp_mars_colony", name: "Марсианская колония", tree: "space", level: 5,
    deps: [{id:"sp_mars_probe",type:"direct"},{id:"sp_heavy_lift",type:"direct"}],
    desc: {
      what: "Первые 100 человек живут в надувных модулях под красным небом: выращивают еду, добывают воду из льда",
      appearance: "Купола на равнине Элизий; внутри — зелень под искусственным светом и запах земли",
      gives: "Мультипланетарный вид; страховка человечества"
    }
  },
  {
    id: "sp_space_elevator", name: "Космический лифт", tree: "space", level: 5,
    deps: [{id:"sp_megaconstellation",type:"direct"},{id:"mat_cnt",type:"indirect"}],
    desc: {
      what: "Трос из углеродных нанотрубок от экватора до геостационарной орбиты: грузовые кабины едут без ракет",
      appearance: "Тонкая линия уходит из горизонта в зенит; кабина ползёт по ней 7 суток вверх",
      gives: "Стоимость груза на орбиту — $100/кг вместо $1000; революция всей космонавтики"
    }
  },

  // --- Астрофизика ---
  {
    id: "sp_optics_basic", name: "Оптические инструменты", tree: "space", level: 1,
    deps: [{id:"sp_root",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Телескоп Галилея открывает спутники Юпитера и горы на Луне. Небо больше не то, что раньше",
      appearance: "Деревянная труба на подоконнике; учёный держится за неё и смотрит в небо",
      gives: "Гелиоцентризм доказан наблюдениями; астрономия как наука"
    }
  },
  {
    id: "sp_spectroscopy", name: "Спектроскопия", tree: "space", level: 2,
    deps: [{id:"sp_optics_basic",type:"direct"}],
    desc: {
      what: "Разложение света звёзды на спектр открывает её состав, температуру и скорость — без полёта к ней",
      appearance: "Радужная полоска с тёмными линиями поглощения; каждая линия — химический элемент",
      gives: "Состав звёзд; красное смещение; скорость расширения Вселенной"
    }
  },
  {
    id: "sp_radio_telescope", name: "Радиотелескоп", tree: "space", level: 3,
    deps: [{id:"sp_spectroscopy",type:"direct"},{id:"it_radio",type:"indirect"}],
    desc: {
      what: "РАТАН-600, Аресибо, SKA: огромные тарелки слушают радиошум Вселенной — пульсары, квазары, реликтовое излучение",
      appearance: "Белое блюдо 300 метров в горах; небо затянуто тучами, но радиоволнам всё равно",
      gives: "Карты радиоизлучения галактик; поиск внеземного разума"
    }
  },
  {
    id: "sp_space_telescope", name: "Орбитальные телескопы", tree: "space", level: 4,
    deps: [{id:"sp_radio_telescope",type:"direct"},{id:"sp_sputnik",type:"direct"}],
    desc: {
      what: "Хаббл, Джеймс Уэбб: над атмосферой нет мерцания и поглощения — видно до начала времён",
      appearance: "Золотой щит Уэбба разворачивается в пустоте; первый снимок — тысячи галактик там, где казалось пусто",
      gives: "Возраст Вселенной; экзопланеты; первые звёзды"
    }
  },
  {
    id: "sp_gravitational_waves", name: "Детектор гравитационных волн", tree: "space", level: 4,
    deps: [{id:"sp_space_telescope",type:"direct"}],
    desc: {
      what: "LIGO/VIRGO: 4-километровые интерферометры улавливают искажение пространства от слиянии чёрных дыр",
      appearance: "Два коридора длиной 4 км под прямым углом; лазер измеряет длину с точностью до протона",
      gives: "Новая «астрономия» без света; сигнатуры чёрных дыр и нейтронных звёзд"
    }
  },
  {
    id: "sp_exoplanet_survey", name: "Каталог экзопланет", tree: "space", level: 4,
    deps: [{id:"sp_space_telescope",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Кеплер, TESS, CHEOPS: 5000+ подтверждённых планет у других звёзд, десятки в зоне обитаемости",
      appearance: "Кривая яркости звезды проседает — планета прошла перед ней; программа ИИ отмечает кандидата",
      gives: "Список целей для будущих поисков жизни и межзвёздных миссий"
    }
  },
  {
    id: "sp_seti_active", name: "Активный SETI", tree: "space", level: 5,
    deps: [{id:"sp_exoplanet_survey",type:"direct"},{id:"it_foundation_model",type:"indirect"}],
    desc: {
      what: "Не только слушать, но и отправлять: лазерные и радиосигналы направлены к ближайшим обитаемым мирам",
      appearance: "Мощный лазерный передатчик на горной вершине мигает кодом простых чисел в ночное небо",
      gives: "Возможный контакт — или молчание, которое тоже много значит"
    }
  },

  // --- Космическая оборона ---
  {
    id: "sp_early_warning", name: "Система раннего предупреждения", tree: "space", level: 3,
    deps: [{id:"sp_spy_sat",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "ИК-спутники фиксируют старт МБР через 90 секунд; президент получает уведомление раньше, чем ракета пересекла экватор",
      appearance: "Ночью — яркая вспышка на ИК-камере; в бункере сигнал тревоги будит дежурного",
      gives: "30-минутное окно ответного удара; стратегическая стабильность"
    }
  },
  {
    id: "sp_asat", name: "Противоспутниковое оружие", tree: "space", level: 4,
    deps: [{id:"sp_early_warning",type:"direct"},{id:"wp_hypersonic",type:"indirect"}],
    desc: {
      what: "Кинетические перехватчики, лазеры и кибератаки против спутников: «ослепить» противника до боя",
      appearance: "Ракета взлетает вертикально; спутник на экране исчезает, заменяясь облаком точек-обломков",
      gives: "Орбита стала полем боя; GPS и разведка уязвимы"
    }
  },
  {
    id: "sp_orbital_defense", name: "Орбитальная ПРО", tree: "space", level: 5,
    deps: [{id:"sp_asat",type:"direct"},{id:"wp_laser_weapon",type:"indirect"}],
    desc: {
      what: "Боевые платформы на орбите перехватывают МБР на разгонном участке — «Звёздные войны» стали реальностью",
      appearance: "Станция выдаёт лазерный импульс; МБР взрывается на отметке 200 км, фрагменты рассыпаются",
      gives: "Ядерный щит; дестабилизация паритета; гонка орбитальных вооружений"
    }
  },
  {
    id: "sp_planetary_defense", name: "Планетарная оборона", tree: "space", level: 5,
    deps: [{id:"sp_orbital_defense",type:"direct"},{id:"sp_asteroid_mining",type:"indirect"}],
    desc: {
      what: "DART и его потомки: кинетические импакторы, зеркала, ядерные взрывы — способы отклонить астероид",
      appearance: "Аппарат летит навстречу скале 500 метров; удар — облако пыли; орбита изменилась",
      gives: "Человечество впервые способно защититься от космической угрозы"
    }
  },

  // ============================================================
  //  ДЕРЕВО: МАТЕРИАЛЫ И ПРОИЗВОДСТВО
  // ============================================================

  {
    id: "mat_root", name: "Ремесленное производство", tree: "materials", level: 0, deps: [],
    desc: {
      what: "Гончарство, ткачество, деревообработка — ручной труд и передаваемые из уст в уста секреты мастерства",
      appearance: "Средневековый цех: гончар за кругом, ткач за станком, плотник с теслом",
      gives: "Открывает металлургию и цеховое производство"
    }
  },

  // --- Металлургия ---
  {
    id: "mat_iron_smelting", name: "Выплавка железа", tree: "materials", level: 1,
    deps: [{id:"mat_root",type:"direct"}],
    desc: {
      what: "Доменная печь превращает руду в чугун, пудлингование — в кованое железо. Металл становится доступен всем",
      appearance: "Огненное жерло домны ночью; литейщик черпает расплав и разливает по формам",
      gives: "Дешёвый металл; строительство, инструменты, оружие в достатке"
    }
  },
  {
    id: "mat_steel_basic", name: "Стальное производство", tree: "materials", level: 2,
    deps: [{id:"mat_iron_smelting",type:"direct"}],
    desc: {
      what: "Бессемеровский конвертер и мартеновская печь: сталь тоннами вместо фунтами. Эпоха железных дорог и небоскрёбов",
      appearance: "Конвертер откидывается назад; огненный фонтан искр из горлышка",
      gives: "Железные дороги, мосты, корабли, небоскрёбы — вся индустриальная цивилизация"
    }
  },
  {
    id: "mat_alloy_basic", name: "Конструкционные сплавы", tree: "materials", level: 3,
    deps: [{id:"mat_steel_basic",type:"direct"}],
    desc: {
      what: "Легированные стали (нержавейка, хромомолибденовая), литейные алюминиевые сплавы — металл под задачу",
      appearance: "Таблица Менделеева на стене лаборатории; образцы сплавов на полке по цветам",
      gives: "Авиация, автомобили, точное машиностроение"
    }
  },
  {
    id: "mat_aluminum", name: "Алюминиевая промышленность", tree: "materials", level: 3,
    deps: [{id:"mat_steel_basic",type:"direct"},{id:"mat_turbine",type:"indirect"}],
    desc: {
      what: "Электролизный метод Холла-Эру: алюминий перестал быть дороже золота и стал металлом авиации",
      appearance: "Ряды электролизных ванн; алюминиевый чушки выходят из цеха серебристыми блоками",
      gives: "Лёгкие конструкции; самолёты, велосипеды, банки из-под пива"
    }
  },
  {
    id: "mat_titanium", name: "Производство титана", tree: "materials", level: 4,
    deps: [{id:"mat_alloy_basic",type:"direct"}],
    desc: {
      what: "Процесс Кролля: огнеопасный, дорогой, но даёт металл прочнее стали вдвое легче её",
      appearance: "Реактор с аргоновой атмосферой; губчатый титан — серые комки, похожие на коралл",
      gives: "Аэрокосмос, медицинские импланты, подводные лодки"
    }
  },
  {
    id: "mat_superalloy", name: "Жаропрочные суперсплавы", tree: "materials", level: 4,
    deps: [{id:"mat_titanium",type:"direct"}],
    desc: {
      what: "Никелевые монокристаллы турбинных лопаток выдерживают 1600°C — выше температуры плавления самого сплава",
      appearance: "Единый кристалл — лопатка без единой границы зерна; тонкие каналы охлаждения внутри",
      gives: "Реактивные двигатели; газовые турбины; ракетные сопла"
    }
  },
  {
    id: "mat_amorphous_metal", name: "Аморфные металлы", tree: "materials", level: 5,
    deps: [{id:"mat_superalloy",type:"direct"},{id:"mat_nano_materials",type:"indirect"}],
    desc: {
      what: "Металлическое стекло: атомы застыли без кристаллической решётки — прочность стали, упругость резины",
      appearance: "Стержень из жидкого металла гнётся как пружина и не деформируется",
      gives: "Режущие инструменты нового уровня; пружины, электроника, медицинские инструменты"
    }
  },

  // --- Полимеры ---
  {
    id: "mat_rubber", name: "Вулканизованный каучук", tree: "materials", level: 2,
    deps: [{id:"mat_root",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Гудьир добавляет серу к каучуку: резина не трескается на морозе и не плавится летом",
      appearance: "Фабрика с запахом серы; конвейер с шинами; изолированные провода",
      gives: "Шины, уплотнения, изоляция проводов — промышленная резина везде"
    }
  },
  {
    id: "mat_plastics", name: "Синтетические полимеры", tree: "materials", level: 3,
    deps: [{id:"mat_rubber",type:"direct"},{id:"bio_synthesis_drugs",type:"indirect"}],
    desc: {
      what: "Бакелит, нейлон, полиэтилен, ПВХ — XX век есть пластиковый век. Дёшево, легко, любой формы",
      appearance: "Пресс-форма открывается; тысяча одинаковых корпусов телефонов падает в ящик",
      gives: "Массовое производство; упаковка; электроника; автомобили"
    }
  },
  {
    id: "mat_fiberglass", name: "Стекловолокно", tree: "materials", level: 3,
    deps: [{id:"mat_plastics",type:"direct"}],
    desc: {
      what: "Стеклянные нити в полимерной матрице: легче металла, не ржавеет, гнётся в любую форму",
      appearance: "Лодочный корпус из белых матовых слоёв; стекловолоконная ткань пропитывается смолой",
      gives: "Лодки, ветряки, кузова автомобилей, шлемы"
    }
  },
  {
    id: "mat_carbon_fiber", name: "Углепластик (CFRP)", tree: "materials", level: 4,
    deps: [{id:"mat_fiberglass",type:"direct"}],
    desc: {
      what: "Углеродные нити тоньше волоса, сплетённые и залитые смолой: прочнее стали, легче алюминия",
      appearance: "Чёрно-матовый корпус болида Формулы 1; диагональный плетёный узор на поверхности",
      gives: "Авиация, гоночные автомобили, лопасти ветряков, велосипеды"
    }
  },
  {
    id: "mat_kevlar", name: "Кевлар и баллистические материалы", tree: "materials", level: 4,
    deps: [{id:"mat_plastics",type:"direct"}],
    desc: {
      what: "Полимерные волокна с прочностью на разрыв в 5 раз выше стали: бронежилеты, бронестёкла",
      appearance: "Золотисто-жёлтые нити ткутся в пластины; испытание — пуля плющится о жилет",
      gives: "Защита от осколков; корпуса дронов; кабели"
    }
  },
  {
    id: "mat_aerogel", name: "Аэрогель", tree: "materials", level: 5,
    deps: [{id:"mat_fiberglass",type:"direct"},{id:"mat_nano_materials",type:"indirect"}],
    desc: {
      what: "99% воздух: твёрдый, но легче пуха — лучший известный теплоизолятор, синий от рассеяния света",
      appearance: "Кусок кажется из замороженного дыма; рука сквозь него чуть ощущает тепло лампы за ним",
      gives: "Космические зонды, сверхтёплая одежда, изоляция зданий"
    }
  },
  {
    id: "mat_meta_material", name: "Метаматериалы", tree: "materials", level: 5,
    deps: [{id:"mat_aerogel",type:"direct"},{id:"mat_nano_factory",type:"indirect"}],
    desc: {
      what: "Структуры с периодическими включениями меньше длины волны: управляют светом, звуком и теплом по-новому",
      appearance: "Поверхность из тысяч микроантенн — мимо проходит свет, огибая предмет позади",
      gives: "Прото-шапка-невидимка; суперлинзы без дифракционного предела; акустические экраны"
    }
  },

  // --- Энергетика ---
  {
    id: "mat_steam_engine", name: "Паровая машина", tree: "materials", level: 2,
    deps: [{id:"mat_iron_smelting",type:"direct"}],
    desc: {
      what: "Уатт улучшает машину Ньюкомена: раздельный конденсатор, коленчатый вал — механическая сила из угля",
      appearance: "Шипящий поршень движется вверх-вниз; маховик вращается; фабрика оживает",
      gives: "Промышленная революция; фабрики, паровозы, пароходы"
    }
  },
  {
    id: "mat_combustion_engine", name: "Двигатель внутреннего сгорания", tree: "materials", level: 3,
    deps: [{id:"mat_steam_engine",type:"direct"}],
    desc: {
      what: "Отто, Дизель, Бенц: взрыв внутри цилиндра крутит коленчатый вал — двигатель стал компактным",
      appearance: "Гараж 1885 года: трёхколёсное устройство Бенца, запах масла, ритмичный стук",
      gives: "Автомобили, мотоциклы, грузовики, самолёты с поршневыми двигателями"
    }
  },
  {
    id: "mat_turbine", name: "Паровые и газовые турбины", tree: "materials", level: 3,
    deps: [{id:"mat_steam_engine",type:"direct"}],
    desc: {
      what: "Лопатки вращаются потоком пара или газа: электростанции, авиадвигатели, корабельные турбины",
      appearance: "Ротор в разрезе: 20 ступеней лопаток; горящий газ врывается с одного конца, уходит с другого",
      gives: "Электрогенерация; реактивная авиация; промышленная мощь"
    }
  },
  {
    id: "mat_nuclear_fission", name: "Ядерная энергетика", tree: "materials", level: 4,
    deps: [{id:"mat_turbine",type:"direct"}],
    desc: {
      what: "Деление урана нагревает воду; пар крутит турбину. 1 кг урана = 3000 тонн угля",
      appearance: "Купол реактора над рекой; голубое черенковское свечение в прозрачной воде бассейна",
      gives: "Гигаватты без углекислого газа; подводные лодки; атомные ледоколы"
    }
  },
  {
    id: "mat_solar_cell", name: "Солнечные батареи", tree: "materials", level: 3,
    deps: [{id:"mat_plastics",type:"direct"},{id:"mat_micro_fab",type:"indirect"}],
    desc: {
      what: "Кремниевые фотоэлементы преобразуют свет в ток. От 6% эффективности 1954-го до 26%+ сегодня",
      appearance: "Синие панели на крышах; ферма из тысяч модулей в пустыне",
      gives: "Децентрализованная энергия; спутники; переход к зелёной экономике"
    }
  },
  {
    id: "mat_battery_liion", name: "Литий-ионный аккумулятор", tree: "materials", level: 4,
    deps: [{id:"mat_solar_cell",type:"direct"},{id:"mat_alloy_basic",type:"indirect"}],
    desc: {
      what: "Гудинаф, Уиттингем, Ёсино: лёгкий и ёмкий аккумулятор — без него нет смартфонов и электромобилей",
      appearance: "Тонкий синий пакет с клеммами; в миллионах телефонов и электромобилей",
      gives: "Портативная электроника; электромобили; хранение возобновляемой энергии"
    }
  },
  {
    id: "mat_solid_battery", name: "Твердотельный аккумулятор", tree: "materials", level: 5,
    deps: [{id:"mat_battery_liion",type:"direct"},{id:"mat_nano_materials",type:"indirect"}],
    desc: {
      what: "Твёрдый электролит вместо жидкого: вдвое плотнее энергии, не горит, заряжается за 10 минут",
      appearance: "Плоский стек толщиной с книгу питает электролёт час",
      gives: "Практическая авиация на батареях; революция электромобилей"
    }
  },
  {
    id: "mat_fusion_proto", name: "Прото-термоядерный реактор", tree: "materials", level: 5,
    deps: [{id:"mat_nuclear_fission",type:"direct"},{id:"mat_superalloy",type:"indirect"}],
    desc: {
      what: "ITER и частные проекты (Commonwealth Fusion, TAE): первое Q>1 на токамаке — реактор наконец производит больше, чем потребляет",
      appearance: "Огромный бублик из магнитов; внутри плазма 100 млн градусов, горячее центра Солнца",
      gives: "Прototип практически безграничной чистой энергии; поколение до коммерческого реактора"
    }
  },
  {
    id: "mat_wireless_power", name: "Беспроводная передача энергии", tree: "materials", level: 5,
    deps: [{id:"mat_solid_battery",type:"direct"},{id:"mat_meta_material",type:"indirect"}],
    desc: {
      what: "Резонансная индукция и направленные микроволны: зарядить электромобиль с дороги, питать дроны в воздухе",
      appearance: "Машина едет по дороге — экран на приборке показывает «Заряд: получение»",
      gives: "Дороги-зарядники; дроны без посадки; космические СЭС"
    }
  },

  // --- Нано ---
  {
    id: "mat_micro_fab", name: "Микрофабрикация", tree: "materials", level: 3,
    deps: [{id:"mat_alloy_basic",type:"direct"},{id:"it_microchip",type:"indirect"}],
    desc: {
      what: "Фотолитография позволяет рисовать структуры в микронах: чипы, МЭМС-датчики, микрофлюидика",
      appearance: "Чистая комната в жёлтом свете; фотомаска над кремниевой пластиной",
      gives: "Микроэлектроника; датчики движения; основа для нано"
    }
  },
  {
    id: "mat_nano_materials", name: "Наноматериалы", tree: "materials", level: 4,
    deps: [{id:"mat_micro_fab",type:"direct"}],
    desc: {
      what: "Квантовые точки, наночастицы золота, нанопорошки: материалы, свойства которых определяются размером",
      appearance: "Коллоидный раствор светится разными цветами в зависимости от размера частиц",
      gives: "Новые катализаторы, дисплеи, диагностика рака"
    }
  },
  {
    id: "mat_cnt", name: "Углеродные нанотрубки", tree: "materials", level: 4,
    deps: [{id:"mat_nano_materials",type:"direct"},{id:"mat_carbon_fiber",type:"indirect"}],
    desc: {
      what: "Трубки из атомов углерона: прочнее стали в 100 раз, проводят лучше меди — теоретически идеальный материал",
      appearance: "ТЭМ-снимок: идеальные трубочки диаметром 1 нм, как стопки куриной сетки свёрнутые в цилиндр",
      gives: "Основа космического лифта; сверхпроводящие нити; нейронная электроника"
    }
  },
  {
    id: "mat_graphene", name: "Графен", tree: "materials", level: 4,
    deps: [{id:"mat_nano_materials",type:"direct"}],
    desc: {
      what: "Один атомарный слой углерода: прозрачный, гибкий, проводит ток лучше меди, прочнее алмаза",
      appearance: "Прозрачная плёнка на стекле проводит ток; изгибается как пластик",
      gives: "Гибкие экраны, сверхбыстрая электроника, ультрафильтрация воды"
    }
  },
  {
    id: "mat_nano_coating", name: "Наноструктурированные покрытия", tree: "materials", level: 4,
    deps: [{id:"mat_nano_materials",type:"direct"}],
    desc: {
      what: "Покрытия толщиной в нанометры: самоочищающиеся поверхности, антибактериальные стёкла, антифрикционные слои",
      appearance: "Капля воды катится по стеклу, не оставляя следа — лотосовый эффект",
      gives: "Медицинские импланты без бактерий; вечная краска корабля"
    }
  },
  {
    id: "mat_nano_factory", name: "Молекулярная фабрика", tree: "materials", level: 5,
    deps: [{id:"mat_cnt",type:"direct"},{id:"mat_graphene",type:"direct"},{id:"it_ai_control",type:"indirect"}],
    desc: {
      what: "Управляемые манипуляторы собирают молекулу за молекулой: синтез любого вещества снизу вверх",
      appearance: "СТМ-зонд переставляет атомы: буква «IBM» из 35 атомов ксенона. Масштаб — не нано, а пико",
      gives: "Произвольный синтез; самовоспроизводящиеся машины; конец дефицитных материалов"
    }
  },
  {
    id: "mat_smart_material", name: "Умные материалы", tree: "materials", level: 5,
    deps: [{id:"mat_nano_factory",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "Материалы, меняющие форму, цвет или жёсткость по команде: пьезо, сплавы памяти, термохромные покрытия",
      appearance: "Крыло самолёта чуть меняет изгиб на ходу; обшивка корабля темнеет в тени",
      gives: "Адаптивные конструкции; роботы без двигателей; умная броня"
    }
  },

  // --- Производство ---
  {
    id: "mat_guild_craft", name: "Цеховое ремесло", tree: "materials", level: 1,
    deps: [{id:"mat_root",type:"direct"}],
    desc: {
      what: "Средневековые гильдии: стандартизация качества, передача секретов мастерства, цеховые привилегии",
      appearance: "Цех кузнецов с гербом над воротами; подмастерье шлифует меч под взглядом мастера",
      gives: "Стандарты качества; профессиональная передача знаний"
    }
  },
  {
    id: "mat_mass_production", name: "Мануфактура и массовое производство", tree: "materials", level: 2,
    deps: [{id:"mat_guild_craft",type:"direct"},{id:"mat_steam_engine",type:"indirect"}],
    desc: {
      what: "Разделение труда, взаимозаменяемые детали — Адам Смит и булавочная фабрика",
      appearance: "Зал с сотней работниц за одинаковыми станками; шум, запах масла, одинаковые движения рук",
      gives: "Дешёвые товары для масс; рост городов; промышленный пролетариат"
    }
  },
  {
    id: "mat_assembly_line", name: "Конвейерное производство", tree: "materials", level: 3,
    deps: [{id:"mat_mass_production",type:"direct"},{id:"mat_combustion_engine",type:"indirect"}],
    desc: {
      what: "Форд переносит деталь к рабочему, а не рабочего к детали: Model T за 93 минуты вместо 12 часов",
      appearance: "Конвейер с автомобилями движется мимо рабочих; каждый делает одно движение",
      gives: "Автомобиль для масс; XX век потребительства"
    }
  },
  {
    id: "mat_cnc", name: "ЧПУ-обработка", tree: "materials", level: 3,
    deps: [{id:"mat_assembly_line",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "Числовое программное управление: фреза движется точно по программе, не по руке оператора",
      appearance: "Металл уходит стружкой под охлаждающей жидкостью; готовая деталь идеально ровная",
      gives: "Точность 0,01 мм; автоматизация прецизионного производства"
    }
  },
  {
    id: "mat_3d_print", name: "3D-печать", tree: "materials", level: 4,
    deps: [{id:"mat_cnc",type:"direct"}],
    desc: {
      what: "Послойное наращивание материала: пластик, металл, керамика, бетон — принтер печатает любую форму",
      appearance: "Печатающая головка ползёт над платформой; слой за слоем вырастает объект",
      gives: "Малосерийное производство без форм; персонализированные детали; децентрализованное производство"
    }
  },
  {
    id: "mat_bioprint", name: "Биопечать", tree: "materials", level: 5,
    deps: [{id:"mat_3d_print",type:"direct"},{id:"bio_crispr",type:"indirect"}],
    desc: {
      what: "Биочернила из живых клеток: принтер печатает хрящи, сосуды, кожу — ткани живут после печати",
      appearance: "Прозрачный гель выдавливается из иглы, укладывая слои клеток в форму уха",
      gives: "Напечатанные органы; регенеративная медицина без доноров"
    }
  },
  {
    id: "mat_robotic_factory", name: "Роботизированное производство", tree: "materials", level: 4,
    deps: [{id:"mat_assembly_line",type:"direct"},{id:"it_cv_basic",type:"indirect"}],
    desc: {
      what: "Сварочные роботы ABB, Fanuc — цех работает 24/7 без людей; человек только программирует и чинит",
      appearance: "Тёмный цех с горящими сварочными искрами; роботы двигаются точно и неустанно",
      gives: "Производительность без зарплат; качество без усталости"
    }
  },
  {
    id: "mat_self_replicating", name: "Самовоспроизводящиеся фабрики", tree: "materials", level: 5,
    deps: [{id:"mat_robotic_factory",type:"direct"},{id:"mat_nano_factory",type:"indirect"}],
    desc: {
      what: "Завод, способный создать копию себя из сырья: экспоненциальный рост производственных мощностей",
      appearance: "Один фабричный модуль в пустыне; через месяц их восемь; через два — шестьдесят четыре",
      gives: "Мальтузианский производственный потолок сломан; основа для колонизации космоса"
    }
  },

  // ============================================================
  //  ДЕРЕВО: ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ И ИИ
  // ============================================================

  {
    id: "it_root", name: "Письменность и счёт", tree: "it", level: 0, deps: [],
    desc: {
      what: "Числа, алфавит, книги — хранение информации вне мозга. Основа всей цивилизации",
      appearance: "Монах в скриптории пишет гусиным пером; свечной свет на пергаменте",
      gives: "Открывает математику, механические вычисления и коммуникации"
    }
  },

  // --- Вычисления ---
  {
    id: "it_abacus", name: "Механическая математика", tree: "it", level: 1,
    deps: [{id:"it_root",type:"direct"}],
    desc: {
      what: "Абак, логарифмические таблицы, счётные машины Паскаля и Лейбница — арифметика ускоряется",
      appearance: "Торговец щёлкает костяшками; учёный листает таблицу логарифмов",
      gives: "Ускорение научных расчётов; навигация, финансы"
    }
  },
  {
    id: "it_mechanical_calc", name: "Механический калькулятор", tree: "it", level: 2,
    deps: [{id:"it_abacus",type:"direct"},{id:"mat_steel_basic",type:"indirect"}],
    desc: {
      what: "Арифмометры, машина Бэббиджа (идея): механизм из шестерён считает быстрее человека",
      appearance: "Латунные шестерни крутятся под рукой; результат появляется в окошке",
      gives: "Прецедент программируемых вычислений; начало алгоритмического мышления"
    }
  },
  {
    id: "it_vacuum_tube", name: "Электронные лампы", tree: "it", level: 2,
    deps: [{id:"it_mechanical_calc",type:"direct"},{id:"mat_turbine",type:"indirect"}],
    desc: {
      what: "ENIAC: 18 000 ламп, 27 тонн, первый электронный компьютер. Считает за секунды то, что человек — за дни",
      appearance: "Зал с рядами стоек; лампы мигают и гудят; тепло как в бане",
      gives: "Первые программируемые ЭВМ; криптоанализ; баллистические расчёты"
    }
  },
  {
    id: "it_transistor", name: "Транзистор", tree: "it", level: 3,
    deps: [{id:"it_vacuum_tube",type:"direct"},{id:"mat_alloy_basic",type:"indirect"}],
    desc: {
      what: "Шокли, Бардин, Браттейн: точка германия заменяет лампу и умещается в миллиметре",
      appearance: "Маленький чёрный цилиндрик с тремя ножками; рядом — половина стойки ламп",
      gives: "Миниатюризация; надёжность; начало полупроводниковой эпохи"
    }
  },
  {
    id: "it_microchip", name: "Интегральная схема", tree: "it", level: 3,
    deps: [{id:"it_transistor",type:"direct"},{id:"mat_micro_fab",type:"indirect"}],
    desc: {
      what: "Килби и Нойс объединяют тысячи транзисторов на кремниевой пластине. Закон Мура начинает работать",
      appearance: "Чёрный квадрат 1 см с золотыми ножками; под микроскопом — город из дорожек",
      gives: "Цифровая революция; персональные компьютеры; вся современная электроника"
    }
  },
  {
    id: "it_microprocessor", name: "Микропроцессор", tree: "it", level: 4,
    deps: [{id:"it_microchip",type:"direct"}],
    desc: {
      what: "Intel 4004, затем 8086, Pentium — весь компьютер на одном чипе. ПК в каждый дом",
      appearance: "Intel 486 в руках: маленький квадрат из которого вышло всё современное IT",
      gives: "Персональные компьютеры; автомобильная электроника; встроенные системы"
    }
  },
  {
    id: "it_parallel_computing", name: "Параллельные вычисления", tree: "it", level: 4,
    deps: [{id:"it_microprocessor",type:"direct"}],
    desc: {
      what: "Тысячи процессоров решают задачу вместе: от суперкомпьютеров к GPU-фермам",
      appearance: "Стойки серверов с мигающими огнями; холод и гул вентиляторов дата-центра",
      gives: "Симуляции климата, ядерных взрывов, белковых структур; обучение ИИ"
    }
  },
  {
    id: "it_quantum_computing", name: "Квантовый компьютер", tree: "it", level: 5,
    deps: [{id:"it_parallel_computing",type:"direct"},{id:"mat_superalloy",type:"indirect"}],
    desc: {
      what: "Кубиты вычисляют в суперпозиции: задачи, недоступные классике, решаются за секунды",
      appearance: "Золотая люстра в криокамере −273°C; провода уходят к разбавительному холодильнику",
      gives: "Взлом RSA-2048; оптимизация логистики; открытие лекарств"
    }
  },
  {
    id: "it_neuromorphic", name: "Нейроморфные чипы", tree: "it", level: 5,
    deps: [{id:"it_parallel_computing",type:"direct"},{id:"bio_neuro_basic",type:"indirect"}],
    desc: {
      what: "Intel Loihi, IBM TrueNorth: чип работает как нейронная сеть в железе — 1000× экономичнее GPU",
      appearance: "Небольшой чип обрабатывает сигнал камеры; потребление — как у лампочки",
      gives: "ИИ в мобильных устройствах без облака; роботы с мозгом на борту"
    }
  },

  // --- Сети ---
  {
    id: "it_telegraph", name: "Электромагнитный телеграф", tree: "it", level: 2,
    deps: [{id:"it_root",type:"direct"},{id:"mat_iron_smelting",type:"indirect"}],
    desc: {
      what: "Морзе: точки и тире летят по проводу быстрее любого курьера. Первая электронная сеть",
      appearance: "Оператор стучит ключом; щелчки складываются в слова за тысячи миль",
      gives: "Мгновенная связь через континенты; биржевые котировки в реальном времени"
    }
  },
  {
    id: "it_telephone", name: "Телефон и радиотелефон", tree: "it", level: 2,
    deps: [{id:"it_telegraph",type:"direct"}],
    desc: {
      what: "Белл и Попов делают голос электрическим; телефонные сети оплетают города",
      appearance: "Коммутаторная барышня переключает штекеры; потом — дисковый телефон",
      gives: "Голосовая связь; координация бизнеса и армии"
    }
  },
  {
    id: "it_radio", name: "Радиовещание", tree: "it", level: 2,
    deps: [{id:"it_telegraph",type:"direct"}],
    desc: {
      what: "Маркони, Попов: волны без проводов. Радио, радар, военная связь — эпоха эфира",
      appearance: "Высокая мачта антенны; оператор в наушниках; музыка сквозь помехи",
      gives: "Массовая информация; морская и авиационная навигация; радар"
    }
  },
  {
    id: "it_television", name: "Телевидение", tree: "it", level: 3,
    deps: [{id:"it_radio",type:"direct"}],
    desc: {
      what: "Зворыкин, Бэрд: образ передаётся через эфир. Чёрно-белый экран→цвет→HD→4K",
      appearance: "Семья сидит перед экраном; диктор в галстуке читает новости",
      gives: "Массовая культура; политическая пропаганда; спортивная индустрия"
    }
  },
  {
    id: "it_arpanet", name: "ARPANET и пакетная передача", tree: "it", level: 3,
    deps: [{id:"it_telephone",type:"direct"},{id:"it_algorithm_basic",type:"indirect"}],
    desc: {
      what: "4 узла в 1969 году: данные делятся на пакеты и ищут путь сами — первый интернет",
      appearance: "Карта США с узлами и линиями; первое сообщение «LO» — связь упала на букве «G»",
      gives: "Прецедент распределённой сети; SMTP, FTP, TCP/IP"
    }
  },
  {
    id: "it_internet", name: "Интернет и Веб", tree: "it", level: 4,
    deps: [{id:"it_arpanet",type:"direct"}],
    desc: {
      what: "Бернерс-Ли создаёт WWW: гиперссылки и браузер соединяют всё со всем. Рождение цифрового мира",
      appearance: "Первый браузер Mosaic; серая страница с синими ссылками; CERN смотрит и не верит",
      gives: "Электронная коммерция, социальные сети, стриминг; вся цифровая экономика"
    }
  },
  {
    id: "it_mobile_4g", name: "Мобильный интернет 4G/5G", tree: "it", level: 4,
    deps: [{id:"it_internet",type:"direct"},{id:"sp_gps",type:"indirect"}],
    desc: {
      what: "LTE и 5G: интернет в кармане повсюду, скорость как оптика, задержка 1 мс",
      appearance: "Смартфон на ходу стримит видео; городские сети пронизывают всё миллиметровыми волнами",
      gives: "Смартфон как компьютер; IoT; мгновенный перевод; карты в реальном времени"
    }
  },
  {
    id: "it_mobile_6g", name: "Сеть 6G и тактильный интернет", tree: "it", level: 5,
    deps: [{id:"it_mobile_4g",type:"direct"},{id:"it_quantum_computing",type:"indirect"}],
    desc: {
      what: "Терагерцевый диапазон, задержка 0,1 мс, скорость 1 Тбит/с: телеприсутствие без лага",
      appearance: "Хирург в перчатках управляет роботом за 5000 км с ощущением ткани на пальцах",
      gives: "Телехирургия; голографическая связь; автономные машины без задержки"
    }
  },
  {
    id: "it_mesh_implant", name: "Имплантируемая сетевая нода", tree: "it", level: 5,
    deps: [{id:"it_mobile_6g",type:"direct"},{id:"bio_bmi_active",type:"indirect"}],
    desc: {
      what: "Нейроимплант с радиоинтерфейсом: человек постоянно в сети без внешних устройств",
      appearance: "Девушка смотрит в пространство — в её поле зрения плавают иконки и уведомления",
      gives: "Прямой интерфейс мозг-облако; коллективный разум; потеря приватности"
    }
  },

  // --- Программирование ---
  {
    id: "it_algorithm_basic", name: "Алгоритмы и логика", tree: "it", level: 1,
    deps: [{id:"it_root",type:"direct"}],
    desc: {
      what: "Ал-Хорезми, Буль, Тьюринг: формализация шагов решения задачи. Алгоритм = рецепт для машины",
      appearance: "Тьюринг рисует схему машины на доске; бесконечная лента, голова, состояния",
      gives: "Теоретическая основа всего программирования"
    }
  },
  {
    id: "it_os_basic", name: "Операционная система", tree: "it", level: 3,
    deps: [{id:"it_algorithm_basic",type:"direct"},{id:"it_transistor",type:"indirect"}],
    desc: {
      what: "Unix, CP/M, MS-DOS: ОС берёт на себя управление железом — программист не думает о регистрах",
      appearance: "Мигающий курсор на чёрном экране; C:\\> ждёт команды",
      gives: "Переносимость программ; многозадачность; экосистема ПО"
    }
  },
  {
    id: "it_compiler", name: "Языки высокого уровня", tree: "it", level: 3,
    deps: [{id:"it_os_basic",type:"direct"}],
    desc: {
      what: "FORTRAN, COBOL, C: компилятор переводит читаемый код в машинные команды. Программирование для людей",
      appearance: "Код на перфокарте → компилятор → результат; потом — текстовый редактор с подсветкой",
      gives: "Быстрая разработка; переносимость кода; программирование как профессия"
    }
  },
  {
    id: "it_oop", name: "Объектно-ориентированное ПО", tree: "it", level: 4,
    deps: [{id:"it_compiler",type:"direct"}],
    desc: {
      what: "Smalltalk, C++, Java: объекты инкапсулируют данные и поведение. Сложные системы становятся управляемыми",
      appearance: "UML-диаграмма классов; Java IDE с автодополнением; команды в десятки человек пишут один проект",
      gives: "GUI-приложения; корпоративное ПО; игровые движки"
    }
  },
  {
    id: "it_distributed", name: "Распределённые системы", tree: "it", level: 4,
    deps: [{id:"it_oop",type:"direct"},{id:"it_internet",type:"indirect"}],
    desc: {
      what: "MapReduce, Hadoop, микросервисы: задача делится между тысячами серверов",
      appearance: "Дашборд с тысячью виртуальных машин; запрос летит и возвращается за 50 мс",
      gives: "Google, Facebook масштаб; большие данные"
    }
  },
  {
    id: "it_cloud", name: "Облачные вычисления", tree: "it", level: 4,
    deps: [{id:"it_distributed",type:"direct"}],
    desc: {
      what: "AWS, Azure, GCP: инфраструктура как услуга — сервер запускается за минуту, платишь только за время",
      appearance: "Startup из двух человек в кафе деплоит приложение на миллион пользователей",
      gives: "Демократизация вычислений; стартап-бум; ИИ-сервисы"
    }
  },
  {
    id: "it_blockchain", name: "Блокчейн и децентрализация", tree: "it", level: 4,
    deps: [{id:"it_distributed",type:"direct"},{id:"it_public_key",type:"indirect"}],
    desc: {
      what: "Биткоин, Ethereum: цепочка блоков создаёт доверие без центра — деньги, контракты, реестры",
      appearance: "Граф транзакций; майнинг-ферма с GPU; смарт-контракт выполняется автоматически",
      gives: "Децентрализованные финансы; NFT; неизменяемые реестры"
    }
  },
  {
    id: "it_self_modifying_code", name: "Самомодифицирующийся код", tree: "it", level: 5,
    deps: [{id:"it_blockchain",type:"direct"},{id:"it_agi_proto",type:"indirect"}],
    desc: {
      what: "Программа, способная переписывать свой код в процессе работы: адаптация без программиста",
      appearance: "Логи показывают: 03:14 — система переписала модуль планирования; результаты улучшились",
      gives: "Непрерывное самосовершенствование ПО; риски потери контроля"
    }
  },

  // --- ИИ ---
  {
    id: "it_expert_system", name: "Экспертные системы", tree: "it", level: 3,
    deps: [{id:"it_algorithm_basic",type:"direct"},{id:"it_os_basic",type:"indirect"}],
    desc: {
      what: "MYCIN, Prolog: дерево правил «если-то» воспроизводит экспертизу врача или юриста",
      appearance: "Врач вводит симптомы; система предлагает диагноз и объясняет ход рассуждений",
      gives: "Первый практический ИИ; диагностика, планирование; конец 80-х — зима ИИ"
    }
  },
  {
    id: "it_ml_basic", name: "Машинное обучение", tree: "it", level: 3,
    deps: [{id:"it_expert_system",type:"direct"},{id:"it_parallel_computing",type:"indirect"}],
    desc: {
      what: "Обучение с учителем, бустинг, SVM: машина сама находит закономерности в данных",
      appearance: "График обучения: кривая потерь падает; модель начинает классифицировать спам",
      gives: "Рекомендации, спам-фильтры, кредитные скоринги; фундамент для DL"
    }
  },
  {
    id: "it_deep_learning", name: "Глубокое обучение", tree: "it", level: 4,
    deps: [{id:"it_ml_basic",type:"direct"},{id:"it_parallel_computing",type:"direct"}],
    desc: {
      what: "AlexNet 2012: многослойные нейронные сети на GPU побеждают всех в распознавании изображений",
      appearance: "Матрица весов из миллиардов чисел; ResNet видит кота лучше человека",
      gives: "Распознавание лиц, речи, перевод; автопилоты; AlphaGo"
    }
  },
  {
    id: "it_nlp", name: "Обработка естественного языка", tree: "it", level: 4,
    deps: [{id:"it_deep_learning",type:"direct"}],
    desc: {
      what: "Трансформеры BERT/GPT: машина понимает и генерирует текст, переводит, резюмирует, отвечает",
      appearance: "Чат-бот отвечает осмысленно; маши́на-переводчик работает лучше студента",
      gives: "ChatGPT-эффект; автоматизация текстовой работы; прото-ИИ-ассистенты"
    }
  },
  {
    id: "it_cv_basic", name: "Компьютерное зрение", tree: "it", level: 4,
    deps: [{id:"it_deep_learning",type:"direct"}],
    desc: {
      what: "YOLO, Mask R-CNN: в реальном времени распознаёт и сегментирует всё на видео",
      appearance: "Видео с камеры: люди в синих рамках, машины в красных, номера читаются автоматически",
      gives: "Автопилоты; охрана периметра; медицинская диагностика по снимкам"
    }
  },
  {
    id: "it_reinforcement", name: "Обучение с подкреплением", tree: "it", level: 4,
    deps: [{id:"it_deep_learning",type:"direct"}],
    desc: {
      what: "Агент учится через поощрения: AlphaGo, AlphaStar, OpenAI Five — ИИ побеждает чемпионов в играх",
      appearance: "Агент играет миллион партий в шахматы за ночь; утром он лучше Каспарова",
      gives: "Управление роботами; оптимизация энергосетей; автономные системы"
    }
  },
  {
    id: "it_foundation_model", name: "Большие языковые модели (LLM)", tree: "it", level: 5,
    deps: [{id:"it_nlp",type:"direct"},{id:"it_cv_basic",type:"direct"},{id:"it_cloud",type:"indirect"}],
    desc: {
      what: "GPT-4, Gemini, Claude — трансформеры с сотнями миллиардов параметров: пишут код, ставят диагнозы, рисуют",
      appearance: "Пустой чат — и через секунду готовый бизнес-план на 20 страниц",
      gives: "Автоматизация умственного труда; новый интерфейс человек-компьютер"
    }
  },
  {
    id: "it_agi_proto", name: "Прото-AGI", tree: "it", level: 5,
    deps: [{id:"it_foundation_model",type:"direct"},{id:"it_reinforcement",type:"direct"}],
    desc: {
      what: "Системы, способные обобщать через домены без переобучения: решают новые задачи как умный человек",
      appearance: "Агент получает незнакомую задачу и разбивает её на подзадачи — без примеров",
      gives: "Научные открытия на автопилоте; автономные исследования; начало сингулярности"
    }
  },
  {
    id: "it_ai_control", name: "Контроль и выравнивание ИИ", tree: "it", level: 5,
    deps: [{id:"it_agi_proto",type:"direct"}],
    desc: {
      what: "RLHF, конституционный ИИ, формальная верификация: методы удержать мощный ИИ в человеческих ценностях",
      appearance: "Команда из 200 учёных изучает модели поведения AGI; каждый новый эксперимент под надзором",
      gives: "Безопасное развёртывание сверхинтеллекта; или провал этого — последствия непредсказуемы"
    }
  },

  // --- Безопасность ---
  {
    id: "it_crypto_basic", name: "Классическая криптография", tree: "it", level: 2,
    deps: [{id:"it_algorithm_basic",type:"direct"}],
    desc: {
      what: "Шифр Цезаря, Виженер, Энигма — шифрование как защита тайны военных сообщений",
      appearance: "Офицер вращает диски Энигмы; получатель с такой же машиной читает текст",
      gives: "Защита военной связи; понимание взлома — основа для современной крипто"
    }
  },
  {
    id: "it_public_key", name: "Криптография с открытым ключом", tree: "it", level: 4,
    deps: [{id:"it_crypto_basic",type:"direct"},{id:"it_microprocessor",type:"indirect"}],
    desc: {
      what: "RSA, Диффи-Хеллман: два ключа — публичный и приватный. Безопасный обмен без встречи",
      appearance: "Замочек в адресной строке браузера; ключ шифрования передаётся публично",
      gives: "HTTPS, SSH, PGP; электронная подпись; безопасная торговля в интернете"
    }
  },
  {
    id: "it_firewall", name: "Сетевые межсетевые экраны", tree: "it", level: 3,
    deps: [{id:"it_arpanet",type:"direct"},{id:"it_os_basic",type:"indirect"}],
    desc: {
      what: "Packet filtering и stateful inspection: граница между доверенной и враждебной сетью",
      appearance: "Схема сети: красная зона снаружи, зелёная — внутри; брандмауэр стоит на границе",
      gives: "Корпоративная безопасность; основа сетевой защиты"
    }
  },
  {
    id: "it_intrusion_detect", name: "Обнаружение вторжений", tree: "it", level: 4,
    deps: [{id:"it_firewall",type:"direct"},{id:"it_ml_basic",type:"indirect"}],
    desc: {
      what: "IDS/IPS системы: ML анализирует трафик и находит аномалии — нулевые дни и APT-группы",
      appearance: "SOC: аналитики смотрят на дашборд; красная метка появляется — атака!",
      gives: "Обнаружение атак в реальном времени; сокращение времени реакции"
    }
  },
  {
    id: "it_zero_trust", name: "Архитектура нулевого доверия", tree: "it", level: 4,
    deps: [{id:"it_intrusion_detect",type:"direct"},{id:"it_cloud",type:"indirect"}],
    desc: {
      what: "«Никому не доверяй, всё проверяй»: каждый запрос аутентифицируется заново, независимо от сети",
      appearance: "Сотрудник из кафе подключается к корпоративной системе; 5 факторов проверки, потом доступ",
      gives: "Защита в эпоху облака и удалённой работы"
    }
  },
  {
    id: "it_quantum_crypto", name: "Квантовая криптография", tree: "it", level: 5,
    deps: [{id:"it_public_key",type:"direct"},{id:"it_quantum_computing",type:"indirect"}],
    desc: {
      what: "QKD и постквантовые алгоритмы: защита, которую нельзя взломать даже квантовым компьютером",
      appearance: "Волокно между банками: квант состояния фотона — ключ, который уничтожается при подслушивании",
      gives: "Неперехватываемая связь; иммунитет к квантовым атакам"
    }
  },
  {
    id: "it_ai_security", name: "ИИ-безопасность", tree: "it", level: 5,
    deps: [{id:"it_zero_trust",type:"direct"},{id:"it_foundation_model",type:"indirect"}],
    desc: {
      what: "ИИ атакует и ИИ защищает: автономные агенты в реальном времени ищут уязвимости и латают их",
      appearance: "Красная и синяя команды ИИ-агентов ведут бесконечную войну в тестовом окружении",
      gives: "Кибербезопасность без человека в петле; гонка ИИ-атак и ИИ-защиты"
    }
  }

];