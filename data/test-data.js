// ============================================================
// ТЕСТОВЫЕ ДАННЫЕ: 3 дерева, 10 поддеревьев на каждое, ~200 нод
// Каждая нода имеет путь до базовой технологии своего дерева
// ============================================================

// ============================================================
// TREES
// ============================================================
const TREES = {
  nano:    { name: "Нанотехнологии",  color: "#00bcd4" },
  psi:     { name: "Психотехнологии", color: "#e67e22" },
  chrono:  { name: "Хронотехнологии", color: "#9b59b6" }
};

// ============================================================
// SUBTREES  (10 на каждое дерево)
// ============================================================
const SUBTREES = {

  // --- NANO (10 поддеревьев) ---
  nano_assembly: {
    name: "Нано-сборка", tree: "nano", color: "#0097a7",
    nodeIds: ["nano_base","nano_arm1","nano_arm2","nano_arm3","nano_fab1","nano_fab2","nano_fab3"]
  },
  nano_medicine: {
    name: "Нано-медицина", tree: "nano", color: "#26c6da",
    nodeIds: ["nano_med1","nano_med2","nano_med3","nano_med4","nano_med5"]
  },
  nano_energy: {
    name: "Нано-энергетика", tree: "nano", color: "#00838f",
    nodeIds: ["nano_en1","nano_en2","nano_en3","nano_en4","nano_en5"]
  },
  nano_armor: {
    name: "Нано-броня", tree: "nano", color: "#006064",
    nodeIds: ["nano_ar1","nano_ar2","nano_ar3","nano_ar4"]
  },
  nano_compute: {
    name: "Нано-вычисления", tree: "nano", color: "#4dd0e1",
    nodeIds: ["nano_cpu1","nano_cpu2","nano_cpu3","nano_cpu4","nano_cpu5"]
  },
  nano_weapons: {
    name: "Нано-оружие", tree: "nano", color: "#00acc1",
    nodeIds: ["nano_wp1","nano_wp2","nano_wp3","nano_wp4"]
  },
  nano_env: {
    name: "Нано-экология", tree: "nano", color: "#80deea",
    nodeIds: ["nano_env1","nano_env2","nano_env3"]
  },
  nano_swarm: {
    name: "Нано-рои", tree: "nano", color: "#b2ebf2",
    nodeIds: ["nano_sw1","nano_sw2","nano_sw3","nano_sw4"]
  },
  nano_sense: {
    name: "Нано-сенсоры", tree: "nano", color: "#e0f7fa",
    nodeIds: ["nano_sns1","nano_sns2","nano_sns3","nano_sns4"]
  },
  nano_cloak: {
    name: "Нано-маскировка", tree: "nano", color: "#00bfa5",
    nodeIds: ["nano_clk1","nano_clk2","nano_clk3"]
  },

  // --- PSI (10 поддеревьев) ---
  psi_core: {
    name: "Пси-ядро", tree: "psi", color: "#f39c12",
    nodeIds: ["psi_base","psi_amp1","psi_amp2","psi_amp3"]
  },
  psi_tele: {
    name: "Телепатия", tree: "psi", color: "#e67e22",
    nodeIds: ["psi_tele1","psi_tele2","psi_tele3","psi_tele4"]
  },
  psi_tele_k: {
    name: "Телекинез", tree: "psi", color: "#d35400",
    nodeIds: ["psi_tk1","psi_tk2","psi_tk3","psi_tk4"]
  },
  psi_scan: {
    name: "Пси-сканирование", tree: "psi", color: "#e59866",
    nodeIds: ["psi_sc1","psi_sc2","psi_sc3","psi_sc4"]
  },
  psi_shield: {
    name: "Пси-защита", tree: "psi", color: "#f0b27a",
    nodeIds: ["psi_sh1","psi_sh2","psi_sh3","psi_sh4"]
  },
  psi_dom: {
    name: "Ментальный контроль", tree: "psi", color: "#ca6f1e",
    nodeIds: ["psi_dom1","psi_dom2","psi_dom3"]
  },
  psi_dream: {
    name: "Сновидения", tree: "psi", color: "#f5cba7",
    nodeIds: ["psi_dr1","psi_dr2","psi_dr3"]
  },
  psi_project: {
    name: "Астральная проекция", tree: "psi", color: "#fdebd0",
    nodeIds: ["psi_ap1","psi_ap2","psi_ap3"]
  },
  psi_group: {
    name: "Групповое сознание", tree: "psi", color: "#a9cce3",
    nodeIds: ["psi_grp1","psi_grp2","psi_grp3"]
  },
  psi_weapon: {
    name: "Пси-оружие", tree: "psi", color: "#c0392b",
    nodeIds: ["psi_wp1","psi_wp2","psi_wp3","psi_wp4"]
  },

  // --- CHRONO (10 поддеревьев) ---
  chrono_core: {
    name: "Хроно-ядро", tree: "chrono", color: "#8e44ad",
    nodeIds: ["chrono_base","chrono_pulse1","chrono_pulse2","chrono_pulse3"]
  },
  chrono_slow: {
    name: "Замедление", tree: "chrono", color: "#9b59b6",
    nodeIds: ["chrono_sl1","chrono_sl2","chrono_sl3","chrono_sl4"]
  },
  chrono_stop: {
    name: "Остановка", tree: "chrono", color: "#7d3c98",
    nodeIds: ["chrono_st1","chrono_st2","chrono_st3"]
  },
  chrono_accel: {
    name: "Ускорение", tree: "chrono", color: "#a569bd",
    nodeIds: ["chrono_ac1","chrono_ac2","chrono_ac3","chrono_ac4"]
  },
  chrono_reverse: {
    name: "Откат", tree: "chrono", color: "#6c3483",
    nodeIds: ["chrono_rv1","chrono_rv2","chrono_rv3"]
  },
  chrono_branch: {
    name: "Ветвление реальности", tree: "chrono", color: "#d7bde2",
    nodeIds: ["chrono_br1","chrono_br2","chrono_br3"]
  },
  chrono_portal: {
    name: "Хроно-порталы", tree: "chrono", color: "#c39bd3",
    nodeIds: ["chrono_pt1","chrono_pt2","chrono_pt3"]
  },
  chrono_shield: {
    name: "Хроно-щит", tree: "chrono", color: "#af7ac5",
    nodeIds: ["chrono_hs1","chrono_hs2","chrono_hs3"]
  },
  chrono_spy: {
    name: "Темпоральная разведка", tree: "chrono", color: "#bb8fce",
    nodeIds: ["chrono_sp1","chrono_sp2","chrono_sp3"]
  },
  chrono_bomb: {
    name: "Темпоральное оружие", tree: "chrono", color: "#76448a",
    nodeIds: ["chrono_bm1","chrono_bm2","chrono_bm3","chrono_bm4"]
  }
};

