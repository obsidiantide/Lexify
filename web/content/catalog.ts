/**
 * Starter catalogue. `npm run seed` copies it into Firestore, and the
 * public pages fall back to it when Firebase is not configured yet.
 * Replace it with your own courses and lessons (see README → Content).
 */
import type { Course, Lesson } from "@/lib/types";

export const seedCourses: Course[] = [
  {
    id: "ielts-academic",
    order: 1,
    published: true,
    skills: ["reading", "listening", "writing", "speaking"],
    mockCount: 4,
    title: {
      en: "IELTS Academic Complete",
      az: "IELTS Academic Tam kurs",
      ru: "IELTS Academic: полный курс",
    },
    description: {
      en: "Every skill from first lesson to full mock tests, with AI feedback on Writing and Speaking.",
      az: "İlk dərsdən tam sınaq testlərinə qədər bütün bacarıqlar, Writing və Speaking üzrə süni intellekt rəyi ilə.",
      ru: "Все навыки от первого урока до полных пробных тестов, с проверкой Writing и Speaking от ИИ.",
    },
  },
  {
    id: "writing-speaking",
    order: 2,
    published: true,
    skills: ["writing", "speaking"],
    mockCount: 2,
    title: {
      en: "Writing & Speaking Intensive",
      az: "Writing və Speaking intensivi",
      ru: "Интенсив Writing и Speaking",
    },
    description: {
      en: "For candidates whose productive skills hold the overall band back. Unlimited AI-scored essays and speaking answers.",
      az: "Ümumi balını produktiv bacarıqlar aşağı salan namizədlər üçün. Limitsiz süni intellektlə qiymətləndirilən esse və danışıq cavabları.",
      ru: "Для тех, у кого общий балл тянут вниз продуктивные навыки. Неограниченная проверка эссе и устных ответов ИИ.",
    },
  },
];

const L = (en: string, az: string, ru: string) => ({ en, az, ru });

