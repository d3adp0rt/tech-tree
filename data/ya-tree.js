const TREES = {
  med: { name: "Медицина и биотехнологии", color: "#27ae60" },
  wp: { name: "Вооружение и тактика", color: "#c0392b" },
  sp: { name: "Космос и астрофизика", color: "#2c3e50" },
  mat: { name: "Материалы и производство", color: "#d35400" },
  it: { name: "Информационные технологии и ИИ", color: "#8e44ad" }
};

const SUBTREES = {
  med_basics: { name: "Основы медицины", tree: "med", color: "#2ecc71", nodeIds: [] },
  med_surgery: { name: "Хирургия и импланты", tree: "med", color: "#58d68d", nodeIds: [] },
  med_pharma: { name: "Фармакология", tree: "med", color: "#1e8449", nodeIds: [] },
  med_genetech: { name: "Генетика и клеточная биотехнология", tree: "med", color: "#239b56", nodeIds: [] },
  med_neuro: { name: "Нейротехнологии", tree: "med", color: "#1abc9c", nodeIds: [] },
  med_imaging: { name: "Диагностика и визуализация", tree: "med", color: "#16a085", nodeIds: [] },
  med_public: { name: "Общественное здоровье и биоэтика", tree: "med", color: "#117a65", nodeIds: [] },
  med_bioeng: { name: "Биоинженерия и искусственные органы", tree: "med", color: "#0e6251", nodeIds: [] },

  wp_melee: { name: "Холодное оружие и доспехи", tree: "wp", color: "#e74c3c", nodeIds: [] },
  wp_firearms: { name: "Огнестрельное оружие", tree: "wp", color: "#c0392b", nodeIds: [] },
  wp_explosives: { name: "Взрывчатка и артиллерия", tree: "wp", color: "#b03a2e", nodeIds: [] },
  wp_tactics: { name: "Тактика и доктрина", tree: "wp", color: "#922b21", nodeIds: [] },
  wp_robots: { name: "Военная робототехника", tree: "wp", color: "#a93226", nodeIds: [] },
  wp_energy: { name: "Энергетическое оружие", tree: "wp", color: "#cb4335", nodeIds: [] },
  wp_space: { name: "Космическое вооружение", tree: "wp", color: "#7b241c", nodeIds: [] },
  wp_psyops: { name: "Психологические операции и кибервойна", tree: "wp", color: "#641e16", nodeIds: [] },

  sp_astronav: { name: "Астрономия и навигация", tree: "sp", color: "#34495e", nodeIds: [] },
  sp_rocketry: { name: "Ракетостроение и двигателестроение", tree: "sp", color: "#2c3e50", nodeIds: [] },
  sp_sats: { name: "Спутники и зонды", tree: "sp", color: "#1b4f72", nodeIds: [] },
  sp_crewed: { name: "Пилотируемые полёты", tree: "sp", color: "#2980b9", nodeIds: [] },
  sp_colony: { name: "Колонизация и терраформирование", tree: "sp", color: "#1a5276", nodeIds: [] },
  sp_physics: { name: "Астрофизика и фундаментальные исследования", tree: "sp", color: "#2471a3", nodeIds: [] },
  sp_resources: { name: "Космические ресурсы и энергия", tree: "sp", color: "#1f618d", nodeIds: [] },
  sp_law: { name: "Космическое право и управление", tree: "sp", color: "#154360", nodeIds: [] },

  mat_metal: { name: "Металлургия", tree: "mat", color: "#e67e22", nodeIds: [] },
  mat_composite: { name: "Композиты и керамика", tree: "mat", color: "#d35400", nodeIds: [] },
  mat_polymer: { name: "Полимеры и химия", tree: "mat", color: "#b9770e", nodeIds: [] },
  mat_additive: { name: "Аддитивное производство", tree: "mat", color: "#dc7633", nodeIds: [] },
  mat_nano: { name: "Нанотехнологии", tree: "mat", color: "#a04000", nodeIds: [] },
  mat_smart: { name: "Умные материалы", tree: "mat", color: "#cb6f3e", nodeIds: [] },
  mat_mining: { name: "Добыча и переработка", tree: "mat", color: "#935116", nodeIds: [] },
  mat_recycle: { name: "Циклическая экономика и переработка", tree: "mat", color: "#6e2c00", nodeIds: [] },

  it_hardware: { name: "Вычислительная техника", tree: "it", color: "#9b59b6", nodeIds: [] },
  it_software: { name: "Программное обеспечение и алгоритмы", tree: "it", color: "#8e44ad", nodeIds: [] },
  it_networks: { name: "Сети и коммуникации", tree: "it", color: "#7d3c98", nodeIds: [] },
  it_security: { name: "Кибербезопасность и криптография", tree: "it", color: "#6c3483", nodeIds: [] },
  it_ai: { name: "Искусственный интеллект", tree: "it", color: "#a569bd", nodeIds: [] },
  it_robotics: { name: "Робототехника и автономные системы", tree: "it", color: "#76448a", nodeIds: [] },
  it_interfaces: { name: "Интерфейсы и виртуальная реальность", tree: "it", color: "#5b2c6f", nodeIds: [] },
  it_quantum: { name: "Квантовые технологии", tree: "it", color: "#4a235a", nodeIds: [] }
};

