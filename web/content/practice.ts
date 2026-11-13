/**
 * Starter practice content: exercises for every skill plus a sample mock
 * test per skill. `npm run seed` writes them to `practiceTasks` and their
 * answers to `answerKeys`. Add your own in the admin panel.
 */
import type { AnswerKey } from "@/lib/diagnostic/types";
import type { PracticeTask } from "@/lib/practice/types";
import { seedAnswerKeys as diagnosticKeys, seedDiagnosticTasks } from "./diagnostic";

const TFNG = "Do the following statements agree with the information in the passage? Choose TRUE if the statement agrees with the information, FALSE if it contradicts it, and NOT GIVEN if there is no information on this.";
const ALL = ["ielts-academic"];
const WS = ["ielts-academic", "writing-speaking"];
const ENDINGS_RIVERS = [
  { value: "A", label: "makes valuable land available for building." },
  { value: "B", label: "can push traffic onto nearby streets." },
  { value: "C", label: "helps to cool the surrounding area on hot days." },
  { value: "D", label: "always attracts more visitors than expected." },
  { value: "E", label: "can hold more water during heavy rain than a pipe." },
  { value: "F", label: "is usually paid for by private companies." },
];

const HEADINGS_SLEEP = [
  { value: "i", label: "Why sleep was once thought to be useless" },
  { value: "ii", label: "How much sleep adults really need" },
  { value: "iii", label: "Evidence that sleep protects learning" },
  { value: "iv", label: "The process behind storing memories at night" },
  { value: "v", label: "The dangers of sleeping pills" },
  { value: "vi", label: "What learners should do differently" },
];