export const seedLessons: Lesson[] = [
  {
    id: "reading-how-it-works",
    courseId: "ielts-academic",
    skill: "reading",
    order: 1,
    minutes: 8,
    free: true,
    published: true,
    title: L("How IELTS Reading works", "IELTS Reading necə qurulub", "Как устроен IELTS Reading"),
    summary: L(
      "Three passages, 40 questions, 60 minutes: how to split your time.",
      "Üç mətn, 40 sual, 60 dəqiqə: vaxtı necə bölmək lazımdır.",
      "Три текста, 40 вопросов, 60 минут: как распределить время.",
    ),
    body: `## The format in one minute

IELTS Academic Reading has **three passages** and **40 questions**, and you have **60 minutes** in total. There is no extra time to transfer answers, so write them in the answer sheet as you go.

The passages get harder, so give yourself less time on the first one:

- Passage 1: about 17 minutes
- Passage 2: about 20 minutes
- Passage 3: about 23 minutes

## Read the questions first

Skim the passage title and headings for 30 seconds, then read the questions. Underline the **key words** that are unlikely to be paraphrased: names, dates, numbers and technical terms. These are your anchors for scanning.

> The answers to most question types appear **in the same order** as the text. Matching headings and matching information are the main exceptions.

## Your raw score and your band

Every correct answer is one mark. A raw score of 30 out of 40 is roughly band 7.0 in Academic Reading, and 23 is roughly band 6.0. Spelling counts, so check every word you copy.

### Try it

Open the Reading practice and do one passage with a 17-minute timer. Afterwards, look at which question type cost you the most marks.`,
  },
  {
    id: "reading-tfng",
    courseId: "ielts-academic",
    skill: "reading",
    order: 2,
    minutes: 12,
    free: false,
    published: true,
    title: L("True / False / Not Given without guesswork", "Təxminsiz True / False / Not Given", "True / False / Not Given без угадывания"),
    summary: L(
      "A three-question test that tells False and Not Given apart.",
      "False və Not Given-i ayırd edən üç sual.",
      "Три вопроса, которые отличают False от Not Given.",
    ),
    body: `## Three answers, three different jobs

True / False / Not Given questions check whether a statement **agrees with the information** in the passage. They are not asking what is true in real life, only what the writer says.

- **True:** the passage says the same thing, usually in different words.
- **False:** the passage says the **opposite**, so the statement cannot be true.
- **Not Given:** the passage does not say enough to decide either way.

## The three-question test

For every statement, find the part of the text it refers to, then ask:

1. **Does the text say this?** If yes, the answer is True.
2. **Does the text say the opposite?** If yes, the answer is False.
3. **Neither?** Then the answer is Not Given. Do not keep searching for a hidden clue.

## Example

> *Passage:* "The bridge, completed in 1932, was the longest of its kind for nearly a decade."

| Statement | Answer | Why |
| --- | --- | --- |
| The bridge was finished in the 1930s. | True | 1932 is in the 1930s. |
| The bridge was the longest of its kind for over twenty years. | False | The text says "nearly a decade". |
| The bridge was expensive to build. | Not Given | Cost is not mentioned. |

## Words that change the answer

Watch the small words, because examiners build False answers around them: **all / some / most**, **always / usually / never**, **only**, **more / less**, and verbs like **suggest** versus **prove**.

> A statement that is *partly* right is still False if one detail contradicts the text.

## Common mistakes

- Using your own knowledge. If the passage doesn't say it, it's Not Given, even if you know it's true.
- Spending too long on one statement. If you can't find it in two minutes, guess Not Given and move on.
- Writing **Yes / No** instead of **True / False**. Copy the exact words from the instructions.

### Try it

Do one True / False / Not Given set in Reading practice. For every mistake, write down which of the three questions you skipped.`,
  },
  {
    id: "reading-headings",
    courseId: "ielts-academic",
    skill: "reading",
    order: 3,
    minutes: 10,
    free: false,
    published: true,
    title: L("Matching headings", "Başlıqların uyğunlaşdırılması", "Подбор заголовков"),
    summary: L(
      "Find the main idea of a paragraph in under a minute.",
      "Abzasın əsas fikrini bir dəqiqədən az müddətdə tap.",
      "Находим главную мысль абзаца меньше чем за минуту.",
    ),
    body: `## What the task asks

You get a list of headings (i, ii, iii...) and must choose the one that matches the **main idea** of each paragraph. There are always more headings than paragraphs.

## Why it's hard

Most wrong headings repeat **words** from the paragraph but describe a **detail**, not the main idea. The right heading usually uses different words to describe what the whole paragraph is about.

## A one-minute method per paragraph

1. Read the **first two sentences** and the **last sentence**. The main idea is usually there.
2. Ask: *what is this paragraph doing?* Describing a problem, giving a cause, comparing, giving a solution, telling history?
3. Pick the heading that describes that **function and topic** together.
4. Only if two headings still fit, read the middle of the paragraph.

## Example

> "Early attempts to grow crops in the region failed repeatedly. Seeds were washed away by seasonal floods, and the few plants that survived were eaten by insects. It was not until irrigation channels were built in the 1800s that farming became reliable."

- *ii. Insects as a threat to local farming* (a detail, wrong)
- *v. Why farming took so long to succeed* (the main idea, correct)
- *vii. The cost of irrigation channels* (cost is not mentioned)

## Practical tips

- Do this question type **first** for the passage: reading for main ideas gives you a map of the text for the other questions.
- Cross out headings as you use them, and use each heading only once unless the instructions say otherwise.
- If there is an example already done, cross out that heading straight away.

### Try it

Take any article in English, cover the headline, and write a six-word heading for each paragraph. It's the same skill.`,
  },
  {
    id: "listening-sections",
    courseId: "ielts-academic",
    skill: "listening",
    order: 1,
    minutes: 7,
    free: true,
    published: true,
    title: L("The four Listening sections", "Listening-in dörd bölməsi", "Четыре секции Listening"),
    summary: L(
      "What each section sounds like and where candidates lose marks.",
      "Hər bölmə necə səslənir və namizədlər harada bal itirir.",
      "Как звучит каждая секция и где теряют баллы.",
    ),
    body: `## Four recordings, heard once

The test has **four sections** and **40 questions**. Each recording is played **once**, and the whole test takes about 30 minutes plus time to check answers.

1. **Section 1:** an everyday conversation, for example booking a room. Expect names, numbers and dates.
2. **Section 2:** a monologue on an everyday topic, such as a tour guide's talk.
3. **Section 3:** a conversation between students and a tutor about an assignment.
4. **Section 4:** an academic lecture with no break in the middle. This is usually the hardest part.

## Use the reading time

Before each section you get time to read the questions. Predict the **type of answer**: a number, a name, a noun or an adjective. When you know what you're listening for, you hear it faster.

## Spelling traps

Names are often spelled out letter by letter. Practise the letters that sound alike in English: **A, E, I** and **G, J**. Numbers such as **fifteen** and **fifty** are another classic trap.

> Write exactly what you hear, and check the word limit: "NO MORE THAN TWO WORDS" means a three-word answer is wrong even if the words are right.`,
  },
  {
    id: "listening-maps",
    courseId: "ielts-academic",
    skill: "listening",
    order: 2,
    minutes: 9,
    free: false,
    published: true,
    title: L("Maps and plans", "Xəritələr və planlar", "Карты и планы"),
    summary: L(
      "Directions vocabulary you need for Section 2.",
      "Section 2 üçün istiqamət lüğəti.",
      "Лексика направлений для Section 2.",
    ),
    body: `## What to expect

Map and plan questions usually come in **Section 2**. A speaker describes a place (a park, a museum, a campus) and you label positions on a map, either by letter or by writing a word.

## Before the recording starts

Use the reading time to orient yourself:

- Find the **starting point** ("You are here", an entrance, a car park).
- Note where **north** is, if shown.
- Look at the labels that are already there: the speaker will use them as reference points.
- Read the gaps in order. Answers come **in order**, usually following the speaker's route.

## Language you must recognise

**Position:** next to, opposite, behind, in front of, between, in the corner, at the end of, on the left / right-hand side, adjacent to.

**Direction:** go straight ahead, turn left, take the second turning, go past, follow the path, cross the bridge, head north, go through the gate.

**Distance and order:** just before, just after, a little further on, halfway along, the first building you come to.

## The classic trap

Speakers often correct themselves: *"The café is on the left... oh no, sorry, they moved it last year, it's now next to the lake."* The **second** location is the answer. Keep listening after you think you've heard it.

## Practise at home

Open a map of a place you know, pick a start point, and describe a route out loud using the phrases above. Then listen to any English guided-tour video and follow along on a map.`,
  },
  {
    id: "listening-lectures",
    courseId: "ielts-academic",
    skill: "listening",
    order: 3,
    minutes: 11,
    free: false,
    published: true,
    title: L("Following a lecture", "Mühazirəni izləmək", "Как не потеряться в лекции"),
    summary: L(
      "Signposting language that tells you a new answer is coming.",
      "Yeni cavabın gəldiyini bildirən keçid ifadələri.",
      "Слова-сигналы, которые подсказывают, что сейчас прозвучит ответ.",
    ),
    body: `## Why Section 4 feels hard

Section 4 is a single academic lecture with **no break** and around ten questions, often note or summary completion. You can't ask the speaker to repeat, so you need to know **where you are** in the talk at every moment.

## Signposting: the lecture's road signs

Lecturers announce what is coming next. When you hear these, the next answer is close:

- **Starting a new point:** "Let's turn to...", "Moving on to...", "The second factor is..."
- **Giving an example:** "For instance...", "A good illustration of this is..."
- **Contrast:** "However...", "On the other hand...", "Despite this..."
- **Result:** "As a result...", "This led to...", "Consequently..."
- **Summing up:** "To sum up...", "So what we've seen is..."

## Follow the headings in the notes

Section 4 notes usually have **headings**. Read them during preparation time. When the lecturer says a heading word, move your eyes to that part of the page. If you missed an answer, leave it and keep up with the speaker.

## Predict the word type

Before listening, mark each gap: noun, plural noun, verb, adjective or number. Singular and plural matter. If the gap is "a ___ of the population", you need a singular noun.

## Train with real lectures

Watch 10-minute talks (TED-Ed, university open courses) with subtitles **off**. Pause every two minutes and write down the main point and one detail. Two or three times a week is enough to see a difference within a month.`,
  },
  {
    id: "writing-task2-structure",
    courseId: "ielts-academic",
    skill: "writing",
    order: 1,
    minutes: 10,
    free: true,
    published: true,
    title: L("A Task 2 structure that always works", "Həmişə işləyən Task 2 strukturu", "Структура Task 2, которая работает всегда"),
    summary: L(
      "Four paragraphs, 260–290 words, 40 minutes.",
      "Dörd abzas, 260–290 söz, 40 dəqiqə.",
      "Четыре абзаца, 260–290 слов, 40 минут.",
    ),
    body: `## What the examiner scores

Task 2 is marked on four criteria, each worth a quarter of the score:

- **Task Response:** do you answer every part of the question and keep a clear position?
- **Coherence and Cohesion:** is the essay logically organised, with one main idea per paragraph?
- **Lexical Resource:** range and accuracy of vocabulary.
- **Grammatical Range and Accuracy:** variety and accuracy of sentence structures.

## Four paragraphs

1. **Introduction (2 sentences):** paraphrase the question, then state your position.
2. **Body 1 (5–6 sentences):** your first main reason, explained and supported with an example.
3. **Body 2 (5–6 sentences):** your second reason, or the other side if the question asks for both views.
4. **Conclusion (1–2 sentences):** restate your position in new words.

Aim for **260–290 words**. Fewer than 250 words is penalised, and much longer essays usually contain more mistakes.

## Spend five minutes planning

Write down your position and one idea per body paragraph before you start. Essays that are planned score higher on Coherence almost every time.

> Try it now: the diagnostic Writing task gives you an AI score on all four criteria.`,
  },
  {
    id: "writing-task1-overview",
    courseId: "ielts-academic",
    skill: "writing",
    order: 2,
    minutes: 9,
    free: false,
    published: true,
    title: L("Task 1: writing the overview", "Task 1: icmalın yazılması", "Task 1: как писать overview"),
    summary: L(
      "The single sentence that decides your Task Achievement score.",
      "Task Achievement balını həll edən bir cümlə.",
      "Одно предложение, от которого зависит Task Achievement.",
    ),
    body: `## The overview decides your band

In Academic Task 1 you describe a chart, table, diagram or map in at least **150 words** in about **20 minutes**. The criterion **Task Achievement** depends heavily on one thing: a clear **overview**.

> Without an overview, Task Achievement is usually limited to band 5, however accurate the details are.

## What an overview is

An overview is **two sentences** that describe the **main trends or the biggest differences**, with **no numbers**. It answers the question: *if I could tell someone only two things about this chart, what would they be?*

## How to find it

Look at the chart for one minute and ask:

1. What is the **overall direction**? Up, down, stable, fluctuating?
2. What is the **biggest** and the **smallest** item?
3. Is there a **clear change** or a crossing point?
4. For a process: how many **stages**, where does it **start** and **end**?

## Example

> *Chart:* car, bus and bicycle use in a city, 2000–2020.
>
> **Overview:** Overall, car use rose steadily over the period, while bus travel declined. Bicycle use remained the least common option, although it increased slightly towards the end.

## Where to put it

Put the overview straight **after the introduction** (a one-sentence paraphrase of the task). Examiners find it immediately, and you can't run out of time before writing it.

## Structure for 20 minutes

1. Introduction: paraphrase what the chart shows (1 sentence).
2. Overview: main trends (2 sentences).
3. Body 1: details with numbers for the first group of data.
4. Body 2: details with numbers for the second group.

Don't add a conclusion or your opinion: Task 1 is a description, not an argument.`,
  },
  {
    id: "writing-cohesion",
    courseId: "ielts-academic",
    skill: "writing",
    order: 3,
    minutes: 8,
    free: false,
    published: true,
    title: L("Linking ideas naturally", "Fikirləri təbii əlaqələndirmək", "Естественные связки между идеями"),
    summary: L(
      "Why fewer linking words often score higher.",
      "Niyə daha az bağlayıcı söz çox vaxt daha yüksək bal gətirir.",
      "Почему меньше связок часто даёт более высокий балл.",
    ),
    body: `## The linking-word myth

Many candidates start every sentence with *Moreover*, *Furthermore* or *In addition*. Examiners see this as **mechanical** linking, and the band descriptors penalise it: Coherence and Cohesion at band 7 needs cohesive devices used *appropriately*, "although there may be some under-/over-use".

## Three ways to connect ideas

**1. Linking words, but only where they add meaning.**
Use them for real logical relationships: contrast (*however, although*), cause (*because, as a result*), example (*for instance*). One or two per paragraph is plenty.

**2. Reference words.**
Pronouns and *this / these / such* connect sentences without any linking word:
> Many cities are introducing congestion charges. **This policy** has reduced traffic in London by around a third.

**3. Repeating the idea with a synonym.**
> Governments should invest in public transport. **Such spending** would also reduce pollution.

## Before and after

> *Before:* Moreover, cars are expensive. Furthermore, they pollute. In addition, they cause traffic.
>
> *After:* Cars are not only expensive to run but also a major source of pollution, and the traffic they create costs commuters hours every week.

The second version uses one structure instead of three linking words, and it reads naturally.

## Paragraph checklist

- One main idea per paragraph, stated in the first sentence.
- Each sentence develops the one before it: reason, explanation, example, result.
- No linking word that you would not use when speaking.

### Try it

Take your last essay, delete every linking word at the start of a sentence, and reconnect the sentences with *this*, *such* or a synonym where needed.`,
  },
  {
    id: "speaking-part2",
    courseId: "ielts-academic",
    skill: "speaking",
    order: 1,
    minutes: 9,
    free: false,
    published: true,
    title: L("Two minutes on any Part 2 topic", "İstənilən Part 2 mövzusunda iki dəqiqə", "Две минуты на любую тему Part 2"),
    summary: L(
      "Use the one minute of preparation to plan a story.",
      "Bir dəqiqəlik hazırlıqdan hekayə planlamaq üçün istifadə et.",
      "Используйте минуту подготовки, чтобы спланировать историю.",
    ),
    body: `## The format

In Part 2 you get a **cue card** with a topic and three or four prompts, **one minute** to prepare, and then speak for **up to two minutes**. The examiner will stop you at two minutes, which is fine.

## Plan a story, not a list

The prompts ("who, when, what, why") are there to help, but answering them one by one sounds like a list. Instead, use the minute to plan a short **story**:

1. **Set the scene (15 seconds):** when and where it happened.
2. **What happened (60 seconds):** two or three events in order, with details.
3. **How you felt and why it matters (30 seconds):** this naturally answers the "explain why" prompt.

## What to write in one minute

Don't write sentences. Write **five or six key words** in a column: a name, a place, two events, a feeling. Glance at them while you speak.

## Example notes

> *Describe a time you helped someone.*
>
> summer 2023 · neighbour Leyla · moving flat · broke lamp! · pizza · felt useful

From these notes you can talk for two minutes, and the small surprise ("broke a lamp") makes the story memorable.

## When you run out of things to say

Use these extensions instead of stopping:

- "What I remember most clearly is..."
- "If it happened again, I would probably..."
- "The reason it stayed with me is..."

### Try it

Set a timer for 1 minute, plan with six words, then record yourself for 2 minutes. Listen back and count the pauses longer than three seconds.`,
  },
  {
    id: "speaking-fluency",
    courseId: "ielts-academic",
    skill: "speaking",
    order: 2,
    minutes: 7,
    free: false,
    published: true,
    title: L("Fluency without memorised answers", "Əzbərlənmiş cavablarsız axıcılıq", "Беглость без заученных ответов"),
    summary: L(
      "Fillers, self-correction and how examiners hear them.",
      "Doldurucu sözlər, özünü düzəltmə və imtahançılar bunları necə qəbul edir.",
      "Слова-паразиты, самоисправление и как их слышит экзаменатор.",
    ),
    body: `## What examiners mean by fluency

**Fluency and Coherence** is about speaking at length **without noticeable effort**, with ideas that follow each other logically. It is not about speed. A calm speaker with few long pauses scores higher than a fast one who keeps stopping.

## Pauses and fillers

Everybody pauses. What matters is **why** you pause:

- Pausing to **find an idea** is natural and accepted.
- Pausing to **find a word or grammar** too often is what lowers the score.

Natural fillers that native speakers use are fine in moderation: *well, actually, I mean, let me think, that's an interesting question*. Long *ehhh* and *mmm* sounds, repeated many times, are not.

## Self-correction

Correcting yourself once in a while shows control: *"I go... I went there last year."* Correcting every sentence breaks the flow. If the mistake doesn't change the meaning, keep going.

## Why memorised answers fail

Examiners are trained to spot memorised answers: the speech suddenly becomes faster, more formal and doesn't quite answer the question. They can then ask unexpected follow-up questions, and the score is based on your natural speech.

## A daily routine (10 minutes)

1. Pick a random Part 1 question (hometown, work, hobbies, food).
2. Answer for **45 seconds** without stopping, recording yourself.
3. Listen back and note the words you were searching for.
4. Look them up, and answer the same question again.

Ten minutes a day for a month does more than memorising a hundred answers.`,
  },
  {
    id: "speaking-part3",
    courseId: "ielts-academic",
    skill: "speaking",
    order: 3,
    minutes: 10,
    free: false,
    published: true,
    title: L("Part 3: answering abstract questions", "Part 3: mücərrəd suallara cavab", "Part 3: ответы на абстрактные вопросы"),
    summary: L(
      "Give an opinion, a reason and an example every time.",
      "Hər dəfə fikir, səbəb və nümunə ver.",
      "Каждый раз: мнение, причина и пример.",
    ),
    body: `## How Part 3 is different

Part 3 lasts four to five minutes and asks **abstract questions** linked to your Part 2 topic: about society, the future, comparisons, causes. Short answers here limit your score, because the examiner wants to hear you **develop** ideas.

## The OREx pattern

For every answer, give:

1. **Opinion:** a direct answer to the question.
2. **Reason:** why you think so.
3. **Example:** something specific, from your country, your experience or the news.
4. *(Optional)* **Other side:** "Having said that, ..."

## Example

> *Do you think people help their neighbours less than in the past?*
>
> "Yes, I'd say they do, at least in big cities. **The main reason** is that people move a lot, so they don't get to know the people next door. **For example**, in my building in Baku I only know two families out of twenty, while my grandparents knew everyone on their street. **Having said that**, in smaller towns it's still very common to help each other."

That's around 30 seconds, which is the right length.

## Useful language

- **Speculating:** "It's hard to say, but I suspect...", "I'd imagine that..."
- **Comparing:** "Compared to my parents' generation...", "Whereas in the past..."
- **Future:** "In the next ten years, it's likely that..."
- **Buying time:** "That's something I haven't really thought about, but..."

## If you don't know anything about the topic

You don't need expert knowledge. Say so, then answer from general experience: "I'm not an expert on this, but from what I've seen..." The examiner scores your English, not your facts.`,
  },
  {
    id: "ws-task2-ideas",
    courseId: "writing-speaking",
    skill: "writing",
    order: 1,
    minutes: 8,
    free: false,
    published: true,
    title: L("Generating ideas fast", "Fikirləri tez tapmaq", "Как быстро находить идеи"),
    summary: L(
      "A two-minute brainstorm for any Task 2 topic.",
      "İstənilən Task 2 mövzusu üçün iki dəqiqəlik beyin həmləsi.",
      "Двухминутный мозговой штурм для любой темы Task 2.",
    ),
    body: `## The two-minute brainstorm

Many candidates lose five minutes staring at a Task 2 question. A simple system gets you two strong ideas in **two minutes**.

## Step 1: find the exact question (20 seconds)

Underline the **topic** and the **instruction**. "To what extent do you agree?", "Discuss both views", "What are the causes and solutions?" need different structures. Answering a different question than the one asked limits Task Response.

## Step 2: ask the angle questions (60 seconds)

Run the topic through these angles and write one word for each that gives you an idea:

- **Money:** cost, jobs, the economy
- **Health:** physical and mental
- **Education:** skills, children, knowledge
- **Environment:** pollution, resources
- **Society:** family, community, equality
- **Individual:** freedom, happiness, time

You won't get an idea for every angle, but two or three will work.

## Step 3: choose and extend (40 seconds)

Pick the **two** ideas you can explain best, not the most impressive ones. For each, write: idea, why, example.

## Example

> *Some people think all university education should be free. To what extent do you agree?*
>
> - **Money:** free = more talent from poor families → whole economy benefits (example: Germany)
> - **Society:** but taxpayers pay for degrees with low job value → limit free places to key subjects
>
> Position: partly agree.

### Try it

Take five old Task 2 questions and only do the brainstorm, two minutes each. Writing full essays is not needed to train this skill.`,
  },
  {
    id: "ws-pronunciation",
    courseId: "writing-speaking",
    skill: "speaking",
    order: 1,
    minutes: 8,
    free: false,
    published: true,
    title: L("Word stress and intonation", "Söz vurğusu və intonasiya", "Ударение и интонация"),
    summary: L(
      "The pronunciation features that move your score most.",
      "Balına ən çox təsir edən tələffüz xüsusiyyətləri.",
      "Особенности произношения, которые сильнее всего влияют на балл.",
    ),
    body: `## What the examiner listens for

The **Pronunciation** criterion is not about having a British or American accent. It's about how **easy you are to understand** and whether you use features like **word stress**, **sentence stress** and **intonation** to make meaning clear.

## Word stress

In English, one syllable in a word is louder and longer. Wrong stress can make a word hard to recognise, even if every sound is correct.

- **PHOtograph**, phoTOgraphy, photoGRAPHic
- **ECOnomy** → e**CO**nomy, eco**NO**mic
- Nouns vs verbs: a **RE**cord / to re**CORD**, a **PRE**sent / to pre**SENT**

Azerbaijani and Russian speakers often stress the last syllable or keep all syllables equal. Check the stress of new words in a dictionary: it's marked with ˈ before the stressed syllable.

## Sentence stress

Stress the **content words** (nouns, main verbs, adjectives) and reduce the small words:

> I **WENT** to the **MARket** to buy some **BREAD**.

The reduced words (*to, the, some*) become short and quick. This rhythm makes you sound much more natural.

## Intonation

- Your voice **falls** at the end of statements and *wh-* questions.
- It **rises** on yes/no questions and when you list items before the last one.
- A flat voice throughout sounds bored or memorised.

## Practice: shadowing

1. Pick a 30-second clip of a clear speaker (a podcast or TED talk).
2. Listen once with the transcript, marking stressed words.
3. Play it again and speak **at the same time** as the speaker, copying the rhythm.
4. Record yourself and compare.

Five minutes of shadowing a day improves rhythm faster than any amount of reading.`,
  },
];