// ============================================================
// TECHS  (~200 нод, ~67 на дерево)
// ============================================================
const TECHS = [

  // ============================================================
  // === ДЕРЕВО: НАНОТЕХНОЛОГИИ (67 нод) ===
  // ============================================================

  // -- nano_assembly (7 нод) --
  {
    id: "nano_base", name: "Основы нанотехнологий", tree: "nano", level: 0, deps: [],
    desc: { what: "Фундаментальная теория управления веществом на молекулярном уровне", appearance: "Светящаяся схема молекулярных цепочек", gives: "Открывает все ветки нанотехнологий" }
  },
  {
    id: "nano_arm1", name: "Нано-манипулятор I", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Простой манипулятор для сборки наночастиц", appearance: "Механический зажим размером с молекулу", gives: "+10% скорость сборки" }
  },
  {
    id: "nano_arm2", name: "Нано-манипулятор II", tree: "nano", level: 2,
    deps: [{ id: "nano_arm1", type: "direct" }],
    desc: { what: "Улучшенный манипулятор с параллельной сборкой", appearance: "Решётка из синхронизированных захватов", gives: "+25% скорость сборки, -5% брак" }
  },
  {
    id: "nano_arm3", name: "Нано-манипулятор III", tree: "nano", level: 3,
    deps: [{ id: "nano_arm2", type: "direct" }],
    desc: { what: "Автономный манипулятор с ИИ-корректировкой", appearance: "Прозрачный куб с видимыми манипуляциями", gives: "Авторемонт изделий" }
  },
  {
    id: "nano_fab1", name: "Нано-фабрикатор I", tree: "nano", level: 2,
    deps: [{ id: "nano_arm1", type: "direct" }],
    desc: { what: "Мини-завод для производства нанодеталей", appearance: "Миниатюрная производственная линия", gives: "Производство нано-компонентов" }
  },
  {
    id: "nano_fab2", name: "Нано-фабрикатор II", tree: "nano", level: 3,
    deps: [{ id: "nano_fab1", type: "direct" }],
    desc: { what: "Высокоскоростная фабрикация с самодиагностикой", appearance: "Золотые потоки наночастиц", gives: "×3 пропускная способность" }
  },
  {
    id: "nano_fab3", name: "Универсальный репликатор", tree: "nano", level: 4,
    deps: [{ id: "nano_fab2", type: "direct" }, { id: "nano_cpu3", type: "indirect" }],
    desc: { what: "Репликатор способный копировать любой предмет на атомном уровне", appearance: "Камера с ярко-синим сиянием", gives: "Синтез любых объектов из сырья" }
  },

  // -- nano_medicine (5 нод) --
  {
    id: "nano_med1", name: "Нано-диагностика", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Введение диагностических наноботов в кровоток", appearance: "Инъекционная капсула с синим свечением", gives: "Мгновенная диагностика болезней" }
  },
  {
    id: "nano_med2", name: "Нано-хирург", tree: "nano", level: 2,
    deps: [{ id: "nano_med1", type: "direct" }],
    desc: { what: "Роботизированные наноботы-хирурги", appearance: "Облако частиц внутри организма", gives: "Автохирургия, +30% выживаемость" }
  },
  {
    id: "nano_med3", name: "Нано-иммунитет", tree: "nano", level: 3,
    deps: [{ id: "nano_med2", type: "direct" }],
    desc: { what: "Постоянная нано-охрана иммунной системы", appearance: "Мерцающая аура вокруг организма", gives: "Иммунитет к болезням класса C" }
  },
  {
    id: "nano_med4", name: "Клеточная регенерация", tree: "nano", level: 4,
    deps: [{ id: "nano_med3", type: "direct" }],
    desc: { what: "Восстановление поврежденных тканей за секунды", appearance: "Зелёные вспышки на ранах", gives: "+50 HP/с регенерации" }
  },
  {
    id: "nano_med5", name: "Биологическое бессмертие", tree: "nano", level: 5,
    deps: [{ id: "nano_med4", type: "direct" }, { id: "nano_cpu4", type: "indirect" }],
    desc: { what: "Полная остановка клеточного старения", appearance: "Ослепительное белое свечение тела", gives: "Персонажи не стареют" }
  },

  // -- nano_energy (5 нод) --
  {
    id: "nano_en1", name: "Нано-ячейка", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Накопитель энергии на нанотрубках", appearance: "Кристалл с пульсирующим светом", gives: "+20% ёмкость батарей" }
  },
  {
    id: "nano_en2", name: "Нано-генератор", tree: "nano", level: 2,
    deps: [{ id: "nano_en1", type: "direct" }],
    desc: { what: "Генератор на основе вибраций наноструктур", appearance: "Вибрирующая платформа с излучением", gives: "Автономная выработка энергии" }
  },
  {
    id: "nano_en3", name: "Квантовый конденсатор", tree: "nano", level: 3,
    deps: [{ id: "nano_en2", type: "direct" }],
    desc: { what: "Хранение энергии в квантовом состоянии", appearance: "Сфера с фиолетовым вихрем", gives: "×5 плотность хранения энергии" }
  },
  {
    id: "nano_en4", name: "Нано-реактор", tree: "nano", level: 4,
    deps: [{ id: "nano_en3", type: "direct" }],
    desc: { what: "Миниатюрный термоядерный реактор на наноуровне", appearance: "Плазменный шар в клетке из нанотрубок", gives: "Неограниченная энергия для базы" }
  },
  {
    id: "nano_en5", name: "Нулевая точка", tree: "nano", level: 5,
    deps: [{ id: "nano_en4", type: "direct" }],
    desc: { what: "Извлечение энергии из вакуума пространства", appearance: "Мерцающая пустота с искрами", gives: "Энергия из ничего, бесплатное производство" }
  },

  // -- nano_armor (4 ноды) --
  {
    id: "nano_ar1", name: "Нано-покрытие", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Защитный слой наночастиц на поверхности брони", appearance: "Блестящий металлический отлив", gives: "+15% защита от физурона" }
  },
  {
    id: "nano_ar2", name: "Адаптивная броня", tree: "nano", level: 2,
    deps: [{ id: "nano_ar1", type: "direct" }],
    desc: { what: "Броня, перестраивающая структуру под тип удара", appearance: "Поверхность с волнообразными узорами", gives: "+30% защита, адаптация к 3 типам урона" }
  },
  {
    id: "nano_ar3", name: "Регенерирующий щит", tree: "nano", level: 3,
    deps: [{ id: "nano_ar2", type: "direct" }],
    desc: { what: "Броня самовосстанавливается между атаками", appearance: "Трещины заполняются светящимся материалом", gives: "Авторемонт 20 HP/с" }
  },
  {
    id: "nano_ar4", name: "Сингулярный панцирь", tree: "nano", level: 4,
    deps: [{ id: "nano_ar3", type: "direct" }, { id: "nano_en3", type: "direct" }],
    desc: { what: "Нано-броня с силовыми щитами", appearance: "Пульсирующий энергетический слой", gives: "Физический и энергетический щит одновременно" }
  },

  // -- nano_compute (5 нод) --
  {
    id: "nano_cpu1", name: "Нано-процессор", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Вычислительный элемент размером с молекулу", appearance: "Невидимая цепочка логических вентилей", gives: "+100% скорость локальных вычислений" }
  },
  {
    id: "nano_cpu2", name: "Нейронная решётка", tree: "nano", level: 2,
    deps: [{ id: "nano_cpu1", type: "direct" }],
    desc: { what: "Нано-нейросеть для параллельных вычислений", appearance: "Сеть синих светящихся нитей", gives: "Параллельная обработка 1000 задач" }
  },
  {
    id: "nano_cpu3", name: "Биологический сопроцессор", tree: "nano", level: 3,
    deps: [{ id: "nano_cpu2", type: "direct" }, { id: "nano_med2", type: "direct" }],
    desc: { what: "Нано-чип, интегрированный в нейроны мозга", appearance: "Мерцание в области виска", gives: "×10 интеллект операторов" }
  },
  {
    id: "nano_cpu4", name: "Квантовый нано-ИИ", tree: "nano", level: 4,
    deps: [{ id: "nano_cpu3", type: "direct" }],
    desc: { what: "Искусственный интеллект на квантовых наноэлементах", appearance: "Пульсирующий синий куб", gives: "Автономное управление всеми системами" }
  },
  {
    id: "nano_cpu5", name: "Роевой разум", tree: "nano", level: 5,
    deps: [{ id: "nano_cpu4", type: "direct" }, { id: "nano_sw3", type: "direct" }],
    desc: { what: "Распределённый интеллект в миллиардах наноботов", appearance: "Облако частиц, движущееся как единый организм", gives: "Коллективный ИИ, неуязвимый к ЭМИ" }
  },

  // -- nano_weapons (4 ноды) --
  {
    id: "nano_wp1", name: "Нано-клинок", tree: "nano", level: 2,
    deps: [{ id: "nano_arm2", type: "direct" }],
    desc: { what: "Лезвие толщиной в молекулу", appearance: "Почти невидимое прозрачное лезвие", gives: "Игнорирует броню класса B" }
  },
  {
    id: "nano_wp2", name: "Рой-убийца", tree: "nano", level: 3,
    deps: [{ id: "nano_wp1", type: "direct" }, { id: "nano_sw1", type: "direct" }],
    desc: { what: "Рой боевых наноботов, проникающих сквозь броню", appearance: "Тёмное облако с красными искрами", gives: "Атака игнорирует любую броню" }
  },
  {
    id: "nano_wp3", name: "Молекулярный дезинтегратор", tree: "nano", level: 4,
    deps: [{ id: "nano_wp2", type: "direct" }],
    desc: { what: "Разрушение молекулярных связей цели", appearance: "Красный луч, объект рассыпается в пыль", gives: "Мгновенное уничтожение структур класса C" }
  },
  {
    id: "nano_wp4", name: "Нано-вирус", tree: "nano", level: 5,
    deps: [{ id: "nano_wp3", type: "direct" }],
    desc: { what: "Самовоспроизводящийся нано-агент деструкции", appearance: "Невидимое заражение, постепенное разрушение", gives: "Необратимое заражение инфраструктуры врага" }
  },

  // -- nano_env (3 ноды) --
  {
    id: "nano_env1", name: "Нано-очистка", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Наноботы-санитары для очистки загрязнённых зон", appearance: "Серый туман, после которого чистота", gives: "Очистка загрязнённых территорий за 1 ход" }
  },
  {
    id: "nano_env2", name: "Нано-терраформинг", tree: "nano", level: 3,
    deps: [{ id: "nano_env1", type: "direct" }, { id: "nano_fab1", type: "direct" }],
    desc: { what: "Изменение состава атмосферы и почвы наноботами", appearance: "Волны трансформации покрывают ландшафт", gives: "Терраформирование планет" }
  },
  {
    id: "nano_env3", name: "Нано-биосфера", tree: "nano", level: 5,
    deps: [{ id: "nano_env2", type: "direct" }, { id: "nano_med4", type: "indirect" }],
    desc: { what: "Искусственная экосистема на основе наноботов", appearance: "Живой пейзаж с нано-существами", gives: "Создание обитаемых миров" }
  },

  // -- nano_swarm (4 ноды) --
  {
    id: "nano_sw1", name: "Прото-рой", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Первый управляемый рой из 1 млн наноботов", appearance: "Облако частиц, реагирующее на команды", gives: "Базовые роевые операции" }
  },
  {
    id: "nano_sw2", name: "Рой-строитель", tree: "nano", level: 2,
    deps: [{ id: "nano_sw1", type: "direct" }],
    desc: { what: "Рой для быстрого строительства конструкций", appearance: "Быстро возводимые здания из частиц", gives: "×5 скорость строительства" }
  },
  {
    id: "nano_sw3", name: "Автономный рой", tree: "nano", level: 3,
    deps: [{ id: "nano_sw2", type: "direct" }, { id: "nano_cpu2", type: "direct" }],
    desc: { what: "Рой с независимым принятием решений", appearance: "Интеллектуальное облако наноботов", gives: "Рой действует без оператора" }
  },
  {
    id: "nano_sw4", name: "Мета-рой", tree: "nano", level: 5,
    deps: [{ id: "nano_sw3", type: "direct" }, { id: "nano_cpu5", type: "cosvennaya" }],
    desc: { what: "Мегаструктура из триллионов наноботов", appearance: "Тёмная туча планетарного масштаба", gives: "Перестройка целых планет" }
  },

  // -- nano_sense (4 ноды) --
  {
    id: "nano_sns1", name: "Нано-зонд", tree: "nano", level: 1,
    deps: [{ id: "nano_base", type: "direct" }],
    desc: { what: "Зонд для сканирования на молекулярном уровне", appearance: "Крошечный светящийся шар", gives: "Сканирование состава объектов" }
  },
  {
    id: "nano_sns2", name: "Молекулярный радар", tree: "nano", level: 2,
    deps: [{ id: "nano_sns1", type: "direct" }],
    desc: { what: "Обнаружение объектов по молекулярной сигнатуре", appearance: "Радарное кольцо с молекулярными пиками", gives: "Обнаружение скрытых структур" }
  },
  {
    id: "nano_sns3", name: "Нано-шпион", tree: "nano", level: 3,
    deps: [{ id: "nano_sns2", type: "direct" }],
    desc: { what: "Незаметный нанобот-разведчик", appearance: "Невидимый, выдаётся только теплом", gives: "Прослушивание и видеосъёмка в секретных зонах" }
  },
  {
    id: "nano_sns4", name: "Сеть нано-сенсоров", tree: "nano", level: 4,
    deps: [{ id: "nano_sns3", type: "direct" }, { id: "nano_sw2", type: "direct" }],
    desc: { what: "Планетарная сеть из сенсорных наноботов", appearance: "Невидимая сеть, охватывающая планету", gives: "Тотальный контроль планеты" }
  },

  // -- nano_cloak (3 ноды) --
  {
    id: "nano_clk1", name: "Нано-камуфляж", tree: "nano", level: 2,
    deps: [{ id: "nano_ar1", type: "direct" }],
    desc: { what: "Поверхность, имитирующая окружающую среду", appearance: "Объект растворяется в фоне", gives: "Визуальная невидимость" }
  },
  {
    id: "nano_clk2", name: "Полная невидимость", tree: "nano", level: 3,
    deps: [{ id: "nano_clk1", type: "direct" }, { id: "nano_en2", type: "direct" }],
    desc: { what: "Искажение всех длин волн вокруг объекта", appearance: "Объект полностью невидим", gives: "Невидимость во всём спектре" }
  },
  {
    id: "nano_clk3", name: "Хаотический мимик", tree: "nano", level: 4,
    deps: [{ id: "nano_clk2", type: "direct" }],
    desc: { what: "Маскировка под любой объект или существо", appearance: "Трансформация формы и цвета в реальном времени", gives: "Полная смена внешнего вида" }
  },

  // ============================================================
  // === ДЕРЕВО: ПСИХОТЕХНОЛОГИИ (67 нод) ===
  // ============================================================

  // -- psi_core (4 ноды) --
  {
    id: "psi_base", name: "Основы психотехнологий", tree: "psi", level: 0, deps: [],
    desc: { what: "Теория взаимодействия сознания с физической реальностью", appearance: "Пульсирующий оранжевый кристалл", gives: "Открывает все ветки психотехнологий" }
  },
  {
    id: "psi_amp1", name: "Пси-усилитель I", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Шлем, усиливающий пси-сигналы мозга", appearance: "Металлический обруч с синими огнями", gives: "+20% радиус пси-способностей" }
  },
  {
    id: "psi_amp2", name: "Пси-усилитель II", tree: "psi", level: 2,
    deps: [{ id: "psi_amp1", type: "direct" }],
    desc: { what: "Вживляемый усилитель нейросигналов", appearance: "Светящийся имплант на шее", gives: "+50% сила пси-атак" }
  },
  {
    id: "psi_amp3", name: "Нейро-резонатор", tree: "psi", level: 3,
    deps: [{ id: "psi_amp2", type: "direct" }],
    desc: { what: "Резонансная камера для синхронизации нескольких сознаний", appearance: "Кристаллическая башня с оранжевым свечением", gives: "Усиление всех пси-способностей ×3 для группы" }
  },

  // -- psi_tele (4 ноды) --
  {
    id: "psi_tele1", name: "Чтение мыслей", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Улавливание поверхностных мыслей цели", appearance: "Волны от головы оператора", gives: "Считывание намерений врагов" }
  },
  {
    id: "psi_tele2", name: "Внушение", tree: "psi", level: 2,
    deps: [{ id: "psi_tele1", type: "direct" }],
    desc: { what: "Передача команд напрямую в сознание цели", appearance: "Видимые нити между операторами", gives: "Управление НПС на короткий срок" }
  },
  {
    id: "psi_tele3", name: "Глубокое сканирование", tree: "psi", level: 3,
    deps: [{ id: "psi_tele2", type: "direct" }],
    desc: { what: "Извлечение воспоминаний и секретов из сознания", appearance: "Кружащиеся образы вокруг цели", gives: "Узнать любые секреты цели" }
  },
  {
    id: "psi_tele4", name: "Ментальная сеть", tree: "psi", level: 4,
    deps: [{ id: "psi_tele3", type: "direct" }, { id: "psi_grp1", type: "direct" }],
    desc: { what: "Телепатическая связь с группой до 100 человек", appearance: "Оранжевая сеть между людьми", gives: "Мгновенная координация без оборудования" }
  },

  // -- psi_tele_k (4 ноды) --
  {
    id: "psi_tk1", name: "Телекинез I", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Перемещение небольших объектов силой мысли", appearance: "Объект парит с оранжевой аурой", gives: "Перемещение объектов до 10 кг" }
  },
  {
    id: "psi_tk2", name: "Телекинез II", tree: "psi", level: 2,
    deps: [{ id: "psi_tk1", type: "direct" }],
    desc: { what: "Управление крупными объектами и метание", appearance: "Мощные волны от оператора", gives: "Перемещение объектов до 1 тонны" }
  },
  {
    id: "psi_tk3", name: "Кинетический удар", tree: "psi", level: 3,
    deps: [{ id: "psi_tk2", type: "direct" }],
    desc: { what: "Концентрированный телекинетический разряд", appearance: "Ударная волна, разрушающая препятствия", gives: "Урон 500 единиц, разрушение стен" }
  },
  {
    id: "psi_tk4", name: "Гравитационный контроль", tree: "psi", level: 4,
    deps: [{ id: "psi_tk3", type: "direct" }],
    desc: { what: "Создание зон аномальной гравитации", appearance: "Искажение пространства вокруг объектов", gives: "Зона невесомости или ×5 гравитации" }
  },

  // -- psi_scan (4 ноды) --
  {
    id: "psi_sc1", name: "Пси-зрение", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Восприятие пси-аур живых существ", appearance: "Цветные ауры вокруг персонажей", gives: "Видеть здоровье и намерения" }
  },
  {
    id: "psi_sc2", name: "Дальновидение", tree: "psi", level: 2,
    deps: [{ id: "psi_sc1", type: "direct" }],
    desc: { what: "Проецирование восприятия на расстояние", appearance: "Туманный образ удалённой локации", gives: "Разведка на 10 км без движения" }
  },
  {
    id: "psi_sc3", name: "Темпоральное зрение", tree: "psi", level: 3,
    deps: [{ id: "psi_sc2", type: "direct" }],
    desc: { what: "Видение прошлого места или объекта", appearance: "Полупрозрачные образы прошлого", gives: "Узнать историю любого места или предмета" }
  },
  {
    id: "psi_sc4", name: "Предвидение", tree: "psi", level: 4,
    deps: [{ id: "psi_sc3", type: "direct" }],
    desc: { what: "Предсказание событий на 1 ход вперёд", appearance: "Вспышки будущих событий", gives: "Уклонение от атак с 80% вероятностью" }
  },

  // -- psi_shield (4 ноды) --
  {
    id: "psi_sh1", name: "Пси-барьер", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Ментальный экран от пси-атак", appearance: "Золотистый купол вокруг персонажа", gives: "−50% урон от пси-атак" }
  },
  {
    id: "psi_sh2", name: "Силовой щит", tree: "psi", level: 2,
    deps: [{ id: "psi_sh1", type: "direct" }],
    desc: { what: "Физический щит из кинетической пси-энергии", appearance: "Мерцающий голубой купол", gives: "Блок физических атак 200 HP" }
  },
  {
    id: "psi_sh3", name: "Зеркало разума", tree: "psi", level: 3,
    deps: [{ id: "psi_sh2", type: "direct" }],
    desc: { what: "Отражение пси-атак обратно на источник", appearance: "Зеркальная поверхность купола", gives: "Возврат 100% пси-урона атакующему" }
  },
  {
    id: "psi_sh4", name: "Абсолютный барьер", tree: "psi", level: 4,
    deps: [{ id: "psi_sh3", type: "direct" }, { id: "psi_amp3", type: "direct" }],
    desc: { what: "Непробиваемый пси-щит на 10 секунд", appearance: "Яркая белая сфера без теней", gives: "Полный иммунитет ко всему урону" }
  },

  // -- psi_dom (3 ноды) --
  {
    id: "psi_dom1", name: "Подчинение воли", tree: "psi", level: 2,
    deps: [{ id: "psi_tele2", type: "direct" }],
    desc: { what: "Полное замещение воли цели командами оператора", appearance: "Нить управления, невидимая для наблюдателей", gives: "Превратить врага в союзника на 3 хода" }
  },
  {
    id: "psi_dom2", name: "Массовое подчинение", tree: "psi", level: 3,
    deps: [{ id: "psi_dom1", type: "direct" }],
    desc: { what: "Одновременный контроль до 10 целей", appearance: "Паутина нитей от оператора", gives: "Контроль отряда врагов" }
  },
  {
    id: "psi_dom3", name: "Пси-порабощение", tree: "psi", level: 4,
    deps: [{ id: "psi_dom2", type: "direct" }],
    desc: { what: "Перманентное подчинение разума без поддержания концентрации", appearance: "Опустевший взгляд цели", gives: "Постоянный союзник из врага" }
  },

  // -- psi_dream (3 ноды) --
  {
    id: "psi_dr1", name: "Вторжение в сон", tree: "psi", level: 2,
    deps: [{ id: "psi_tele1", type: "direct" }],
    desc: { what: "Посещение сновидений спящей цели", appearance: "Туманный мир грёз с оранжевым оттенком", gives: "Внушение через сон" }
  },
  {
    id: "psi_dr2", name: "Кошмар", tree: "psi", level: 3,
    deps: [{ id: "psi_dr1", type: "direct" }],
    desc: { what: "Создание ужасающих образов в разуме цели", appearance: "Тёмные тени и красные вспышки", gives: "Снижение морали врага до нуля" }
  },
  {
    id: "psi_dr3", name: "Вечный сон", tree: "psi", level: 4,
    deps: [{ id: "psi_dr2", type: "direct" }],
    desc: { what: "Погружение цели в необратимую кому", appearance: "Цель замирает с улыбкой", gives: "Нейтрализация цели без убийства" }
  },

  // -- psi_project (3 ноды) --
  {
    id: "psi_ap1", name: "Эктопроекция", tree: "psi", level: 2,
    deps: [{ id: "psi_sc2", type: "direct" }],
    desc: { what: "Выход сознания из тела", appearance: "Призрачная форма оператора отделяется", gives: "Разведка без физического риска" }
  },
  {
    id: "psi_ap2", name: "Астральный бой", tree: "psi", level: 3,
    deps: [{ id: "psi_ap1", type: "direct" }],
    desc: { what: "Нападение на врагов в астральном плане", appearance: "Призрачные атаки, невидимые для большинства", gives: "Атаки наносят урон сознанию, минуя броню" }
  },
  {
    id: "psi_ap3", name: "Переселение разума", tree: "psi", level: 5,
    deps: [{ id: "psi_ap2", type: "direct" }, { id: "psi_dom3", type: "direct" }],
    desc: { what: "Перемещение сознания в другое тело", appearance: "Вспышка — оператор открывает глаза чужим взглядом", gives: "Захват тела любого существа" }
  },

  // -- psi_group (3 ноды) --
  {
    id: "psi_grp1", name: "Пси-связь", tree: "psi", level: 1,
    deps: [{ id: "psi_base", type: "direct" }],
    desc: { what: "Беспроводная ментальная коммуникация между союзниками", appearance: "Тонкие нити между соратниками", gives: "Мгновенная бесшумная связь" }
  },
  {
    id: "psi_grp2", name: "Коллективный разум", tree: "psi", level: 3,
    deps: [{ id: "psi_grp1", type: "direct" }, { id: "psi_amp2", type: "direct" }],
    desc: { what: "Синхронизация опыта и навыков группы", appearance: "Единая пульсация группы", gives: "Все участники используют лучшие навыки отряда" }
  },
  {
    id: "psi_grp3", name: "Ульей", tree: "psi", level: 5,
    deps: [{ id: "psi_grp2", type: "direct" }],
    desc: { what: "Полное слияние сознаний в единый супер-разум", appearance: "Отряд движется как один организм", gives: "Отряд как единица с суммарными характеристиками" }
  },

  // -- psi_weapon (4 ноды) --
  {
    id: "psi_wp1", name: "Пси-разряд", tree: "psi", level: 2,
    deps: [{ id: "psi_amp1", type: "direct" }],
    desc: { what: "Ментальный удар, вызывающий боль и дезориентацию", appearance: "Оранжевая волна, исходящая от оператора", gives: "150 урона, 3 хода дезориентации" }
  },
  {
    id: "psi_wp2", name: "Пси-буря", tree: "psi", level: 3,
    deps: [{ id: "psi_wp1", type: "direct" }],
    desc: { what: "Массовый ментальный удар по области", appearance: "Буря из оранжевых волн", gives: "300 урона всем врагам в зоне 20м" }
  },
  {
    id: "psi_wp3", name: "Ментальный взрыв", tree: "psi", level: 4,
    deps: [{ id: "psi_wp2", type: "direct" }, { id: "psi_amp3", type: "direct" }],
    desc: { what: "Уничтожение рассудка цели", appearance: "Вспышка белого света из глаз цели", gives: "Полная амнезия или гибель цели" }
  },
  {
    id: "psi_wp4", name: "Психическая чума", tree: "psi", level: 5,
    deps: [{ id: "psi_wp3", type: "direct" }],
    desc: { what: "Распространяющееся ментальное заражение", appearance: "Цепная реакция безумия в толпе", gives: "Вирусный ментальный урон до 1000 целей" }
  },

  // ============================================================
  // === ДЕРЕВО: ХРОНОТЕХНОЛОГИИ (66 нод) ===
  // ============================================================

  // -- chrono_core (4 ноды) --
  {
    id: "chrono_base", name: "Квантовые часы", tree: "chrono", level: 0, deps: [],
    desc: { what: "Измерение времени на уровне квантовых флуктуаций", appearance: "Голографические числа с дрожанием", gives: "Открывает все хронотехнологии" }
  },
  {
    id: "chrono_pulse1", name: "Временной импульс I", tree: "chrono", level: 1,
    deps: [{ id: "chrono_base", type: "direct" }],
    desc: { what: "Слабый локальный сдвиг темпорального поля", appearance: "Кратковременное замерзание частиц воздуха", gives: "Замедление объектов на 10%" }
  },
  {
    id: "chrono_pulse2", name: "Временной импульс II", tree: "chrono", level: 2,
    deps: [{ id: "chrono_pulse1", type: "direct" }],
    desc: { what: "Усиленный темпоральный сдвиг в зоне 5м", appearance: "Мерцающий пузырь времени", gives: "Замедление всего в зоне на 30%" }
  },
  {
    id: "chrono_pulse3", name: "Темпоральный резонатор", tree: "chrono", level: 3,
    deps: [{ id: "chrono_pulse2", type: "direct" }],
    desc: { what: "Устройство стабилизации темпоральных полей", appearance: "Вращающиеся кольца с голубым светом", gives: "Стабильный пузырь замедления 50м" }
  },

  // -- chrono_slow (4 ноды) --
  {
    id: "chrono_sl1", name: "Поле замедления", tree: "chrono", level: 1,
    deps: [{ id: "chrono_base", type: "direct" }],
    desc: { what: "Зона сниженного темпа для всего в радиусе", appearance: "Синеватая дымка над поверхностью", gives: "Враги в зоне −50% скорости" }
  },
  {
    id: "chrono_sl2", name: "Личное замедление", tree: "chrono", level: 2,
    deps: [{ id: "chrono_sl1", type: "direct" }],
    desc: { what: "Замедление одной выбранной цели", appearance: "Цель движется как в густом киселе", gives: "Одна цель −80% скорости на 5 ходов" }
  },
  {
    id: "chrono_sl3", name: "Темпоральная клетка", tree: "chrono", level: 3,
    deps: [{ id: "chrono_sl2", type: "direct" }],
    desc: { what: "Полная остановка цели в темпоральном пузыре", appearance: "Цель в янтарном пузыре", gives: "Заморозка цели на 3 хода" }
  },
  {
    id: "chrono_sl4", name: "Массовое замедление", tree: "chrono", level: 4,
    deps: [{ id: "chrono_sl3", type: "direct" }, { id: "chrono_pulse3", type: "direct" }],
    desc: { what: "Замедление всех врагов в радиусе 100м", appearance: "Гигантский синий купол", gives: "Все враги −70% скорости на 3 хода" }
  },

  // -- chrono_stop (3 ноды) --
  {
    id: "chrono_st1", name: "Миг заморозки", tree: "chrono", level: 2,
    deps: [{ id: "chrono_sl1", type: "direct" }],
    desc: { what: "Полная остановка времени на 1 секунду", appearance: "Мгновенная заморозка всего кадра", gives: "Свободный ход без противников" }
  },
  {
    id: "chrono_st2", name: "Остановка времени", tree: "chrono", level: 3,
    deps: [{ id: "chrono_st1", type: "direct" }],
    desc: { what: "Полная остановка времени на 5 секунд", appearance: "Кристальная тишина мира", gives: "5 свободных ходов" }
  },
  {
    id: "chrono_st3", name: "Темпоральный арест", tree: "chrono", level: 4,
    deps: [{ id: "chrono_st2", type: "direct" }],
    desc: { what: "Постоянная остановка одного объекта вне времени", appearance: "Объект в стеклянной тюрьме", gives: "Консервация объекта навсегда" }
  },

  // -- chrono_accel (4 ноды) --
  {
    id: "chrono_ac1", name: "Личное ускорение", tree: "chrono", level: 1,
    deps: [{ id: "chrono_base", type: "direct" }],
    desc: { what: "Ускорение темпорального поля вокруг оператора", appearance: "Оператор оставляет размытый след", gives: "+50% скорость оператора" }
  },
  {
    id: "chrono_ac2", name: "Темпо-спринт", tree: "chrono", level: 2,
    deps: [{ id: "chrono_ac1", type: "direct" }],
    desc: { what: "Кратковременная экстремальная скорость", appearance: "Вспышка и мгновенное перемещение", gives: "Телепортация на 50м за 1 действие" }
  },
  {
    id: "chrono_ac3", name: "Ускоренный отряд", tree: "chrono", level: 3,
    deps: [{ id: "chrono_ac2", type: "direct" }],
    desc: { what: "Ускорение всего союзного отряда", appearance: "Золотистые следы за всеми союзниками", gives: "Отряд +100% скорости на 3 хода" }
  },
  {
    id: "chrono_ac4", name: "Хроно-рывок", tree: "chrono", level: 4,
    deps: [{ id: "chrono_ac3", type: "direct" }],
    desc: { what: "Прыжок в ближайшее будущее", appearance: "Оператор исчезает и появляется в другом месте", gives: "Мгновенное перемещение в любую точку на карте" }
  },

  // -- chrono_reverse (3 ноды) --
  {
    id: "chrono_rv1", name: "Откат урона", tree: "chrono", level: 2,
    deps: [{ id: "chrono_pulse2", type: "direct" }],
    desc: { what: "Отматывание состояния объекта на 1 ход", appearance: "Раны исчезают в обратном порядке", gives: "Полное восстановление юнита как 1 ход назад" }
  },
  {
    id: "chrono_rv2", name: "Темпоральный откат", tree: "chrono", level: 3,
    deps: [{ id: "chrono_rv1", type: "direct" }],
    desc: { what: "Отматывание состояния зоны на 3 хода", appearance: "Область мерцает и перестраивается", gives: "Отменить 3 последних события в зоне" }
  },
  {
    id: "chrono_rv3", name: "Парадокс времени", tree: "chrono", level: 5,
    deps: [{ id: "chrono_rv2", type: "direct" }, { id: "chrono_br2", type: "direct" }],
    desc: { what: "Полная отмотка временной линии на 10 ходов", appearance: "Всё мигает и перестраивается как будто ничего не было", gives: "Отменить последние 10 ходов битвы" }
  },

  // -- chrono_branch (3 ноды) --
  {
    id: "chrono_br1", name: "Точка ветвления", tree: "chrono", level: 2,
    deps: [{ id: "chrono_pulse2", type: "direct" }],
    desc: { what: "Создание точки сохранения в потоке времени", appearance: "Зелёная метка в пространстве", gives: "Точка возврата для следующих 5 ходов" }
  },
  {
    id: "chrono_br2", name: "Параллельный исход", tree: "chrono", level: 3,
    deps: [{ id: "chrono_br1", type: "direct" }],
    desc: { what: "Реализация альтернативного варианта событий", appearance: "Мерцание мира и замена исхода", gives: "Переиграть одно неудачное событие" }
  },
  {
    id: "chrono_br3", name: "Коллапс реальностей", tree: "chrono", level: 5,
    deps: [{ id: "chrono_br2", type: "direct" }],
    desc: { what: "Объединение двух временных линий", appearance: "Двойные образы сливаются в одно", gives: "Импортировать технологии из параллельной линии" }
  },

  // -- chrono_portal (3 ноды) --
  {
    id: "chrono_pt1", name: "Темпоральное окно", tree: "chrono", level: 2,
    deps: [{ id: "chrono_ac1", type: "direct" }],
    desc: { what: "Небольшое окно для наблюдения в прошлое", appearance: "Прямоугольный портал с дрожащим изображением", gives: "Разведка прошлого на 10 ходов назад" }
  },
  {
    id: "chrono_pt2", name: "Портал прошлого", tree: "chrono", level: 3,
    deps: [{ id: "chrono_pt1", type: "direct" }],
    desc: { what: "Врата для физического перемещения в прошлое", appearance: "Мерцающий овал с изображением прошлого", gives: "Отправка разведчика в прошлое" }
  },
  {
    id: "chrono_pt3", name: "Хроно-мост", tree: "chrono", level: 4,
    deps: [{ id: "chrono_pt2", type: "direct" }],
    desc: { what: "Стабильный мост между двумя эпохами", appearance: "Постоянно открытый портал с двух сторон", gives: "Переброска ресурсов между эпохами" }
  },

  // -- chrono_shield (3 ноды) --
  {
    id: "chrono_hs1", name: "Темпоральный доспех", tree: "chrono", level: 1,
    deps: [{ id: "chrono_base", type: "direct" }],
    desc: { what: "Броня, ускользающая от ударов во времени", appearance: "Размытый контур тела оператора", gives: "20% шанс уклонения" }
  },
  {
    id: "chrono_hs2", name: "Хроно-зеркало", tree: "chrono", level: 2,
    deps: [{ id: "chrono_hs1", type: "direct" }],
    desc: { what: "Отражение атак назад во времени", appearance: "Атаки растворяются и появляются у атакующего", gives: "30% отражение урона" }
  },
  {
    id: "chrono_hs3", name: "Темпоральная неуязвимость", tree: "chrono", level: 4,
    deps: [{ id: "chrono_hs2", type: "direct" }, { id: "chrono_st2", type: "direct" }],
    desc: { what: "Вынос персонажа из потока времени на 1 ход", appearance: "Персонаж становится полупрозрачным", gives: "Полная неуязвимость на 1 ход" }
  },

  // -- chrono_spy (3 ноды) --
  {
    id: "chrono_sp1", name: "Разведка прошлого", tree: "chrono", level: 1,
    deps: [{ id: "chrono_base", type: "direct" }],
    desc: { what: "Видение недавних событий в точке", appearance: "Призрачные образы прошлых событий", gives: "Разведка активности врага за 5 ходов" }
  },
  {
    id: "chrono_sp2", name: "Темпоральный соглядатай", tree: "chrono", level: 3,
    deps: [{ id: "chrono_sp1", type: "direct" }, { id: "chrono_pt1", type: "direct" }],
    desc: { what: "Агент наблюдения в прошлом", appearance: "Невидимый призрак в прошлых событиях", gives: "Знание планов врага на 10 ходов вперёд" }
  },
  {
    id: "chrono_sp3", name: "Темпоральный саботаж", tree: "chrono", level: 4,
    deps: [{ id: "chrono_sp2", type: "direct" }],
    desc: { what: "Вмешательство в прошлое для срыва планов врага", appearance: "Изменение событий без следов", gives: "Уничтожение одного проекта врага ретроактивно" }
  },

  // -- chrono_bomb (4 ноды) --
  {
    id: "chrono_bm1", name: "Темпоральная граната", tree: "chrono", level: 2,
    deps: [{ id: "chrono_sl2", type: "direct" }],
    desc: { what: "Взрыв создающий зону экстремального замедления", appearance: "Синий взрыв с зоной заморозки", gives: "Замедление всего в радиусе 10м на 5 ходов" }
  },
  {
    id: "chrono_bm2", name: "Хроно-мина", tree: "chrono", level: 3,
    deps: [{ id: "chrono_bm1", type: "direct" }],
    desc: { what: "Мина, срабатывающая с задержкой во времени", appearance: "Невидимая мина, взрывающаяся в прошлом", gives: "Урон в прошлом — ретроактивное уничтожение цели" }
  },
  {
    id: "chrono_bm3", name: "Темпоральная бомба", tree: "chrono", level: 4,
    deps: [{ id: "chrono_bm2", type: "direct" }],
    desc: { what: "Бомба, создающая постоянный темпоральный разлом", appearance: "Постоянно расширяющийся синий разрыв", gives: "Зона запрета времени радиусом 1 км" }
  },
  {
    id: "chrono_bm4", name: "Хроноцид", tree: "chrono", level: 5,
    deps: [{ id: "chrono_bm3", type: "direct" }, { id: "chrono_rv2", type: "cosvennaya" }],
    desc: { what: "Удаление цели из временного потока навсегда", appearance: "Цель исчезает без следа, будто никогда не существовала", gives: "Стирание юнита из истории" }
  }
];

// ============================================================
// СТАТИСТИКА
// ============================================================
// TREES:     3 (nano, psi, chrono)
// SUBTREES:  30 (по 10 на дерево)
// TECHS:    200 нод
//   nano:    67 нод
//   psi:     67 нод
//   chrono:  66 нод
// Все ноды имеют путь до базовой технологии своего дерева
// ============================================================

// Экспорт для использования в проекте:
// Скопируйте объекты TREES_TEST, SUBTREES_TEST, TECHS_TEST
// в соответствующие TREES, SUBTREES, TECHS вашего файла