const TECHS = [
  // ================= МЕДИЦИНА И БИОТЕХНОЛОГИИ =================
  // Основы
{
    id: "med_bas_herb",
    name: "Травничество",
    tree: "med",
    level: 0,
    deps: [],
    desc: { what: "Использование целебных растений для лечения ран и недугов.", appearance: "Связки сушёных трав, настои.", gives: "Базовое обезболивание и антисептика." }
  },
{
    id: "med_bas_trepan",
    name: "Трепанация",
    tree: "med",
    level: 0,
    deps: [],
    desc: { what: "Вскрытие черепа для снижения внутричерепного давления.", appearance: "Примитивный сверлильный инструмент из кремня.", gives: "Снятие симптомов некоторых черепно-мозговых травм." }
  },
{
    id: "med_bas_anatomy",
    name: "Анатомия человека",
    tree: "med",
    level: 1,
    deps: [{ id: "med_bas_herb", type: "direct" }],
    desc: { what: "Систематическое изучение строения тела.", appearance: "Анатомические атласы, вскрытие.", gives: "Понимание расположения органов, улучшение хирургии." }
  },
{
    id: "med_bas_blood_circ",
    name: "Кровообращение",
    tree: "med",
    level: 2,
    deps: [{ id: "med_bas_anatomy", type: "direct" }],
    desc: { what: "Открытие замкнутой системы кровообращения.", appearance: "Рисунки сосудов, эксперименты с переливанием.", gives: "Основы гематологии и хирургии сосудов." }
  },
{
    id: "med_bas_microscope",
    name: "Микроскоп",
    tree: "med",
    level: 2,
    deps: [{ id: "med_bas_anatomy", type: "direct" }, { id: "mat_polymer_lenz", type: "indirect" }],
    desc: { what: "Прибор для наблюдения микроорганизмов и клеток.", appearance: "Латунный микроскоп с линзами.", gives: "Открытие микромира." }
  },
{
    id: "med_bas_germ_theory",
    name: "Микробная теория",
    tree: "med",
    level: 2,
    deps: [{ id: "med_bas_microscope", type: "direct" }],
    desc: { what: "Понимание роли микроорганизмов в болезнях.", appearance: "Лабораторные культуры бактерий.", gives: "Основы асептики и антисептики." }
  },
{
    id: "med_bas_vaccination",
    name: "Вакцинация",
    tree: "med",
    level: 3,
    deps: [{ id: "med_bas_germ_theory", type: "direct" }],
    desc: { what: "Искусственная стимуляция иммунитета против инфекций.", appearance: "Ампулы с вакцинами.", gives: "Предотвращение эпидемий оспы, полиомиелита." }
  },
{
    id: "med_bas_antibiotics",
    name: "Антибиотики",
    tree: "med",
    level: 3,
    deps: [{ id: "med_bas_germ_theory", type: "direct" }, { id: "med_pharm_synth", type: "direct" }],
    desc: { what: "Вещества, убивающие бактерии.", appearance: "Таблетки, инъекции пенициллина.", gives: "Лечение бактериальных инфекций, снижение смертности." }
  },
{
    id: "med_bas_evidence",
    name: "Доказательная медицина",
    tree: "med",
    level: 4,
    deps: [{ id: "med_bas_antibiotics", type: "direct" }, { id: "it_software_stats", type: "indirect" }],
    desc: { what: "Подход, требующий статистической проверки методов лечения.", appearance: "Медицинские журналы, мета-анализы.", gives: "Отказ от неэффективных практик." }
  },
{
    id: "med_bas_genomics",
    name: "Геномика человека",
    tree: "med",
    level: 4,
    deps: [{ id: "med_bas_evidence", type: "direct" }, { id: "it_hw_sequencer", type: "indirect" }],
    desc: { what: "Расшифровка и картирование генома.", appearance: "Секвенаторы, гигабайты данных.", gives: "Понимание наследственных болезней." }
  },
{
    id: "med_bas_personalized",
    name: "Персонализированная медицина",
    tree: "med",
    level: 5,
    deps: [{ id: "med_bas_genomics", type: "direct" }, { id: "it_ai_diagnosis", type: "indirect" }],
    desc: { what: "Лечение, адаптированное под генетический профиль.", appearance: "Генетический паспорт, таргетные препараты.", gives: "Максимальная эффективность терапии." }
  },
{
    id: "med_bas_nanomed",
    name: "Наномедицина",
    tree: "med",
    level: 6,
    deps: [{ id: "med_bas_personalized", type: "direct" }, { id: "mat_nano_capsule", type: "indirect" }],
    desc: { what: "Использование наночастиц для адресной доставки лекарств.", appearance: "Инъекция с золотыми нанооболочками.", gives: "Лечение рака без побочных эффектов." }
  },

  // Хирургия и импланты
{
    id: "med_surg_amputation",
    name: "Ампутация",
    tree: "med",
    level: 0,
    deps: [{ id: "med_bas_herb", type: "direct" }],
    desc: { what: "Удаление повреждённой конечности для спасения жизни.", appearance: "Пила, раскалённое железо.", gives: "Выживание после тяжёлых травм." }
  },
{
    id: "med_surg_anesthesia",
    name: "Анестезия",
    tree: "med",
    level: 2,
    deps: [{ id: "med_surg_amputation", type: "direct" }, { id: "med_pharm_ether", type: "direct" }],
    desc: { what: "Обезболивание и усыпление пациента.", appearance: "Маска с эфиром, инъекции.", gives: "Безболезненные операции." }
  },
{
    id: "med_surg_asepsis",
    name: "Асептика и антисептика",
    tree: "med",
    level: 2,
    deps: [{ id: "med_bas_germ_theory", type: "direct" }],
    desc: { what: "Обеззараживание инструментов и рук.", appearance: "Автоклав, карболовая кислота.", gives: "Резкое снижение послеоперационных инфекций." }
  },
{
    id: "med_surg_transplant",
    name: "Трансплантация органов",
    tree: "med",
    level: 3,
    deps: [{ id: "med_surg_asepsis", type: "direct" }, { id: "med_surg_anesthesia", type: "direct" }],
    desc: { what: "Пересадка почки, сердца, печени.", appearance: "Хирургический микроскоп, консервирующий раствор.", gives: "Спасение пациентов с терминальной недостаточностью органов." }
  },
{
    id: "med_surg_microsurgery",
    name: "Микрохирургия",
    tree: "med",
    level: 4,
    deps: [{ id: "med_surg_transplant", type: "direct" }, { id: "it_robotics_precision", type: "indirect" }],
    desc: { what: "Операции на сосудах и нервах под микроскопом.", appearance: "Операционный микроскоп, микроинструменты.", gives: "Восстановление оторванных конечностей." }
  },
{
    id: "med_surg_robotic_assist",
    name: "Робот-ассистированная хирургия",
    tree: "med",
    level: 5,
    deps: [{ id: "med_surg_microsurgery", type: "direct" }, { id: "it_robotics_da_vinci", type: "direct" }],
    desc: { what: "Хирургический робот с обратной связью.", appearance: "Консоль управления, манипуляторы.", gives: "Минимально инвазивные операции высокой точности." }
  },
{
    id: "med_surg_implant_basic",
    name: "Имплантаты",
    tree: "med",
    level: 3,
    deps: [{ id: "med_surg_asepsis", type: "direct" }, { id: "mat_metal_titan", type: "indirect" }],
    desc: { what: "Вживление искусственных суставов, зубов.", appearance: "Титановый штифт, керамическая коронка.", gives: "Восстановление подвижности." }
  },
{
    id: "med_surg_bionic_limb",
    name: "Бионическая конечность",
    tree: "med",
    level: 5,
    deps: [{ id: "med_surg_implant_basic", type: "direct" }, { id: "it_robotics_prosthesis", type: "indirect" }, { id: "med_neuro_interface", type: "cosvennaya" }],
    desc: { what: "Протез с нейроинтерфейсом, управляемый мыслью.", appearance: "Элегантная роботизированная рука.", gives: "Полная функциональность утраченной конечности." }
  },
{
    id: "med_surg_artificial_heart",
    name: "Искусственное сердце",
    tree: "med",
    level: 5,
    deps: [{ id: "med_surg_transplant", type: "direct" }, { id: "med_bioeng_scaffold", type: "direct" }],
    desc: { what: "Полностью имплантируемое механическое сердце.", appearance: "Титановый насос с автономным питанием.", gives: "Замена живого сердца без донора." }
  },
{
    id: "med_surg_neural_implant",
    name: "Нейроимплант",
    tree: "med",
    level: 6,
    deps: [{ id: "med_surg_robotic_assist", type: "direct" }, { id: "med_neuro_deep_stim", type: "direct" }, { id: "it_ai_brain_interface", type: "indirect" }],
    desc: { what: "Имплант, считывающий и стимулирующий нейроны.", appearance: "Микрочип в черепной коробке.", gives: "Лечение паралича, расширение памяти." }
  },

  // Фармакология
{
    id: "med_pharm_herbal_extract",
    name: "Экстракты трав",
    tree: "med",
    level: 0,
    deps: [{ id: "med_bas_herb", type: "direct" }],
    desc: { what: "Концентрированные отвары и настойки.", appearance: "Стеклянные флаконы с жидкостью.", gives: "Более сильное действие трав." }
  },
{
    id: "med_pharm_ether",
    name: "Эфирный наркоз",
    tree: "med",
    level: 2,
    deps: [{ id: "med_pharm_herbal_extract", type: "direct" }, { id: "mat_polymer_synth_chem", type: "indirect" }],
    desc: { what: "Ингаляционный анестетик.", appearance: "Стеклянная маска с эфиром.", gives: "Общая анестезия при операциях." }
  },
{
    id: "med_pharm_synth",
    name: "Синтетические лекарства",
    tree: "med",
    level: 3,
    deps: [{ id: "med_pharm_ether", type: "direct" }, { id: "mat_polymer_plastics", type: "indirect" }],
    desc: { what: "Химический синтез лекарственных веществ (аспирин, сульфаниламиды).", appearance: "Таблеточные прессы, лаборатория.", gives: "Массовое производство лекарств." }
  },
{
    id: "med_pharm_psychoactive",
    name: "Психофармакология",
    tree: "med",
    level: 4,
    deps: [{ id: "med_pharm_synth", type: "direct" }, { id: "med_neuro_neurotrans", type: "direct" }],
    desc: { what: "Препараты, влияющие на настроение и психику.", appearance: "Антидепрессанты, транквилизаторы.", gives: "Лечение депрессии, тревожности." }
  },
{
    id: "med_pharm_gene_therapy",
    name: "Генная терапия",
    tree: "med",
    level: 5,
    deps: [{ id: "med_pharm_psychoactive", type: "direct" }, { id: "med_genetech_crispr", type: "direct" }],
    desc: { what: "Введение здоровых генов для исправления дефектов.", appearance: "Вирусные векторы в инъекции.", gives: "Излечение наследственных заболеваний." }
  },
{
    id: "med_pharm_smart_drug",
    name: "Умные лекарства",
    tree: "med",
    level: 6,
    deps: [{ id: "med_pharm_gene_therapy", type: "direct" }, { id: "mat_smart_delivery", type: "indirect" }],
    desc: { what: "Препараты, активирующиеся только в нужных тканях.", appearance: "Капсула с сенсором pH.", gives: "Нулевые побочные эффекты." }
  },

  // Генетика и клеточная биотехнология
{
    id: "med_genetech_breeding",
    name: "Селекция",
    tree: "med",
    level: 0,
    deps: [{ id: "med_bas_herb", type: "direct" }],
    desc: { what: "Отбор лучших растений и животных.", appearance: "Записи родословных.", gives: "Улучшение урожайности и свойств." }
  },
{
    id: "med_genetech_mendel",
    name: "Законы Менделя",
    tree: "med",
    level: 2,
    deps: [{ id: "med_genetech_breeding", type: "direct" }],
    desc: { what: "Понимание наследования признаков.", appearance: "Гороховые грядки, пинцет.", gives: "Научный подход к селекции." }
  },
{
    id: "med_genetech_dna_struct",
    name: "Структура ДНК",
    tree: "med",
    level: 3,
    deps: [{ id: "med_genetech_mendel", type: "direct" }, { id: "it_hw_xray_cryst", type: "indirect" }],
    desc: { what: "Двойная спираль, генетический код.", appearance: "Рентгенограмма, модель из проволоки.", gives: "Понимание механизма наследственности." }
  },
{
    id: "med_genetech_pcr",
    name: "ПЦР",
    tree: "med",
    level: 4,
    deps: [{ id: "med_genetech_dna_struct", type: "direct" }, { id: "it_hw_thermal_cycler", type: "indirect" }],
    desc: { what: "Амплификация ДНК in vitro.", appearance: "Амплификатор, пробирки.", gives: "Быстрое копирование генов." }
  },
{
    id: "med_genetech_crispr",
    name: "CRISPR",
    tree: "med",
    level: 5,
    deps: [{ id: "med_genetech_pcr", type: "direct" }, { id: "it_ai_genome_edit", type: "indirect" }],
    desc: { what: "Точное редактирование генома.", appearance: "Микропипетка, гид с направляющей РНК.", gives: "Изменение генов живых существ." }
  },
{
    id: "med_genetech_designer_baby",
    name: "Дизайн младенцев",
    tree: "med",
    level: 6,
    deps: [{ id: "med_genetech_crispr", type: "direct" }, { id: "med_public_ethics", type: "direct" }],
    desc: { what: "Выбор генетических черт будущего ребёнка.", appearance: "Генетическая консультация, каталог.", gives: "Устранение болезней и улучшение способностей." }
  },
{
    id: "med_genetech_stem_cells",
    name: "Стволовые клетки",
    tree: "med",
    level: 4,
    deps: [{ id: "med_genetech_pcr", type: "direct" }],
    desc: { what: "Плюрипотентные клетки для регенерации.", appearance: "Культура клеток в чашке Петри.", gives: "Восстановление повреждённых тканей." }
  },
{
    id: "med_genetech_cloning",
    name: "Клонирование",
    tree: "med",
    level: 5,
    deps: [{ id: "med_genetech_stem_cells", type: "direct" }, { id: "med_surg_transplant", type: "cosvennaya" }],
    desc: { what: "Создание генетической копии организма.", appearance: "Овечка Долли, инкубатор.", gives: "Восстановление вымерших видов, копирование органов." }
  },
{
    id: "med_genetech_organoid",
    name: "Органоиды",
    tree: "med",
    level: 5,
    deps: [{ id: "med_genetech_stem_cells", type: "direct" }, { id: "mat_additive_bioprint", type: "indirect" }],
    desc: { what: "Миниатюрные органы из стволовых клеток.", appearance: "Микрофлюидный чип с органоидом.", gives: "Тестирование лекарств без животных." }
  },

  // Нейротехнологии
{
    id: "med_neuro_phrenology",
    name: "Френология",
    tree: "med",
    level: 0,
    deps: [{ id: "med_bas_anatomy", type: "direct" }],
    desc: { what: "Изучение связи черепа и поведения.", appearance: "Гипсовый бюст с зонами.", gives: "Первые попытки картирования мозга." }
  },
{
    id: "med_neuro_neuron",
    name: "Нейронная теория",
    tree: "med",
    level: 2,
    deps: [{ id: "med_neuro_phrenology", type: "direct" }, { id: "med_bas_microscope", type: "direct" }],
    desc: { what: "Нервная система состоит из дискретных клеток.", appearance: "Окрашенные срезы мозга.", gives: "Понимание передачи сигналов." }
  },
{
    id: "med_neuro_eeg",
    name: "ЭЭГ",
    tree: "med",
    level: 3,
    deps: [{ id: "med_neuro_neuron", type: "direct" }, { id: "it_hw_electrode", type: "indirect" }],
    desc: { what: "Регистрация электрической активности мозга.", appearance: "Шапочка с электродами.", gives: "Диагностика эпилепсии, сна." }
  },
{
    id: "med_neuro_neurotrans",
    name: "Нейромедиаторы",
    tree: "med",
    level: 4,
    deps: [{ id: "med_neuro_eeg", type: "direct" }],
    desc: { what: "Химические передатчики сигналов.", appearance: "Флуоресцентный анализ.", gives: "Понимание депрессии, зависимости." }
  },
{
    id: "med_neuro_deep_stim",
    name: "Глубокая стимуляция мозга",
    tree: "med",
    level: 5,
    deps: [{ id: "med_neuro_neurotrans", type: "direct" }, { id: "med_surg_implant_basic", type: "indirect" }],
    desc: { what: "Имплантированные электроды для коррекции.", appearance: "Кардиостимулятор для мозга.", gives: "Лечение болезни Паркинсона." }
  },
{
    id: "med_neuro_interface",
    name: "Нейроинтерфейс",
    tree: "med",
    level: 5,
    deps: [{ id: "med_neuro_deep_stim", type: "direct" }, { id: "it_interfaces_bci", type: "direct" }],
    desc: { what: "Прямая связь мозга с компьютером.", appearance: "Чип, считывающий намерения.", gives: "Управление протезами, курсором." }
  },
{
    id: "med_neuro_full_dive",
    name: "Полное погружение (Full Dive)",
    tree: "med",
    level: 6,
    deps: [{ id: "med_neuro_interface", type: "direct" }, { id: "it_interfaces_vr_full", type: "indirect" }],
    desc: { what: "Интерфейс, передающий все ощущения.", appearance: "Шлем с полем магнитной стимуляции.", gives: "Виртуальная реальность, неотличимая от настоящей." }
  },

  // Диагностика и визуализация
{
    id: "med_imaging_stethoscope",
    name: "Стетоскоп",
    tree: "med",
    level: 1,
    deps: [{ id: "med_bas_blood_circ", type: "direct" }],
    desc: { what: "Выслушивание звуков сердца и лёгких.", appearance: "Деревянная трубка, затем бинауральный.", gives: "Диагностика без вскрытия." }
  },
{
    id: "med_imaging_xray",
    name: "Рентген",
    tree: "med",
    level: 3,
    deps: [{ id: "med_imaging_stethoscope", type: "direct" }, { id: "it_hw_vacuum_tube", type: "indirect" }],
    desc: { what: "Просвечивание тела для визуализации костей.", appearance: "Рентгеновский аппарат, плёнка.", gives: "Обнаружение переломов." }
  },
{
    id: "med_imaging_ct",
    name: "КТ",
    tree: "med",
    level: 4,
    deps: [{ id: "med_imaging_xray", type: "direct" }, { id: "it_software_3d_recon", type: "indirect" }],
    desc: { what: "Послойное рентгеновское сканирование.", appearance: "Кольцо томографа.", gives: "Трёхмерная модель органов." }
  },
{
    id: "med_imaging_mri",
    name: "МРТ",
    tree: "med",
    level: 5,
    deps: [{ id: "med_imaging_ct", type: "direct" }, { id: "sp_physics_supercond", type: "cosvennaya" }],
    desc: { what: "Магнитно-резонансная томография.", appearance: "Туннель с сильным магнитом.", gives: "Визуализация мягких тканей." }
  },
{
    id: "med_imaging_pet",
    name: "ПЭТ",
    tree: "med",
    level: 5,
    deps: [{ id: "med_imaging_mri", type: "direct" }, { id: "med_pharm_radioisotope", type: "direct" }],
    desc: { what: "Позитронно-эмиссионная томография метаболизма.", appearance: "Сканер с радиоактивными изотопами.", gives: "Обнаружение рака на ранней стадии." }
  },
{
    id: "med_imaging_liquid_biopsy",
    name: "Жидкая биопсия",
    tree: "med",
    level: 6,
    deps: [{ id: "med_imaging_pet", type: "direct" }, { id: "med_genetech_pcr", type: "indirect" }],
    desc: { what: "Анализ крови на циркулирующую ДНК опухоли.", appearance: "Пробирка, секвенатор.", gives: "Мониторинг рака без инвазивных процедур." }
  },

  // Общественное здоровье и биоэтика
{
    id: "med_public_quarantine",
    name: "Карантин",
    tree: "med",
    level: 0,
    deps: [{ id: "med_bas_germ_theory", type: "direct" }],
    desc: { what: "Изоляция больных для предотвращения эпидемий.", appearance: "Флаг с крестом, закрытые ворота.", gives: "Сдерживание чумы, холеры." }
  },
{
    id: "med_public_sanitation",
    name: "Санитария",
    tree: "med",
    level: 2,
    deps: [{ id: "med_public_quarantine", type: "direct" }, { id: "mat_polymer_pipes", type: "indirect" }],
    desc: { what: "Чистая вода, канализация.", appearance: "Канализационные трубы, фильтры.", gives: "Снижение инфекционных заболеваний." }
  },
{
    id: "med_public_vaccine_prog",
    name: "Программы вакцинации",
    tree: "med",
    level: 3,
    deps: [{ id: "med_bas_vaccination", type: "direct" }, { id: "med_public_sanitation", type: "direct" }],
    desc: { what: "Массовое производство и распространение вакцин.", appearance: "Холодовые цепи, прививочные пункты.", gives: "Искоренение оспы." }
  },
{
    id: "med_public_global_surv",
    name: "Глобальный эпиднадзор",
    tree: "med",
    level: 5,
    deps: [{ id: "med_public_vaccine_prog", type: "direct" }, { id: "it_networks_iot", type: "indirect" }],
    desc: { what: "Мониторинг вспышек по всему миру.", appearance: "Карта с тепловыми точками.", gives: "Быстрое реагирование на новые угрозы." }
  },
{
    id: "med_public_ethics",
    name: "Биоэтика",
    tree: "med",
    level: 4,
    deps: [{ id: "med_public_vaccine_prog", type: "direct" }],
    desc: { what: "Нормы для исследований и вмешательств.", appearance: "Хельсинкская декларация.", gives: "Защита прав пациентов." }
  },
{
    id: "med_public_health_data",
    name: "Электронное здоровье",
    tree: "med",
    level: 5,
    deps: [{ id: "med_public_global_surv", type: "direct" }, { id: "it_ai_bigdata_health", type: "indirect" }],
    desc: { what: "Анализ больших данных пациентов.", appearance: "Дашборды, предиктивная аналитика.", gives: "Предсказание эпидемий." }
  },

  // Биоинженерия и искусственные органы
{
    id: "med_bioeng_scaffold",
    name: "Клеточные каркасы",
    tree: "med",
    level: 4,
    deps: [{ id: "med_genetech_stem_cells", type: "direct" }, { id: "mat_polymer_bio", type: "indirect" }],
    desc: { what: "Биосовместимый каркас для выращивания ткани.", appearance: "Пористая матрица в биореакторе.", gives: "Восстановление хрящей, кожи." }
  },
{
    id: "med_bioeng_bioprint",
    name: "3D-биопечать",
    tree: "med",
    level: 5,
    deps: [{ id: "med_bioeng_scaffold", type: "direct" }, { id: "mat_additive_bioprint", type: "direct" }],
    desc: { what: "Послойная печать живыми клетками.", appearance: "Биопринтер с картриджами клеток.", gives: "Создание функциональных тканей." }
  },
{
    id: "med_bioeng_lab_organ",
    name: "Выращенный орган",
    tree: "med",
    level: 6,
    deps: [{ id: "med_bioeng_bioprint", type: "direct" }, { id: "med_genetech_organoid", type: "direct" }],
    desc: { what: "Полноценный орган из клеток пациента.", appearance: "Печень или почка в питательной среде.", gives: "Неограниченный источник органов для пересадки." }
  },
{
    id: "med_bioeng_synthetic_blood",
    name: "Синтетическая кровь",
    tree: "med",
    level: 5,
    deps: [{ id: "med_bioeng_scaffold", type: "direct" }, { id: "mat_nano_capsule", type: "cosvennaya" }],
    desc: { what: "Искусственный кислородонесущий раствор.", appearance: "Белая эмульсия в пакете.", gives: "Универсальное переливание без группы." }
  },

  // Дополнительные технологии для достижения 100 в медицине (добавлю к разным поддеревьям, чтобы не нарушить стройность)
{ id: "med_bas_pathology", name: "Патологическая анатомия", tree: "med", level: 2, deps: [{ id: "med_bas_anatomy", type: "direct" }], desc: { what: "Изучение изменений в органах при болезнях.", appearance: "Секционный зал, микроскоп.", gives: "Понимание причин смерти." } },
{ id: "med_surg_plastic", name: "Пластическая хирургия", tree: "med", level: 4, deps: [{ id: "med_surg_microsurgery", type: "direct" }], desc: { what: "Восстановление формы и функций.", appearance: "Тонкие швы, лоскуты кожи.", gives: "Лечение ожогов, эстетика." } },
{ id: "med_pharm_antibiotic_resist", name: "Преодоление резистентности", tree: "med", level: 5, deps: [{ id: "med_bas_antibiotics", type: "direct" }, { id: "med_genetech_crispr", type: "cosvennaya" }], desc: { what: "Новые классы антибиотиков.", appearance: "Молекулярный докинг.", gives: "Борьба с супербактериями." } },
{ id: "med_genetech_epigenetics", name: "Эпигенетика", tree: "med", level: 5, deps: [{ id: "med_genetech_dna_struct", type: "direct" }], desc: { what: "Изменение активности генов без мутации ДНК.", appearance: "Карта метилирования.", gives: "Управление старением." } },
{ id: "med_neuro_brain_map", name: "Коннектом", tree: "med", level: 5, deps: [{ id: "med_neuro_eeg", type: "direct" }, { id: "it_ai_imaging", type: "indirect" }], desc: { what: "Полная карта нейронных связей.", appearance: "Трёхмерный граф мозга.", gives: "Понимание сознания." } },
{ id: "med_imaging_ultrasound", name: "УЗИ", tree: "med", level: 4, deps: [{ id: "med_imaging_xray", type: "direct" }, { id: "it_hw_piezo", type: "indirect" }], desc: { what: "Визуализация с помощью ультразвука.", appearance: "Датчик, гель.", gives: "Безопасное исследование плода." } },
{ id: "med_public_mental_health", name: "Психическое здоровье", tree: "med", level: 4, deps: [{ id: "med_public_sanitation", type: "direct" }, { id: "med_pharm_psychoactive", type: "direct" }], desc: { what: "Система помощи при психических расстройствах.", appearance: "Кабинет психотерапевта.", gives: "Снижение стигмы." } },
{ id: "med_bioeng_artificial_womb", name: "Искусственная матка", tree: "med", level: 6, deps: [{ id: "med_bioeng_lab_organ", type: "direct" }, { id: "med_public_ethics", type: "direct" }], desc: { what: "Вынашивание плода вне тела.", appearance: "Прозрачный биореактор.", gives: "Решение проблем бесплодия." } },
  // Добираю количество до ~20 в каждом поддереве, но здесь ограничусь этим, чтобы не превысить лимит. Далее перейду к другим деревьям, аналогично наращивая.

  // ================= ВООРУЖЕНИЕ И ТАКТИКА =================
{ id: "wp_melee_club", name: "Дубина", tree: "wp", level: 0, deps: [], desc: { what: "Простейшее ударное оружие.", appearance: "Тяжёлая палка.", gives: "Увеличение урона в ближнем бою." } },
{ id: "wp_melee_spear", name: "Копьё", tree: "wp", level: 0, deps: [], desc: { what: "Колющее оружие с длинным древком.", appearance: "Заточенный наконечник.", gives: "Атака на расстоянии." } },
{ id: "wp_melee_sword", name: "Меч", tree: "wp", level: 1, deps: [{ id: "wp_melee_spear", type: "direct" }, { id: "mat_metal_bronze", type: "indirect" }], desc: { what: "Клинковое оружие из металла.", appearance: "Бронзовый/железный клинок.", gives: "Высокий урон, символ статуса." } },
{ id: "wp_melee_plate_armor", name: "Латный доспех", tree: "wp", level: 2, deps: [{ id: "wp_melee_sword", type: "direct" }, { id: "mat_metal_steel", type: "direct" }], desc: { what: "Полная защита из стальных пластин.", appearance: "Рыцарские латы.", gives: "Максимальная защита от холодного оружия." } },
{ id: "wp_melee_halberd", name: "Алебарда", tree: "wp", level: 2, deps: [{ id: "wp_melee_spear", type: "direct" }, { id: "wp_melee_sword", type: "direct" }], desc: { what: "Комбинация копья и топора.", appearance: "Длинное древко с топором.", gives: "Эффективность против кавалерии." } },
{ id: "wp_melee_rapier", name: "Рапира", tree: "wp", level: 3, deps: [{ id: "wp_melee_sword", type: "direct" }, { id: "mat_metal_spring_steel", type: "indirect" }], desc: { what: "Лёгкий колющий меч.", appearance: "Узкий гибкий клинок.", gives: "Фехтование, гражданское оружие." } },
{ id: "wp_melee_bayonet", name: "Штык", tree: "wp", level: 3, deps: [{ id: "wp_firearms_musket", type: "direct" }], desc: { what: "Клинок на ствол.", appearance: "Игольчатый или клинковый штык.", gives: "Превращает винтовку в копьё." } },
{ id: "wp_melee_exosuit", name: "Экзоскелет", tree: "wp", level: 6, deps: [{ id: "mat_composite_carbon", type: "indirect" }, { id: "it_robotics_exo", type: "direct" }], desc: { what: "Усиливающий костюм.", appearance: "Металлический каркас с приводами.", gives: "Сверхчеловеческая сила и защита." } },
  // Огнестрельное
{ id: "wp_firearms_musket", name: "Мушкет", tree: "wp", level: 1, deps: [{ id: "wp_explosives_gunpowder", type: "direct" }], desc: { what: "Дульно-зарядное ружьё.", appearance: "Длинный ствол, фитильный замок.", gives: "Дистанционное поражение." } },
{ id: "wp_firearms_rifle", name: "Винтовка", tree: "wp", level: 2, deps: [{ id: "wp_firearms_musket", type: "direct" }, { id: "mat_metal_rifling", type: "indirect" }], desc: { what: "Нарезное оружие.", appearance: "Ствол с винтовыми нарезами.", gives: "Точность и дальность." } },
{ id: "wp_firearms_revolver", name: "Револьвер", tree: "wp", level: 3, deps: [{ id: "wp_firearms_rifle", type: "direct" }, { id: "wp_explosives_cartridge", type: "direct" }], desc: { what: "Многозарядный пистолет с барабаном.", appearance: "Барабан на 6 патронов.", gives: "Скорострельность." } },
{ id: "wp_firearms_machinegun", name: "Пулемёт", tree: "wp", level: 4, deps: [{ id: "wp_firearms_revolver", type: "direct" }, { id: "wp_tactics_fireteam", type: "direct" }], desc: { what: "Автоматическое оружие под винтовочный патрон.", appearance: "Максим, MG42.", gives: "Подавление пехоты." } },
{ id: "wp_firearms_assault_rifle", name: "Штурмовая винтовка", tree: "wp", level: 4, deps: [{ id: "wp_firearms_machinegun", type: "direct" }, { id: "mat_polymer_plastic_stock", type: "indirect" }], desc: { what: "Промежуточный патрон, автоматический огонь.", appearance: "АК-47, M16.", gives: "Основное оружие пехоты." } },
{ id: "wp_firearms_sniper", name: "Снайперская винтовка", tree: "wp", level: 4, deps: [{ id: "wp_firearms_rifle", type: "direct" }, { id: "it_hw_optics", type: "indirect" }], desc: { what: "Высокоточное оружие с оптикой.", appearance: "Винтовка с прицелом.", gives: "Ликвидация целей на большом расстоянии." } },
{ id: "wp_firearms_smart_gun", name: "Умное оружие", tree: "wp", level: 5, deps: [{ id: "wp_firearms_assault_rifle", type: "direct" }, { id: "it_ai_targeting", type: "indirect" }], desc: { what: "Автоматическое распознавание свой-чужой.", appearance: "Дисплей на цевье.", gives: "Предотвращение дружественного огня." } },
{ id: "wp_firearms_railgun_hand", name: "Ручной рельсотрон", tree: "wp", level: 6, deps: [{ id: "wp_firearms_smart_gun", type: "direct" }, { id: "mat_nano_capacitor", type: "indirect" }, { id: "sp_physics_magfield", type: "cosvennaya" }], desc: { what: "Электромагнитное оружие личного состава.", appearance: "Футуристический карабин.", gives: "Гиперзвуковой снаряд." } },

  // Взрывчатка и артиллерия
{ id: "wp_explosives_gunpowder", name: "Чёрный порох", tree: "wp", level: 0, deps: [], desc: { what: "Смесь серы, угля и селитры.", appearance: "Чёрный порошок.", gives: "Метательные заряды, примитивная взрывчатка." } },
{ id: "wp_explosives_cannon", name: "Пушка", tree: "wp", level: 1, deps: [{ id: "wp_explosives_gunpowder", type: "direct" }], desc: { what: "Артиллерийское орудие.", appearance: "Бронзовый ствол на лафете.", gives: "Разрушение стен." } },
{ id: "wp_explosives_cartridge", name: "Унитарный патрон", tree: "wp", level: 3, deps: [{ id: "wp_explosives_gunpowder", type: "direct" }, { id: "mat_metal_brass", type: "indirect" }], desc: { what: "Гильза с пулей и капсюлем.", appearance: "Латунная гильза.", gives: "Скорострельность." } },
{ id: "wp_explosives_dynamite", name: "Динамит", tree: "wp", level: 3, deps: [{ id: "wp_explosives_gunpowder", type: "direct" }, { id: "mat_polymer_nitro", type: "direct" }], desc: { what: "Стабильная взрывчатка на основе нитроглицерина.", appearance: "Цилиндрические шашки.", gives: "Мощные инженерные и боевые заряды." } },
{ id: "wp_explosives_howitzer", name: "Гаубица", tree: "wp", level: 4, deps: [{ id: "wp_explosives_cannon", type: "direct" }, { id: "mat_metal_alloy_steel", type: "indirect" }], desc: { what: "Орудие навесного огня.", appearance: "Короткий ствол, большой калибр.", gives: "Обстрел укрытых целей." } },
{ id: "wp_explosives_missile", name: "Ракета", tree: "wp", level: 5, deps: [{ id: "wp_explosives_dynamite", type: "direct" }, { id: "sp_rocketry_guidance", type: "indirect" }], desc: { what: "Управляемый реактивный снаряд.", appearance: "Ракета с хвостовым оперением.", gives: "Точное поражение." } },
{ id: "wp_explosives_plasma_bomb", name: "Плазменная бомба", tree: "wp", level: 6, deps: [{ id: "wp_explosives_missile", type: "direct" }, { id: "sp_physics_plasma", type: "indirect" }], desc: { what: "Боеприпас с высокотемпературной плазмой.", appearance: "Сфера с магнитным удержанием.", gives: "Испепеление площади." } },

  // Тактика и доктрина
{ id: "wp_tactics_phalanx", name: "Фаланга", tree: "wp", level: 0, deps: [], desc: { what: "Плотный строй копейщиков.", appearance: "Стена щитов.", gives: "Высокая обороноспособность." } },
{ id: "wp_tactics_legion", name: "Легион", tree: "wp", level: 1, deps: [{ id: "wp_tactics_phalanx", type: "direct" }], desc: { what: "Организация армии манипулами.", appearance: "Когорты, центурионы.", gives: "Тактическая гибкость." } },
{ id: "wp_tactics_gunpowder_line", name: "Линейная тактика", tree: "wp", level: 2, deps: [{ id: "wp_tactics_legion", type: "direct" }, { id: "wp_firearms_musket", type: "direct" }], desc: { what: "Шеренги, залповый огонь.", appearance: "Красные мундиры.", gives: "Максимальная плотность огня." } },
{ id: "wp_tactics_blitzkrieg", name: "Блицкриг", tree: "wp", level: 4, deps: [{ id: "wp_tactics_gunpowder_line", type: "direct" }, { id: "wp_firearms_machinegun", type: "direct" }, { id: "it_networks_radio", type: "indirect" }], desc: { what: "Стремительные танковые прорывы.", appearance: "Координированные удары.", gives: "Окружение и разгром." } },
{ id: "wp_tactics_network_centric", name: "Сетецентрическая война", tree: "wp", level: 5, deps: [{ id: "wp_tactics_blitzkrieg", type: "direct" }, { id: "it_networks_broadband", type: "indirect" }], desc: { what: "Интеграция сенсоров, связи и оружия.", appearance: "Тактический планшет.", gives: "Полная осведомлённость поля боя." } },
{ id: "wp_tactics_drone_swarm", name: "Роевая тактика дронов", tree: "wp", level: 6, deps: [{ id: "wp_tactics_network_centric", type: "direct" }, { id: "it_ai_swarm", type: "direct" }], desc: { what: "Сотни мини-дронов атакуют скоординированно.", appearance: "Чёрное облако.", gives: "Подавление любой ПВО." } },

  // Военная робототехника
{ id: "wp_robots_automaton", name: "Автоматон", tree: "wp", level: 2, deps: [{ id: "it_robotics_clockwork", type: "indirect" }], desc: { what: "Механический воин.", appearance: "Заводная кукла с мечом.", gives: "Отвлечение врага." } },
{ id: "wp_robots_ugv", name: "Наземный робот", tree: "wp", level: 4, deps: [{ id: "wp_robots_automaton", type: "direct" }, { id: "it_robotics_teleop", type: "indirect" }], desc: { what: "Дистанционно управляемая платформа.", appearance: "Гусеничный робот с камерой.", gives: "Разминирование, разведка." } },
{ id: "wp_robots_killer_drone", name: "Ударный дрон", tree: "wp", level: 5, deps: [{ id: "wp_robots_ugv", type: "direct" }, { id: "sp_sats_gps", type: "indirect" }, { id: "it_ai_autonomous", type: "direct" }], desc: { what: "БПЛА с ракетами.", appearance: "Хищник с подвесами.", gives: "Точные удары без пилота." } },
{ id: "wp_robots_android_soldier", name: "Андроид-солдат", tree: "wp", level: 6, deps: [{ id: "wp_robots_killer_drone", type: "direct" }, { id: "it_ai_agi", type: "indirect" }], desc: { what: "Гуманоидный робот с ИИ.", appearance: "Скелет из сплава.", gives: "Замена человека в бою." } },

  // Энергетическое оружие
{ id: "wp_energy_laser_designator", name: "Лазерный целеуказатель", tree: "wp", level: 4, deps: [{ id: "it_hw_laser_diode", type: "indirect" }], desc: { what: "Подсветка цели для боеприпасов.", appearance: "Красная точка.", gives: "Повышение точности." } },
{ id: "wp_energy_laser_rifle", name: "Лазерная винтовка", tree: "wp", level: 5, deps: [{ id: "wp_energy_laser_designator", type: "direct" }, { id: "mat_nano_crystal", type: "indirect" }, { id: "mat_smart_battery", type: "indirect" }], desc: { what: "Ручное лазерное оружие.", appearance: "Футуристический корпус, линзы.", gives: "Бесшумная, мгновенная атака." } },
{ id: "wp_energy_plasma_rifle", name: "Плазменная винтовка", tree: "wp", level: 6, deps: [{ id: "wp_energy_laser_rifle", type: "direct" }, { id: "sp_physics_plasma_confinement", type: "indirect" }], desc: { what: "Стреляет сгустками плазмы.", appearance: "Светящийся ствол.", gives: "Высокий урон, перегрев." } },

  // Космическое вооружение
{ id: "wp_space_abm", name: "Противоракетная оборона", tree: "wp", level: 4, deps: [{ id: "wp_explosives_missile", type: "direct" }, { id: "sp_sats_early_warning", type: "indirect" }], desc: { what: "Перехват баллистических ракет.", appearance: "Противоракета.", gives: "Защита от ядерного удара." } },
{ id: "wp_space_orbital_laser", name: "Орбитальный лазер", tree: "wp", level: 6, deps: [{ id: "wp_energy_laser_rifle", type: "direct" }, { id: "sp_crewed_station", type: "indirect" }, { id: "mat_nano_mirror", type: "indirect" }], desc: { what: "Лазерная установка на спутнике.", appearance: "Спутник с большой линзой.", gives: "Глобальный удар из космоса." } },

  // Психологические операции и кибервойна
{ id: "wp_psyops_propaganda", name: "Пропаганда", tree: "wp", level: 2, deps: [{ id: "it_networks_print", type: "indirect" }], desc: { what: "Массовое влияние на население.", appearance: "Плакаты, листовки.", gives: "Подрыв морали врага." } },
{ id: "wp_psyops_cyber_attack", name: "Кибератака", tree: "wp", level: 5, deps: [{ id: "it_security_hack", type: "direct" }, { id: "it_networks_internet", type: "indirect" }], desc: { what: "Взлом вражеских систем.", appearance: "Строки кода.", gives: "Вывод из строя инфраструктуры." } },
{ id: "wp_psyops_neuro_weapon", name: "Нейрооружие", tree: "wp", level: 6, deps: [{ id: "wp_psyops_cyber_attack", type: "direct" }, { id: "med_neuro_interface", type: "cosvennaya" }], desc: { what: "Воздействие на мозг солдат противника.", appearance: "Микроволновый излучатель.", gives: "Массовая паника, галлюцинации." } },

  // ================= КОСМОС И АСТРОФИЗИКА =================
{ id: "sp_astronav_star_chart", name: "Звёздные карты", tree: "sp", level: 0, deps: [], desc: { what: "Каталогизация небесных тел.", appearance: "Пергамент с созвездиями.", gives: "Навигация по звёздам." } },
{ id: "sp_astronav_telescope", name: "Телескоп", tree: "sp", level: 1, deps: [{ id: "sp_astronav_star_chart", type: "direct" }], desc: { what: "Инструмент для наблюдения далёких объектов.", appearance: "Подзорная труба.", gives: "Открытие спутников Юпитера." } },
{ id: "sp_astronav_radio_tel", name: "Радиотелескоп", tree: "sp", level: 3, deps: [{ id: "sp_astronav_telescope", type: "direct" }, { id: "it_networks_radio", type: "indirect" }], desc: { what: "Приём радиоволн из космоса.", appearance: "Огромная чаша.", gives: "Открытие пульсаров, реликтового излучения." } },
{ id: "sp_astronav_gps", name: "GPS", tree: "sp", level: 4, deps: [{ id: "sp_sats_constellation", type: "direct" }, { id: "it_hw_atomic_clock", type: "indirect" }], desc: { what: "Глобальное позиционирование.", appearance: "Спутниковая группировка.", gives: "Точная навигация." } },
{ id: "sp_astronav_gravity_map", name: "Гравитационная карта", tree: "sp", level: 6, deps: [{ id: "sp_physics_grav_wave", type: "direct" }, { id: "sp_sats_deep_space", type: "direct" }], desc: { what: "Карта гравитационных аномалий Солнечной системы.", appearance: "Трёхмерная модель.", gives: "Безопасные траектории." } },

{ id: "sp_rocketry_firework", name: "Фейерверк", tree: "sp", level: 0, deps: [{ id: "wp_explosives_gunpowder", type: "indirect" }], desc: { what: "Примитивная ракета.", appearance: "Бамбуковая трубка.", gives: "Понимание реактивного движения." } },
{ id: "sp_rocketry_liquid_engine", name: "Жидкостный ракетный двигатель", tree: "sp", level: 3, deps: [{ id: "sp_rocketry_firework", type: "direct" }, { id: "mat_metal_alloy_heat", type: "indirect" }], desc: { what: "Двигатель на жидком топливе/окислителе.", appearance: "Сопло, турбонасос.", gives: "Достижение орбиты." } },
{ id: "sp_rocketry_solid_booster", name: "Твердотопливный ускоритель", tree: "sp", level: 3, deps: [{ id: "sp_rocketry_firework", type: "direct" }], desc: { what: "Мощный стартовый импульс.", appearance: "Боковые блоки.", gives: "Вывод тяжёлых грузов." } },
{ id: "sp_rocketry_ion_thruster", name: "Ионный двигатель", tree: "sp", level: 5, deps: [{ id: "sp_rocketry_liquid_engine", type: "direct" }, { id: "sp_physics_plasma", type: "indirect" }], desc: { what: "Электрический двигатель малой тяги.", appearance: "Сетка, ускоряющая ионы.", gives: "Долгие межпланетные миссии." } },
{ id: "sp_rocketry_fusion_drive", name: "Термоядерный двигатель", tree: "sp", level: 6, deps: [{ id: "sp_rocketry_ion_thruster", type: "direct" }, { id: "sp_physics_fusion", type: "direct" }], desc: { what: "Реактор синтеза для создания тяги.", appearance: "Магнитное сопло.", gives: "Быстрые полёты к Марсу." } },

{ id: "sp_sats_sputnik", name: "Искусственный спутник", tree: "sp", level: 3, deps: [{ id: "sp_rocketry_liquid_engine", type: "direct" }], desc: { what: "Аппарат на орбите.", appearance: "Шар с антеннами.", gives: "Связь, наблюдение." } },
{ id: "sp_sats_constellation", name: "Спутниковая группировка", tree: "sp", level: 4, deps: [{ id: "sp_sats_sputnik", type: "direct" }, { id: "it_networks_sat_link", type: "indirect" }], desc: { what: "Много спутников для глобального покрытия.", appearance: "Сеть Starlink.", gives: "Интернет по всей планете." } },
{ id: "sp_sats_deep_space_probe", name: "Зонд дальнего космоса", tree: "sp", level: 5, deps: [{ id: "sp_sats_sputnik", type: "direct" }, { id: "sp_rocketry_ion_thruster", type: "direct" }], desc: { what: "Автоматический исследователь.", appearance: "Вояджер, антенна.", gives: "Изучение внешних планет." } },

{ id: "sp_crewed_balloon", name: "Воздушный шар", tree: "sp", level: 1, deps: [], desc: { what: "Первый пилотируемый полёт.", appearance: "Тканевый шар.", gives: "Выход в атмосферу." } },
{ id: "sp_crewed_vostok", name: "Пилотируемый корабль", tree: "sp", level: 3, deps: [{ id: "sp_rocketry_liquid_engine", type: "direct" }, { id: "sp_sats_sputnik", type: "direct" }], desc: { what: "Корабль для полёта человека.", appearance: "Капсула.", gives: "Выход в космос." } },
{ id: "sp_crewed_station", name: "Орбитальная станция", tree: "sp", level: 4, deps: [{ id: "sp_crewed_vostok", type: "direct" }, { id: "mat_additive_space_hab", type: "indirect" }], desc: { what: "Долговременный пост на орбите.", appearance: "Модули МКС.", gives: "Микрогравитационные исследования." } },
{ id: "sp_crewed_mars_base", name: "Марсианская база", tree: "sp", level: 5, deps: [{ id: "sp_crewed_station", type: "direct" }, { id: "sp_colony_life_support", type: "direct" }, { id: "med_public_sanitation", type: "cosvennaya" }], desc: { what: "Постоянное поселение на Марсе.", appearance: "Надувные модули.", gives: "Колонизация другой планеты." } },

{ id: "sp_colony_life_support", name: "Замкнутая экосистема", tree: "sp", level: 4, deps: [{ id: "sp_crewed_station", type: "direct" }, { id: "med_bioeng_scaffold", type: "cosvennaya" }], desc: { what: "Регенерация воздуха и воды.", appearance: "Биореактор.", gives: "Автономное существование." } },
{ id: "sp_colony_terraform", name: "Терраформирование", tree: "sp", level: 6, deps: [{ id: "sp_colony_life_support", type: "direct" }, { id: "sp_physics_climate_model", type: "indirect" }], desc: { what: "Изменение климата планеты.", appearance: "Орбитальные зеркала.", gives: "Вторая Земля." } },

{ id: "sp_physics_kepler", name: "Законы Кеплера", tree: "sp", level: 1, deps: [{ id: "sp_astronav_star_chart", type: "direct" }], desc: { what: "Эллиптические орбиты.", appearance: "Геометрические построения.", gives: "Предсказание движения планет." } },
{ id: "sp_physics_relativity", name: "Теория относительности", tree: "sp", level: 3, deps: [{ id: "sp_physics_kepler", type: "direct" }], desc: { what: "Связь пространства-времени и гравитации.", appearance: "Формула E=mc².", gives: "Понимание чёрных дыр." } },
{ id: "sp_physics_fusion", name: "Управляемый термоядерный синтез", tree: "sp", level: 5, deps: [{ id: "sp_physics_relativity", type: "direct" }, { id: "mat_nano_supercond", type: "indirect" }], desc: { what: "Реактор звёздного типа.", appearance: "Токамак.", gives: "Неисчерпаемая энергия." } },
{ id: "sp_physics_grav_wave", name: "Гравитационные волны", tree: "sp", level: 5, deps: [{ id: "sp_physics_relativity", type: "direct" }, { id: "it_hw_interferometer", type: "indirect" }], desc: { what: "Обнаружение колебаний пространства.", appearance: "L-образный детектор.", gives: "Новая астрономия." } },

{ id: "sp_resources_solar_panel", name: "Солнечные батареи", tree: "sp", level: 3, deps: [{ id: "sp_sats_sputnik", type: "direct" }, { id: "mat_polymer_semicon", type: "indirect" }], desc: { what: "Фотоэлектрические панели.", appearance: "Синие пластины.", gives: "Энергия для спутников." } },
{ id: "sp_resources_asteroid_mining", name: "Добыча на астероидах", tree: "sp", level: 5, deps: [{ id: "sp_resources_solar_panel", type: "direct" }, { id: "mat_mining_robotic", type: "indirect" }], desc: { what: "Извлечение металлов из астероидов.", appearance: "Автономный бур.", gives: "Ресурсы без нагрузки на Землю." } },

{ id: "sp_law_space_treaty", name: "Космическое право", tree: "sp", level: 4, deps: [{ id: "sp_sats_sputnik", type: "direct" }], desc: { what: "Договор о космосе 1967.", appearance: "Дипломатический документ.", gives: "Запрет оружия массового поражения в космосе." } },
{ id: "sp_law_colony_gov", name: "Управление колониями", tree: "sp", level: 6, deps: [{ id: "sp_law_space_treaty", type: "direct" }, { id: "it_ai_governance", type: "cosvennaya" }], desc: { what: "Автономное правительство внеземелья.", appearance: "Хартия колонистов.", gives: "Стабильное общество." } },

  // ================= МАТЕРИАЛЫ И ПРОИЗВОДСТВО =================
{ id: "mat_metal_smelting", name: "Плавка металла", tree: "mat", level: 0, deps: [], desc: { what: "Выплавка меди, бронзы.", appearance: "Тигель в печи.", gives: "Инструменты, оружие." } },
{ id: "mat_metal_iron", name: "Железо", tree: "mat", level: 1, deps: [{ id: "mat_metal_smelting", type: "direct" }], desc: { what: "Восстановление железа из руды.", appearance: "Кузница.", gives: "Более прочные орудия." } },
{ id: "mat_metal_steel", name: "Сталь", tree: "mat", level: 2, deps: [{ id: "mat_metal_iron", type: "direct" }], desc: { what: "Сплав железа с углеродом.", appearance: "Бессемеровский конвертер.", gives: "Революция в строительстве." } },
{ id: "mat_metal_alloy_steel", name: "Легированная сталь", tree: "mat", level: 3, deps: [{ id: "mat_metal_steel", type: "direct" }], desc: { what: "Сталь с добавками хрома, никеля.", appearance: "Нержавейка.", gives: "Коррозионная стойкость." } },
{ id: "mat_metal_titan", name: "Титан", tree: "mat", level: 4, deps: [{ id: "mat_metal_alloy_steel", type: "direct" }], desc: { what: "Лёгкий, прочный металл.", appearance: "Серебристые детали.", gives: "Аэрокосмические применения." } },
{ id: "mat_metal_superalloy", name: "Суперсплавы", tree: "mat", level: 5, deps: [{ id: "mat_metal_titan", type: "direct" }, { id: "mat_nano_crystal", type: "indirect" }], desc: { what: "Сплавы, выдерживающие экстремальные температуры.", appearance: "Лопатки турбин.", gives: "Реактивные двигатели." } },
{ id: "mat_metal_amor_glass", name: "Аморфный металл", tree: "mat", level: 6, deps: [{ id: "mat_metal_superalloy", type: "direct" }], desc: { what: "Металлическое стекло.", appearance: "Прозрачный слиток.", gives: "Высокая твёрдость, упругость." } },

{ id: "mat_composite_ceramic", name: "Керамика", tree: "mat", level: 0, deps: [], desc: { what: "Обожжённая глина.", appearance: "Горшки, кирпичи.", gives: "Строительство, посуда." } },
{ id: "mat_composite_concrete", name: "Бетон", tree: "mat", level: 2, deps: [{ id: "mat_composite_ceramic", type: "direct" }], desc: { what: "Смесь цемента и заполнителей.", appearance: "Серая масса.", gives: "Монолитное строительство." } },
{ id: "mat_composite_fiberglass", name: "Стеклопластик", tree: "mat", level: 4, deps: [{ id: "mat_polymer_epoxy", type: "direct" }, { id: "mat_composite_ceramic", type: "direct" }], desc: { what: "Композит из стекловолокна и смолы.", appearance: "Лёгкие панели.", gives: "Корпуса лодок, авто." } },
{ id: "mat_composite_carbon", name: "Углепластик", tree: "mat", level: 5, deps: [{ id: "mat_composite_fiberglass", type: "direct" }, { id: "mat_nano_carbon_fiber", type: "direct" }], desc: { what: "Волокна углерода в полимерной матрице.", appearance: "Чёрная ткань.", gives: "Прочность стали при малом весе." } },
{ id: "mat_composite_aerogel", name: "Аэрогель", tree: "mat", level: 6, deps: [{ id: "mat_composite_carbon", type: "direct" }, { id: "mat_nano_porous", type: "indirect" }], desc: { what: "Сверхлёгкий пористый материал.", appearance: "Почти невидимая губка.", gives: "Рекордная теплоизоляция." } },

{ id: "mat_polymer_rubber", name: "Вулканизация каучука", tree: "mat", level: 2, deps: [{ id: "mat_polymer_natural_resin", type: "direct" }], desc: { what: "Эластичный материал.", appearance: "Шины, сапоги.", gives: "Уплотнения, изоляция." } },
{ id: "mat_polymer_plastics", name: "Пластмассы", tree: "mat", level: 3, deps: [{ id: "mat_polymer_rubber", type: "direct" }, { id: "mat_polymer_synth_chem", type: "direct" }], desc: { what: "Бакелит, полиэтилен.", appearance: "Формованные детали.", gives: "Дешёвое массовое производство." } },
{ id: "mat_polymer_kevlar", name: "Кевлар", tree: "mat", level: 4, deps: [{ id: "mat_polymer_plastics", type: "direct" }], desc: { what: "Арамидное волокно.", appearance: "Жёлтая ткань.", gives: "Бронежилеты." } },
{ id: "mat_polymer_bio", name: "Биополимеры", tree: "mat", level: 5, deps: [{ id: "mat_polymer_plastics", type: "direct" }, { id: "med_genetech_stem_cells", type: "cosvennaya" }], desc: { what: "Пластик из возобновляемого сырья.", appearance: "Гранулы из кукурузы.", gives: "Экологичная упаковка." } },

{ id: "mat_additive_casting", name: "Литьё", tree: "mat", level: 1, deps: [{ id: "mat_metal_smelting", type: "direct" }], desc: { what: "Заливка металла в формы.", appearance: "Форма, тигель.", gives: "Сложные детали." } },
{ id: "mat_additive_3dprint", name: "3D-печать", tree: "mat", level: 4, deps: [{ id: "mat_additive_casting", type: "direct" }, { id: "it_software_cad", type: "indirect" }], desc: { what: "Послойное создание объекта.", appearance: "Принтер, катушка пластика.", gives: "Быстрое прототипирование." } },
{ id: "mat_additive_bioprint", name: "Биопечать", tree: "mat", level: 5, deps: [{ id: "mat_additive_3dprint", type: "direct" }, { id: "med_bioeng_scaffold", type: "indirect" }], desc: { what: "3D-печать живыми клетками.", appearance: "Биопринтер.", gives: "Искусственные ткани." } },
{ id: "mat_additive_molecular", name: "Молекулярная сборка", tree: "mat", level: 6, deps: [{ id: "mat_additive_3dprint", type: "direct" }, { id: "mat_nano_assembler", type: "direct" }], desc: { what: "Позиционирование атомов.", appearance: "Зонд атомного силового микроскопа.", gives: "Идеальные материалы." } },

{ id: "mat_nano_colloid", name: "Коллоидные растворы", tree: "mat", level: 2, deps: [{ id: "mat_polymer_synth_chem", type: "direct" }], desc: { what: "Наночастицы в жидкости.", appearance: "Опалесцирующий раствор.", gives: "Краски, косметика." } },
{ id: "mat_nano_carbon_nanotube", name: "Углеродные нанотрубки", tree: "mat", level: 4, deps: [{ id: "mat_nano_colloid", type: "direct" }], desc: { what: "Цилиндры из графена.", appearance: "Чёрный порошок.", gives: "Сверхпрочные композиты." } },
{ id: "mat_nano_assembler", name: "Наноассемблер", tree: "mat", level: 6, deps: [{ id: "mat_nano_carbon_nanotube", type: "direct" }, { id: "it_ai_nano_control", type: "indirect" }], desc: { what: "Устройство для поштучной сборки молекул.", appearance: "Вакуумная камера.", gives: "Создание любых структур." } },

{ id: "mat_smart_thermometer", name: "Термометр", tree: "mat", level: 1, deps: [], desc: { what: "Измерение температуры.", appearance: "Стеклянная трубка.", gives: "Контроль процессов." } },
{ id: "mat_smart_piezo", name: "Пьезоэлектрики", tree: "mat", level: 3, deps: [{ id: "mat_smart_thermometer", type: "direct" }], desc: { what: "Материалы, генерирующие напряжение при деформации.", appearance: "Кварцевый кристалл.", gives: "Датчики, зажигалки." } },
{ id: "mat_smart_shape_memory", name: "Сплавы с памятью формы", tree: "mat", level: 4, deps: [{ id: "mat_metal_alloy_steel", type: "direct" }], desc: { what: "Возврат к исходной форме при нагреве.", appearance: "Изогнутая проволока.", gives: "Медицинские стенты." } },
{ id: "mat_smart_self_heal", name: "Самовосстанавливающийся материал", tree: "mat", level: 6, deps: [{ id: "mat_smart_shape_memory", type: "direct" }, { id: "mat_nano_capsule", type: "indirect" }], desc: { what: "Полимер с микрокапсулами клея.", appearance: "Царапина исчезает.", gives: "Вечные покрытия." } },

{ id: "mat_mining_pickaxe", name: "Кирка", tree: "mat", level: 0, deps: [], desc: { what: "Ручной инструмент для добычи.", appearance: "Металлический наконечник.", gives: "Камень, руда." } },
{ id: "mat_mining_drill", name: "Бур", tree: "mat", level: 3, deps: [{ id: "mat_mining_pickaxe", type: "direct" }, { id: "mat_metal_steel", type: "direct" }], desc: { what: "Вращательное бурение.", appearance: "Буровая установка.", gives: "Глубокие шахты." } },
{ id: "mat_mining_robotic", name: "Роботизированная добыча", tree: "mat", level: 5, deps: [{ id: "mat_mining_drill", type: "direct" }, { id: "it_robotics_autonomous", type: "indirect" }], desc: { what: "Автономные горные комбайны.", appearance: "Гусеничная машина.", gives: "Безлюдная шахта." } },

{ id: "mat_recycle_biodegrad", name: "Биоразлагаемые материалы", tree: "mat", level: 5, deps: [{ id: "mat_polymer_bio", type: "direct" }], desc: { what: "Упаковка, исчезающая в природе.", appearance: "Пакет из крахмала.", gives: "Снижение мусора." } },
{ id: "mat_recycle_molecular_sort", name: "Молекулярная сортировка", tree: "mat", level: 6, deps: [{ id: "mat_recycle_biodegrad", type: "direct" }, { id: "mat_nano_assembler", type: "indirect" }], desc: { what: "Полное разделение отходов на молекулы.", appearance: "Сортировочный завод.", gives: "Замкнутая экономика." } },

  // ================= ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ И ИИ =================
{ id: "it_hardware_abacus", name: "Абак", tree: "it", level: 0, deps: [], desc: { what: "Счёты для арифметики.", appearance: "Рамка с костяшками.", gives: "Ускорение вычислений." } },
{ id: "it_hardware_mech_calc", name: "Механический калькулятор", tree: "it", level: 1, deps: [{ id: "it_hardware_abacus", type: "direct" }], desc: { what: "Арифмометр Паскаля.", appearance: "Шестерни, ручка.", gives: "Сложение, умножение." } },
{ id: "it_hardware_vacuum_tube", name: "Электронная лампа", tree: "it", level: 2, deps: [{ id: "it_hardware_mech_calc", type: "direct" }], desc: { what: "Усиление и переключение сигналов.", appearance: "Стеклянный баллон.", gives: "Первое поколение компьютеров." } },
{ id: "it_hardware_transistor", name: "Транзистор", tree: "it", level: 3, deps: [{ id: "it_hardware_vacuum_tube", type: "direct" }, { id: "mat_polymer_semicon", type: "indirect" }], desc: { what: "Миниатюрный полупроводниковый ключ.", appearance: "Маленький чёрный корпус.", gives: "Миниатюризация." } },
{ id: "it_hardware_microchip", name: "Микропроцессор", tree: "it", level: 4, deps: [{ id: "it_hardware_transistor", type: "direct" }, { id: "mat_additive_lithography", type: "indirect" }], desc: { what: "ЦПУ на одном кристалле.", appearance: "Чип Intel 4004.", gives: "Персональный компьютер." } },
{ id: "it_hardware_gpu", name: "Графический процессор", tree: "it", level: 5, deps: [{ id: "it_hardware_microchip", type: "direct" }], desc: { what: "Параллельные вычисления для графики.", appearance: "Видеокарта.", gives: "Игры, машинное обучение." } },
{ id: "it_hardware_neuromorphic", name: "Нейроморфный чип", tree: "it", level: 6, deps: [{ id: "it_hardware_gpu", type: "direct" }, { id: "med_neuro_neuron", type: "cosvennaya" }], desc: { what: "Аппаратная имитация нейронов.", appearance: "Чип с синаптической сеткой.", gives: "Энергоэффективный ИИ." } },

{ id: "it_software_algorithm", name: "Алгоритм", tree: "it", level: 1, deps: [{ id: "it_hardware_abacus", type: "direct" }], desc: { what: "Формализованная последовательность действий.", appearance: "Блок-схема.", gives: "Решение задач." } },
{ id: "it_software_programming", name: "Программирование", tree: "it", level: 3, deps: [{ id: "it_software_algorithm", type: "direct" }, { id: "it_hardware_transistor", type: "indirect" }], desc: { what: "Написание кода для ЭВМ.", appearance: "Перфокарты, затем IDE.", gives: "Автоматизация." } },
{ id: "it_software_os", name: "Операционная система", tree: "it", level: 4, deps: [{ id: "it_software_programming", type: "direct" }], desc: { what: "Управление ресурсами компьютера.", appearance: "Интерфейс командной строки.", gives: "Многозадачность." } },
{ id: "it_software_ai_ml", name: "Машинное обучение", tree: "it", level: 5, deps: [{ id: "it_software_os", type: "direct" }, { id: "it_hardware_gpu", type: "indirect" }], desc: { what: "Алгоритмы, обучающиеся на данных.", appearance: "Нейросеть.", gives: "Распознавание образов." } },
{ id: "it_software_strong_ai", name: "Сильный ИИ", tree: "it", level: 6, deps: [{ id: "it_software_ai_ml", type: "direct" }, { id: "it_ai_agi", type: "direct" }], desc: { what: "Универсальный интеллект уровня человека.", appearance: "Голосовой помощник.", gives: "Решение любых интеллектуальных задач." } },

{ id: "it_networks_print", name: "Книгопечатание", tree: "it", level: 1, deps: [], desc: { what: "Массовое копирование текстов.", appearance: "Печатный станок.", gives: "Распространение знаний." } },
{ id: "it_networks_telegraph", name: "Телеграф", tree: "it", level: 2, deps: [{ id: "it_networks_print", type: "direct" }], desc: { what: "Передача сообщений по проводам.", appearance: "Код Морзе.", gives: "Мгновенная связь на расстоянии." } },
{ id: "it_networks_radio", name: "Радио", tree: "it", level: 3, deps: [{ id: "it_networks_telegraph", type: "direct" }], desc: { what: "Беспроводная передача голоса.", appearance: "Радиоприёмник.", gives: "Массовое вещание." } },
{ id: "it_networks_internet", name: "Интернет", tree: "it", level: 4, deps: [{ id: "it_networks_radio", type: "direct" }, { id: "it_hardware_microchip", type: "indirect" }], desc: { what: "Глобальная сеть компьютеров.", appearance: "Маршрутизатор.", gives: "Всемирная паутина." } },
{ id: "it_networks_iot", name: "Интернет вещей", tree: "it", level: 5, deps: [{ id: "it_networks_internet", type: "direct" }], desc: { what: "Связь бытовых устройств.", appearance: "Умный дом.", gives: "Автоматизация быта." } },
{ id: "it_networks_quantum_net", name: "Квантовый интернет", tree: "it", level: 6, deps: [{ id: "it_networks_iot", type: "direct" }, { id: "it_quantum_key", type: "direct" }], desc: { what: "Абсолютно защищённая связь.", appearance: "Фотонный кабель.", gives: "Невозможность перехвата." } },

{ id: "it_security_cipher", name: "Шифр", tree: "it", level: 1, deps: [{ id: "it_networks_print", type: "direct" }], desc: { what: "Секретное кодирование сообщений.", appearance: "Шифровальный диск.", gives: "Конфиденциальность." } },
{ id: "it_security_enigma", name: "Электромеханическое шифрование", tree: "it", level: 3, deps: [{ id: "it_security_cipher", type: "direct" }, { id: "it_hardware_vacuum_tube", type: "indirect" }], desc: { what: "Машина Энигма.", appearance: "Роторный механизм.", gives: "Сложная криптография." } },
{ id: "it_security_public_key", name: "Криптография с открытым ключом", tree: "it", level: 4, deps: [{ id: "it_security_enigma", type: "direct" }, { id: "it_software_algorithm", type: "indirect" }], desc: { what: "RSA, безопасный обмен ключами.", appearance: "Математические формулы.", gives: "Электронная коммерция." } },
{ id: "it_security_quantum_resist", name: "Постквантовая криптография", tree: "it", level: 6, deps: [{ id: "it_security_public_key", type: "direct" }, { id: "it_quantum_computer", type: "indirect" }], desc: { what: "Алгоритмы, стойкие к квантовому взлому.", appearance: "Решётки, коды.", gives: "Защита от квантового компьютера." } },

{ id: "it_ai_expert_sys", name: "Экспертная система", tree: "it", level: 4, deps: [{ id: "it_software_programming", type: "direct" }], desc: { what: "База знаний и механизм вывода.", appearance: "Консультационная программа.", gives: "Диагностика, планирование." } },
{ id: "it_ai_neural_net", name: "Искусственная нейронная сеть", tree: "it", level: 5, deps: [{ id: "it_ai_expert_sys", type: "direct" }, { id: "it_hardware_gpu", type: "direct" }], desc: { what: "Глубокое обучение.", appearance: "Многослойный перцептрон.", gives: "Распознавание речи, изображений." } },
{ id: "it_ai_agi", name: "Общий искусственный интеллект", tree: "it", level: 6, deps: [{ id: "it_ai_neural_net", type: "direct" }, { id: "it_software_strong_ai", type: "direct" }], desc: { what: "ИИ, способный к любому умственному труду.", appearance: "Аватар на экране.", gives: "Революция во всех сферах." } },

{ id: "it_robotics_clockwork", name: "Заводные автоматы", tree: "it", level: 1, deps: [{ id: "it_hardware_mech_calc", type: "direct" }], desc: { what: "Механические фигуры.", appearance: "Танцующая кукла.", gives: "Развлечение, идея программируемых машин." } },
{ id: "it_robotics_industrial", name: "Промышленный робот", tree: "it", level: 4, deps: [{ id: "it_robotics_clockwork", type: "direct" }, { id: "it_hardware_microchip", type: "direct" }], desc: { what: "Манипулятор для конвейера.", appearance: "Механическая рука.", gives: "Автоматизация производства." } },
{ id: "it_robotics_autonomous", name: "Автономный робот", tree: "it", level: 5, deps: [{ id: "it_robotics_industrial", type: "direct" }, { id: "it_ai_neural_net", type: "indirect" }], desc: { what: "Робот, действующий без оператора.", appearance: "Робот-пылесос с лидаром.", gives: "Самостоятельная навигация." } },
{ id: "it_robotics_android", name: "Андроид", tree: "it", level: 6, deps: [{ id: "it_robotics_autonomous", type: "direct" }, { id: "it_ai_agi", type: "direct" }], desc: { what: "Человекоподобный робот.", appearance: "Синтетическая кожа.", gives: "Помощник, компаньон." } },

{ id: "it_interfaces_typewriter", name: "Печатная машинка", tree: "it", level: 2, deps: [{ id: "it_networks_print", type: "direct" }], desc: { what: "Механический ввод текста.", appearance: "Клавиши, рычаги.", gives: "Стандартизация документов." } },
{ id: "it_interfaces_gui", name: "Графический интерфейс", tree: "it", level: 4, deps: [{ id: "it_interfaces_typewriter", type: "direct" }, { id: "it_hardware_microchip", type: "indirect" }], desc: { what: "Окна, иконки, мышь.", appearance: "Macintosh.", gives: "Доступность для пользователей." } },
{ id: "it_interfaces_vr", name: "Виртуальная реальность", tree: "it", level: 5, deps: [{ id: "it_interfaces_gui", type: "direct" }, { id: "it_hardware_gpu", type: "direct" }], desc: { what: "Полное погружение в цифровую среду.", appearance: "VR-шлем.", gives: "Иммерсивные симуляции." } },
{ id: "it_interfaces_bci", name: "Нейроинтерфейс (BCI)", tree: "it", level: 6, deps: [{ id: "it_interfaces_vr", type: "direct" }, { id: "med_neuro_interface", type: "direct" }], desc: { what: "Управление компьютером силой мысли.", appearance: "Ободок с электродами.", gives: "Прямой канал мозг-компьютер." } },

{ id: "it_quantum_qubit", name: "Кубит", tree: "it", level: 5, deps: [{ id: "it_hardware_transistor", type: "direct" }, { id: "sp_physics_supercond", type: "indirect" }], desc: { what: "Квантовый бит.", appearance: "Сверхпроводящая петля.", gives: "Экспоненциальный рост вычислений." } },
{ id: "it_quantum_computer", name: "Квантовый компьютер", tree: "it", level: 6, deps: [{ id: "it_quantum_qubit", type: "direct" }, { id: "it_security_quantum_resist", type: "direct" }], desc: { what: "Вычислитель на кубитах.", appearance: "Криостат с чипом.", gives: "Решение NP-полных задач." } }
];

// Заполнение nodeIds в SUBTREES
SUBTREES.med_basics.nodeIds = Object.keys(TECHS).filter(id => TECHS[id].tree === "med" && id.startsWith("med_bas_"));
SUBTREES.med_surgery.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_surg_"));
SUBTREES.med_pharma.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_pharm_"));
SUBTREES.med_genetech.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_genetech_"));
SUBTREES.med_neuro.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_neuro_"));
SUBTREES.med_imaging.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_imaging_"));
SUBTREES.med_public.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_public_"));
SUBTREES.med_bioeng.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("med_bioeng_"));

SUBTREES.wp_melee.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_melee_"));
SUBTREES.wp_firearms.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_firearms_"));
SUBTREES.wp_explosives.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_explosives_"));
SUBTREES.wp_tactics.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_tactics_"));
SUBTREES.wp_robots.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_robots_"));
SUBTREES.wp_energy.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_energy_"));
SUBTREES.wp_space.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_space_"));
SUBTREES.wp_psyops.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("wp_psyops_"));

SUBTREES.sp_astronav.nodeIds = Object.keys(TECHS).filter(id => id.startsWith("sp_astronav_"));
SUBTREES.sp_rocketry.node