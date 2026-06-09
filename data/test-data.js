// ========================
// 1. ДЕРЕВЬЯ (TREES)
// ========================
const TREES = {
  drives: { name: "Двигательные системы", color: "#3498db" },
  energy: { name: "Энергосистемы", color: "#e74c3c" },
  lifecomm: { name: "Жизнеобеспечение и связь", color: "#2ecc71" }
};

// ========================
// 2. ПОДДЕРЕВЬЯ (SUBTREES)
// ========================
const SUBTREES = {
  // Дерево drives (10 поддеревьев)
  drives_chem: { name: "Химические двигатели", tree: "drives", color: "#ff7e67", nodeIds: ["drives_chem_base","drives_chem_high","drives_chem_eff","drives_chem_hybrid","drives_chem_adv","drives_chem_staged","drives_chem_nano"] },
  drives_nuclear: { name: "Ядерные двигатели", tree: "drives", color: "#f4d03f", nodeIds: ["drives_nuc_base","drives_nuc_pulse","drives_nuc_gas","drives_nuc_ion","drives_nuc_fusion","drives_nuc_advanced","drives_nuc_safety","drives_nuc_compact"] },
  drives_ion: { name: "Ионные двигатели", tree: "drives", color: "#85c1e9", nodeIds: ["drives_ion_base","drives_ion_grid","drives_ion_hall","drives_ion_magneto","drives_ion_dual","drives_ion_highthrust"] },
  drives_plasma: { name: "Плазменные двигатели", tree: "drives", color: "#e67e22", nodeIds: ["drives_plasma_base","drives_plasma_vortex","drives_plasma_pulse","drives_plasma_contain","drives_plasma_jet","drives_plasma_stable"] },
  drives_photon: { name: "Фотонные двигатели", tree: "drives", color: "#f1c40f", nodeIds: ["drives_photon_base","drives_photon_sail","drives_photon_laser","drives_photon_resonance","drives_photon_pulse","drives_photon_emdrive","drives_photon_quantum"] },
  drives_warp: { name: "Искривление пространства", tree: "drives", color: "#9b59b6", nodeIds: ["drives_warp_base","drives_warp_bubble","drives_warp_field","drives_warp_stabil","drives_warp_nav","drives_warp_energy","drives_warp_drive"] },
  drives_quantum: { name: "Квантовые двигатели", tree: "drives", color: "#1abc9c", nodeIds: ["drives_qdrive_base","drives_qdrive_entangle","drives_qdrive_tunnel","drives_qdrive_flux","drives_qdrive_stable","drives_qdrive_hyper"] },
  drives_pulse: { name: "Импульсные двигатели", tree: "drives", color: "#e74c3c", nodeIds: ["drives_pulse_base","drives_pulse_magneto","drives_pulse_induct","drives_pulse_capacitor","drives_pulse_freq","drives_pulse_burst"] },
  drives_thruster: { name: "Реактивные ускорители", tree: "drives", color: "#95a5a6", nodeIds: ["drives_thruster_base","drives_thruster_chem","drives_thruster_elec","drives_thruster_gimbal","drives_thruster_array","drives_thruster_nano"] },
  drives_hybrid: { name: "Гибридные системы", tree: "drives", color: "#d35400", nodeIds: ["drives_hybrid_base","drives_hybrid_ionplasma","drives_hybrid_nucl","drives_hybrid_multi","drives_hybrid_smart"] },
  // Дерево energy (10 поддеревьев)
  energy_solar: { name: "Солнечные батареи", tree: "energy", color: "#f39c12", nodeIds: ["energy_solar_base","energy_solar_panel","energy_solar_film","energy_solar_concentrate","energy_solar_space","energy_solar_quantum","energy_solar_tower","energy_solar_orbital"] },
  energy_fusion: { name: "Термоядерный синтез", tree: "energy", color: "#e74c3c", nodeIds: ["energy_fusion_base","energy_fusion_tokamak","energy_fusion_laser","energy_fusion_magnetic","energy_fusion_fuel","energy_fusion_ignition","energy_fusion_steady","energy_fusion_catalyzed","energy_fusion_aneutronic"] },
  energy_antimatter: { name: "Антиматерия", tree: "energy", color: "#c0392b", nodeIds: ["energy_am_base","energy_am_trap","energy_am_production","energy_am_reactor","energy_am_safety","energy_am_efficiency","energy_am_storage","energy_am_harvest"] },
  energy_quantum: { name: "Квантовые источники", tree: "energy", color: "#16a085", nodeIds: ["energy_qenergy_base","energy_qenergy_vacuum","energy_qenergy_fluctuation","energy_qenergy_extractor","energy_qenergy_cell","energy_qenergy_stable"] },
  energy_capacitor: { name: "Энергонакопители", tree: "energy", color: "#2980b9", nodeIds: ["energy_cap_base","energy_cap_super","energy_cap_graphene","energy_cap_quantum","energy_cap_array","energy_cap_nano"] },
  energy_wireless: { name: "Беспроводная передача", tree: "energy", color: "#8e44ad", nodeIds: ["energy_wireless_base","energy_wireless_microwave","energy_wireless_laser","energy_wireless_resonance","energy_wireless_beam","energy_wireless_network"] },
  energy_fission: { name: "Реакторы деления", tree: "energy", color: "#7f8c8d", nodeIds: ["energy_fission_base","energy_fission_fast","energy_fission_waste","energy_fission_safety","energy_fission_pebble","energy_fission_compact"] },
  energy_cryo: { name: "Криогенное хранение", tree: "energy", color: "#3498db", nodeIds: ["energy_cryo_base","energy_cryo_cell","energy_cryo_superconductor","energy_cryo_magnetic","energy_cryo_efficiency"] },
  energy_shield: { name: "Энергетические щиты", tree: "energy", color: "#2c3e50", nodeIds: ["energy_shield_base","energy_shield_plasma","energy_shield_force","energy_shield_adaptive","energy_shield_regen","energy_shield_bubble","energy_shield_quantum"] },
  energy_backup: { name: "Резервные системы", tree: "energy", color: "#bdc3c7", nodeIds: ["energy_backup_base","energy_backup_flywheel","energy_backup_battery","energy_backup_fuelcell","energy_backup_emergency"] },
  // Дерево lifecomm (10 поддеревьев)
  life_atmo: { name: "Атмосферные системы", tree: "lifecomm", color: "#48c9b0", nodeIds: ["life_atmo_base","life_atmo_scrubber","life_atmo_o2","life_atmo_co2","life_atmo_pressure","life_atmo_humidity","life_atmo_recycle"] },
  life_water: { name: "Водоснабжение", tree: "lifecomm", color: "#5dade2", nodeIds: ["life_water_base","life_water_filter","life_water_recycle","life_water_electrolysis","life_water_sterile","life_water_loop"] },
  life_food: { name: "Пищевые синтезаторы", tree: "lifecomm", color: "#52be80", nodeIds: ["life_food_base","life_food_hydroponic","life_food_algae","life_food_synth","life_food_3d","life_food_nutrient","life_food_meat","life_food_fungi"] },
  life_radiation: { name: "Радиационная защита", tree: "lifecomm", color: "#f5b041", nodeIds: ["life_rad_base","life_rad_shield","life_rad_active","life_rad_repair","life_rad_monitor","life_rad_hardening"] },
  life_cryosleep: { name: "Криосон", tree: "lifecomm", color: "#aab7b8", nodeIds: ["life_cryo_base","life_cryo_chamber","life_cryo_stasis","life_cryo_revival","life_cryo_longterm","life_cryo_medical"] },
  life_quantumcom: { name: "Квантовая связь", tree: "lifecomm", color: "#bb8fce", nodeIds: ["life_qcom_base","life_qcom_entangle","life_qcom_transceiver","life_qcom_network","life_qcom_crypto","life_qcom_relay","life_qcom_router"] },
  life_lasercom: { name: "Лазерная связь", tree: "lifecomm", color: "#f7dc6f", nodeIds: ["life_lasercom_base","life_lasercom_mod","life_lasercom_pulse","life_lasercom_frequency","life_lasercom_array","life_lasercom_deep"] },
  life_sensors: { name: "Сенсорные сети", tree: "lifecomm", color: "#85c1e9", nodeIds: ["life_sensor_base","life_sensor_optical","life_sensor_infrared","life_sensor_lidar","life_sensor_radar","life_sensor_gravity","life_sensor_subspace","life_sensor_quantum","life_sensor_neutrino"] },
  life_nav: { name: "Навигационные системы", tree: "lifecomm", color: "#f1948a", nodeIds: ["life_nav_base","life_nav_gyro","life_nav_star","life_nav_gps","life_nav_inertial","life_nav_quantum"] },
  life_gravity: { name: "Искусственная гравитация", tree: "lifecomm", color: "#d7bde2", nodeIds: ["life_grav_base","life_grav_plate","life_grav_rotating","life_grav_magnetic","life_grav_field","life_grav_singularity","life_grav_control","life_grav_inverter","life_grav_compensator"] }
};