const exercises: PracticeTask[] = [
  {
    id: "practice-reading-night-trains",
    section: "reading",
    kind: "exercise",
    order: 1,
    courseIds: ALL,
    free: true,
    title: "The return of the night train",
    active: true,
    durations: { light: 12, full: 12 },
    passages: [
      {
        id: "p1",
        title: "The return of the night train",
        text: `**A** In the 1990s and early 2000s, overnight trains seemed to be disappearing from Europe. Low-cost airlines could carry passengers between capital cities in two hours for less than the price of a sleeping compartment, and many national rail companies decided that their old sleeper carriages were not worth replacing.

**B** Since around 2016, however, the trend has reversed. Austria's national operator bought several routes that a German company had abandoned and ordered new carriages with small private cabins. Other operators followed, and by the early 2020s new overnight services linked cities such as Vienna, Brussels, Amsterdam and Paris.

**C** The main reason for this revival is concern about the climate. A seat on a night train produces a small fraction of the emissions of the same journey by air. Travellers also value the fact that they arrive in the city centre in the morning, without the time spent travelling to and from airports.

**D** The business is still difficult. Sleeper carriages hold far fewer passengers than ordinary ones, and each train is used for only one journey a day. Some operators therefore say that night trains will need public support if ticket prices are to stay competitive with flights.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "True / False / Not Given",
        instructions: TFNG,
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "tfng", prompt: "Cheap flights were one reason why night trains became less common." },
          { id: "q2", number: 2, type: "tfng", prompt: "The Austrian operator designed its routes from the beginning without help." },
          { id: "q3", number: 3, type: "tfng", prompt: "Night trains are now cheaper than flights on most routes." },
          { id: "q4", number: 4, type: "tfng", prompt: "Some travellers like arriving directly in the city centre." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q5", number: 5, type: "gap", prompt: "The new Austrian carriages include small ______.", maxWords: 2 },
          { id: "q6", number: 6, type: "gap", prompt: "Some operators believe night trains will require ______ to keep prices low.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-listening-museum",
    section: "listening",
    kind: "exercise",
    order: 1,
    courseIds: ALL,
    free: false,
    title: "A tour of the Harbour Museum",
    active: true,
    durations: { light: 6, full: 6 },
    audio: [
      {
        id: "a1",
        title: "Section 2",
        url: "/audio/practice-listening-1.mp3",
        transcript:
          "Good afternoon, everyone, and welcome to the Harbour Museum. My name is Claire, and I'll be your guide for the next hour. Before we start, a few practical points. The museum was originally a warehouse, built in 1860, and it opened as a museum much later, in 1992. Bags are not allowed in the galleries, so please leave them in the lockers next to the shop. The lockers are free, but you will need a one manat coin, which you get back at the end. Our tour starts on the ground floor, in the gallery about shipbuilding. The most popular object there is a model of a steam ship, which took two volunteers six years to build. After that, we go up to the first floor, where you can see the map room. Please don't touch the maps, because they are very fragile, and remember that photography is not allowed in that room. We finish on the top floor, in the café, where there is a fantastic view of the harbour. If you show your ticket there, you get ten percent off any drink.",
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Note completion",
        instructions: "Complete the notes below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "gap", prompt: "The building was built in ______.", maxWords: 1 },
          { id: "q2", number: 2, type: "gap", prompt: "To use a locker, visitors need a ______.", maxWords: 3 },
          { id: "q3", number: 3, type: "gap", prompt: "Volunteers spent ______ years making the model ship.", maxWords: 1 },
          { id: "q4", number: 4, type: "gap", prompt: "Photos cannot be taken in the ______.", maxWords: 2 },
          { id: "q5", number: 5, type: "gap", prompt: "Showing a ticket gives a discount in the ______.", maxWords: 1 },
        ],
      },
    ],
  },
  {
    id: "practice-writing-remote-work",
    section: "writing",
    kind: "exercise",
    order: 1,
    courseIds: WS,
    free: false,
    title: "Task 2: working from home",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "More and more people now work from home for at least part of the week.\n\nDo the advantages of this trend outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-speaking-free-time",
    section: "speaking",
    kind: "exercise",
    order: 1,
    courseIds: WS,
    free: false,
    title: "Part 1: free time",
    active: true,
    durations: { light: 4, full: 4 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "What do you usually do in your free time?",
          "Do you prefer spending free time alone or with other people?",
          "Is there a hobby you would like to try in the future?",
          "Did you have more free time when you were a child?",
        ],
      },
    ],
  },
  {
    id: "practice-reading-sleep-memory",
    section: "reading",
    kind: "exercise",
    order: 2,
    courseIds: ALL,
    free: false,
    title: "Sleep and memory",
    active: true,
    durations: { light: 15, full: 15 },
    passages: [
      {
        id: "p1",
        title: "Sleep and memory",
        text: `**A** For most of history, sleep was seen as a time when the brain simply switched off. Philosophers described it as a kind of temporary death, and early scientists assumed that nothing useful happened until the sleeper woke up. This view began to change in the 1950s, when researchers recording brain activity noticed that during certain stages of sleep the brain was almost as active as when awake.

**B** Today, one of the best-established findings in sleep research is that sleep helps us keep what we have learned. In a typical experiment, volunteers learn a list of word pairs in the evening and are tested twelve hours later. Those who slept in between remember significantly more than those who stayed awake for the same period, even when both groups are tested at the same time of day.

**C** The deep, slow-wave stage of sleep appears to be particularly important. During this stage, the hippocampus, a small structure that stores new information for a short time, replays the day's experiences. These signals are passed to the outer layer of the brain, where long-term memories are kept. Researchers have shown that gently playing sounds linked to a task during deep sleep can strengthen the memory of that task, although the effect is small.

**D** The practical lessons for students are straightforward. Staying up all night before an exam is likely to be counterproductive, because the material studied cannot be stored properly. Short daytime naps of around twenty minutes can also help, but they are not a substitute for a full night. Perhaps most surprisingly, studies suggest that reviewing material shortly before going to bed is more effective than reviewing it first thing in the morning.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Matching headings",
        instructions: "The passage has four paragraphs, A–D. Choose the correct heading for each paragraph from the list of headings.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "match", prompt: "Paragraph A", options: HEADINGS_SLEEP },
          { id: "q2", number: 2, type: "match", prompt: "Paragraph B", options: HEADINGS_SLEEP },
          { id: "q3", number: 3, type: "match", prompt: "Paragraph C", options: HEADINGS_SLEEP },
          { id: "q4", number: 4, type: "match", prompt: "Paragraph D", options: HEADINGS_SLEEP },
        ],
      },
      {
        id: "g2",
        typeLabel: "Multiple choice",
        instructions: "Choose the correct letter, A, B, C or D.",
        passageId: "p1",
        light: true,
        questions: [
          {
            id: "q5",
            number: 5,
            type: "mcq",
            prompt: "In the experiment described in paragraph B, the two groups",
            options: [
              { value: "A", label: "learned different lists of words." },
              { value: "B", label: "were tested at the same time of day." },
              { value: "C", label: "were tested immediately after learning." },
              { value: "D", label: "slept for different lengths of time." },
            ],
          },
          {
            id: "q6",
            number: 6,
            type: "mcq",
            prompt: "According to paragraph C, the hippocampus",
            options: [
              { value: "A", label: "stores memories permanently." },
              { value: "B", label: "is only active when we are awake." },
              { value: "C", label: "holds new information for a short time." },
              { value: "D", label: "reacts strongly to sounds during sleep." },
            ],
          },
          {
            id: "q7",
            number: 7,
            type: "mcq",
            prompt: "Which piece of advice does the writer find most unexpected?",
            options: [
              { value: "A", label: "Avoid studying all night before an exam." },
              { value: "B", label: "Take a short nap during the day." },
              { value: "C", label: "Sleep for a full night." },
              { value: "D", label: "Review material just before sleeping." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "practice-reading-cities-cycling",
    section: "reading",
    kind: "exercise",
    order: 3,
    courseIds: ALL,
    free: false,
    title: "Cities built for bicycles",
    active: true,
    durations: { light: 12, full: 12 },
    passages: [
      {
        id: "p1",
        title: "Cities built for bicycles",
        text: `Copenhagen and Amsterdam are often presented as proof that cycling is part of the national character in Denmark and the Netherlands. In fact, both cities were heading in the same direction as the rest of Europe in the 1960s: car ownership was rising quickly, and planners were preparing to build motorways through historic neighbourhoods.

What changed the direction was a combination of protest and crisis. In the Netherlands, a public campaign against the number of children killed in road accidents gained wide support in the early 1970s. At almost the same time, the oil crisis of 1973 made fuel expensive and led the government to introduce car-free Sundays. Politicians began to see cycling as a practical answer to both problems.

The key decision was to build separate cycle lanes, protected from traffic by kerbs or parked cars, rather than simply painting lines on the road. Research has since shown that most people will only cycle regularly if they feel safe, and that physical separation matters far more than the total length of the network. Today, around a third of all trips in Amsterdam are made by bicycle.

Other cities have tried to copy this model with mixed results. Paris greatly expanded its network after 2020 and saw cycling rise sharply, while some cities that added only painted lanes reported little change. Experts conclude that the attitude of the population is less important than the quality of the infrastructure.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Yes / No / Not Given",
        instructions: "Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if it contradicts the views of the writer, and NOT GIVEN if it is impossible to say what the writer thinks about this.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "ynng", prompt: "Cycling has always been part of the national culture in Denmark and the Netherlands." },
          { id: "q2", number: 2, type: "ynng", prompt: "Road safety campaigns helped to change transport policy in the Netherlands." },
          { id: "q3", number: 3, type: "ynng", prompt: "Painted cycle lanes are as effective as physically separated ones." },
          { id: "q4", number: 4, type: "ynng", prompt: "Cycling in Paris is now more common than in Amsterdam." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q5", number: 5, type: "gap", prompt: "In the 1960s, planners were getting ready to build ______ through old parts of the cities.", maxWords: 1 },
          { id: "q6", number: 6, type: "gap", prompt: "After the oil crisis, the Dutch government introduced ______.", maxWords: 2 },
          { id: "q7", number: 7, type: "gap", prompt: "People cycle regularly only when they ______.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-reading-urban-bees",
    section: "reading",
    kind: "exercise",
    order: 4,
    courseIds: ALL,
    free: false,
    title: "Bees in the city",
    active: true,
    durations: { light: 12, full: 12 },
    passages: [
      {
        id: "p1",
        title: "Bees in the city",
        text: `Over the past twenty years, beekeeping has spread from the countryside to the rooftops of large cities. In one European capital, the number of registered hives roughly doubled in just five years, and hotels, banks and office buildings began keeping bees as part of their environmental programmes.

Supporters argue that cities can be surprisingly good places for bees. Parks, private gardens and street trees offer a wide variety of flowers that bloom at different times of the year, while much modern farmland is planted with a single crop and regularly sprayed with pesticides. Several studies have found that honeybee colonies in cities produce more honey than those in the countryside.

Ecologists, however, warn that the trend may not help nature as much as people believe. The honeybee is a managed species, kept mainly for its honey, and it competes for nectar and pollen with hundreds of species of wild bees. One survey concluded that in some districts there were now more hives than the local flowers could support, which left less food for wild species.

For this reason, a number of city councils have changed their advice. Instead of encouraging residents to set up new hives, they now recommend planting a mix of flowers, leaving small areas of grass uncut and providing nesting sites for solitary bees, which live alone rather than in colonies.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "True / False / Not Given",
        instructions: TFNG,
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "tfng", prompt: "Keeping bees in cities has become more popular over the last two decades." },
          { id: "q2", number: 2, type: "tfng", prompt: "Most hives in cities belong to private individuals." },
          { id: "q3", number: 3, type: "tfng", prompt: "Farmland usually offers bees a wider variety of flowers than cities do." },
          { id: "q4", number: 4, type: "tfng", prompt: "Honeybees and wild bees feed on the same resources." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Multiple choice",
        instructions: "Choose the correct letter, A, B, C or D.",
        passageId: "p1",
        light: true,
        questions: [
          {
            id: "q5",
            number: 5,
            type: "mcq",
            prompt: "According to the third paragraph, ecologists are mainly worried that honeybees",
            options: [
              { value: "A", label: "produce less honey in cities than expected." },
              { value: "B", label: "may leave less food for wild bees." },
              { value: "C", label: "spread diseases to other insects." },
              { value: "D", label: "are difficult to look after on rooftops." },
            ],
          },
          {
            id: "q6",
            number: 6,
            type: "mcq",
            prompt: "What do some city councils now advise residents to do?",
            options: [
              { value: "A", label: "Set up more hives on their buildings." },
              { value: "B", label: "Buy honey from local beekeepers." },
              { value: "C", label: "Make their gardens more suitable for wild bees." },
              { value: "D", label: "Stop growing flowers that attract honeybees." },
            ],
          },
        ],
      },
      {
        id: "g3",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: false,
        questions: [
          { id: "q7", number: 7, type: "gap", prompt: "Councils suggest leaving some small areas of grass ______.", maxWords: 1 },
          { id: "q8", number: 8, type: "gap", prompt: "Solitary bees need ______ provided for them.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-reading-buried-rivers",
    section: "reading",
    kind: "exercise",
    order: 5,
    courseIds: ALL,
    free: false,
    title: "Bringing buried rivers back",
    active: true,
    durations: { light: 12, full: 15 },
    passages: [
      {
        id: "p1",
        title: "Bringing buried rivers back",
        text: `For centuries, cities grew around rivers, but as they expanded, many smaller rivers and streams disappeared from view. Engineers covered them with concrete, turned them into underground drains and built roads on top. In the nineteenth and twentieth centuries this was seen as progress: buried rivers no longer smelled, and covering them freed valuable land for building.

In recent decades, a growing number of cities have begun to reverse this process, a practice known as "daylighting". One well-known example is in an Asian capital, where an elevated motorway was demolished so that the stream beneath it could be opened again. The plan was expensive and divided public opinion at first, but the new waterside park soon attracted millions of visitors a year.

Supporters point to a range of benefits. Open water and the vegetation along its banks cool the surrounding streets on hot days, in some cases by several degrees. Restored rivers also provide habitats for fish, birds and insects that had vanished from the area. In addition, a river with natural banks can hold much more water during heavy rain than a narrow pipe, which reduces the risk of serious flooding further downstream.

Critics, however, argue that the costs are often underestimated. Removing a road can push traffic onto nearby streets, and homes next to a new park usually become more expensive, which may force out long-term residents and small shops. Some engineers also note that a river which has been underground for a century may carry polluted water, and it can take years of cleaning before it is safe for people to touch.

Because of these concerns, many recent projects are smaller and more gradual. Instead of opening several kilometres at once, cities restore short sections where land is already available, such as old car parks or school grounds, and involve local residents in the design from the beginning. Planners say this approach costs less and makes it easier to gain public support for later stages.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Matching sentence endings",
        instructions: "Complete each sentence with the correct ending, A–F. There are more endings than sentences.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "match", prompt: "Covering a river with concrete", options: ENDINGS_RIVERS },
          { id: "q2", number: 2, type: "match", prompt: "Vegetation along a restored river", options: ENDINGS_RIVERS },
          { id: "q3", number: 3, type: "match", prompt: "A river with natural banks", options: ENDINGS_RIVERS },
          { id: "q4", number: 4, type: "match", prompt: "Removing a road to open a river", options: ENDINGS_RIVERS },
        ],
      },
      {
        id: "g2",
        typeLabel: "True / False / Not Given",
        instructions: TFNG,
        passageId: "p1",
        light: true,
        questions: [
          { id: "q5", number: 5, type: "tfng", prompt: "Everyone supported the plan to remove the motorway from the start." },
          { id: "q6", number: 6, type: "tfng", prompt: "Restored rivers can bring back wildlife that had disappeared from the area." },
          { id: "q7", number: 7, type: "tfng", prompt: "Most daylighting projects are paid for by national governments." },
        ],
      },
      {
        id: "g3",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: false,
        questions: [
          { id: "q8", number: 8, type: "gap", prompt: "Water from a river that has been underground for a long time may be ______.", maxWords: 1 },
          { id: "q9", number: 9, type: "gap", prompt: "Smaller projects often use land such as old ______ or school grounds.", maxWords: 2 },
          { id: "q10", number: 10, type: "gap", prompt: "Involving residents early makes it easier to gain ______ for later stages.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-reading-habits",
    section: "reading",
    kind: "exercise",
    order: 6,
    courseIds: ALL,
    free: false,
    title: "How habits work",
    active: true,
    durations: { light: 12, full: 15 },
    passages: [
      {
        id: "p1",
        title: "How habits work",
        text: `Much of what we do each day is not the result of careful decisions. Researchers estimate that a large share of daily behaviour, from the route we take to work to the way we make coffee, is repeated almost automatically in the same context. These habits save mental effort: once an action is linked to a particular cue, such as a time of day or a place, the brain no longer needs to weigh up the options each time.

This efficiency, however, has a cost. Because habits are triggered by cues rather than by goals, they continue even when they no longer serve us. In one well-known study, people who regularly ate popcorn at the cinema ate almost as much stale, week-old popcorn as fresh popcorn, but only when they were watching a film in a cinema. In a meeting room, they ate far less of the stale snack. In my view, this shows clearly that willpower alone is a weak tool against an established habit.

Popular advice often claims that a new habit takes exactly twenty-one days to form. Research does not support such a precise figure. In a study that followed volunteers trying to adopt a new daily behaviour, the time it took for the action to feel automatic ranged from a few weeks to many months, depending on the person and the difficulty of the task. Interestingly, missing a single day made little difference to the final result.

The most effective strategies therefore focus on the environment rather than on motivation. Changing the cues, for example by keeping fruit on the kitchen table or leaving running shoes by the door, makes the desired action easier to start. I believe that schools and employers could do far more to design spaces that encourage healthy routines, instead of simply telling people to try harder.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Yes / No / Not Given",
        instructions: "Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if it contradicts the views of the writer, and NOT GIVEN if it is impossible to say what the writer thinks about this.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "ynng", prompt: "Habits help people to save mental effort." },
          { id: "q2", number: 2, type: "ynng", prompt: "Willpower is usually enough to break a long-standing habit." },
          { id: "q3", number: 3, type: "ynng", prompt: "Most of our habits are formed during childhood." },
          { id: "q4", number: 4, type: "ynng", prompt: "Employers should help to create environments that support good habits." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Multiple choice",
        instructions: "Choose the correct letter, A, B, C or D.",
        passageId: "p1",
        light: true,
        questions: [
          {
            id: "q5",
            number: 5,
            type: "mcq",
            prompt: "The popcorn study suggests that how much people ate depended mainly on",
            options: [
              { value: "A", label: "how hungry they were." },
              { value: "B", label: "how fresh the popcorn was." },
              { value: "C", label: "where they were eating." },
              { value: "D", label: "how much the snack cost." },
            ],
          },
          {
            id: "q6",
            number: 6,
            type: "mcq",
            prompt: "What does the writer say about the claim that habits take twenty-one days to form?",
            options: [
              { value: "A", label: "It is true for simple tasks only." },
              { value: "B", label: "It is more precise than the research allows." },
              { value: "C", label: "It was first made by scientists." },
              { value: "D", label: "It ignores the effect of missing a day." },
            ],
          },
        ],
      },
      {
        id: "g3",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose ONE WORD ONLY from the passage for each answer.",
        passageId: "p1",
        light: false,
        questions: [
          { id: "q7", number: 7, type: "gap", prompt: "Habits are triggered by ______ rather than by goals.", maxWords: 1 },
          { id: "q8", number: 8, type: "gap", prompt: "Missing a single ______ had little effect on how a new habit developed.", maxWords: 1 },
          { id: "q9", number: 9, type: "gap", prompt: "The best strategies focus on the environment instead of on ______.", maxWords: 1 },
        ],
      },
    ],
  },
  {
    id: "practice-writing-task1-energy",
    section: "writing",
    kind: "exercise",
    order: 2,
    courseIds: WS,
    free: false,
    title: "Task 1: household energy use",
    active: true,
    durations: { light: 20, full: 20 },
    writing: [
      {
        id: "task1",
        light: true,
        minWords: 150,
        prompt:
          "The chart below shows the percentage of household energy used for different purposes in one country in 1990 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        chart: {
          title: "Household energy use by purpose",
          unit: "%",
          categories: ["Heating", "Water heating", "Lighting", "Appliances", "Cooking"],
          series: [
            { name: "1990", values: [52, 21, 9, 11, 7] },
            { name: "2020", values: [41, 18, 4, 29, 8] },
          ],
        },
      },
    ],
  },
  {
    id: "practice-writing-education-online",
    section: "writing",
    kind: "exercise",
    order: 3,
    courseIds: WS,
    free: false,
    title: "Task 2: online university degrees",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "Some people believe that university degrees studied entirely online will soon be as valuable as degrees studied on campus.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-writing-city-traffic",
    section: "writing",
    kind: "exercise",
    order: 4,
    courseIds: WS,
    free: false,
    title: "Task 2: traffic in big cities",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "Traffic congestion is becoming a serious problem in many large cities.\n\nWhat are the main causes of this problem, and what measures could be taken to reduce it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-writing-task1-commuting",
    section: "writing",
    kind: "exercise",
    order: 5,
    courseIds: WS,
    free: false,
    title: "Task 1: how people travel to work",
    active: true,
    durations: { light: 20, full: 20 },
    writing: [
      {
        id: "task1",
        light: true,
        minWords: 150,
        prompt:
          "The chart below shows how workers in one European city travelled to work in 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        chart: {
          title: "Main way of travelling to work",
          unit: "%",
          categories: ["Car", "Bus", "Train", "Bicycle", "Walking"],
          series: [
            { name: "2005", values: [48, 22, 14, 6, 10] },
            { name: "2025", values: [31, 19, 21, 18, 11] },
          ],
        },
      },
    ],
  },
  {
    id: "practice-writing-languages-school",
    section: "writing",
    kind: "exercise",
    order: 6,
    courseIds: WS,
    free: false,
    title: "Task 2: when children should start a foreign language",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "Some people think that children should start learning a foreign language at primary school. Others believe it is better to wait until secondary school.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-speaking-hometown",
    section: "speaking",
    kind: "exercise",
    order: 2,
    courseIds: WS,
    free: false,
    title: "Part 1: your hometown",
    active: true,
    durations: { light: 4, full: 4 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "Where is your hometown?",
          "What do you like most about living there?",
          "Has your hometown changed much in recent years?",
          "Would you like to live in a different city in the future?",
        ],
      },
    ],
  },
  {
    id: "practice-speaking-helpful-person",
    section: "speaking",
    kind: "exercise",
    order: 3,
    courseIds: WS,
    free: false,
    title: "Parts 2 and 3: a person who helped you",
    active: true,
    durations: { light: 4, full: 9 },
    speaking: [
      {
        part: 2,
        light: true,
        prepSeconds: 60,
        answerSeconds: 120,
        questions: ["Describe a person who has helped you in an important way."],
        cueCard: {
          topic: "Describe a person who has helped you in an important way.",
          bullets: ["who this person is", "how you know them", "what they did to help you", "and explain why their help was important to you."],
        },
      },
      {
        part: 3,
        light: false,
        answerSeconds: 60,
        questions: [
          "Do you think people today are less willing to help strangers than in the past?",
          "Should schools teach children to help others, or is that the job of parents?",
          "Why do some people choose to work as volunteers?",
          "How can governments encourage people to help their communities?",
        ],
      },
    ],
  },
  {
    id: "practice-speaking-technology",
    section: "speaking",
    kind: "exercise",
    order: 4,
    courseIds: WS,
    free: false,
    title: "Parts 1–3: technology in daily life",
    active: true,
    durations: { light: 4, full: 13 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "How often do you use your phone during the day?",
          "What do you mostly use the internet for?",
          "Is there an app you could not live without?",
          "Do you think you spend too much time in front of screens?",
        ],
      },
      {
        part: 2,
        light: false,
        prepSeconds: 60,
        answerSeconds: 120,
        questions: ["Describe a piece of technology that you find very useful."],
        cueCard: {
          topic: "Describe a piece of technology that you find very useful.",
          bullets: ["what it is", "when you started using it", "what you use it for", "and explain why it is so useful to you."],
        },
      },
      {
        part: 3,
        light: false,
        answerSeconds: 60,
        questions: [
          "How has technology changed the way people communicate with their families?",
          "Do older people find it harder to learn new technology? Why?",
          "Should children be allowed to have their own smartphones?",
          "Will technology create more jobs than it replaces in the future?",
        ],
      },
    ],
  },
  {
    id: "practice-speaking-travel",
    section: "speaking",
    kind: "exercise",
    order: 5,
    courseIds: WS,
    free: false,
    title: "Parts 1–3: travel and holidays",
    active: true,
    durations: { light: 4, full: 13 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "Do you enjoy travelling? Why or why not?",
          "How do you usually spend your holidays?",
          "Do you prefer travelling alone or with other people?",
          "Is there a place in your country you would recommend to visitors?",
        ],
      },
      {
        part: 2,
        light: false,
        prepSeconds: 60,
        answerSeconds: 120,
        questions: ["Describe a trip that you remember well."],
        cueCard: {
          topic: "Describe a trip that you remember well.",
          bullets: ["where you went", "who you went with", "what you did there", "and explain why you remember this trip so well."],
        },
      },
      {
        part: 3,
        light: false,
        answerSeconds: 60,
        questions: [
          "Why do you think people enjoy travelling to other countries?",
          "How has tourism changed in your country over the last twenty years?",
          "Can tourism cause problems for local people? In what ways?",
          "Do you think people will travel more or less in the future? Why?",
        ],
      },
    ],
  },
];

/** Mock id per diagnostic task: mock-<section>-<n>, numbered in pool order within each section. */
const mockIds: Record<string, string> = {};
for (const t of seedDiagnosticTasks) {
  const n = Object.values(mockIds).filter((id) => id.startsWith(`mock-${t.section}-`)).length + 1;
  mockIds[t.id] = `mock-${t.section}-${n}`;
}

/** Sample mocks reuse the diagnostic texts at full length until real mock tests are added. */
const mocks: PracticeTask[] = seedDiagnosticTasks.map((t) => {
  const n = Number(mockIds[t.id].split("-").pop());
  return {
    ...t,
    id: mockIds[t.id],
    kind: "mock",
    order: n,
    courseIds: t.section === "writing" || t.section === "speaking" ? WS : ALL,
    free: false,
    title: `Mock test ${n} · ${t.title}`,
  };
});

export const seedPracticeTasks: PracticeTask[] = [...exercises, ...mocks];

export const seedPracticeAnswerKeys: Record<string, AnswerKey> = {
  "practice-reading-night-trains": {
    answers: { q1: ["true"], q2: ["false"], q3: ["not given"], q4: ["true"], q5: ["private cabins", "cabins"], q6: ["public support"] },
  },
  "practice-reading-sleep-memory": {
    answers: { q1: ["i"], q2: ["iii"], q3: ["iv"], q4: ["vi"], q5: ["B"], q6: ["C"], q7: ["D"] },
  },
  "practice-reading-cities-cycling": {
    answers: { q1: ["no"], q2: ["yes"], q3: ["no"], q4: ["not given"], q5: ["motorways"], q6: ["car-free sundays"], q7: ["feel safe"] },
  },
  "practice-reading-urban-bees": {
    answers: { q1: ["true"], q2: ["not given"], q3: ["false"], q4: ["true"], q5: ["B"], q6: ["C"], q7: ["uncut"], q8: ["nesting sites"] },
  },
  "practice-reading-buried-rivers": {
    answers: {
      q1: ["A"], q2: ["C"], q3: ["E"], q4: ["B"],
      q5: ["false"], q6: ["true"], q7: ["not given"],
      q8: ["polluted"], q9: ["car parks", "carparks", "car-parks"], q10: ["public support"],
    },
  },
  "practice-reading-habits": {
    answers: {
      q1: ["yes"], q2: ["no"], q3: ["not given"], q4: ["yes"],
      q5: ["C"], q6: ["B"],
      q7: ["cues"], q8: ["day"], q9: ["motivation"],
    },
  },
  "practice-listening-museum": {
    answers: {
      q1: ["1860"],
      q2: ["coin", "one manat coin", "1 manat coin", "manat coin", "1-manat coin", "one-manat coin"],
      q3: ["six", "6"],
      q4: ["map room"],
      q5: ["café", "cafe"],
    },
  },
  ...Object.fromEntries(
    seedDiagnosticTasks.filter((t) => diagnosticKeys[t.id]).map((t) => [mockIds[t.id], diagnosticKeys[t.id]]),
  ),
};
