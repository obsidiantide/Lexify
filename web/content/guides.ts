/**
 * Public IELTS guides for search traffic: /[locale]/guides/[slug].
 * Each guide is written per language rather than machine-translated.
 */
import type { Locale } from "@/lib/i18n/config";

type GuideText = { title: string; description: string; body: string };

export type Guide = {
  slug: string;
  /** ISO date of the last meaningful edit, shown on the page and in structured data. */
  updated: string;
  minutes: number;
  text: Record<Locale, GuideText>;
};

export const guides: Guide[] = [
  {
    slug: "ielts-band-score-calculation",
    updated: "2026-10-27",
    minutes: 5,
    text: {
      en: {
        title: "How the IELTS band score is calculated",
        description: "How Listening and Reading raw scores become bands, how Writing and Speaking are marked, and how the overall band is rounded.",
        body: `## Four bands and one overall score

You get a band from 0 to 9 for each of the four skills: Listening, Reading, Writing and Speaking. Each can be a whole or half band, such as 6.0 or 6.5. Your **overall band** is the average of the four.

## Listening and Reading: from raw score to band

Listening and Reading each have **40 questions**, one mark each. Your raw score out of 40 is converted to a band with a table. The exact table changes slightly between test versions, but these are typical values:

| Band | Listening (of 40) | Academic Reading (of 40) |
| --- | --- | --- |
| 8.0 | about 35 | about 35 |
| 7.0 | about 30 | about 30 |
| 6.5 | about 27 | about 27 |
| 6.0 | about 23 | about 23 |
| 5.5 | about 18 | about 19 |

Spelling and grammar count: an answer with a spelling mistake gets no mark.

## Writing and Speaking: four criteria each

Examiners mark Writing and Speaking with public **band descriptors**. Each has four criteria with equal weight:

- **Writing:** Task Achievement or Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy. Task 2 counts twice as much as Task 1.
- **Speaking:** Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.

## How the overall band is rounded

Add the four bands and divide by four. Then round to the **nearest half band**:

- an average ending in **.25** rounds **up** to .5 (6.25 becomes 6.5);
- an average ending in **.75** rounds **up** to the next whole band (6.75 becomes 7.0);
- anything below .25 rounds down (6.125 becomes 6.0).

**Example:** Listening 7.0, Reading 6.5, Writing 6.0, Speaking 6.5. The total is 26, the average is 6.5, so the overall band is **6.5**.

## What this means for your preparation

Because of rounding, half a band in your weakest skill can lift the whole result. If your target is 6.5 and you have 7.0, 7.0, 6.0 and 5.5, raising Speaking to 6.0 is enough. Find out which skill is holding you back before you plan your study time.`,
      },
      ru: {
        title: "Как считается балл IELTS",
        description: "Как сырые баллы Listening и Reading переводятся в band, как оценивают Writing и Speaking и как округляется общий балл.",
        body: `## Четыре оценки и один общий балл

За каждый из четырёх навыков (Listening, Reading, Writing, Speaking) вы получаете оценку по шкале от 0 до 9. Оценка может быть целой или половинной, например 6.0 или 6.5. **Общий балл** (overall band) — это среднее из четырёх.

## Listening и Reading: от сырого балла к band

В Listening и Reading по **40 вопросов**, за каждый правильный ответ один балл. Количество правильных ответов переводится в band по таблице. Таблица немного отличается от версии к версии теста, но ориентиры такие:

| Band | Listening (из 40) | Academic Reading (из 40) |
| --- | --- | --- |
| 8.0 | около 35 | около 35 |
| 7.0 | около 30 | около 30 |
| 6.5 | около 27 | около 27 |
| 6.0 | около 23 | около 23 |
| 5.5 | около 18 | около 19 |

Орфография важна: ответ с ошибкой в написании не засчитывается.

## Writing и Speaking: по четыре критерия

Экзаменаторы оценивают Writing и Speaking по открытым **band descriptors**. У каждого навыка четыре равноценных критерия:

- **Writing:** Task Achievement или Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy. Task 2 весит вдвое больше, чем Task 1.
- **Speaking:** Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.

## Как округляется общий балл

Сложите четыре оценки и разделите на четыре. Результат округляется **до ближайшей половины**:

- среднее с **.25** округляется **вверх** до .5 (6.25 → 6.5);
- среднее с **.75** округляется **вверх** до целого (6.75 → 7.0);
- всё, что меньше .25, округляется вниз (6.125 → 6.0).

**Пример:** Listening 7.0, Reading 6.5, Writing 6.0, Speaking 6.5. Сумма 26, среднее 6.5, общий балл **6.5**.

## Что это значит для подготовки

Из-за округления половина балла в самом слабом навыке может поднять весь результат. Если вам нужно 6.5, а у вас 7.0, 7.0, 6.0 и 5.5, достаточно поднять Speaking до 6.0. Поэтому прежде чем распределять время на подготовку, узнайте, какой навык вас тянет вниз.`,
      },
      az: {
        title: "IELTS balı necə hesablanır",
        description: "Listening və Reading üzrə xam balın band-a çevrilməsi, Writing və Speaking-in qiymətləndirilməsi və ümumi balın yuvarlaqlaşdırılması.",
        body: `## Dörd qiymət və bir ümumi bal

Dörd bacarığın hər biri (Listening, Reading, Writing, Speaking) üçün 0-dan 9-a qədər şkala üzrə qiymət alırsınız. Qiymət tam və ya yarım ola bilər, məsələn 6.0 və ya 6.5. **Ümumi bal** (overall band) dörd qiymətin ortalamasıdır.

## Listening və Reading: xam baldan band-a

Listening və Reading-də **40 sual** var, hər düzgün cavab bir baldır. Düzgün cavabların sayı cədvəl üzrə band-a çevrilir. Cədvəl test versiyasından asılı olaraq bir az dəyişir, amma təxmini dəyərlər belədir:

| Band | Listening (40-dan) | Academic Reading (40-dan) |
| --- | --- | --- |
| 8.0 | təxminən 35 | təxminən 35 |
| 7.0 | təxminən 30 | təxminən 30 |
| 6.5 | təxminən 27 | təxminən 27 |
| 6.0 | təxminən 23 | təxminən 23 |
| 5.5 | təxminən 18 | təxminən 19 |

Orfoqrafiya vacibdir: yazılışında səhv olan cavab qəbul edilmir.

## Writing və Speaking: hər birində dörd meyar

İmtahançılar Writing və Speaking-i açıq **band descriptors** əsasında qiymətləndirir. Hər bacarığın bərabər çəkili dörd meyarı var:

- **Writing:** Task Achievement və ya Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy. Task 2 Task 1-dən iki dəfə çox dəyərləndirilir.
- **Speaking:** Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.

## Ümumi bal necə yuvarlaqlaşdırılır

Dörd qiyməti toplayıb dördə bölün. Nəticə **ən yaxın yarım bala** yuvarlaqlaşdırılır:

- ortalama **.25** ilə bitirsə, **yuxarı** .5-ə yuvarlaqlaşdırılır (6.25 → 6.5);
- ortalama **.75** ilə bitirsə, **yuxarı** növbəti tam bala yuvarlaqlaşdırılır (6.75 → 7.0);
- .25-dən aşağı olan hər şey aşağı yuvarlaqlaşdırılır (6.125 → 6.0).

**Nümunə:** Listening 7.0, Reading 6.5, Writing 6.0, Speaking 6.5. Cəm 26, ortalama 6.5, ümumi bal **6.5**.

## Bu, hazırlıq üçün nə deməkdir

Yuvarlaqlaşdırma səbəbindən ən zəif bacarıqda yarım bal bütün nəticəni qaldıra bilər. Hədəfiniz 6.5-dirsə və nəticələriniz 7.0, 7.0, 6.0 və 5.5-dirsə, Speaking-i 6.0-a qaldırmaq kifayətdir. Ona görə də hazırlıq vaxtını bölüşdürməzdən əvvəl hansı bacarığın sizi geri saxladığını öyrənin.`,
      },
    },
  },
  {
    slug: "ielts-academic-vs-general-training",
    updated: "2026-10-27",
    minutes: 4,
    text: {
      en: {
        title: "IELTS Academic or General Training: which one do you need?",
        description: "What is different between the two IELTS tests, what is the same, and how to choose the right one for study, work or migration.",
        body: `## The short answer

- **Academic** is for studying at university (bachelor's or master's) and for some professional registrations, such as doctors and nurses.
- **General Training** is mostly for migration (for example to Canada, Australia or the UK), work experience and secondary education abroad.

Always check the exact requirement on the website of your university, employer or immigration authority. Taking the wrong test means paying for a second one.

## What is the same

**Listening** and **Speaking** are identical in both tests: same recordings, same questions, same marking. If you prepare for one, you are prepared for the other.

## What is different

**Reading.** Academic Reading has three long texts from books, journals and magazines, written for a general audience but academic in style. General Training Reading uses shorter everyday texts first (notices, adverts, workplace documents) and one longer text at the end.

**Writing.** Both have two tasks and 60 minutes.

| | Academic | General Training |
| --- | --- | --- |
| Task 1 | Describe a chart, table, map or process (150 words) | Write a letter: formal, semi-formal or informal (150 words) |
| Task 2 | Essay (250 words) | Essay (250 words), usually on more everyday topics |

## Is one easier?

Neither test is easy, but they are scored differently. In General Training Reading you need **more correct answers** for the same band, because the texts are easier. For example, around 30 correct answers give about band 7.0 in Academic Reading but only about 6.0 in General Training.

## How Lexify helps

Lexify prepares you for **IELTS Academic**. The free diagnostic gives you an estimated band for each skill, so you can see how far you are from your target before you book the test.`,
      },
      ru: {
        title: "IELTS Academic или General Training: какой нужен вам",
        description: "Чем отличаются два варианта IELTS, что у них общего и как выбрать нужный для учёбы, работы или переезда.",
        body: `## Коротко

- **Academic** нужен для учёбы в университете (бакалавриат или магистратура) и для некоторых профессиональных регистраций, например для врачей и медсестёр.
- **General Training** чаще всего нужен для иммиграции (например, в Канаду, Австралию или Великобританию), работы и учёбы в школе за рубежом.

Всегда проверяйте точное требование на сайте университета, работодателя или миграционной службы. Сдать не тот тест значит платить за второй.

## Что одинаково

**Listening** и **Speaking** в обоих вариантах полностью одинаковые: те же записи, те же вопросы, та же оценка. Готовясь к одному, вы готовитесь и к другому.

## Что отличается

**Reading.** В Academic три длинных текста из книг, журналов и газет, написанных для широкой аудитории, но в академическом стиле. В General Training сначала идут короткие бытовые тексты (объявления, реклама, рабочие документы), а в конце один длинный текст.

**Writing.** В обоих вариантах две части и 60 минут.

| | Academic | General Training |
| --- | --- | --- |
| Task 1 | Описать график, таблицу, карту или процесс (150 слов) | Написать письмо: официальное, полуофициальное или личное (150 слов) |
| Task 2 | Эссе (250 слов) | Эссе (250 слов), обычно на более бытовые темы |

## Какой проще?

Лёгкого нет, но оцениваются они по-разному. В General Training Reading для того же балла нужно **больше правильных ответов**, потому что тексты проще. Например, около 30 правильных ответов дают примерно 7.0 в Academic Reading, но только около 6.0 в General Training.

## Как поможет Lexify

Lexify готовит к **IELTS Academic**. Бесплатная диагностика показывает примерный балл по каждому навыку, и вы видите, сколько осталось до цели, ещё до записи на экзамен.`,
      },
      az: {
        title: "IELTS Academic, yoxsa General Training: sizə hansı lazımdır",
        description: "İki IELTS variantı arasındakı fərqlər, ortaq cəhətlər və təhsil, iş və ya köç üçün düzgün variantı necə seçmək.",
        body: `## Qısaca

- **Academic** universitetdə təhsil (bakalavr və ya magistratura) və bəzi peşə qeydiyyatları, məsələn həkimlər və tibb bacıları üçün lazımdır.
- **General Training** əsasən köç (məsələn Kanada, Avstraliya və ya Böyük Britaniyaya), iş və xaricdə orta təhsil üçün tələb olunur.

Dəqiq tələbi həmişə universitetin, işəgötürənin və ya miqrasiya xidmətinin saytında yoxlayın. Səhv testi vermək ikinci test üçün yenidən ödəmək deməkdir.

## Nə eynidir

**Listening** və **Speaking** hər iki variantda tamamilə eynidir: eyni səs yazıları, eyni suallar, eyni qiymətləndirmə. Birinə hazırlaşırsınızsa, digərinə də hazırsınız.

## Nə fərqlidir

**Reading.** Academic-də kitablardan, jurnallardan və qəzetlərdən götürülmüş üç uzun mətn var; onlar geniş auditoriya üçün, amma akademik üslubda yazılıb. General Training-də əvvəlcə qısa gündəlik mətnlər (elanlar, reklamlar, iş sənədləri), sonda isə bir uzun mətn gəlir.

**Writing.** Hər iki variantda iki tapşırıq və 60 dəqiqə var.

| | Academic | General Training |
| --- | --- | --- |
| Task 1 | Qrafik, cədvəl, xəritə və ya prosesi təsvir etmək (150 söz) | Məktub yazmaq: rəsmi, yarımrəsmi və ya şəxsi (150 söz) |
| Task 2 | Esse (250 söz) | Esse (250 söz), adətən daha gündəlik mövzularda |

## Hansı daha asandır?

Asanı yoxdur, amma onlar fərqli qiymətləndirilir. General Training Reading-də eyni bal üçün **daha çox düzgün cavab** lazımdır, çünki mətnlər daha sadədir. Məsələn, təxminən 30 düzgün cavab Academic Reading-də 7.0 civarında, General Training-də isə cəmi 6.0 civarında bal verir.

## Lexify necə kömək edir

Lexify **IELTS Academic**-ə hazırlayır. Pulsuz diaqnostika hər bacarıq üzrə təxmini balı göstərir və imtahana yazılmazdan əvvəl hədəfə nə qədər qaldığını görürsünüz.`,
      },
    },
  },
  {
    slug: "ielts-self-study-8-week-plan",
    updated: "2026-10-27",
    minutes: 6,
    text: {
      en: {
        title: "An 8-week IELTS self-study plan",
        description: "A week-by-week plan to prepare for IELTS Academic on your own, with about one hour of study a day.",
        body: `## Before you start: know your level

Eight weeks is enough to gain about half a band to one band if you study around **an hour a day**. More than that is unrealistic for most people, whatever an advert promises. Start with a diagnostic test so you know your band in each skill and which one is weakest.

## Weeks 1–2: learn the test

- Learn the format of every section: number of questions, timing, question types.
- Do one practice set per skill **without a time limit** and analyse every mistake.
- Start a vocabulary notebook: 10 new words a day, each with an example sentence.

## Weeks 3–4: work on question types

- Reading: one passage a day, focusing on one question type (True/False/Not Given, headings, multiple choice).
- Listening: one section a day, then listen again with the transcript.
- Writing: learn the four-paragraph Task 2 structure and write **two essays a week**.
- Speaking: answer three Part 1 questions out loud every day and record yourself.

## Weeks 5–6: add time pressure

- Do Reading and Listening sections **with the real time limits**.
- Write one Task 1 and one Task 2 essay a week in exam time (20 and 40 minutes).
- Practise Part 2: one minute to prepare, two minutes to speak, every other day.
- Get feedback on your writing and speaking. Without feedback, you repeat the same mistakes.

## Weeks 7–8: full mock tests

- Take **one full mock test a week** in exam conditions, in one sitting.
- Spend the next days on the weakest areas the mock shows.
- In the last three days, don't learn anything new: review your mistakes and your vocabulary notebook, and sleep well.

## Common mistakes

- Only doing what you already like. Spend most of your time on your weakest skill.
- Memorising essays and speaking answers. Examiners notice, and it lowers your score.
- Doing practice tests without analysing mistakes. The analysis is where you improve.`,
      },
      ru: {
        title: "План самостоятельной подготовки к IELTS на 8 недель",
        description: "Понедельный план подготовки к IELTS Academic самостоятельно, примерно по часу в день.",
        body: `## Прежде чем начать: узнайте свой уровень

За восемь недель при занятиях **около часа в день** реально вырасти примерно на половину или целый балл. Больше для большинства людей нереально, что бы ни обещала реклама. Начните с диагностики, чтобы знать свой балл по каждому навыку и какой из них слабее всего.

## Недели 1–2: изучите формат

- Разберите формат каждой части: число вопросов, время, типы заданий.
- Сделайте по одному заданию на каждый навык **без ограничения времени** и разберите каждую ошибку.
- Заведите словарик: 10 новых слов в день, у каждого пример в предложении.

## Недели 3–4: типы заданий

- Reading: один текст в день с упором на один тип вопросов (True/False/Not Given, заголовки, multiple choice).
- Listening: одна секция в день, потом повторное прослушивание с транскриптом.
- Writing: освойте структуру Task 2 из четырёх абзацев и пишите **по два эссе в неделю**.
- Speaking: каждый день отвечайте вслух на три вопроса Part 1 и записывайте себя.

## Недели 5–6: добавьте время

- Делайте Reading и Listening **с реальными ограничениями по времени**.
- Пишите по одному Task 1 и Task 2 в неделю за экзаменационное время (20 и 40 минут).
- Тренируйте Part 2 через день: минута на подготовку, две минуты на ответ.
- Получайте обратную связь по Writing и Speaking. Без неё вы повторяете одни и те же ошибки.

## Недели 7–8: полные пробные тесты

- Раз в неделю проходите **полный пробный тест** в условиях экзамена, за один раз.
- Следующие дни посвящайте слабым местам, которые показал тест.
- За три дня до экзамена ничего нового не учите: повторите ошибки и словарик, хорошо высыпайтесь.

## Частые ошибки

- Заниматься только тем, что нравится. Больше всего времени уделяйте самому слабому навыку.
- Заучивать эссе и ответы для Speaking. Экзаменаторы это замечают, и балл снижается.
- Решать тесты без разбора ошибок. Именно разбор даёт рост.`,
      },
      az: {
        title: "IELTS-ə 8 həftəlik müstəqil hazırlıq planı",
        description: "Gündə təxminən bir saat məşğul olmaqla IELTS Academic-ə müstəqil hazırlıq üçün həftəbəhəftə plan.",
        body: `## Başlamazdan əvvəl: səviyyənizi öyrənin

Səkkiz həftədə **gündə təxminən bir saat** məşğul olsanız, nəticəni yarım və ya bir bal artırmaq realdır. Reklam nə vəd etsə də, çox insan üçün bundan artığı real deyil. Hər bacarıq üzrə balınızı və ən zəif bacarığınızı bilmək üçün diaqnostika ilə başlayın.

## 1–2-ci həftələr: formatı öyrənin

- Hər bölmənin formatını öyrənin: sualların sayı, vaxt, tapşırıq növləri.
- Hər bacarıq üzrə bir tapşırığı **vaxt məhdudiyyəti olmadan** edin və hər səhvi təhlil edin.
- Lüğət dəftəri açın: gündə 10 yeni söz, hər biri cümlə nümunəsi ilə.

## 3–4-cü həftələr: tapşırıq növləri

- Reading: gündə bir mətn, bir sual növünə fokuslanaraq (True/False/Not Given, başlıqlar, multiple choice).
- Listening: gündə bir bölmə, sonra transkriptlə yenidən dinləmə.
- Writing: dörd abzaslı Task 2 strukturunu mənimsəyin və **həftədə iki esse** yazın.
- Speaking: hər gün Part 1-in üç sualına səsli cavab verin və özünüzü yazın.

## 5–6-cı həftələr: vaxt təzyiqi əlavə edin

- Reading və Listening-i **real vaxt məhdudiyyəti ilə** edin.
- Həftədə bir Task 1 və bir Task 2-ni imtahan vaxtında (20 və 40 dəqiqə) yazın.
- Part 2-ni gündəaşırı məşq edin: bir dəqiqə hazırlıq, iki dəqiqə cavab.
- Writing və Speaking üzrə rəy alın. Rəy olmadan eyni səhvləri təkrarlayırsınız.

## 7–8-ci həftələr: tam sınaq testləri

- Həftədə bir dəfə imtahan şəraitində, bir oturuşda **tam sınaq testi** verin.
- Sonrakı günləri testin göstərdiyi zəif yerlərə həsr edin.
- İmtahandan əvvəlki son üç gündə yeni heç nə öyrənməyin: səhvlərinizi və lüğət dəftərinizi təkrarlayın, yaxşı yatın.

## Tez-tez edilən səhvlər

- Yalnız xoşunuza gələn işlərlə məşğul olmaq. Vaxtın çoxunu ən zəif bacarığa ayırın.
- Esse və Speaking cavablarını əzbərləmək. İmtahançılar bunu hiss edir və bal aşağı düşür.
- Səhvləri təhlil etmədən test həll etmək. İrəliləyiş məhz təhlildən gəlir.`,
      },
    },
  },
  {
    slug: "ielts-writing-task-1-academic",
    updated: "2026-10-28",
    minutes: 6,
    text: {
      en: {
        title: "IELTS Writing Task 1 Academic: how to describe a chart",
        description: "A four-paragraph structure for charts, tables, maps and processes, what the overview is, and the mistakes that keep Task 1 below band 7.",
        body: `## What the task asks

You get a chart, table, map or process diagram and **20 minutes** to describe it in at least **150 words**. You report what the data shows. You do not explain why it happens and you do not give your opinion.

Task 1 counts for one third of your Writing band, so a weak Task 1 pulls down a good essay.

## A structure that works for every type

1. **Introduction.** One sentence that paraphrases the task: what is shown, where and when. Change the words, not the meaning.
2. **Overview.** Two or three sentences with the main trends or the biggest differences, without numbers. This is the paragraph examiners look for first.
3. **Detail paragraph 1.** One group of related data with figures.
4. **Detail paragraph 2.** The other group, with comparisons.

Aim for 170–190 words. More words do not raise your band, and they cost time you need for Task 2.

## The overview decides your band

Without a clear overview, Task Achievement is usually limited to **band 5**. A good overview answers: what went up, what went down, what was the largest, what changed the most?

> Overall, car use rose steadily over the period, while bus travel fell. Cars remained by far the most common way to commute.

No numbers here: they belong in the detail paragraphs.

## How to group the data

Do not describe every bar or line one by one. Group items that behave the same way:

- **Line graphs:** rising lines together, falling lines together.
- **Bar charts and tables:** the largest and smallest values, or the categories that are similar.
- **Maps:** what was added, what was removed, what stayed.
- **Processes:** the stages in order, from the first to the last, with sequencers such as *first*, *after that*, *finally*.

## Language for trends and comparisons

| Purpose | Examples |
| --- | --- |
| Increase | rose, grew, climbed; a rise, an increase |
| Decrease | fell, dropped, declined; a fall, a decline |
| Size of change | slightly, gradually, steadily, sharply, dramatically |
| Comparison | twice as many as, slightly higher than, the lowest figure |
| Approximation | just over, nearly, around, roughly |

Vary your structures: *Sales rose sharply* and *There was a sharp rise in sales* say the same thing in two ways.

## Common mistakes

- No overview, or an overview full of numbers.
- Giving reasons or opinions (*because people prefer cars*).
- Copying the task sentence word for word.
- Listing every number without comparing anything.
- Wrong tense: a chart about 1990–2010 needs the past tense; a projection to 2040 needs *is expected to*, *will*.

## Practise with feedback

In Lexify every Task 1 you write gets an estimated band and a comment for each of the four criteria, so you know exactly what to fix.`,
      },
      ru: {
        title: "IELTS Writing Task 1 Academic: как описать график",
        description: "Структура из четырёх абзацев для графиков, таблиц, карт и процессов, что такое overview и какие ошибки не дают подняться выше 7.0.",
        body: `## Что требуется

Вы получаете график, таблицу, карту или схему процесса и **20 минут**, чтобы описать их минимум в **150 словах**. Нужно рассказать, что показывают данные. Объяснять причины и высказывать мнение не нужно.

Task 1 даёт треть балла за Writing, поэтому слабый Task 1 тянет вниз даже хорошее эссе.

## Структура, которая подходит для любого типа

1. **Введение.** Одно предложение, перефразирующее задание: что показано, где и когда. Меняйте слова, а не смысл.
2. **Overview (общий обзор).** Два-три предложения о главных тенденциях или самых больших различиях, без цифр. Этот абзац экзаменатор ищет первым.
3. **Детали, абзац 1.** Одна группа связанных данных с цифрами.
4. **Детали, абзац 2.** Другая группа, со сравнениями.

Ориентируйтесь на 170–190 слов. Больше слов не повышает балл, а время отнимает у Task 2.

## Overview решает балл

Без чёткого обзора критерий Task Achievement обычно ограничен **баллом 5**. Хороший обзор отвечает на вопросы: что выросло, что упало, что было самым большим, что изменилось сильнее всего?

> Overall, car use rose steadily over the period, while bus travel fell. Cars remained by far the most common way to commute.

Цифр здесь нет: они нужны в абзацах с деталями.

## Как группировать данные

Не описывайте каждый столбик или линию по очереди. Объединяйте то, что ведёт себя одинаково:

- **Линейные графики:** растущие линии вместе, падающие вместе.
- **Столбчатые диаграммы и таблицы:** самые большие и самые маленькие значения или похожие категории.
- **Карты:** что появилось, что исчезло, что осталось.
- **Процессы:** этапы по порядку, от первого до последнего, со словами *first*, *after that*, *finally*.

## Лексика для тенденций и сравнений

| Задача | Примеры |
| --- | --- |
| Рост | rose, grew, climbed; a rise, an increase |
| Снижение | fell, dropped, declined; a fall, a decline |
| Сила изменения | slightly, gradually, steadily, sharply, dramatically |
| Сравнение | twice as many as, slightly higher than, the lowest figure |
| Приблизительность | just over, nearly, around, roughly |

Меняйте конструкции: *Sales rose sharply* и *There was a sharp rise in sales* говорят одно и то же двумя способами.

## Частые ошибки

- Нет обзора, или в обзоре одни цифры.
- Причины и мнения (*because people prefer cars*).
- Задание переписано слово в слово.
- Перечисление всех цифр без сравнений.
- Не то время: график за 1990–2010 требует прошедшего времени, прогноз до 2040 требует *is expected to*, *will*.

## Тренируйтесь с обратной связью

В Lexify каждый Task 1 получает примерный балл и комментарий по каждому из четырёх критериев, так что вы точно знаете, что исправить.`,
      },
      az: {
        title: "IELTS Writing Task 1 Academic: qrafiki necə təsvir etmək",
        description: "Qrafik, cədvəl, xəritə və proseslər üçün dörd abzaslı struktur, overview nədir və 7.0-dan yuxarı qalxmağa mane olan səhvlər.",
        body: `## Tapşırıq nə tələb edir

Sizə qrafik, cədvəl, xəritə və ya proses sxemi verilir və onu ən azı **150 sözlə** təsvir etmək üçün **20 dəqiqə** vaxtınız olur. Məlumatların nə göstərdiyini yazırsınız. Səbəbləri izah etmək və fikir bildirmək lazım deyil.

Task 1 Writing balının üçdə birini təşkil edir, ona görə zəif Task 1 yaxşı esseni də aşağı çəkir.

## Hər növ üçün uyğun struktur

1. **Giriş.** Tapşırığı başqa sözlərlə ifadə edən bir cümlə: nə göstərilib, harada və nə vaxt. Mənanı yox, sözləri dəyişin.
2. **Overview (ümumi icmal).** Əsas meylləri və ya ən böyük fərqləri göstərən iki-üç cümlə, rəqəmsiz. İmtahançı ilk olaraq bu abzası axtarır.
3. **Təfərrüat, 1-ci abzas.** Rəqəmlərlə bir qrup əlaqəli məlumat.
4. **Təfərrüat, 2-ci abzas.** Digər qrup, müqayisələrlə.

170–190 söz hədəfləyin. Daha çox söz balı artırmır, amma Task 2 üçün lazım olan vaxtı alır.

## Balı overview həll edir

Aydın icmal olmadan Task Achievement meyarı adətən **5 balla** məhdudlaşır. Yaxşı icmal bu suallara cavab verir: nə artdı, nə azaldı, ən böyük nə idi, ən çox nə dəyişdi?

> Overall, car use rose steadily over the period, while bus travel fell. Cars remained by far the most common way to commute.

Burada rəqəm yoxdur: rəqəmlər təfərrüat abzaslarında olmalıdır.

## Məlumatları necə qruplaşdırmaq

Hər sütunu və ya xətti bir-bir təsvir etməyin. Eyni cür dəyişənləri birləşdirin:

- **Xətti qrafiklər:** artan xətlər bir yerdə, azalanlar bir yerdə.
- **Sütunlu diaqramlar və cədvəllər:** ən böyük və ən kiçik dəyərlər və ya oxşar kateqoriyalar.
- **Xəritələr:** nə əlavə olundu, nə yox oldu, nə qaldı.
- **Proseslər:** mərhələlər ardıcıllıqla, birincidən sonuncuya, *first*, *after that*, *finally* kimi sözlərlə.

## Meyllər və müqayisə üçün ifadələr

| Məqsəd | Nümunələr |
| --- | --- |
| Artım | rose, grew, climbed; a rise, an increase |
| Azalma | fell, dropped, declined; a fall, a decline |
| Dəyişmənin gücü | slightly, gradually, steadily, sharply, dramatically |
| Müqayisə | twice as many as, slightly higher than, the lowest figure |
| Təxminilik | just over, nearly, around, roughly |

Strukturları dəyişin: *Sales rose sharply* və *There was a sharp rise in sales* eyni fikri iki üsulla deyir.

## Tez-tez edilən səhvlər

- İcmal yoxdur və ya icmal rəqəmlərlə doludur.
- Səbəb və fikir yazmaq (*because people prefer cars*).
- Tapşırıq cümləsini olduğu kimi köçürmək.
- Heç nəyi müqayisə etmədən bütün rəqəmləri sadalamaq.
- Səhv zaman: 1990–2010 illərinə aid qrafik keçmiş zaman, 2040-a qədər proqnoz isə *is expected to*, *will* tələb edir.

## Rəylə məşq edin

Lexify-da yazdığınız hər Task 1 dörd meyarın hər biri üzrə təxmini bal və şərh alır, beləliklə nəyi düzəltmək lazım olduğunu dəqiq bilirsiniz.`,
      },
    },
  },
  {
    slug: "ielts-speaking-part-2-cue-card",
    updated: "2026-10-28",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Speaking Part 2: how to talk for two minutes",
        description: "How to use the one minute of preparation, a simple plan for any cue card, and what to do when you run out of ideas.",
        body: `## How Part 2 works

The examiner gives you a **cue card** with a topic and three or four prompts, a pencil and paper. You have **one minute to prepare** and then speak for **one to two minutes** without interruption. The examiner stops you at two minutes and may ask one or two short follow-up questions.

Aim to speak until the examiner stops you. Finishing after 40 seconds is the most common reason for a low Fluency score in Part 2.

## Use the minute well

Do not write sentences. Write **keywords** in four lines, one for each prompt plus one for your feelings:

- *who / what*: my grandfather, retired engineer
- *when / where*: summers in Quba, his workshop
- *what happened*: taught me to fix a bicycle
- *why it matters*: patience, first time I felt useful

Six to ten words are enough. You will look at them while you speak, so make them large and clear.

## A plan for any card

1. **Open in one sentence:** say what you are going to talk about.
2. **Answer each prompt** in the order on the card, two or three sentences each, with one concrete detail (a name, a place, a moment).
3. **Tell a short story:** one specific event is easier to talk about for a long time than general facts.
4. **Finish with feelings:** why it was important, how you feel about it now. This last prompt is where you can keep talking if you have time left.

## When you run out of ideas

- Add a **comparison**: *It was very different from the school I go to now…*
- Add a **sense detail**: what you saw, heard, smelled.
- Talk about **before and after**: *Before that summer I… After it I…*
- If the topic is unfamiliar, it is fine to **change it slightly**: a "book you read recently" can be one you read last year. The examiner marks your English, not the truth of the story.

## What examiners listen for

The four criteria are the same as in the rest of the test: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** and **Pronunciation**. In Part 2 they pay special attention to whether you can organise a long answer and link ideas with words such as *at first*, *after a while*, *the reason was*, *looking back*.

## Common mistakes

- Memorised answers: examiners recognise them, and the score drops.
- Stopping at one minute and waiting.
- Reading the prompts back word for word.
- Only general statements with no story or example.

## Practise with feedback

Lexify gives you real cue cards with a one-minute timer and the full two minutes to speak, then an estimated band and comments on each criterion.`,
      },
      ru: {
        title: "IELTS Speaking Part 2: как говорить две минуты",
        description: "Как использовать минуту на подготовку, простой план для любой карточки и что делать, когда кончились идеи.",
        body: `## Как устроена Part 2

Экзаменатор даёт **карточку** с темой и тремя-четырьмя пунктами, карандаш и бумагу. У вас **одна минута на подготовку**, потом вы говорите **от одной до двух минут** без перерыва. Через две минуты экзаменатор вас остановит и может задать один-два коротких вопроса.

Говорите, пока вас не остановят. Закончить через 40 секунд — самая частая причина низкого балла за Fluency в Part 2.

## Используйте минуту правильно

Не пишите предложения. Запишите **ключевые слова** в четыре строки, по одной на пункт карточки и одну про ваши чувства:

- *who / what*: my grandfather, retired engineer
- *when / where*: summers in Quba, his workshop
- *what happened*: taught me to fix a bicycle
- *why it matters*: patience, first time I felt useful

Шести-десяти слов достаточно. Вы будете смотреть на них во время ответа, поэтому пишите крупно и разборчиво.

## План для любой карточки

1. **Начните одним предложением:** скажите, о чём будете говорить.
2. **Ответьте на каждый пункт** в том порядке, как на карточке, по два-три предложения с одной конкретной деталью (имя, место, момент).
3. **Расскажите короткую историю:** об одном конкретном событии говорить долго легче, чем об общих фактах.
4. **Закончите чувствами:** почему это было важно, что вы думаете об этом сейчас. В этом пункте удобно продолжать, если время ещё осталось.

## Когда закончились идеи

- Добавьте **сравнение**: *It was very different from the school I go to now…*
- Добавьте **ощущения**: что вы видели, слышали, чувствовали.
- Расскажите **до и после**: *Before that summer I… After it I…*
- Если тема незнакомая, её можно **немного изменить**: «книга, которую вы недавно прочитали» может быть прочитана в прошлом году. Экзаменатор оценивает английский, а не правдивость истории.

## Что слушает экзаменатор

Четыре критерия те же, что во всём Speaking: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** и **Pronunciation**. В Part 2 особенно важно, умеете ли вы строить длинный ответ и связывать мысли словами *at first*, *after a while*, *the reason was*, *looking back*.

## Частые ошибки

- Заученные ответы: экзаменаторы их узнают, и балл падает.
- Остановиться через минуту и ждать.
- Пересказывать пункты карточки дословно.
- Только общие слова, без истории и примеров.

## Тренируйтесь с обратной связью

В Lexify есть настоящие карточки с таймером на минуту подготовки и полными двумя минутами на ответ, а после него примерный балл и комментарии по каждому критерию.`,
      },
      az: {
        title: "IELTS Speaking Part 2: iki dəqiqə necə danışmaq",
        description: "Hazırlıq üçün verilən bir dəqiqədən necə istifadə etmək, istənilən kart üçün sadə plan və fikirlər bitəndə nə etmək.",
        body: `## Part 2 necə keçir

İmtahançı sizə mövzu və üç-dörd bəndi olan **kart**, karandaş və kağız verir. **Hazırlıq üçün bir dəqiqəniz** var, sonra fasiləsiz **bir-iki dəqiqə** danışırsınız. İki dəqiqədən sonra imtahançı sizi dayandırır və bir-iki qısa sual verə bilər.

İmtahançı dayandırana qədər danışın. 40 saniyədən sonra susmaq Part 2-də Fluency balının aşağı olmasının ən geniş yayılmış səbəbidir.

## Dəqiqədən düzgün istifadə edin

Cümlə yazmayın. **Açar sözləri** dörd sətirdə yazın: kartın hər bəndi üçün bir sətir və hissləriniz üçün bir sətir:

- *who / what*: my grandfather, retired engineer
- *when / where*: summers in Quba, his workshop
- *what happened*: taught me to fix a bicycle
- *why it matters*: patience, first time I felt useful

Altı-on söz kifayətdir. Danışarkən onlara baxacaqsınız, ona görə iri və aydın yazın.

## İstənilən kart üçün plan

1. **Bir cümlə ilə başlayın:** nədən danışacağınızı deyin.
2. **Hər bəndə cavab verin** kartdakı ardıcıllıqla, hər birinə iki-üç cümlə və bir konkret təfərrüat (ad, yer, an).
3. **Qısa hekayə danışın:** bir konkret hadisə haqqında uzun danışmaq ümumi faktlardan daha asandır.
4. **Hisslərlə bitirin:** bu niyə vacib idi, indi bu barədə nə düşünürsünüz. Vaxt qalıbsa, bu bənddə danışmağa davam etmək rahatdır.

## Fikirlər bitəndə

- **Müqayisə** əlavə edin: *It was very different from the school I go to now…*
- **Hissləri** əlavə edin: nə gördünüz, nə eşitdiniz, nə hiss etdiniz.
- **Əvvəl və sonra** haqqında danışın: *Before that summer I… After it I…*
- Mövzu tanış deyilsə, onu **bir az dəyişmək** olar: "son oxuduğunuz kitab" keçən il oxunmuş kitab ola bilər. İmtahançı hekayənin doğruluğunu yox, ingilis dilinizi qiymətləndirir.

## İmtahançı nəyə qulaq asır

Meyarlar bütün Speaking-dəki kimidir: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** və **Pronunciation**. Part 2-də uzun cavabı qurmağı və fikirləri *at first*, *after a while*, *the reason was*, *looking back* kimi sözlərlə bağlamağı bacarıb-bacarmadığınız xüsusilə vacibdir.

## Tez-tez edilən səhvlər

- Əzbərlənmiş cavablar: imtahançılar onları tanıyır və bal aşağı düşür.
- Bir dəqiqədən sonra dayanıb gözləmək.
- Kartın bəndlərini sözbəsöz təkrarlamaq.
- Hekayə və nümunə olmadan yalnız ümumi sözlər.

## Rəylə məşq edin

Lexify-da hazırlıq üçün bir dəqiqəlik taymer və cavab üçün tam iki dəqiqə olan real kartlar var, cavabdan sonra isə təxmini bal və hər meyar üzrə şərhlər alırsınız.`,
      },
    },
  },
  {
    slug: "ielts-writing-task-2-essay-structure",
    updated: "2026-10-31",
    minutes: 6,
    text: {
      en: {
        title: "IELTS Writing Task 2: essay types and a structure that works",
        description: "The five common Task 2 question types, a four-paragraph plan for each, and how to spend your 40 minutes.",
        body: `## What Task 2 asks for

Task 2 is the same in Academic and General Training. You get a statement about a social topic and a question about it, and you write **at least 250 words** in about **40 minutes**. Task 2 counts for twice as much as Task 1, so start with it if you tend to run out of time.

Fewer than 250 words lowers your Task Response score. More than 300 rarely helps and leaves less time to check.

## Read the question twice

Most low scores in Task Response come from answering a different question. Underline the **topic** (for example, *working from home*) and the **instruction** (*do you agree or disagree?*). Your essay must answer every part of the instruction.

## Five common question types

1. **Opinion:** *To what extent do you agree or disagree?* Give a clear position in the introduction and keep it to the end.
2. **Discussion:** *Discuss both views and give your own opinion.* One paragraph for each view, and your opinion in the introduction and conclusion.
3. **Advantages and disadvantages:** *Do the advantages outweigh the disadvantages?* One paragraph for each side, then say which is stronger.
4. **Problem and solution:** *What problems does this cause? What can be done?* One paragraph for problems (or causes), one for solutions that match them.
5. **Two-part question:** *Why is this happening? Is it a positive or negative development?* One paragraph for each question.

## A four-paragraph plan

- **Introduction (2–3 sentences):** paraphrase the topic in your own words and state your answer to the question.
- **Body paragraph 1 (5–7 sentences):** one main idea, explained, with a specific example.
- **Body paragraph 2 (5–7 sentences):** a second main idea, explained, with an example.
- **Conclusion (2 sentences):** repeat your answer in new words. No new ideas.

Start each body paragraph with a **topic sentence** that tells the reader what the paragraph is about. Then explain *why* and give an example. One well-developed idea scores higher than three ideas listed in a sentence each.

## How to spend 40 minutes

- **5 minutes:** read the question, decide your answer, note two main ideas and an example for each.
- **30 minutes:** write.
- **5 minutes:** check verb forms, articles, plurals and spelling.

## How Task 2 is marked

Examiners use four criteria with equal weight: **Task Response**, **Coherence and Cohesion**, **Lexical Resource** and **Grammatical Range and Accuracy**. Linking words help coherence, but too many (*Moreover… Furthermore… In addition…*) in every sentence sound mechanical. Clear paragraphs and topic sentences matter more.

## Common mistakes

- Copying whole phrases from the question instead of paraphrasing.
- Giving no clear opinion when the question asks for one.
- Memorised introductions that could fit any topic.
- Examples that are too general (*many people think…*) instead of specific.
- A conclusion that adds a new argument.

## Practise with feedback

Lexify has real-style Task 2 questions with a 40-minute timer and a word counter. After you submit, you get an estimated band for each criterion and a list of errors with corrections.`,
      },
      ru: {
        title: "IELTS Writing Task 2: типы эссе и структура, которая работает",
        description: "Пять частых типов вопросов в Task 2, план из четырёх абзацев для каждого и как распределить 40 минут.",
        body: `## Что нужно в Task 2

Task 2 одинаковая в Academic и General Training. Вам дают утверждение на общественную тему и вопрос к нему, и нужно написать **не меньше 250 слов** примерно за **40 минут**. Task 2 весит вдвое больше Task 1, поэтому, если вам часто не хватает времени, начинайте с неё.

Меньше 250 слов снижает балл за Task Response. Больше 300 почти ничего не даёт, а времени на проверку остаётся меньше.

## Прочитайте вопрос дважды

Чаще всего низкий балл за Task Response получают за ответ не на тот вопрос. Подчеркните **тему** (например, *working from home*) и **задание** (*do you agree or disagree?*). Эссе должно отвечать на каждую часть задания.

## Пять частых типов вопросов

1. **Мнение:** *To what extent do you agree or disagree?* Чётко обозначьте позицию во вступлении и держитесь её до конца.
2. **Обсуждение:** *Discuss both views and give your own opinion.* По абзацу на каждую точку зрения, а своё мнение во вступлении и заключении.
3. **Плюсы и минусы:** *Do the advantages outweigh the disadvantages?* По абзацу на каждую сторону, потом скажите, какая перевешивает.
4. **Проблема и решение:** *What problems does this cause? What can be done?* Абзац о проблемах (или причинах) и абзац о решениях, которые им соответствуют.
5. **Вопрос из двух частей:** *Why is this happening? Is it a positive or negative development?* По абзацу на каждый вопрос.

## План из четырёх абзацев

- **Вступление (2–3 предложения):** перескажите тему своими словами и дайте ответ на вопрос.
- **Основной абзац 1 (5–7 предложений):** одна главная мысль, её объяснение и конкретный пример.
- **Основной абзац 2 (5–7 предложений):** вторая мысль, объяснение и пример.
- **Заключение (2 предложения):** повторите ответ другими словами. Без новых идей.

Начинайте каждый основной абзац с **topic sentence**, которое говорит, о чём абзац. Затем объясните *почему* и приведите пример. Одна хорошо раскрытая мысль даёт больше, чем три мысли по одному предложению.

## Как распределить 40 минут

- **5 минут:** прочитать вопрос, решить, что отвечаете, записать две главные мысли и пример к каждой.
- **30 минут:** писать.
- **5 минут:** проверить формы глаголов, артикли, множественное число и орфографию.

## Как оценивают Task 2

У экзаменаторов четыре критерия с одинаковым весом: **Task Response**, **Coherence and Cohesion**, **Lexical Resource** и **Grammatical Range and Accuracy**. Связки помогают связности, но если они в каждом предложении (*Moreover… Furthermore… In addition…*), текст звучит механически. Чёткие абзацы и topic sentences важнее.

## Частые ошибки

- Переписывать целые фразы из вопроса вместо перефразирования.
- Не дать ясного мнения, когда вопрос его требует.
- Заученные вступления, которые подходят к любой теме.
- Слишком общие примеры (*many people think…*) вместо конкретных.
- Новый аргумент в заключении.

## Тренируйтесь с обратной связью

В Lexify есть вопросы Task 2 в формате экзамена с таймером на 40 минут и счётчиком слов. После отправки вы получите примерный балл по каждому критерию и список ошибок с исправлениями.`,
      },
      az: {
        title: "IELTS Writing Task 2: esse növləri və işləyən struktur",
        description: "Task 2-də ən çox rast gəlinən beş sual növü, hər biri üçün dörd abzaslıq plan və 40 dəqiqəni necə bölmək.",
        body: `## Task 2-də nə tələb olunur

Task 2 Academic və General Training-də eynidir. Sizə ictimai mövzuda bir fikir və ona aid sual verilir, siz isə təxminən **40 dəqiqəyə** **ən azı 250 söz** yazırsınız. Task 2 Task 1-dən iki dəfə çox dəyərləndirilir, ona görə vaxtınız tez-tez çatmırsa, ondan başlayın.

250 sözdən az yazmaq Task Response balını aşağı salır. 300 sözdən çox yazmaq demək olar ki, kömək etmir, yoxlamağa isə vaxt az qalır.

## Sualı iki dəfə oxuyun

Task Response üzrə aşağı balın ən çox səbəbi başqa suala cavab verməkdir. **Mövzunun** (məsələn, *working from home*) və **tapşırığın** (*do you agree or disagree?*) altından xətt çəkin. Esse tapşırığın hər hissəsinə cavab verməlidir.

## Beş geniş yayılmış sual növü

1. **Fikir:** *To what extent do you agree or disagree?* Mövqeyinizi girişdə aydın bildirin və sona qədər saxlayın.
2. **Müzakirə:** *Discuss both views and give your own opinion.* Hər baxış üçün bir abzas, öz fikriniz isə girişdə və nəticədə.
3. **Üstünlüklər və çatışmazlıqlar:** *Do the advantages outweigh the disadvantages?* Hər tərəf üçün bir abzas, sonra hansının üstün olduğunu deyin.
4. **Problem və həll:** *What problems does this cause? What can be done?* Problemlər (və ya səbəblər) üçün bir abzas, onlara uyğun həllər üçün bir abzas.
5. **İki hissəli sual:** *Why is this happening? Is it a positive or negative development?* Hər sual üçün bir abzas.

## Dörd abzaslıq plan

- **Giriş (2–3 cümlə):** mövzunu öz sözlərinizlə ifadə edin və suala cavabınızı bildirin.
- **Əsas abzas 1 (5–7 cümlə):** bir əsas fikir, onun izahı və konkret nümunə.
- **Əsas abzas 2 (5–7 cümlə):** ikinci fikir, izah və nümunə.
- **Nəticə (2 cümlə):** cavabınızı başqa sözlərlə təkrarlayın. Yeni fikir yoxdur.

Hər əsas abzası onun nədən bəhs etdiyini deyən **topic sentence** ilə başlayın. Sonra *niyə* olduğunu izah edin və nümunə gətirin. Yaxşı açılmış bir fikir hərəsi bir cümlə olan üç fikirdən daha yüksək qiymətləndirilir.

## 40 dəqiqəni necə bölmək

- **5 dəqiqə:** sualı oxuyun, cavabınızı seçin, iki əsas fikir və hər biri üçün nümunə qeyd edin.
- **30 dəqiqə:** yazın.
- **5 dəqiqə:** fel formalarını, artiklləri, cəm şəkilçilərini və orfoqrafiyanı yoxlayın.

## Task 2 necə qiymətləndirilir

İmtahançılar bərabər çəkili dörd meyardan istifadə edir: **Task Response**, **Coherence and Cohesion**, **Lexical Resource** və **Grammatical Range and Accuracy**. Bağlayıcı sözlər rabitəyə kömək edir, amma hər cümlədə olsalar (*Moreover… Furthermore… In addition…*), mətn mexaniki səslənir. Aydın abzaslar və topic sentence daha vacibdir.

## Tez-tez edilən səhvlər

- Sualdan bütöv ifadələri köçürmək, onları öz sözlərinizlə ifadə etməmək.
- Sual fikir tələb edəndə aydın fikir bildirməmək.
- İstənilən mövzuya uyğun gələn əzbərlənmiş girişlər.
- Konkret nümunə əvəzinə çox ümumi nümunələr (*many people think…*).
- Nəticədə yeni arqument əlavə etmək.

## Rəylə məşq edin

Lexify-da 40 dəqiqəlik taymer və söz sayğacı olan imtahan formatında Task 2 sualları var. Göndərdikdən sonra hər meyar üzrə təxmini bal və düzəlişləri ilə səhvlərin siyahısını alırsınız.`,
      },
    },
  },
  {
    slug: "ielts-reading-true-false-not-given",
    updated: "2026-11-01",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Reading: True, False or Not Given without guessing",
        description: "What each answer really means, a four-step method, worked examples and the traps that cost the most marks.",
        body: `## What the three answers mean

In this task you read statements and decide how each one relates to the passage:

- **TRUE:** the passage says the same thing, usually in different words.
- **FALSE:** the passage says the **opposite** or something that cannot be true at the same time.
- **NOT GIVEN:** the passage says **nothing** that lets you decide. The topic may be mentioned, but not this exact point.

**Yes / No / Not Given** works the same way, but the statements are about the **writer's opinions or claims**, not facts. You will see it more often in Academic passages that argue a point.

## Four steps for each statement

1. **Underline the key words** in the statement, especially names, numbers and dates. They are the easiest to find in the text.
2. **Find the matching part** of the passage. The questions follow the order of the text, so the answer to question 3 is usually after the answer to question 2.
3. **Compare carefully.** Look for words that change the meaning: *all / some*, *always / often*, *only*, *more / less*, *before / after*.
4. **Decide using only the passage**, not what you know about the topic.

## Worked examples

Passage: *The bridge, completed in 1932, was at that time the longest of its kind in Europe. Engineers had originally planned a cheaper wooden design.*

- *The bridge was finished in the 1930s.* → **TRUE** (1932 is in the 1930s).
- *The bridge was the longest in the world when it opened.* → **NOT GIVEN** (the passage only talks about Europe; it says nothing about the world, and "longest in Europe" does not contradict it).
- *Engineers first planned to build the bridge from stone.* → **FALSE** (the passage says the first plan was a wooden design).
- *The wooden design was rejected because of safety concerns.* → **NOT GIVEN** (we know there was a plan, but not why it changed).

If you are unsure between FALSE and NOT GIVEN, ask yourself: *does the passage say something that makes the statement wrong?* If it does, the answer is FALSE; if it does not, it is NOT GIVEN.

## The most common traps

- **Same words, different meaning.** A statement can repeat words from the text and still be FALSE because one small word (*never*, *only*, *most*) changes it.
- **Your own knowledge.** If the passage does not say it, the answer is NOT GIVEN, even if you know it is true.
- **Partial match.** If one part of the statement is supported and another part is not mentioned, the answer is NOT GIVEN.
- **Spending too long.** If you cannot find the place in the text after about a minute, move on and come back at the end.

## Practise with feedback

Lexify Reading practice includes True, False or Not Given questions in real-test format. After you submit, you see the correct answer for every question and your accuracy for each question type, so you know which type to work on.`,
      },
      ru: {
        title: "IELTS Reading: True, False или Not Given без угадывания",
        description: "Что на самом деле значит каждый ответ, метод из четырёх шагов, разобранные примеры и ловушки, на которых теряют больше всего баллов.",
        body: `## Что значат три ответа

В этом задании вы читаете утверждения и решаете, как каждое связано с текстом:

- **TRUE:** в тексте сказано то же самое, обычно другими словами.
- **FALSE:** в тексте сказано **обратное** или то, что не может быть правдой одновременно с утверждением.
- **NOT GIVEN:** в тексте **нет** информации, чтобы решить. Тема может упоминаться, но не именно этот пункт.

**Yes / No / Not Given** устроено так же, но утверждения касаются **мнений или позиции автора**, а не фактов. Оно чаще встречается в Academic-текстах, где автор что-то доказывает.

## Четыре шага для каждого утверждения

1. **Подчеркните ключевые слова** в утверждении, особенно имена, числа и даты. Их проще всего найти в тексте.
2. **Найдите соответствующее место** в тексте. Вопросы идут по порядку текста, поэтому ответ на вопрос 3 обычно находится после ответа на вопрос 2.
3. **Сравните внимательно.** Ищите слова, которые меняют смысл: *all / some*, *always / often*, *only*, *more / less*, *before / after*.
4. **Решайте только по тексту**, а не по тому, что вы знаете о теме.

## Разбор примеров

Текст: *The bridge, completed in 1932, was at that time the longest of its kind in Europe. Engineers had originally planned a cheaper wooden design.*

- *The bridge was finished in the 1930s.* → **TRUE** (1932 — это 1930-е).
- *The bridge was the longest in the world when it opened.* → **NOT GIVEN** (в тексте сказано только про Европу; про мир информации нет, и «самый длинный в Европе» этому не противоречит).
- *Engineers first planned to build the bridge from stone.* → **FALSE** (в тексте сказано, что сначала планировали деревянный мост).
- *The wooden design was rejected because of safety concerns.* → **NOT GIVEN** (известно, что такой план был, но не почему от него отказались).

Если сомневаетесь между FALSE и NOT GIVEN, спросите себя: *есть ли в тексте что-то, что делает утверждение неверным?* Если есть — FALSE, если нет — NOT GIVEN.

## Самые частые ловушки

- **Те же слова, другой смысл.** Утверждение может повторять слова из текста и всё равно быть FALSE, потому что одно маленькое слово (*never*, *only*, *most*) меняет смысл.
- **Собственные знания.** Если в тексте этого нет, ответ NOT GIVEN, даже если вы знаете, что это правда.
- **Частичное совпадение.** Если одна часть утверждения подтверждается, а другая не упоминается, ответ NOT GIVEN.
- **Слишком много времени.** Если за минуту не нашли нужное место, переходите дальше и вернитесь в конце.

## Тренируйтесь с обратной связью

В практике Reading в Lexify есть задания True, False or Not Given в формате экзамена. После отправки вы видите правильный ответ на каждый вопрос и точность по каждому типу заданий, поэтому понятно, над чем работать.`,
      },
      az: {
        title: "IELTS Reading: True, False və ya Not Given təxminsiz",
        description: "Hər cavabın əslində nə demək olduğu, dörd addımlı üsul, izahlı nümunələr və ən çox bal itirilən tələlər.",
        body: `## Üç cavab nə deməkdir

Bu tapşırıqda fikirləri oxuyur və hər birinin mətnlə necə əlaqəli olduğunu müəyyən edirsiniz:

- **TRUE:** mətndə eyni şey deyilir, adətən başqa sözlərlə.
- **FALSE:** mətndə **əksi** və ya fikirlə eyni vaxtda doğru ola bilməyən bir şey deyilir.
- **NOT GIVEN:** mətndə qərar vermək üçün **məlumat yoxdur**. Mövzu xatırlana bilər, amma məhz bu məqam yox.

**Yes / No / Not Given** eyni qaydada işləyir, amma fikirlər faktlar haqqında yox, **müəllifin fikirləri və ya mövqeyi** haqqındadır. Bu növ daha çox müəllifin nəyisə sübut etdiyi Academic mətnlərində olur.

## Hər fikir üçün dörd addım

1. Fikirdəki **açar sözlərin**, xüsusilə adların, rəqəmlərin və tarixlərin altından xətt çəkin. Onları mətndə tapmaq ən asandır.
2. Mətndə **uyğun yeri tapın**. Suallar mətnin ardıcıllığı ilə gedir, ona görə 3-cü sualın cavabı adətən 2-ci sualın cavabından sonra olur.
3. **Diqqətlə müqayisə edin.** Mənanı dəyişən sözlərə baxın: *all / some*, *always / often*, *only*, *more / less*, *before / after*.
4. **Yalnız mətnə əsasən qərar verin**, mövzu haqqında bildiklərinizə görə yox.

## İzahlı nümunələr

Mətn: *The bridge, completed in 1932, was at that time the longest of its kind in Europe. Engineers had originally planned a cheaper wooden design.*

- *The bridge was finished in the 1930s.* → **TRUE** (1932 1930-cu illərə aiddir).
- *The bridge was the longest in the world when it opened.* → **NOT GIVEN** (mətndə yalnız Avropadan danışılır; dünya haqqında məlumat yoxdur və "Avropada ən uzun" bununla ziddiyyət təşkil etmir).
- *Engineers first planned to build the bridge from stone.* → **FALSE** (mətndə əvvəlcə taxta körpü planlaşdırıldığı deyilir).
- *The wooden design was rejected because of safety concerns.* → **NOT GIVEN** (belə planın olduğu məlumdur, amma ondan niyə imtina edildiyi yox).

FALSE ilə NOT GIVEN arasında tərəddüd edirsinizsə, özünüzdən soruşun: *mətndə fikri yanlış edən bir şey varmı?* Varsa FALSE, yoxdursa NOT GIVEN.

## Ən çox rast gəlinən tələlər

- **Eyni sözlər, fərqli məna.** Fikir mətndəki sözləri təkrarlaya və yenə də FALSE ola bilər, çünki bir kiçik söz (*never*, *only*, *most*) mənanı dəyişir.
- **Öz bilikləriniz.** Mətndə yoxdursa, doğru olduğunu bilsəniz belə cavab NOT GIVEN-dir.
- **Qismən uyğunluq.** Fikrin bir hissəsi təsdiqlənir, digəri isə xatırlanmırsa, cavab NOT GIVEN-dir.
- **Çox vaxt sərf etmək.** Bir dəqiqəyə lazımi yeri tapmadınızsa, keçin və sonda qayıdın.

## Rəylə məşq edin

Lexify-ın Reading məşqlərində imtahan formatında True, False or Not Given tapşırıqları var. Göndərdikdən sonra hər sualın düzgün cavabını və hər tapşırıq növü üzrə dəqiqliyinizi görürsünüz, beləliklə nə üzərində işləməli olduğunuzu bilirsiniz.`,
      },
    },
  },
  {
    slug: "ielts-listening-tips",
    updated: "2026-11-04",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Listening: how the test works and how to stop losing easy marks",
        description: "The four parts of IELTS Listening, what to do before each recording starts, and the spelling and word-limit mistakes that cost the most marks.",
        body: `## How the test works

IELTS Listening is the same for Academic and General Training. There are **four parts** and **40 questions**, and the recordings last about **30 minutes**. You hear each recording **only once**.

- **Part 1:** a conversation between two people about an everyday situation, such as booking a room or joining a club.
- **Part 2:** one person speaking about an everyday topic, such as a tour or a local event.
- **Part 3:** a conversation between up to four people in an education or training context, such as students discussing a project.
- **Part 4:** a short lecture on an academic subject.

The parts get harder as the test goes on. On paper you get 10 extra minutes at the end to copy your answers to the answer sheet; on computer you type answers as you go and get two minutes to check them.

## Before each recording starts

You get a short time to look at the questions before each part. Use it:

1. **Read the instructions** and circle the word limit, for example *NO MORE THAN TWO WORDS AND/OR A NUMBER*.
2. **Predict the answer type** for each gap: a number, a date, a name, a noun, a place.
3. **Underline key words** in the questions and think of synonyms the speakers might use instead.

## While you listen

- The answers come **in the same order** as the questions. If you miss one, let it go and move on to the next.
- Speakers often **correct themselves**: *"It's on Tuesday… no, sorry, Wednesday."* The final version is the answer.
- In multiple choice, you will usually hear words from **all** the options. Wait until the speaker confirms one.
- Write short notes on the question paper and finish the answer neatly at the end of the part.

## Easy marks people lose

- **Spelling:** a misspelled answer is wrong. Practise names of months, days, and common words such as *accommodation*, *necessary*, *environment*.
- **Word limits:** if the limit is two words and you write three, the answer is wrong even if the meaning is right.
- **Numbers and letters:** spelled-out names (*"that's S-M-Y-T-H"*) and phone numbers are common in Part 1. Practise listening to the alphabet and numbers at speed.
- **Plurals:** check whether the sentence needs *ticket* or *tickets*.

## Practise with feedback

Lexify Listening practice plays each recording once, like the real test, and checks your answers automatically. After you submit, you see the correct answer for every question and your accuracy for each question type.`,
      },
      ru: {
        title: "IELTS Listening: как устроен тест и как не терять лёгкие баллы",
        description: "Четыре части IELTS Listening, что делать до начала каждой записи и ошибки в орфографии и лимите слов, на которых теряют больше всего баллов.",
        body: `## Как устроен тест

IELTS Listening одинаковый в Academic и General Training. В нём **четыре части** и **40 вопросов**, записи длятся около **30 минут**. Каждую запись вы слышите **только один раз**.

- **Part 1:** разговор двух людей о бытовой ситуации, например бронирование номера или запись в клуб.
- **Part 2:** один человек говорит на бытовую тему, например об экскурсии или местном мероприятии.
- **Part 3:** разговор до четырёх человек в учебной обстановке, например студенты обсуждают проект.
- **Part 4:** короткая лекция на академическую тему.

Части становятся сложнее к концу теста. На бумажном экзамене в конце дают 10 минут, чтобы перенести ответы в бланк; на компьютере ответы печатают сразу и дают две минуты на проверку.

## До начала каждой записи

Перед каждой частью есть немного времени, чтобы посмотреть вопросы. Используйте его:

1. **Прочитайте инструкцию** и обведите лимит слов, например *NO MORE THAN TWO WORDS AND/OR A NUMBER*.
2. **Предскажите тип ответа** для каждого пропуска: число, дата, имя, существительное, место.
3. **Подчеркните ключевые слова** в вопросах и подумайте, какими синонимами их могут заменить.

## Во время прослушивания

- Ответы идут **в том же порядке**, что и вопросы. Если пропустили один, не задерживайтесь и слушайте следующий.
- Говорящие часто **поправляют себя**: *"It's on Tuesday… no, sorry, Wednesday."* Правильный ответ — последний вариант.
- В заданиях с выбором ответа обычно звучат слова из **всех** вариантов. Дождитесь, пока говорящий подтвердит один.
- Делайте короткие пометки на листе с вопросами, а аккуратно допишите ответы в конце части.

## Лёгкие баллы, которые теряют

- **Орфография:** ответ с ошибкой засчитывается как неверный. Потренируйте названия месяцев, дней недели и частые слова вроде *accommodation*, *necessary*, *environment*.
- **Лимит слов:** если разрешено два слова, а вы написали три, ответ неверный, даже если смысл правильный.
- **Буквы и цифры:** имена по буквам (*"that's S-M-Y-T-H"*) и номера телефонов часто встречаются в Part 1. Потренируйтесь воспринимать алфавит и числа на скорости.
- **Множественное число:** проверьте, нужно ли *ticket* или *tickets*.

## Тренируйтесь с обратной связью

В практике Listening в Lexify каждая запись звучит один раз, как на экзамене, а ответы проверяются автоматически. После отправки вы видите правильный ответ на каждый вопрос и точность по каждому типу заданий.`,
      },
      az: {
        title: "IELTS Listening: test necə keçir və asan balları necə itirməmək",
        description: "IELTS Listening-in dörd hissəsi, hər yazı başlamazdan əvvəl nə etmək və ən çox bal itirilən orfoqrafiya və söz limiti səhvləri.",
        body: `## Test necə keçir

IELTS Listening Academic və General Training-də eynidir. **Dörd hissə** və **40 sual** var, yazılar təxminən **30 dəqiqə** davam edir. Hər yazını **yalnız bir dəfə** eşidirsiniz.

- **Part 1:** iki nəfər arasında gündəlik vəziyyət haqqında söhbət, məsələn otaq bron etmək və ya kluba yazılmaq.
- **Part 2:** bir nəfər gündəlik mövzuda danışır, məsələn ekskursiya və ya yerli tədbir haqqında.
- **Part 3:** təhsil mühitində dörd nəfərə qədər insanın söhbəti, məsələn tələbələr layihəni müzakirə edir.
- **Part 4:** akademik mövzuda qısa mühazirə.

Hissələr testin sonuna doğru çətinləşir. Kağız imtahanda sonda cavabları blanka köçürmək üçün 10 dəqiqə verilir; kompüterdə isə cavabları dərhal yazırsınız və yoxlamaq üçün iki dəqiqə verilir.

## Hər yazı başlamazdan əvvəl

Hər hissədən əvvəl sualları nəzərdən keçirmək üçün bir az vaxt verilir. Ondan istifadə edin:

1. **Təlimatı oxuyun** və söz limitini dairəyə alın, məsələn *NO MORE THAN TWO WORDS AND/OR A NUMBER*.
2. Hər boşluq üçün **cavabın növünü təxmin edin**: rəqəm, tarix, ad, isim, yer.
3. Suallarda **açar sözlərin** altından xətt çəkin və danışanların onların əvəzinə hansı sinonimləri işlədə biləcəyini düşünün.

## Dinləyərkən

- Cavablar suallarla **eyni ardıcıllıqla** gəlir. Birini buraxdınızsa, ilişib qalmayın, növbətiyə keçin.
- Danışanlar tez-tez **özlərini düzəldirlər**: *"It's on Tuesday… no, sorry, Wednesday."* Düzgün cavab son variantdır.
- Çoxseçimli tapşırıqlarda adətən **bütün** variantlardakı sözlər səslənir. Danışan birini təsdiqləyənə qədər gözləyin.
- Sual vərəqində qısa qeydlər edin, cavabları isə hissənin sonunda səliqə ilə tamamlayın.

## İtirilən asan ballar

- **Orfoqrafiya:** səhv yazılmış cavab yanlış sayılır. Ayların, həftə günlərinin adlarını və *accommodation*, *necessary*, *environment* kimi tez-tez işlənən sözləri məşq edin.
- **Söz limiti:** iki söz icazə verilibsə və siz üç söz yazmısınızsa, məna düzgün olsa belə cavab yanlışdır.
- **Hərflər və rəqəmlər:** hərf-hərf deyilən adlar (*"that's S-M-Y-T-H"*) və telefon nömrələri Part 1-də tez-tez olur. Əlifbanı və rəqəmləri sürətlə eşitməyi məşq edin.
- **Cəm forması:** cümləyə *ticket* yoxsa *tickets* lazım olduğunu yoxlayın.

## Rəylə məşq edin

Lexify-ın Listening məşqlərində hər yazı imtahanda olduğu kimi bir dəfə səslənir, cavablar isə avtomatik yoxlanılır. Göndərdikdən sonra hər sualın düzgün cavabını və hər tapşırıq növü üzrə dəqiqliyinizi görürsünüz.`,
      },
    },
  },
  {
    slug: "ielts-speaking-part-1-and-3",
    updated: "2026-11-06",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Speaking Parts 1 and 3: how long to answer and what to say",
        description: "How Parts 1 and 3 work, a simple answer pattern for each, useful phrases for discussion questions and the mistakes that cost marks.",
        body: `## How Parts 1 and 3 work

The Speaking test lasts **11 to 14 minutes** and has three parts. Part 2 is the long turn with a cue card. Parts 1 and 3 are conversations, and together they make up more than half of the test.

- **Part 1 (4–5 minutes):** short questions about you. The examiner usually starts with home, work or study, then moves to two or three everyday topics such as weather, music or food.
- **Part 3 (4–5 minutes):** a discussion linked to the Part 2 topic, but about people and society in general, not about you. If your cue card was about a useful piece of technology, Part 3 may ask how technology has changed the way families communicate.

## Part 1: answer, explain, stop

Part 1 questions are simple on purpose. A one-word answer is too short, and a two-minute answer is too long. Aim for **two or three sentences**:

1. **Answer** the question directly.
2. **Explain** with a reason or a small detail.
3. **Stop** and let the examiner ask the next question.

*Do you like cooking?*
"Yes, quite a lot, especially at the weekend. During the week I don't have much time, but on Sundays I usually cook something from my grandmother's recipes, like dolma."

## Part 3: give an opinion and develop it

Part 3 questions are more abstract and expect longer answers, about **four to six sentences**. A simple pattern works for most questions:

1. **Opinion:** *I think…*, *In my view…*
2. **Reason:** *This is mainly because…*
3. **Example:** *For instance, in my country…*
4. **Other side or condition:** *That said…*, *It depends on…*

*Do you think people rely too much on technology?*
"To some extent, yes. The main reason is that many everyday skills are now done by apps, so people practise them less. For example, very few young people can find their way in a city without a map on their phone. That said, technology also saves a lot of time, so I wouldn't say it is always a bad thing. It depends on whether people still use their own judgement."

## Useful language for Part 3

- Comparing past and present: *Compared with twenty years ago…*, *These days…, whereas in the past…*
- Speculating about the future: *I imagine that…*, *It's likely that…*
- Talking about different groups: *For older people…, while younger people…*
- Buying a moment to think: *That's an interesting question. I've never really thought about it, but…*

The last one is fine to use once or twice. Silence is not a problem for a second or two, but long pauses lower your Fluency score.

## Common mistakes

- **Memorised answers in Part 1.** Examiners notice them quickly and may ask a follow-up to check.
- **Answering about yourself in Part 3.** The question is about people in general, so move from *I* to *people*, *young people*, *society*.
- **Saying "I don't know" and stopping.** If you have no opinion, talk about what others might think or what it depends on.
- **Asking the examiner for their opinion.** They will not answer; it is your test.
- **Repeating the question word for word** instead of paraphrasing it.

## How the parts are marked

The examiner gives one score for the whole test, using the same four criteria in every part: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** and **Pronunciation**. Part 3 is where you can show the most range, because abstract questions call for complex sentences and less common vocabulary.

## Practise all three parts

Every Lexify Speaking practice includes Part 1, Part 2 and Part 3 questions, with timers that match the real test, then an estimated band and comments on each criterion.`,
      },
      ru: {
        title: "IELTS Speaking Part 1 и Part 3: сколько говорить и что отвечать",
        description: "Как устроены Part 1 и Part 3, простая схема ответа для каждой части, полезные фразы для обсуждения и ошибки, которые стоят баллов.",
        body: `## Как устроены Part 1 и Part 3

Speaking длится **11–14 минут** и состоит из трёх частей. Part 2 — монолог по карточке. Part 1 и Part 3 — это разговор, и вместе они занимают больше половины теста.

- **Part 1 (4–5 минут):** короткие вопросы о вас. Обычно экзаменатор начинает с дома, работы или учёбы, а потом переходит к двум-трём бытовым темам вроде погоды, музыки или еды.
- **Part 3 (4–5 минут):** обсуждение, связанное с темой Part 2, но о людях и обществе в целом, а не о вас. Если карточка была про полезную технику, в Part 3 могут спросить, как технологии изменили общение в семьях.

## Part 1: ответ, объяснение, стоп

Вопросы Part 1 нарочно простые. Ответ одним словом слишком короткий, а двухминутный слишком длинный. Цель — **два-три предложения**:

1. **Ответьте** прямо на вопрос.
2. **Объясните** причиной или небольшой деталью.
3. **Остановитесь** и дайте экзаменатору задать следующий вопрос.

*Do you like cooking?*
"Yes, quite a lot, especially at the weekend. During the week I don't have much time, but on Sundays I usually cook something from my grandmother's recipes, like dolma."

## Part 3: мнение и его развитие

Вопросы Part 3 абстрактнее и ждут ответа подлиннее, примерно **четыре-шесть предложений**. Для большинства вопросов подходит простая схема:

1. **Мнение:** *I think…*, *In my view…*
2. **Причина:** *This is mainly because…*
3. **Пример:** *For instance, in my country…*
4. **Другая сторона или условие:** *That said…*, *It depends on…*

*Do you think people rely too much on technology?*
"To some extent, yes. The main reason is that many everyday skills are now done by apps, so people practise them less. For example, very few young people can find their way in a city without a map on their phone. That said, technology also saves a lot of time, so I wouldn't say it is always a bad thing. It depends on whether people still use their own judgement."

## Полезные фразы для Part 3

- Сравнить прошлое и настоящее: *Compared with twenty years ago…*, *These days…, whereas in the past…*
- Предположить, что будет: *I imagine that…*, *It's likely that…*
- Говорить о разных группах людей: *For older people…, while younger people…*
- Выиграть секунду на раздумье: *That's an interesting question. I've never really thought about it, but…*

Последнюю фразу можно использовать раз-другой. Пауза в секунду-две не страшна, но долгое молчание снижает балл за Fluency.

## Частые ошибки

- **Заученные ответы в Part 1.** Экзаменаторы быстро их замечают и могут задать уточняющий вопрос.
- **Отвечать о себе в Part 3.** Вопрос о людях вообще, поэтому переходите от *I* к *people*, *young people*, *society*.
- **Сказать «I don't know» и замолчать.** Если своего мнения нет, расскажите, что могут думать другие или от чего это зависит.
- **Спрашивать мнение экзаменатора.** Он не ответит: это ваш экзамен.
- **Повторять вопрос дословно** вместо того, чтобы перефразировать.

## Как оценивают

Экзаменатор ставит одну оценку за весь тест по одним и тем же четырём критериям во всех частях: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** и **Pronunciation**. В Part 3 проще всего показать уровень, потому что абстрактные вопросы требуют сложных предложений и менее частой лексики.

## Тренируйте все три части

В каждой практике Speaking в Lexify есть вопросы Part 1, Part 2 и Part 3 с таймерами как на настоящем экзамене, а после ответа примерный балл и комментарии по каждому критерию.`,
      },
      az: {
        title: "IELTS Speaking Part 1 və Part 3: nə qədər danışmaq və nə cavab vermək",
        description: "Part 1 və Part 3 necə keçir, hər hissə üçün sadə cavab sxemi, müzakirə sualları üçün faydalı ifadələr və bal itirdirən səhvlər.",
        body: `## Part 1 və Part 3 necə keçir

Speaking **11–14 dəqiqə** çəkir və üç hissədən ibarətdir. Part 2 kart üzrə monoloqdur. Part 1 və Part 3 isə söhbətdir və birlikdə testin yarısından çoxunu təşkil edir.

- **Part 1 (4–5 dəqiqə):** sizin haqqınızda qısa suallar. İmtahançı adətən ev, iş və ya təhsillə başlayır, sonra hava, musiqi və ya yemək kimi iki-üç gündəlik mövzuya keçir.
- **Part 3 (4–5 dəqiqə):** Part 2 mövzusu ilə bağlı müzakirə, amma sizin haqqınızda yox, ümumilikdə insanlar və cəmiyyət haqqında. Kartınız faydalı texnika haqqında idisə, Part 3-də texnologiyanın ailələrdə ünsiyyəti necə dəyişdiyini soruşa bilərlər.

## Part 1: cavab, izah, dayan

Part 1 sualları qəsdən sadədir. Bir sözlük cavab çox qısa, iki dəqiqəlik cavab isə çox uzundur. Hədəf **iki-üç cümlədir**:

1. Suala birbaşa **cavab verin**.
2. Səbəb və ya kiçik təfərrüatla **izah edin**.
3. **Dayanın** və imtahançıya növbəti sualı verməyə imkan yaradın.

*Do you like cooking?*
"Yes, quite a lot, especially at the weekend. During the week I don't have much time, but on Sundays I usually cook something from my grandmother's recipes, like dolma."

## Part 3: fikir bildirin və onu inkişaf etdirin

Part 3 sualları daha mücərrəddir və daha uzun cavab gözləyir, təxminən **dörd-altı cümlə**. Əksər suallar üçün sadə sxem işləyir:

1. **Fikir:** *I think…*, *In my view…*
2. **Səbəb:** *This is mainly because…*
3. **Nümunə:** *For instance, in my country…*
4. **Digər tərəf və ya şərt:** *That said…*, *It depends on…*

*Do you think people rely too much on technology?*
"To some extent, yes. The main reason is that many everyday skills are now done by apps, so people practise them less. For example, very few young people can find their way in a city without a map on their phone. That said, technology also saves a lot of time, so I wouldn't say it is always a bad thing. It depends on whether people still use their own judgement."

## Part 3 üçün faydalı ifadələr

- Keçmişi və indini müqayisə etmək: *Compared with twenty years ago…*, *These days…, whereas in the past…*
- Gələcək haqqında fərziyyə: *I imagine that…*, *It's likely that…*
- Müxtəlif qruplar haqqında danışmaq: *For older people…, while younger people…*
- Düşünmək üçün bir an qazanmaq: *That's an interesting question. I've never really thought about it, but…*

Sonuncu ifadədən bir-iki dəfə istifadə etmək olar. Bir-iki saniyəlik fasilə problem deyil, amma uzun susmaq Fluency balını aşağı salır.

## Tez-tez edilən səhvlər

- **Part 1-də əzbərlənmiş cavablar.** İmtahançılar onları tez sezir və yoxlamaq üçün əlavə sual verə bilər.
- **Part 3-də özünüz haqqında cavab vermək.** Sual ümumilikdə insanlar haqqındadır, ona görə *I*-dan *people*, *young people*, *society*-yə keçin.
- **"I don't know" deyib susmaq.** Öz fikriniz yoxdursa, başqalarının nə düşünə biləcəyindən və ya bunun nədən asılı olduğundan danışın.
- **İmtahançının fikrini soruşmaq.** O cavab verməyəcək: bu sizin imtahanınızdır.
- **Sualı sözbəsöz təkrarlamaq**, onu başqa sözlərlə ifadə etmək əvəzinə.

## Necə qiymətləndirilir

İmtahançı bütün test üçün bir bal verir və bütün hissələrdə eyni dörd meyardan istifadə edir: **Fluency and Coherence**, **Lexical Resource**, **Grammatical Range and Accuracy** və **Pronunciation**. Səviyyənizi göstərmək ən asan Part 3-dədir, çünki mücərrəd suallar mürəkkəb cümlələr və daha az işlənən sözlər tələb edir.

## Hər üç hissəni məşq edin

Lexify-da hər Speaking məşqində real imtahandakı kimi taymerlərlə Part 1, Part 2 və Part 3 sualları var, cavabdan sonra isə təxmini bal və hər meyar üzrə şərhlər alırsınız.`,
      },
    },
  },
  {
    slug: "ielts-reading-matching-headings",
    updated: "2026-11-08",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Reading: how to do matching headings",
        description: "A five-step method for matching headings, the three kinds of distractor to watch for, a worked example and how to manage your time.",
        body: `## What the task looks like

You get a list of headings, usually numbered with Roman numerals (i, ii, iii…), and a passage with lettered paragraphs. For each paragraph you choose the heading that best sums up **the whole paragraph**. There are always more headings than paragraphs, so some are never used.

Matching headings usually comes **first** in a set of questions about a passage, and it is one of the slowest question types for most candidates. A clear method saves several minutes.

## A five-step method

1. **Read the headings first**, quickly. Notice what makes each one different: two headings may share a topic but differ in one word, such as *causes* and *effects*, or *past* and *future*.
2. **Read one paragraph at a time.** Pay most attention to the first two sentences and the last one, where writers usually state the main idea. Then glance through the middle to check it supports that idea.
3. **Say the main idea in your own words**, in five or six words, before you look at the list again.
4. **Choose the heading** that matches your summary. If two seem possible, write both next to the paragraph and come back later.
5. **Cross out headings you have used.** As the list gets shorter, the doubtful paragraphs become easier.

## How the distractors work

- **Detail, not main idea.** A heading may match one sentence in the paragraph perfectly, but that sentence is only an example. The correct heading covers the whole paragraph.
- **Same words, different meaning.** A heading that repeats a word from the paragraph is often a trap. The right answer is usually a paraphrase.
- **Right topic, wrong angle.** If a paragraph explains *why* cities buried their rivers, a heading about *how* they did it is wrong, even though the topic is the same.

## A short example

*Paragraph:* "For centuries, cities grew around rivers, but as they expanded, many smaller streams disappeared from view. Engineers covered them with concrete and built roads on top. At the time, this was seen as progress."

- i. The engineering methods used to build roads
- ii. How and why urban rivers were hidden
- iii. The environmental benefits of open water

Heading i picks up the words *engineers* and *roads*, but the paragraph is not about road building. Heading iii is about a different part of the passage. **Heading ii** sums up the paragraph as a whole.

## Managing time

Allow about **one minute per paragraph**. If one paragraph is taking too long, move on: other questions on the same passage often help you understand it. Never leave an answer blank, because there is no penalty for a wrong answer.

## Practise the skill

Lexify's Reading practice includes matching headings tasks, and after each attempt you see the correct answers and your accuracy for every question type, so you know what to work on next.`,
      },
      ru: {
        title: "IELTS Reading: как решать matching headings",
        description: "Метод в пять шагов для заданий на заголовки, три вида ловушек, разобранный пример и как не терять время.",
        body: `## Как выглядит задание

Вам дают список заголовков, обычно с римскими цифрами (i, ii, iii…), и текст, где абзацы обозначены буквами. Для каждого абзаца нужно выбрать заголовок, который лучше всего передаёт **смысл всего абзаца**. Заголовков всегда больше, чем абзацев, поэтому часть из них останется лишней.

Matching headings обычно идёт **первым** среди вопросов к тексту, и для многих это одно из самых медленных заданий. Чёткий порядок действий экономит несколько минут.

## Метод в пять шагов

1. **Сначала быстро прочитайте заголовки.** Обратите внимание, чем они отличаются: у двух заголовков может быть одна тема, но разное слово, например *causes* и *effects* или *past* и *future*.
2. **Читайте по одному абзацу.** Главное внимание на первые два предложения и последнее: там автор обычно формулирует главную мысль. Середину просмотрите, чтобы убедиться, что она эту мысль поддерживает.
3. **Сформулируйте главную мысль своими словами**, в пяти-шести словах, прежде чем снова смотреть в список.
4. **Выберите заголовок**, который совпадает с вашей формулировкой. Если подходят два, запишите оба рядом с абзацем и вернитесь позже.
5. **Вычёркивайте использованные заголовки.** Чем короче список, тем проще с сомнительными абзацами.

## Как устроены ловушки

- **Деталь вместо главной мысли.** Заголовок может идеально совпадать с одним предложением, но это предложение лишь пример. Правильный заголовок описывает весь абзац.
- **Те же слова, другой смысл.** Заголовок, который повторяет слово из абзаца, часто оказывается ловушкой. Правильный ответ обычно сказан другими словами.
- **Та же тема, другой угол.** Если абзац объясняет, *почему* города прятали реки, заголовок о том, *как* они это делали, неверен, хотя тема одна.

## Короткий пример

*Абзац:* "For centuries, cities grew around rivers, but as they expanded, many smaller streams disappeared from view. Engineers covered them with concrete and built roads on top. At the time, this was seen as progress."

- i. The engineering methods used to build roads
- ii. How and why urban rivers were hidden
- iii. The environmental benefits of open water

Заголовок i цепляется за слова *engineers* и *roads*, но абзац не о строительстве дорог. Заголовок iii относится к другой части текста. **Заголовок ii** передаёт смысл абзаца целиком.

## Время

Отводите примерно **минуту на абзац**. Если какой-то абзац отнимает слишком много времени, идите дальше: другие вопросы к тому же тексту часто помогают его понять. Не оставляйте пропусков, за неверный ответ баллы не снимают.

## Тренируйте навык

В практиках Reading в Lexify есть задания на matching headings, а после каждой попытки вы видите правильные ответы и точность по каждому типу вопросов, поэтому понятно, над чем работать дальше.`,
      },
      az: {
        title: "IELTS Reading: matching headings necə həll edilir",
        description: "Başlıq tapşırıqları üçün beş addımlıq üsul, diqqət edilməli üç növ tələ, izahlı nümunə və vaxtı necə idarə etmək.",
        body: `## Tapşırıq necə görünür

Sizə adətən Roma rəqəmləri ilə (i, ii, iii…) nömrələnmiş başlıqlar siyahısı və abzasları hərflərlə işarələnmiş mətn verilir. Hər abzas üçün **bütün abzasın** mənasını ən yaxşı ifadə edən başlığı seçməlisiniz. Başlıqlar həmişə abzaslardan çox olur, ona görə bəziləri istifadə olunmur.

Matching headings adətən mətnə aid suallar arasında **birinci** gəlir və əksər namizədlər üçün ən yavaş tapşırıqlardan biridir. Aydın üsul bir neçə dəqiqə qənaət edir.

## Beş addımlıq üsul

1. **Əvvəlcə başlıqları tez oxuyun.** Onların fərqinə diqqət edin: iki başlığın mövzusu eyni, amma bir sözü fərqli ola bilər, məsələn *causes* və *effects* və ya *past* və *future*.
2. **Abzasları bir-bir oxuyun.** Əsas diqqəti ilk iki cümləyə və sonuncuya verin: müəllif əsas fikri adətən orada deyir. Ortanı isə bu fikri dəstəklədiyini yoxlamaq üçün nəzərdən keçirin.
3. Siyahıya yenidən baxmazdan əvvəl **əsas fikri öz sözlərinizlə** beş-altı sözlə ifadə edin.
4. Öz ifadənizə uyğun gələn **başlığı seçin**. İki başlıq uyğun görünürsə, hər ikisini abzasın yanına yazın və sonra qayıdın.
5. **İstifadə etdiyiniz başlıqların üstündən xətt çəkin.** Siyahı qısaldıqca şübhəli abzaslar asanlaşır.

## Tələlər necə qurulur

- **Əsas fikir yox, təfərrüat.** Başlıq abzasdakı bir cümləyə tam uyğun gələ bilər, amma həmin cümlə sadəcə nümunədir. Düzgün başlıq bütün abzası əhatə edir.
- **Eyni sözlər, fərqli məna.** Abzasdakı sözü təkrarlayan başlıq çox vaxt tələ olur. Düzgün cavab adətən başqa sözlərlə ifadə olunur.
- **Eyni mövzu, fərqli bucaq.** Abzas şəhərlərin çayları *niyə* gizlətdiyini izah edirsə, bunu *necə* etdikləri haqqında başlıq yanlışdır, mövzu eyni olsa da.

## Qısa nümunə

*Abzas:* "For centuries, cities grew around rivers, but as they expanded, many smaller streams disappeared from view. Engineers covered them with concrete and built roads on top. At the time, this was seen as progress."

- i. The engineering methods used to build roads
- ii. How and why urban rivers were hidden
- iii. The environmental benefits of open water

i başlığı *engineers* və *roads* sözlərindən yapışır, amma abzas yol tikintisi haqqında deyil. iii başlığı mətnin başqa hissəsinə aiddir. **ii başlığı** abzasın mənasını bütövlükdə ifadə edir.

## Vaxtın idarəsi

Hər abzasa təxminən **bir dəqiqə** ayırın. Hansısa abzas çox vaxt aparırsa, irəli keçin: eyni mətnə aid digər suallar onu anlamağa çox vaxt kömək edir. Cavabı boş qoymayın, çünki səhv cavaba görə bal çıxılmır.

## Bacarığı məşq edin

Lexify-da Reading məşqlərində matching headings tapşırıqları var, hər cəhddən sonra isə düzgün cavabları və hər sual növü üzrə dəqiqliyinizi görürsünüz, beləliklə növbəti addımda nə üzərində işləyəcəyinizi bilirsiniz.`,
      },
    },
  },
  {
    slug: "ielts-writing-grammar-mistakes",
    updated: "2026-11-11",
    minutes: 5,
    text: {
      en: {
        title: "IELTS Writing: 8 grammar mistakes that lower your band",
        description: "The eight grammar errors that cost the most marks in IELTS Writing, with wrong and correct examples and a quick way to check your own essay.",
        body: `## Why small mistakes matter

**Grammatical Range and Accuracy** is a quarter of your Writing score. To reach Band 7, most of your sentences need to be free of errors. For Band 6 a mix of simple and complex sentences is enough, even with some mistakes. Most lost marks come from the same eight errors, which repeat in essay after essay.

## 1. Subject–verb agreement

- ✗ *The number of students **have** increased.*
- ✓ *The number of students **has** increased.*

The subject is *the number*, not *students*. Watch long subjects: *One of the main reasons **is**…*, *The percentage of people who cycle **was**…*

## 2. Articles with general and specific nouns

- ✗ *The technology has changed the education.*
- ✓ *Technology has changed education.*

Use no article for uncountable and plural nouns in a general sense, and *the* when both you and the reader know which one: *the education system in my country*.

## 3. Uncountable nouns used as plurals

*Information*, *advice*, *research*, *evidence*, *knowledge*, *equipment* and *traffic* have no plural.

- ✗ *Many researches show…*
- ✓ *Much research shows…* or *Many studies show…*

## 4. Tense in Task 1

When a chart shows past years, describe it in the **past simple**: *In 2005, 48% of workers **travelled** by car.* Use *will* or *is expected to* only for projections.

## 5. Comma splices

- ✗ *Online courses are cheap, they are also flexible.*
- ✓ *Online courses are cheap. They are also flexible.*
- ✓ *Online courses are cheap, and they are also flexible.*

Two full sentences need a full stop, a semicolon or a linking word, not just a comma.

## 6. Wrong use of linking words

- ✗ *Although cars are convenient, but they cause pollution.*
- ✓ *Although cars are convenient, they cause pollution.*

Use *although* **or** *but*, never both. Likewise, *however* starts a new sentence or follows a semicolon: *Cars are convenient; however, they cause pollution.*

## 7. Sentence fragments

- ✗ *Because many people work from home.*
- ✓ *Traffic has fallen because many people work from home.*

A clause starting with *because*, *which* or *while* cannot stand on its own.

## 8. Word form

- ✗ *It is very benefit for children.*
- ✓ *It is very beneficial for children.*

Check that you have used the right part of speech: *economy / economic / economical*, *success / successful / successfully*.

## How to check your own essay

Keep **three minutes** at the end of the test. Read only for these errors, one type at a time: first the verbs, then the nouns, then the punctuation. You will find more mistakes this way than by reading once for everything.

## Practise with feedback

Every essay you write in Lexify gets an estimated band for Grammatical Range and Accuracy, with examples of mistakes from your own text and how to fix them.`,
      },
      ru: {
        title: "IELTS Writing: 8 грамматических ошибок, которые снижают балл",
        description: "Восемь грамматических ошибок, на которых теряют больше всего баллов в IELTS Writing, с неверными и верными примерами и быстрый способ проверить своё эссе.",
        body: `## Почему мелкие ошибки важны

**Grammatical Range and Accuracy** — это четверть балла за Writing. Для Band 7 большинство предложений должны быть без ошибок. Для Band 6 хватит сочетания простых и сложных предложений, даже с ошибками. Большая часть потерянных баллов приходится на одни и те же восемь ошибок, которые повторяются из эссе в эссе.

## 1. Согласование подлежащего и сказуемого

- ✗ *The number of students **have** increased.*
- ✓ *The number of students **has** increased.*

Подлежащее здесь *the number*, а не *students*. Будьте внимательны с длинными подлежащими: *One of the main reasons **is**…*, *The percentage of people who cycle **was**…*

## 2. Артикли с общими и конкретными понятиями

- ✗ *The technology has changed the education.*
- ✓ *Technology has changed education.*

С неисчисляемыми и множественными существительными в общем смысле артикль не нужен. *The* ставится, когда и вы, и читатель знаете, о чём речь: *the education system in my country*.

## 3. Неисчисляемые существительные во множественном числе

У слов *information*, *advice*, *research*, *evidence*, *knowledge*, *equipment* и *traffic* нет множественного числа.

- ✗ *Many researches show…*
- ✓ *Much research shows…* или *Many studies show…*

## 4. Время в Task 1

Если на графике прошлые годы, описывайте его в **past simple**: *In 2005, 48% of workers **travelled** by car.* *Will* или *is expected to* — только для прогнозов.

## 5. Два предложения через запятую

- ✗ *Online courses are cheap, they are also flexible.*
- ✓ *Online courses are cheap. They are also flexible.*
- ✓ *Online courses are cheap, and they are also flexible.*

Два полных предложения разделяют точкой, точкой с запятой или связкой, но не одной запятой.

## 6. Неверные связки

- ✗ *Although cars are convenient, but they cause pollution.*
- ✓ *Although cars are convenient, they cause pollution.*

Используйте *although* **или** *but*, но не оба сразу. *However* начинает новое предложение или стоит после точки с запятой: *Cars are convenient; however, they cause pollution.*

## 7. Незаконченные предложения

- ✗ *Because many people work from home.*
- ✓ *Traffic has fallen because many people work from home.*

Часть с *because*, *which* или *while* не может быть отдельным предложением.

## 8. Форма слова

- ✗ *It is very benefit for children.*
- ✓ *It is very beneficial for children.*

Проверяйте часть речи: *economy / economic / economical*, *success / successful / successfully*.

## Как проверить своё эссе

Оставьте **три минуты** в конце экзамена. Читайте только в поисках этих ошибок и по одному типу за раз: сначала глаголы, потом существительные, потом пунктуация. Так вы найдёте больше, чем если читать один раз «на всё».

## Тренируйтесь с обратной связью

Каждое эссе в Lexify получает примерный балл по Grammatical Range and Accuracy с примерами ошибок из вашего же текста и тем, как их исправить.`,
      },
      az: {
        title: "IELTS Writing: balı aşağı salan 8 qrammatik səhv",
        description: "IELTS Writing-də ən çox bal itirdirən səkkiz qrammatik səhv, yanlış və düzgün nümunələrlə, həmçinin öz essenizi tez yoxlamaq üsulu.",
        body: `## Kiçik səhvlər niyə vacibdir

**Grammatical Range and Accuracy** Writing balının dörddə biridir. Band 7 üçün cümlələrin əksəriyyəti səhvsiz olmalıdır. Band 6 üçün sadə və mürəkkəb cümlələrin qarışığı, hətta bəzi səhvlərlə, kifayətdir. İtirilən balların çoxu esselərdə təkrarlanan eyni səkkiz səhvdən gəlir.

## 1. Mübtəda ilə xəbərin uzlaşması

- ✗ *The number of students **have** increased.*
- ✓ *The number of students **has** increased.*

Burada mübtəda *students* yox, *the number*-dir. Uzun mübtədalara diqqət edin: *One of the main reasons **is**…*, *The percentage of people who cycle **was**…*

## 2. Ümumi və konkret isimlərlə artikl

- ✗ *The technology has changed the education.*
- ✓ *Technology has changed education.*

Ümumi mənada sayılmayan və cəm isimlərlə artikl lazım deyil. *The* həm sizin, həm də oxucunun nədən söhbət getdiyini bildiyi halda işlənir: *the education system in my country*.

## 3. Sayılmayan isimlərin cəm şəkli

*Information*, *advice*, *research*, *evidence*, *knowledge*, *equipment* və *traffic* sözlərinin cəm forması yoxdur.

- ✗ *Many researches show…*
- ✓ *Much research shows…* və ya *Many studies show…*

## 4. Task 1-də zaman

Qrafikdə keçmiş illər göstərilirsə, onu **past simple** ilə təsvir edin: *In 2005, 48% of workers **travelled** by car.* *Will* və ya *is expected to* yalnız proqnozlar üçündür.

## 5. Vergüllə birləşdirilmiş iki cümlə

- ✗ *Online courses are cheap, they are also flexible.*
- ✓ *Online courses are cheap. They are also flexible.*
- ✓ *Online courses are cheap, and they are also flexible.*

İki tam cümlə nöqtə, nöqtəli vergül və ya bağlayıcı sözlə ayrılır, sadəcə vergüllə yox.

## 6. Bağlayıcı sözlərin səhv işlənməsi

- ✗ *Although cars are convenient, but they cause pollution.*
- ✓ *Although cars are convenient, they cause pollution.*

*Although* **və ya** *but* işlədin, ikisini birlikdə yox. *However* isə yeni cümləyə başlayır və ya nöqtəli vergüldən sonra gəlir: *Cars are convenient; however, they cause pollution.*

## 7. Yarımçıq cümlələr

- ✗ *Because many people work from home.*
- ✓ *Traffic has fallen because many people work from home.*

*Because*, *which* və ya *while* ilə başlayan hissə ayrıca cümlə ola bilməz.

## 8. Söz forması

- ✗ *It is very benefit for children.*
- ✓ *It is very beneficial for children.*

Nitq hissəsini yoxlayın: *economy / economic / economical*, *success / successful / successfully*.

## Öz essenizi necə yoxlamaq

İmtahanın sonunda **üç dəqiqə** saxlayın. Yalnız bu səhvləri axtararaq, hər dəfə bir növ üzrə oxuyun: əvvəlcə feillər, sonra isimlər, sonra durğu işarələri. Belə daha çox səhv taparsınız, nəinki hər şey üçün bir dəfə oxuyanda.

## Rəylə məşq edin

Lexify-da yazdığınız hər esse Grammatical Range and Accuracy üzrə təxmini bal alır, öz mətninizdən səhv nümunələri və onların necə düzəldiləcəyi ilə birlikdə.`,
      },
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