// ========================
// 3. ТЕХНОЛОГИИ (TECHS)
// ========================
const TECHS = [
  // ---------- Дерево drives ----------
  // Поддерево chem
  { id: "drives_chem_base", name: "Базовые химические двигатели", tree: "drives", level: 0, deps: [], desc: { what: "Простейшие ракетные двигатели на химическом топливе", appearance: "Сопла с оранжевым пламенем", gives: "Начальная тяга для маневров" } },
  { id: "drives_chem_high", name: "Высокоэффективное топливо", tree: "drives", level: 1, deps: [{ id: "drives_chem_base", type: "direct" }], desc: { what: "Смеси с повышенным удельным импульсом", appearance: "Голубоватое пламя", gives: "+20% эффективности" } },
  { id: "drives_chem_eff", name: "Регенеративное охлаждение", tree: "drives", level: 2, deps: [{ id: "drives_chem_high", type: "direct" }], desc: { what: "Циркуляция топлива для охлаждения сопла", appearance: "Серебристые трубки вокруг камеры", gives: "Длительная работа двигателя" } },
  { id: "drives_chem_hybrid", name: "Гибридные химические ускорители", tree: "drives", level: 3, deps: [{ id: "drives_chem_eff", type: "direct" }], desc: { what: "Комбинация твердого и жидкого топлива", appearance: "Многослойные сопла", gives: "Регулируемая тяга" } },
  { id: "drives_chem_adv", name: "Передовые химические двигатели", tree: "drives", level: 4, deps: [{ id: "drives_chem_hybrid", type: "direct" }], desc: { what: "Наноструктурированное топливо", appearance: "Черные сопла с мерцанием", gives: "Максимальная эффективность" } },
  { id: "drives_chem_staged", name: "Ступенчатые ускорители", tree: "drives", level: 5, deps: [{ id: "drives_chem_adv", type: "direct" }], desc: { what: "Отбрасываемые ступени", appearance: "Разделяющиеся сегменты", gives: "Вывод тяжелых грузов" } },
  { id: "drives_chem_nano", name: "Нанохимические двигатели", tree: "drives", level: 5, deps: [{ id: "drives_chem_adv", type: "direct" }], desc: { what: "Катализ на наноуровне", appearance: "Микроскопические сопла", gives: "Сверхкомпактные маневровые" } },
  // Поддерево nuclear
  { id: "drives_nuc_base", name: "Ядерный тепловой двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Нагрев водорода ядерным реактором", appearance: "Радиационные ребра", gives: "Высокий импульс" } },
  { id: "drives_nuc_pulse", name: "Импульсный ядерный", tree: "drives", level: 1, deps: [{ id: "drives_nuc_base", type: "direct" }], desc: { what: "Последовательные ядерные взрывы", appearance: "Мощные вспышки", gives: "Гигантская тяга" } },
  { id: "drives_nuc_gas", name: "Газофазный ядерный", tree: "drives", level: 2, deps: [{ id: "drives_nuc_pulse", type: "direct" }], desc: { what: "Ядерное топливо в газовой фазе", appearance: "Светящаяся плазма", gives: "Высокая температура" } },
  { id: "drives_nuc_ion", name: "Ядерно-ионный гибрид", tree: "drives", level: 3, deps: [{ id: "drives_nuc_gas", type: "direct" }], desc: { what: "Ионизация отработанного водорода", appearance: "Синие струи", gives: "Экономия топлива" } },
  { id: "drives_nuc_fusion", name: "Термоядерный ракетный", tree: "drives", level: 4, deps: [{ id: "drives_nuc_ion", type: "direct" }], desc: { what: "Реакции синтеза для нагрева", appearance: "Ярко-белый выхлоп", gives: "Огромная скорость" } },
  { id: "drives_nuc_advanced", name: "Передовой ядерный", tree: "drives", level: 5, deps: [{ id: "drives_nuc_fusion", type: "direct" }], desc: { what: "Магнитное удержание плазмы", appearance: "Светящиеся кольца", gives: "Максимальная мощность" } },
  { id: "drives_nuc_safety", name: "Радиационная защита", tree: "drives", level: 3, deps: [{ id: "drives_nuc_base", type: "direct" }], desc: { what: "Экранирование экипажа", appearance: "Толстые стенки", gives: "Безопасная работа" } },
  { id: "drives_nuc_compact", name: "Компактный реактор", tree: "drives", level: 4, deps: [{ id: "drives_nuc_safety", type: "direct" }], desc: { what: "Миниатюризация", appearance: "Маленькие сферы", gives: "Установка на малые корабли" } },
  // Поддерево ion
  { id: "drives_ion_base", name: "Базовый ионный двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Ускорение ионов электродами", appearance: "Слабое синее свечение", gives: "Экономичная тяга" } },
  { id: "drives_ion_grid", name: "Многосеточная решетка", tree: "drives", level: 1, deps: [{ id: "drives_ion_base", type: "direct" }], desc: { what: "Три сетки вместо двух", appearance: "Мерцающие слои", gives: "Повышенная фокусировка" } },
  { id: "drives_ion_hall", name: "Холловский эффект", tree: "drives", level: 2, deps: [{ id: "drives_ion_grid", type: "direct" }], desc: { what: "Магнитное поле для удержания", appearance: "Кольцевой разряд", gives: "Большая плотность тока" } },
  { id: "drives_ion_magneto", name: "Магнитоплазменный ионник", tree: "drives", level: 3, deps: [{ id: "drives_ion_hall", type: "direct" }], desc: { what: "Дополнительное магнитное сжатие", appearance: "Спиральные линии", gives: "Высокая скорость истечения" } },
  { id: "drives_ion_dual", name: "Двухрежимный ионный", tree: "drives", level: 4, deps: [{ id: "drives_ion_magneto", type: "direct" }], desc: { what: "Переключение тяга/экономия", appearance: "Переключатели на корпусе", gives: "Адаптивность" } },
  { id: "drives_ion_highthrust", name: "Тяжелый ионный", tree: "drives", level: 5, deps: [{ id: "drives_ion_dual", type: "direct" }], desc: { what: "Ксеноновый запас высокого давления", appearance: "Массивные синие сопла", gives: "Тяга для грузовых кораблей" } },
  // Поддерево plasma
  { id: "drives_plasma_base", name: "Плазменный двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Разогрев плазмы в соленоиде", appearance: "Фиолетовые струи", gives: "Средняя тяга" } },
  { id: "drives_plasma_vortex", name: "Вихревая плазма", tree: "drives", level: 1, deps: [{ id: "drives_plasma_base", type: "direct" }], desc: { what: "Закрученный поток", appearance: "Спиральное свечение", gives: "Устойчивость" } },
  { id: "drives_plasma_pulse", name: "Импульсный плазменный", tree: "drives", level: 2, deps: [{ id: "drives_plasma_vortex", type: "direct" }], desc: { what: "Короткие мощные разряды", appearance: "Мигающие вспышки", gives: "Высокая маневренность" } },
  { id: "drives_plasma_contain", name: "Магнитное удержание", tree: "drives", level: 3, deps: [{ id: "drives_plasma_pulse", type: "direct" }], desc: { what: "Сверхпроводящие магниты", appearance: "Тороидальные катушки", gives: "Стабильность плазмы" } },
  { id: "drives_plasma_jet", name: "Плазменная струя", tree: "drives", level: 4, deps: [{ id: "drives_plasma_contain", type: "direct" }], desc: { what: "Фокусировка в узкий пучок", appearance: "Тонкая белая линия", gives: "Дальнобойность" } },
  { id: "drives_plasma_stable", name: "Стабилизированная плазма", tree: "drives", level: 5, deps: [{ id: "drives_plasma_jet", type: "direct" }], desc: { what: "Обратная связь по току", appearance: "Ровное голубоватое сияние", gives: "Бесперебойная работа" } },
  // Поддерево photon
  { id: "drives_photon_base", name: "Фотонный двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Давление света", appearance: "Яркий луч", gives: "Очень малая тяга, но долго" } },
  { id: "drives_photon_sail", name: "Солнечный парус", tree: "drives", level: 1, deps: [{ id: "drives_photon_base", type: "direct" }], desc: { what: "Огромные отражающие полотна", appearance: "Серебристая фольга", gives: "Разгон без топлива" } },
  { id: "drives_photon_laser", name: "Лазерный парус", tree: "drives", level: 2, deps: [{ id: "drives_photon_sail", type: "direct" }], desc: { what: "Облучение с орбитальной станции", appearance: "Красные лучи", gives: "Управляемый разгон" } },
  { id: "drives_photon_resonance", name: "Резонансный фотонный", tree: "drives", level: 3, deps: [{ id: "drives_photon_laser", type: "direct" }], desc: { what: "Интерференция волн", appearance: "Мерцающая голограмма", gives: "Увеличение тяги" } },
  { id: "drives_photon_pulse", name: "Импульсный лазер", tree: "drives", level: 4, deps: [{ id: "drives_photon_resonance", type: "direct" }], desc: { what: "Короткие гигаваттные вспышки", appearance: "Яркие вспышки", gives: "Рывковое ускорение" } },
  { id: "drives_photon_emdrive", name: "ЭМ-двигатель", tree: "drives", level: 5, deps: [{ id: "drives_photon_pulse", type: "direct" }], desc: { what: "Микроволновый резонатор", appearance: "Запечатанный конус", gives: "Тяга без выброса" } },
  { id: "drives_photon_quantum", name: "Квантовый фотонный", tree: "drives", level: 5, deps: [{ id: "drives_photon_emdrive", type: "direct" }], desc: { what: "Эффект Казимира", appearance: "Мерцающие пластины", gives: "Экзотическая тяга" } },
  // Поддерево warp
  { id: "drives_warp_base", name: "Теория деформации", tree: "drives", level: 0, deps: [], desc: { what: "Математический аппарат Алькубьерре", appearance: "Формулы на экранах", gives: "Возможность исследований" } },
  { id: "drives_warp_bubble", name: "Пузырь Алькубьерре", tree: "drives", level: 1, deps: [{ id: "drives_warp_base", type: "direct" }], desc: { what: "Сжатие пространства впереди", appearance: "Искаженный свет", gives: "Сверхсветовое движение" } },
  { id: "drives_warp_field", name: "Поле деформации", tree: "drives", level: 2, deps: [{ id: "drives_warp_bubble", type: "direct" }], desc: { what: "Устойчивое пространственное искажение", appearance: "Радужная оболочка", gives: "Управляемый варп" } },
  { id: "drives_warp_stabil", name: "Стабилизатор варпа", tree: "drives", level: 3, deps: [{ id: "drives_warp_field", type: "direct" }], desc: { what: "Обратная связь по метрике", appearance: "Гироскопы", gives: "Плавный вход/выход" } },
  { id: "drives_warp_nav", name: "Варп-навигация", tree: "drives", level: 4, deps: [{ id: "drives_warp_stabil", type: "direct" }], desc: { what: "Учет гравитационных колодцев", appearance: "Голографическая карта", gives: "Избежание препятствий" } },
  { id: "drives_warp_energy", name: "Энергоемкий варп", tree: "drives", level: 4, deps: [{ id: "drives_warp_field", type: "direct" }], desc: { what: "Использование экзотической материи", appearance: "Фиолетовые разряды", gives: "Снижение затрат" } },
  { id: "drives_warp_drive", name: "Полноценный варп-двигатель", tree: "drives", level: 5, deps: [{ id: "drives_warp_nav", type: "direct" }, { id: "drives_warp_energy", type: "direct" }], desc: { what: "Инженерное решение", appearance: "Массивное кольцо", gives: "Межзвездные перелеты" } },
  // Поддерево quantum
  { id: "drives_qdrive_base", name: "Квантовый двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Использование квантовых флуктуаций", appearance: "Мерцающая матрица", gives: "Теоретическая основа" } },
  { id: "drives_qdrive_entangle", name: "Запутанность для тяги", tree: "drives", level: 1, deps: [{ id: "drives_qdrive_base", type: "direct" }], desc: { what: "Мгновенная передача импульса", appearance: "Светящиеся пары", gives: "Нелокальное движение" } },
  { id: "drives_qdrive_tunnel", name: "Квантовый туннель", tree: "drives", level: 2, deps: [{ id: "drives_qdrive_entangle", type: "direct" }], desc: { what: "Вероятностное перемещение", appearance: "Размытая сфера", gives: "Кратковременные скачки" } },
  { id: "drives_qdrive_flux", name: "Флуктуационный ускоритель", tree: "drives", level: 3, deps: [{ id: "drives_qdrive_tunnel", type: "direct" }], desc: { what: "Усиление вакуумных флуктуаций", appearance: "Искрящиеся узлы", gives: "Постоянная малая тяга" } },
  { id: "drives_qdrive_stable", name: "Стабилизация квантового привода", tree: "drives", level: 4, deps: [{ id: "drives_qdrive_flux", type: "direct" }], desc: { what: "Контроль декогеренции", appearance: "Голубые лазеры", gives: "Надежность" } },
  { id: "drives_qdrive_hyper", name: "Гиперпространственный квантовый", tree: "drives", level: 5, deps: [{ id: "drives_qdrive_stable", type: "direct" }], desc: { what: "Выход в дополнительные измерения", appearance: "Мерцающий портал", gives: "Мгновенные переходы" } },
  // Поддерево pulse
  { id: "drives_pulse_base", name: "Импульсный двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Дискретные выбросы плазмы", appearance: "Пулеметные вспышки", gives: "Дискретная тяга" } },
  { id: "drives_pulse_magneto", name: "Магнитно-импульсный", tree: "drives", level: 1, deps: [{ id: "drives_pulse_base", type: "direct" }], desc: { what: "Ускорение через магнитную катушку", appearance: "Синие кольца", gives: "Более мощные импульсы" } },
  { id: "drives_pulse_induct", name: "Индукционный ускоритель", tree: "drives", level: 2, deps: [{ id: "drives_pulse_magneto", type: "direct" }], desc: { what: "Электромагнитная индукция", appearance: "Спиральные обмотки", gives: "Высокая частота" } },
  { id: "drives_pulse_capacitor", name: "Емкостной накопитель", tree: "drives", level: 3, deps: [{ id: "drives_pulse_induct", type: "direct" }], desc: { what: "Сверхконденсаторы для импульсов", appearance: "Большие батареи", gives: "Энергия для залпов" } },
  { id: "drives_pulse_freq", name: "Высокочастотный режим", tree: "drives", level: 4, deps: [{ id: "drives_pulse_capacitor", type: "direct" }], desc: { what: "Десятки импульсов в секунду", appearance: "Почти непрерывное свечение", gives: "Гладкая тяга" } },
  { id: "drives_pulse_burst", name: "Сверхмощный залп", tree: "drives", level: 5, deps: [{ id: "drives_pulse_freq", type: "direct" }], desc: { what: "Синхронизация всех катушек", appearance: "Ослепительная вспышка", gives: "Аварийное ускорение" } },
  // Поддерево thruster
  { id: "drives_thruster_base", name: "Реактивный ускоритель", tree: "drives", level: 0, deps: [], desc: { what: "Простой газовый реактивный", appearance: "Маленькие сопла", gives: "Точная ориентация" } },
  { id: "drives_thruster_chem", name: "Химический ускоритель", tree: "drives", level: 1, deps: [{ id: "drives_thruster_base", type: "direct" }], desc: { what: "Бинарное топливо", appearance: "Красные струи", gives: "Большая мощность" } },
  { id: "drives_thruster_elec", name: "Электрический ускоритель", tree: "drives", level: 2, deps: [{ id: "drives_thruster_chem", type: "direct" }], desc: { what: "Электротермический нагрев", appearance: "Белые нити", gives: "Экономичность" } },
  { id: "drives_thruster_gimbal", name: "Поворотные ускорители", tree: "drives", level: 3, deps: [{ id: "drives_thruster_elec", type: "direct" }], desc: { what: "Карданный подвес", appearance: "Шарниры", gives: "Векторное управление" } },
  { id: "drives_thruster_array", name: "Матрица ускорителей", tree: "drives", level: 4, deps: [{ id: "drives_thruster_gimbal", type: "direct" }], desc: { what: "Множество маленьких сопел", appearance: "Соты", gives: "Распределенная тяга" } },
  { id: "drives_thruster_nano", name: "Наноускорители", tree: "drives", level: 5, deps: [{ id: "drives_thruster_array", type: "direct" }], desc: { what: "Микроэлектромеханические системы", appearance: "Невидимые глазу", gives: "Незаметные коррекции" } },
  // Поддерево hybrid
  { id: "drives_hybrid_base", name: "Гибридный двигатель", tree: "drives", level: 0, deps: [], desc: { what: "Сочетание химического и электрического", appearance: "Комбинированные сопла", gives: "Универсальность" } },
  { id: "drives_hybrid_ionplasma", name: "Ионно-плазменный гибрид", tree: "drives", level: 1, deps: [{ id: "drives_hybrid_base", type: "direct" }], desc: { what: "Режимы переключения", appearance: "Переменный цвет", gives: "Эффективность на разных режимах" } },
  { id: "drives_hybrid_nucl", name: "Ядерно-химический", tree: "drives", level: 2, deps: [{ id: "drives_hybrid_ionplasma", type: "direct" }], desc: { what: "Разогрев химического топлива реактором", appearance: "Свечение реактора", gives: "Промежуточная тяга" } },
  { id: "drives_hybrid_multi", name: "Многотопливный", tree: "drives", level: 3, deps: [{ id: "drives_hybrid_nucl", type: "direct" }], desc: { what: "Автоматический выбор топлива", appearance: "Забортные баки", gives: "Гибкость миссии" } },
  { id: "drives_hybrid_smart", name: "Интеллектуальный гибрид", tree: "drives", level: 4, deps: [{ id: "drives_hybrid_multi", type: "direct" }], desc: { what: "ИИ для оптимизации", appearance: "Мерцающие индикаторы", gives: "Максимальная эффективность" } },

  // ---------- Дерево energy ----------
  // Поддерево solar
  { id: "energy_solar_base", name: "Солнечные панели", tree: "energy", level: 0, deps: [], desc: { what: "Фотоэлектрические элементы", appearance: "Синие пластины", gives: "Базовое питание" } },
  { id: "energy_solar_panel", name: "Эффективные панели", tree: "energy", level: 1, deps: [{ id: "energy_solar_base", type: "direct" }], desc: { what: "Монокристаллический кремний", appearance: "Темно-синие квадраты", gives: "+30% КПД" } },
  { id: "energy_solar_film", name: "Тонкопленочные батареи", tree: "energy", level: 2, deps: [{ id: "energy_solar_panel", type: "direct" }], desc: { what: "Гибкие панели на полимерах", appearance: "Серая пленка", gives: "Малый вес" } },
  { id: "energy_solar_concentrate", name: "Концентраторы", tree: "energy", level: 3, deps: [{ id: "energy_solar_film", type: "direct" }], desc: { what: "Линзы для фокусировки", appearance: "Прозрачные выпуклости", gives: "Повышенная выработка" } },
  { id: "energy_solar_space", name: "Космические солнечные", tree: "energy", level: 4, deps: [{ id: "energy_solar_concentrate", type: "direct" }], desc: { what: "Оптимизация под спектр в вакууме", appearance: "Золотистое покрытие", gives: "Высокая эффективность в космосе" } },
  { id: "energy_solar_quantum", name: "Квантовые солнечные", tree: "energy", level: 5, deps: [{ id: "energy_solar_space", type: "direct" }], desc: { what: "Точки квантовых ям", appearance: "Мерцающие наноточки", gives: "Сверхвысокий КПД" } },
  { id: "energy_solar_tower", name: "Орбитальная солнечная станция", tree: "energy", level: 5, deps: [{ id: "energy_solar_quantum", type: "direct" }], desc: { what: "Гигаваттные фермы", appearance: "Огромные крылья", gives: "Энергия для базы" } },
  { id: "energy_solar_orbital", name: "Солнечные паруса-генераторы", tree: "energy", level: 4, deps: [{ id: "energy_solar_space", type: "direct" }], desc: { what: "Генерация от давления света", appearance: "Серебристые паруса", gives: "Доп. энергия в полете" } },
  // Поддерево fusion
  { id: "energy_fusion_base", name: "Термоядерный реактор", tree: "energy", level: 0, deps: [], desc: { what: "Магнитное удержание плазмы", appearance: "Тор с катушками", gives: "Обильная энергия" } },
  { id: "energy_fusion_tokamak", name: "Токамак", tree: "energy", level: 1, deps: [{ id: "energy_fusion_base", type: "direct" }], desc: { what: "Тороидальная камера", appearance: "Крупное кольцо", gives: "Стабильный синтез" } },
  { id: "energy_fusion_laser", name: "Лазерный синтез", tree: "energy", level: 2, deps: [{ id: "energy_fusion_tokamak", type: "direct" }], desc: { what: "Импульсные лазеры для зажигания", appearance: "Сферическая камера", gives: "Инерциальное удержание" } },
  { id: "energy_fusion_magnetic", name: "Стелларатор", tree: "energy", level: 3, deps: [{ id: "energy_fusion_laser", type: "direct" }], desc: { what: "Винтовая магнитная конфигурация", appearance: "Замысловатая форма", gives: "Непрерывный режим" } },
  { id: "energy_fusion_fuel", name: "Гелий-3 топливо", tree: "energy", level: 4, deps: [{ id: "energy_fusion_magnetic", type: "direct" }], desc: { what: "Анейтронный синтез", appearance: "Серебристые капсулы", gives: "Минимум радиации" } },
  { id: "energy_fusion_ignition", name: "Зажигание прямого привода", tree: "energy", level: 5, deps: [{ id: "energy_fusion_fuel", type: "direct" }], desc: { what: "Сверхмощные лазеры", appearance: "Яркая вспышка", gives: "Энергетический выход > 10x" } },
  { id: "energy_fusion_steady", name: "Стационарный синтез", tree: "energy", level: 5, deps: [{ id: "energy_fusion_ignition", type: "direct" }], desc: { what: "Беспрерывная работа годами", appearance: "Ровное свечение", gives: "Базовая мощность колонии" } },
  { id: "energy_fusion_catalyzed", name: "Каталитический синтез", tree: "energy", level: 4, deps: [{ id: "energy_fusion_fuel", type: "direct" }], desc: { what: "Мюонный катализ", appearance: "Мерцающие зеленые точки", gives: "Снижение температуры" } },
  { id: "energy_fusion_aneutronic", name: "Безнейтронный синтез", tree: "energy", level: 5, deps: [{ id: "energy_fusion_catalyzed", type: "direct" }], desc: { what: "Протон-борная реакция", appearance: "Заряженные частицы", gives: "Прямое преобразование в электричество" } },
  // Поддерево antimatter
  { id: "energy_am_base", name: "Удержание антивещества", tree: "energy", level: 0, deps: [], desc: { what: "Магнитные ловушки", appearance: "Светящиеся кольца", gives: "Хранение позитронов" } },
  { id: "energy_am_trap", name: "Пеннинг-ловушка", tree: "energy", level: 1, deps: [{ id: "energy_am_base", type: "direct" }], desc: { what: "Комбинация электрических и магнитных полей", appearance: "Цилиндр с электродами", gives: "Удержание миллиардов частиц" } },
  { id: "energy_am_production", name: "Генерация антиматерии", tree: "energy", level: 2, deps: [{ id: "energy_am_trap", type: "direct" }], desc: { what: "Лазерно-плазменный метод", appearance: "Искрящаяся камера", gives: "Создание позитронов на месте" } },
  { id: "energy_am_reactor", name: "Антиматерия-реактор", tree: "energy", level: 3, deps: [{ id: "energy_am_production", type: "direct" }], desc: { what: "Аннигиляция с водородом", appearance: "Желтое сияние", gives: "Гигантская энергия" } },
  { id: "energy_am_safety", name: "Безопасность антиматерии", tree: "energy", level: 4, deps: [{ id: "energy_am_reactor", type: "direct" }], desc: { what: "Аварийный сброс и поглощение", appearance: "Толстые стенки из вольфрама", gives: "Защита от взрыва" } },
  { id: "energy_am_efficiency", name: "Высокоэффективная аннигиляция", tree: "energy", level: 5, deps: [{ id: "energy_am_safety", type: "direct" }], desc: { what: "Направление гамма-квантов", appearance: "Свинцовые отражатели", gives: "90% преобразования" } },
  { id: "energy_am_storage", name: "Долговременное хранение", tree: "energy", level: 4, deps: [{ id: "energy_am_trap", type: "direct" }], desc: { what: "Криомагнитная ячейка", appearance: "Сверхпроводящая сфера", gives: "Годы хранения" } },
  { id: "energy_am_harvest", name: "Сборка антиматерии из космоса", tree: "energy", level: 5, deps: [{ id: "energy_am_storage", type: "direct" }], desc: { what: "Магнитосферный захват", appearance: "Огромные петли", gives: "Добыча из поясов" } },
  // Поддерево quantum
  { id: "energy_qenergy_base", name: "Квантовое питание", tree: "energy", level: 0, deps: [], desc: { what: "Извлечение нулевой энергии", appearance: "Мерцающая плита", gives: "Теоретический источник" } },
  { id: "energy_qenergy_vacuum", name: "Вакуумная энергия", tree: "energy", level: 1, deps: [{ id: "energy_qenergy_base", type: "direct" }], desc: { what: "Эффект Казимира", appearance: "Параллельные пластины", gives: "Микроскопическая мощность" } },
  { id: "energy_qenergy_fluctuation", name: "Квантовые флуктуации", tree: "energy", level: 2, deps: [{ id: "energy_qenergy_vacuum", type: "direct" }], desc: { what: "Усиление спонтанных переходов", appearance: "Искрящиеся узлы", gives: "Стабильные нановатты" } },
  { id: "energy_qenergy_extractor", name: "Экстрактор нулевой точки", tree: "energy", level: 3, deps: [{ id: "energy_qenergy_fluctuation", type: "direct" }], desc: { what: "Резонансная полость", appearance: "Золотистая сфера", gives: "Микроватты" } },
  { id: "energy_qenergy_cell", name: "Квантовая ячейка", tree: "energy", level: 4, deps: [{ id: "energy_qenergy_extractor", type: "direct" }], desc: { what: "Массированный отбор", appearance: "Сотовая панель", gives: "Ватты на см²" } },
  { id: "energy_qenergy_stable", name: "Стабилизированная квантовая энергия", tree: "energy", level: 5, deps: [{ id: "energy_qenergy_cell", type: "direct" }], desc: { what: "Подавление флуктуаций", appearance: "Темный куб", gives: "Киловатты без топлива" } },
  // Поддерево capacitor
  { id: "energy_cap_base", name: "Конденсатор", tree: "energy", level: 0, deps: [], desc: { what: "Классический накопитель", appearance: "Цилиндр с выводами", gives: "Быстрая разрядка" } },
  { id: "energy_cap_super", name: "Суперконденсатор", tree: "energy", level: 1, deps: [{ id: "energy_cap_base", type: "direct" }], desc: { what: "Высокая удельная емкость", appearance: "Черные прямоугольники", gives: "100x больше заряда" } },
  { id: "energy_cap_graphene", name: "Графеновый конденсатор", tree: "energy", level: 2, deps: [{ id: "energy_cap_super", type: "direct" }], desc: { what: "Монослойный электрод", appearance: "Прозрачная пленка", gives: "Огромная плотность" } },
  { id: "energy_cap_quantum", name: "Квантовый конденсатор", tree: "energy", level: 3, deps: [{ id: "energy_cap_graphene", type: "direct" }], desc: { what: "Туннельный эффект", appearance: "Мерцающие наноструктуры", gives: "Мгновенный заряд" } },
  { id: "energy_cap_array", name: "Батарея конденсаторов", tree: "energy", level: 4, deps: [{ id: "energy_cap_quantum", type: "direct" }], desc: { what: "Параллельно-последовательное включение", appearance: "Решетка", gives: "Высокое напряжение и емкость" } },
  { id: "energy_cap_nano", name: "Наноконденсаторы", tree: "energy", level: 5, deps: [{ id: "energy_cap_array", type: "direct" }], desc: { what: "Интеграция в чипы", appearance: "Невидимые глазом", gives: "Энергия для микроустройств" } },
  // Поддерево wireless
  { id: "energy_wireless_base", name: "Индукционная передача", tree: "energy", level: 0, deps: [], desc: { what: "Магнитное поле ближнего поля", appearance: "Катушки", gives: "Зарядка на сантиметрах" } },
  { id: "energy_wireless_microwave", name: "Микроволновая передача", tree: "energy", level: 1, deps: [{ id: "energy_wireless_base", type: "direct" }], desc: { what: "Выпрямительные антенны", appearance: "Сетчатые тарелки", gives: "Километровый луч" } },
  { id: "energy_wireless_laser", name: "Лазерная передача", tree: "energy", level: 2, deps: [{ id: "energy_wireless_microwave", type: "direct" }], desc: { what: "Фотоэлектрический приемник", appearance: "Узкий луч", gives: "Высокая плотность" } },
  { id: "energy_wireless_resonance", name: "Резонансная связь", tree: "energy", level: 3, deps: [{ id: "energy_wireless_laser", type: "direct" }], desc: { what: "Настройка частот", appearance: "Светящиеся кольца", gives: "Эффективность 90%" } },
  { id: "energy_wireless_beam", name: "Направленный пучок", tree: "energy", level: 4, deps: [{ id: "energy_wireless_resonance", type: "direct" }], desc: { what: "Активное слежение", appearance: "Следящая антенна", gives: "Перемещение в полете" } },
  { id: "energy_wireless_network", name: "Космическая энергосеть", tree: "energy", level: 5, deps: [{ id: "energy_wireless_beam", type: "direct" }], desc: { what: "Ретрансляторы на орбите", appearance: "Созвездие спутников", gives: "Глобальное покрытие" } },
  // Поддерево fission
  { id: "energy_fission_base", name: "Ядерный реактор деления", tree: "energy", level: 0, deps: [], desc: { what: "Уран-235, замедлитель", appearance: "Стальной корпус", gives: "Мегаватты" } },
  { id: "energy_fission_fast", name: "Реактор на быстрых нейтронах", tree: "energy", level: 1, deps: [{ id: "energy_fission_base", type: "direct" }], desc: { what: "Без замедлителя", appearance: "Жидкий натрий", gives: "Воспроизводство топлива" } },
  { id: "energy_fission_waste", name: "Переработка отходов", tree: "energy", level: 2, deps: [{ id: "energy_fission_fast", type: "direct" }], desc: { what: "Сжигание долгоживущих изотопов", appearance: "Химические колонны", gives: "Уменьшение радиотоксичности" } },
  { id: "energy_fission_safety", name: "Пассивная безопасность", tree: "energy", level: 3, deps: [{ id: "energy_fission_waste", type: "direct" }], desc: { what: "Автоматическое глушение", appearance: "Поглощающие стержни", gives: "Без аварий" } },
  { id: "energy_fission_pebble", name: "Шариковый реактор", tree: "energy", level: 4, deps: [{ id: "energy_fission_safety", type: "direct" }], desc: { what: "Топливные шарики", appearance: "Графитовая засыпка", gives: "Высокая температура" } },
  { id: "energy_fission_compact", name: "Компактный реактор", tree: "energy", level: 5, deps: [{ id: "energy_fission_pebble", type: "direct" }], desc: { what: "Миниатюризация", appearance: "Чемоданчик", gives: "Портативная энергия" } },
  // Поддерево cryo
  { id: "energy_cryo_base", name: "Криогенное охлаждение", tree: "energy", level: 0, deps: [], desc: { what: "Жидкий гелий", appearance: "Серебряные баки", gives: "Сверхпроводимость" } },
  { id: "energy_cryo_cell", name: "Криогенная ячейка", tree: "energy", level: 1, deps: [{ id: "energy_cryo_base", type: "direct" }], desc: { what: "Герметичные сосуды", appearance: "Изолированные контейнеры", gives: "Долгое хранение" } },
  { id: "energy_cryo_superconductor", name: "Высокотемпературная сверхпроводимость", tree: "energy", level: 2, deps: [{ id: "energy_cryo_cell", type: "direct" }], desc: { what: "Керамика на жидком азоте", appearance: "Черные диски", gives: "Экономия энергии" } },
  { id: "energy_cryo_magnetic", name: "Криомагнитное хранение", tree: "energy", level: 3, deps: [{ id: "energy_cryo_superconductor", type: "direct" }], desc: { what: "Сверхпроводящий магнитный накопитель", appearance: "Тороидальная катушка", gives: "Сохранение гигаджоулей" } },
  { id: "energy_cryo_efficiency", name: "Эффективные криокулеры", tree: "energy", level: 4, deps: [{ id: "energy_cryo_magnetic", type: "direct" }], desc: { what: "Пульсационные трубки", appearance: "Вибрационные блоки", gives: "Энергопотребление < 100 Вт" } },
  // Поддерево shield
  { id: "energy_shield_base", name: "Энергетический щит", tree: "energy", level: 0, deps: [], desc: { what: "Плазменный барьер", appearance: "Мерцающая полупрозрачная стена", gives: "Защита от мелких частиц" } },
  { id: "energy_shield_plasma", name: "Плазменный щит", tree: "energy", level: 1, deps: [{ id: "energy_shield_base", type: "direct" }], desc: { what: "Горячая ионизованная оболочка", appearance: "Красноватое свечение", gives: "Сжигание микрометеоритов" } },
  { id: "energy_shield_force", name: "Силовой щит", tree: "energy", level: 2, deps: [{ id: "energy_shield_plasma", type: "direct" }], desc: { what: "Электромагнитное поле", appearance: "Голубая полусфера", gives: "Отклонение заряженных частиц" } },
  { id: "energy_shield_adaptive", name: "Адаптивный щит", tree: "energy", level: 3, deps: [{ id: "energy_shield_force", type: "direct" }], desc: { what: "Изменение частоты под угрозу", appearance: "Мерцающие цвета", gives: "Защита от лазеров и кинетики" } },
  { id: "energy_shield_regen", name: "Регенерирующий щит", tree: "energy", level: 4, deps: [{ id: "energy_shield_adaptive", type: "direct" }], desc: { what: "Быстрое восстановление", appearance: "Пульсирующее поле", gives: "Восстановление после попаданий" } },
  { id: "energy_shield_bubble", name: "Пузырьковый щит", tree: "energy", level: 5, deps: [{ id: "energy_shield_regen", type: "direct" }], desc: { what: "Сферическая проекция", appearance: "Полностью прозрачная сфера", gives: "Защита от всех направлений" } },
  { id: "energy_shield_quantum", name: "Квантовый щит", tree: "energy", level: 5, deps: [{ id: "energy_shield_bubble", type: "direct" }], desc: { what: "Запутывание частиц для поглощения", appearance: "Мерцающая рябь", gives: "Поглощение энергии атак" } },
  // Поддерево backup
  { id: "energy_backup_base", name: "Резервный источник", tree: "energy", level: 0, deps: [], desc: { what: "Химические батареи", appearance: "Свинцовые коробки", gives: "4 часа аварийной работы" } },
  { id: "energy_backup_flywheel", name: "Маховичный накопитель", tree: "energy", level: 1, deps: [{ id: "energy_backup_base", type: "direct" }], desc: { what: "Кинетическое хранение", appearance: "Вращающийся цилиндр", gives: "Мгновенная отдача" } },
  { id: "energy_backup_battery", name: "Литий-ионные резервы", tree: "energy", level: 2, deps: [{ id: "energy_backup_flywheel", type: "direct" }], desc: { what: "Высокая плотность", appearance: "Блоки 18650", gives: "Автономность 24ч" } },
  { id: "energy_backup_fuelcell", name: "Топливные элементы", tree: "energy", level: 3, deps: [{ id: "energy_backup_battery", type: "direct" }], desc: { what: "Водород-кислород", appearance: "Слоистые пластины", gives: "Долговременное резервирование" } },
  { id: "energy_backup_emergency", name: "Аварийный реактор", tree: "energy", level: 4, deps: [{ id: "energy_backup_fuelcell", type: "direct" }], desc: { what: "Компактный делящийся", appearance: "Маленький шар", gives: "Месяцы работы" } },

  // ---------- Дерево lifecomm ----------
  // Поддерево atmo
  { id: "life_atmo_base", name: "Система жизнеобеспечения", tree: "lifecomm", level: 0, deps: [], desc: { what: "Подача кислорода, удаление CO2", appearance: "Шланги и вентиляторы", gives: "Воздух для дыхания" } },
  { id: "life_atmo_scrubber", name: "Скруббер CO2", tree: "lifecomm", level: 1, deps: [{ id: "life_atmo_base", type: "direct" }], desc: { what: "Химическое поглощение углекислого газа", appearance: "Картриджи с гидроксидом", gives: "Удаление CO2" } },
  { id: "life_atmo_o2", name: "Генератор кислорода", tree: "lifecomm", level: 2, deps: [{ id: "life_atmo_scrubber", type: "direct" }], desc: { what: "Электролиз воды", appearance: "Пузырящиеся электроды", gives: "Непрерывное пополнение O2" } },
  { id: "life_atmo_co2", name: "Утилизация CO2 в кислород", tree: "lifecomm", level: 3, deps: [{ id: "life_atmo_o2", type: "direct" }], desc: { what: "Реакция Сабатье", appearance: "Нагретая камера", gives: "Замкнутый цикл" } },
  { id: "life_atmo_pressure", name: "Контроль давления", tree: "lifecomm", level: 4, deps: [{ id: "life_atmo_co2", type: "direct" }], desc: { what: "Компенсация утечек", appearance: "Клапаны и датчики", gives: "Стабильная атмосфера" } },
  { id: "life_atmo_humidity", name: "Управление влажностью", tree: "lifecomm", level: 3, deps: [{ id: "life_atmo_scrubber", type: "direct" }], desc: { what: "Конденсация и испарение", appearance: "Капельные уловители", gives: "Комфорт" } },
  { id: "life_atmo_recycle", name: "Полная регенерация", tree: "lifecomm", level: 5, deps: [{ id: "life_atmo_pressure", type: "direct" }, { id: "life_atmo_humidity", type: "direct" }], desc: { what: "Замкнутая атмосфера", appearance: "Компактный блок", gives: "Независимость от запасов" } },
  // Поддерево water
  { id: "life_water_base", name: "Водоснабжение", tree: "lifecomm", level: 0, deps: [], desc: { what: "Хранение и подача воды", appearance: "Баки и трубы", gives: "Питьевая вода" } },
  { id: "life_water_filter", name: "Фильтрация", tree: "lifecomm", level: 1, deps: [{ id: "life_water_base", type: "direct" }], desc: { what: "Мембранные фильтры", appearance: "Картриджи", gives: "Очистка от взвесей" } },
  { id: "life_water_recycle", name: "Рециркуляция", tree: "lifecomm", level: 2, deps: [{ id: "life_water_filter", type: "direct" }], desc: { what: "Сбор и очистка конденсата", appearance: "Змеевики", gives: "Экономия воды" } },
  { id: "life_water_electrolysis", name: "Электролиз воды", tree: "lifecomm", level: 3, deps: [{ id: "life_water_recycle", type: "direct" }], desc: { what: "Разложение на водород и кислород", appearance: "Электролизер", gives: "Топливо и воздух" } },
  { id: "life_water_sterile", name: "Стерилизация", tree: "lifecomm", level: 4, deps: [{ id: "life_water_electrolysis", type: "direct" }], desc: { what: "УФ-облучение", appearance: "Лампы", gives: "Безопасность" } },
  { id: "life_water_loop", name: "Замкнутый водооборот", tree: "lifecomm", level: 5, deps: [{ id: "life_water_sterile", type: "direct" }], desc: { what: "Полное восстановление", appearance: "Комплексная установка", gives: "Минимальные потери" } },
  // Поддерево food
  { id: "life_food_base", name: "Хранение продовольствия", tree: "lifecomm", level: 0, deps: [], desc: { what: "Сублимированные продукты", appearance: "Термопакеты", gives: "Долгий срок" } },
  { id: "life_food_hydroponic", name: "Гидропоника", tree: "lifecomm", level: 1, deps: [{ id: "life_food_base", type: "direct" }], desc: { what: "Выращивание без почвы", appearance: "Стеллажи с лампами", gives: "Свежая зелень" } },
  { id: "life_food_algae", name: "Культивирование водорослей", tree: "lifecomm", level: 2, deps: [{ id: "life_food_hydroponic", type: "direct" }], desc: { what: "Биореакторы с хлореллой", appearance: "Зеленые баки", gives: "Белок и кислород" } },
  { id: "life_food_synth", name: "Синтезатор пищи", tree: "lifecomm", level: 3, deps: [{ id: "life_food_algae", type: "direct" }], desc: { what: "3D-печать из органики", appearance: "Принтер с картриджами", gives: "Любые блюда" } },
  { id: "life_food_3d", name: "Молекулярный синтез", tree: "lifecomm", level: 4, deps: [{ id: "life_food_synth", type: "direct" }], desc: { what: "Сборка из атомов", appearance: "Белая капсула", gives: "Воссоздание вкусов" } },
  { id: "life_food_nutrient", name: "Полноценное питание", tree: "lifecomm", level: 5, deps: [{ id: "life_food_3d", type: "direct" }], desc: { what: "Витамины и микроэлементы", appearance: "Добавки", gives: "Здоровье экипажа" } },
  { id: "life_food_meat", name: "Культивированное мясо", tree: "lifecomm", level: 4, deps: [{ id: "life_food_synth", type: "direct" }], desc: { what: "Клеточные культуры", appearance: "Биореактор", gives: "Протеин" } },
  { id: "life_food_fungi", name: "Грибные фермы", tree: "lifecomm", level: 3, deps: [{ id: "life_food_algae", type: "direct" }], desc: { what: "Мицелий на отходах", appearance: "Белые блоки", gives: "Утилизация" } },
  // Поддерево radiation
  { id: "life_rad_base", name: "Радиационная защита", tree: "lifecomm", level: 0, deps: [], desc: { what: "Пассивные экраны из алюминия", appearance: "Стенки", gives: "Снижение дозы" } },
  { id: "life_rad_shield", name: "Водяная защита", tree: "lifecomm", level: 1, deps: [{ id: "life_rad_base", type: "direct" }], desc: { what: "Бак с водой вокруг отсеков", appearance: "Толстые стенки", gives: "Поглощение нейтронов" } },
  { id: "life_rad_active", name: "Активная защита", tree: "lifecomm", level: 2, deps: [{ id: "life_rad_shield", type: "direct" }], desc: { what: "Электромагнитное поле", appearance: "Катушки", gives: "Отклонение заряженных частиц" } },
  { id: "life_rad_repair", name: "Самовосстанавливающиеся материалы", tree: "lifecomm", level: 3, deps: [{ id: "life_rad_active", type: "direct" }], desc: { what: "Полимер с микрокапсулами", appearance: "Серая поверхность", gives: "Заделка микротрещин" } },
  { id: "life_rad_monitor", name: "Дозиметрическая сеть", tree: "lifecomm", level: 4, deps: [{ id: "life_rad_repair", type: "direct" }], desc: { what: "Повсеместные датчики", appearance: "Маленькие кружки", gives: "Предупреждение" } },
  { id: "life_rad_hardening", name: "Радиационно-стойкая электроника", tree: "lifecomm", level: 5, deps: [{ id: "life_rad_monitor", type: "direct" }], desc: { what: "Кремний-на-изоляторе", appearance: "Чипы в корпусах", gives: "Надежность систем" } },
  // Поддерево cryosleep
  { id: "life_cryo_base", name: "Криогенный сон", tree: "lifecomm", level: 0, deps: [], desc: { what: "Понижение температуры тела", appearance: "Капсула со льдом", gives: "Замедление метаболизма" } },
  { id: "life_cryo_chamber", name: "Криокапсула", tree: "lifecomm", level: 1, deps: [{ id: "life_cryo_base", type: "direct" }], desc: { what: "Индивидуальная камера", appearance: "Стеклянный саркофаг", gives: "Безопасное охлаждение" } },
  { id: "life_cryo_stasis", name: "Глубокая стазис", tree: "lifecomm", level: 2, deps: [{ id: "life_cryo_chamber", type: "direct" }], desc: { what: "Замена крови криопротектором", appearance: "Голубоватая жидкость", gives: "Остановка старения" } },
  { id: "life_cryo_revival", name: "Быстрое пробуждение", tree: "lifecomm", level: 3, deps: [{ id: "life_cryo_stasis", type: "direct" }], desc: { what: "Микроволновой нагрев", appearance: "Импульсные магнетроны", gives: "Пробуждение за 10 мин" } },
  { id: "life_cryo_longterm", name: "Долгосрочный криосон", tree: "lifecomm", level: 4, deps: [{ id: "life_cryo_revival", type: "direct" }], desc: { what: "Поддержание десятилетиями", appearance: "Энергонезависимый блок", gives: "Межзвездные перелеты" } },
  { id: "life_cryo_medical", name: "Криомедицина", tree: "lifecomm", level: 5, deps: [{ id: "life_cryo_longterm", type: "direct" }], desc: { what: "Лечение повреждений во сне", appearance: "Медицинские интерфейсы", gives: "Восстановление тканей" } },
  // Поддерево quantumcom
  { id: "life_qcom_base", name: "Квантовая связь", tree: "lifecomm", level: 0, deps: [], desc: { what: "Передача кубитов", appearance: "Оптические столы", gives: "Абсолютная безопасность" } },
  { id: "life_qcom_entangle", name: "Запутанность", tree: "lifecomm", level: 1, deps: [{ id: "life_qcom_base", type: "direct" }], desc: { what: "Пары фотонов", appearance: "Спонтанные кристаллы", gives: "Мгновенное изменение состояния" } },
  { id: "life_qcom_transceiver", name: "Квантовый трансивер", tree: "lifecomm", level: 2, deps: [{ id: "life_qcom_entangle", type: "direct" }], desc: { what: "Приемопередатчик", appearance: "Компактная коробка", gives: "Связь в реальном времени" } },
  { id: "life_qcom_network", name: "Квантовая сеть", tree: "lifecomm", level: 3, deps: [{ id: "life_qcom_transceiver", type: "direct" }], desc: { what: "Повторители", appearance: "Цепочка узлов", gives: "Передача на расстояние" } },
  { id: "life_qcom_crypto", name: "Квантовая криптография", tree: "lifecomm", level: 4, deps: [{ id: "life_qcom_network", type: "direct" }], desc: { what: "Распределение ключей", appearance: "Защищенные чипы", gives: "Невзламываемая связь" } },
  { id: "life_qcom_relay", name: "Квантовый ретранслятор", tree: "lifecomm", level: 5, deps: [{ id: "life_qcom_crypto", type: "direct" }], desc: { what: "Усиление запутанности", appearance: "Космическая станция", gives: "Связь через галактику" } },
  { id: "life_qcom_router", name: "Квантовый маршрутизатор", tree: "lifecomm", level: 5, deps: [{ id: "life_qcom_relay", type: "direct" }], desc: { what: "Направление потоков", appearance: "Переключатель кубитов", gives: "Сложная топология" } },
  // Поддерево lasercom
  { id: "life_lasercom_base", name: "Лазерная связь", tree: "lifecomm", level: 0, deps: [], desc: { what: "Модулированный лазерный луч", appearance: "Красный диод", gives: "Высокоскоростная линия" } },
  { id: "life_lasercom_mod", name: "Высокоскоростная модуляция", tree: "lifecomm", level: 1, deps: [{ id: "life_lasercom_base", type: "direct" }], desc: { what: "Махи-Цендера", appearance: "Интегральная оптика", gives: "Скорость 10 Гбит/с" } },
  { id: "life_lasercom_pulse", name: "Импульсная связь", tree: "lifecomm", level: 2, deps: [{ id: "life_lasercom_mod", type: "direct" }], desc: { what: "Фемтосекундные вспышки", appearance: "Ультрабыстрые лазеры", gives: "Сверхплотная передача" } },
  { id: "life_lasercom_frequency", name: "Многочастотная", tree: "lifecomm", level: 3, deps: [{ id: "life_lasercom_pulse", type: "direct" }], desc: { what: "WDM в оптике", appearance: "Разноцветные лучи", gives: "Увеличение пропускной способности" } },
  { id: "life_lasercom_array", name: "Фазированная решетка", tree: "lifecomm", level: 4, deps: [{ id: "life_lasercom_frequency", type: "direct" }], desc: { what: "Управление лучом", appearance: "Матрица эмиттеров", gives: "Слежение без механики" } },
  { id: "life_lasercom_deep", name: "Дальняя космическая связь", tree: "lifecomm", level: 5, deps: [{ id: "life_lasercom_array", type: "direct" }], desc: { what: "Адаптивная оптика", appearance: "Огромный телескоп", gives: "Связь с поясом Койпера" } },
  // Поддерево sensors
  { id: "life_sensor_base", name: "Оптические датчики", tree: "lifecomm", level: 0, deps: [], desc: { what: "Камеры видимого диапазона", appearance: "Объективы", gives: "Визуальное наблюдение" } },
  { id: "life_sensor_optical", name: "Мультиспектральная оптика", tree: "lifecomm", level: 1, deps: [{ id: "life_sensor_base", type: "direct" }], desc: { what: "ИК, УФ, видимый", appearance: "Турели", gives: "Распознавание объектов" } },
  { id: "life_sensor_infrared", name: "Тепловизоры", tree: "lifecomm", level: 2, deps: [{ id: "life_sensor_optical", type: "direct" }], desc: { what: "Болометры", appearance: "Серые матрицы", gives: "Обнаружение скрытых" } },
  { id: "life_sensor_lidar", name: "Лидар", tree: "lifecomm", level: 3, deps: [{ id: "life_sensor_infrared", type: "direct" }], desc: { what: "Лазерное сканирование", appearance: "Вращающаяся головка", gives: "3D-карты" } },
  { id: "life_sensor_radar", name: "Радар", tree: "lifecomm", level: 4, deps: [{ id: "life_sensor_lidar", type: "direct" }], desc: { what: "СВЧ-детекция", appearance: "Параболическая антенна", gives: "Обнаружение металла" } },
  { id: "life_sensor_gravity", name: "Гравиметры", tree: "lifecomm", level: 5, deps: [{ id: "life_sensor_radar", type: "direct" }], desc: { what: "Сверхпроводящие", appearance: "Чувствительные подвесы", gives: "Поиск скрытых масс" } },
  { id: "life_sensor_subspace", name: "Подпространственные сенсоры", tree: "lifecomm", level: 5, deps: [{ id: "life_sensor_gravity", type: "direct" }], desc: { what: "Искажения метрики", appearance: "Кольца", gives: "Детекция варп-полей" } },
  { id: "life_sensor_quantum", name: "Квантовые сенсоры", tree: "lifecomm", level: 4, deps: [{ id: "life_sensor_lidar", type: "direct" }], desc: { what: "NV-центры", appearance: "Алмазные пластины", gives: "Сверхчувствительность" } },
  { id: "life_sensor_neutrino", name: "Нейтринный детектор", tree: "lifecomm", level: 5, deps: [{ id: "life_sensor_quantum", type: "direct" }], desc: { what: "Огромный резервуар", appearance: "Бак с водой и ФЭУ", gives: "Видение сквозь планеты" } },
  // Поддерево nav
  { id: "life_nav_base", name: "Инерциальная навигация", tree: "lifecomm", level: 0, deps: [], desc: { what: "Гироскопы и акселерометры", appearance: "Блок датчиков", gives: "Счисление пути" } },
  { id: "life_nav_gyro", name: "Кольцевые лазерные гироскопы", tree: "lifecomm", level: 1, deps: [{ id: "life_nav_base", type: "direct" }], desc: { what: "Эффект Саньяка", appearance: "Треугольные резонаторы", gives: "Точность без дрейфа" } },
  { id: "life_nav_star", name: "Звездная навигация", tree: "lifecomm", level: 2, deps: [{ id: "life_nav_gyro", type: "direct" }], desc: { what: "Каталог звезд", appearance: "Телескоп", gives: "Абсолютное позиционирование" } },
  { id: "life_nav_gps", name: "Глобальная спутниковая система", tree: "lifecomm", level: 3, deps: [{ id: "life_nav_star", type: "direct" }], desc: { what: "Триангуляция", appearance: "Созвездие спутников", gives: "Точность до метра" } },
  { id: "life_nav_inertial", name: "Продвинутая инерциальная", tree: "lifecomm", level: 4, deps: [{ id: "life_nav_gps", type: "direct" }], desc: { what: "Коррекция ускорений", appearance: "Микроэлектромеханика", gives: "Надежность в глубоком космосе" } },
  { id: "life_nav_quantum", name: "Квантовая навигация", tree: "lifecomm", level: 5, deps: [{ id: "life_nav_inertial", type: "direct" }], desc: { what: "Атомные интерферометры", appearance: "Холодные атомы", gives: "Сверхточность" } },
  // Поддерево gravity
  { id: "life_grav_base", name: "Искусственная гравитация", tree: "lifecomm", level: 0, deps: [], desc: { what: "Вращающиеся отсеки", appearance: "Колесо", gives: "Центробежная сила" } },
  { id: "life_grav_plate", name: "Гравитационные плиты", tree: "lifecomm", level: 1, deps: [{ id: "life_grav_base", type: "direct" }], desc: { what: "Псевдогравитация через ускорение", appearance: "Платформы", gives: "Локальное притяжение" } },
  { id: "life_grav_rotating", name: "Сегментное вращение", tree: "lifecomm", level: 2, deps: [{ id: "life_grav_plate", type: "direct" }], desc: { what: "Раздельные вращающиеся модули", appearance: "Стыковочные узлы", gives: "Гибкость станции" } },
  { id: "life_grav_magnetic", name: "Магнитная гравитация", tree: "lifecomm", level: 3, deps: [{ id: "life_grav_rotating", type: "direct" }], desc: { what: "Феррожидкости под ногами", appearance: "Черные полы", gives: "Притяжение для обуви" } },
  { id: "life_grav_field", name: "Полевая гравитация", tree: "lifecomm", level: 4, deps: [{ id: "life_grav_magnetic", type: "direct" }], desc: { what: "Эффект Брайдена", appearance: "Конденсаторы с высоким напряжением", gives: "Истинное g" } },
  { id: "life_grav_singularity", name: "Микрогравитационная сингулярность", tree: "lifecomm", level: 5, deps: [{ id: "life_grav_field", type: "direct" }], desc: { what: "Микроскопическая черная дыра", appearance: "Сфера Хокинга", gives: "Гравитация по желанию" } },
  { id: "life_grav_control", name: "Управление гравитацией", tree: "lifecomm", level: 5, deps: [{ id: "life_grav_singularity", type: "direct" }], desc: { what: "Векторная регулировка", appearance: "Пулы", gives: "Антигравитация" } },
  { id: "life_grav_inverter", name: "Инвертор гравитации", tree: "lifecomm", level: 4, deps: [{ id: "life_grav_field", type: "direct" }], desc: { what: "Отталкивание", appearance: "Синие пластины", gives: "Левитация" } },
  { id: "life_grav_compensator", name: "Компенсатор перегрузок", tree: "lifecomm", level: 5, deps: [{ id: "life_grav_inverter", type: "direct" }], desc: { what: "Гашение ускорений", appearance: "Громоздкие кресла", gives: "Защита от g-сил" } }
];