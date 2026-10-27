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
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
