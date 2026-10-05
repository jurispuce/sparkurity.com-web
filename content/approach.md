---
title: Our approach
kicker: Methodology
description: The learning-science research Sparkurity is designed on — adaptive tutoring, expertise reversal, mastery learning, retrieval practice, collaboration and blended learning — with full references.
intro: Sparkurity is designed on findings from meta-analyses, not single studies. Most of that evidence comes from school and university learners rather than employees, so we say the platform is *designed on* these findings — never that it guarantees their effect sizes.
layout: approach
learning_graph:
  kicker: The learning graph
  title: How one learner moves through a course.
  lede: Five steps and one loop. Every step is built on a research finding — follow the tags to the evidence below. Where the AI suggests, the instructor decides.
  steps:
    - title: Profile
      text: Field of work, role, experience and goals. Required before enrolment.
      cite: { label: Relevance, href: "#cases-that-fit" }
    - title: Skill check
      text: A diagnostic quiz across the whole course produces a knowledge note per module.
      approval: Instructor approves the quiz
      cite: { label: Expertise reversal, href: "#expertise-reversal" }
    - title: Personal roadmap
      text: Each module is marked with one of four actions.
      approval: Instructor approves every skip
      actions: [skip, review_carefully, standard_pace, focus_area]
      cite: { label: Adaptive tutoring, href: "#adaptive-tutoring" }
    - title: Adaptive modules
      text: Retrieval checks inside lessons. Exercises fade from support to independence.
      levels: [Worked example, Completion task, Independent task]
      cite: { label: Worked-example fading, href: "#fading" }
    - title: Mastery check
      text: Gate quizzes and rubric-graded written answers before the next phase unlocks.
      approval: Instructor reviews AI grading
      cite: { label: Mastery learning, href: "#mastery" }
  loop:
    label: Not yet mastered
    text: "Back to step 3: the roadmap regenerates after a failed gate quiz, or when the instructor flags a submission."
    cite: { label: Feedback, href: "#feedback" }
  done: Next phase unlocks
  cohort_layer:
    label: Cohort layer
    text: In cohort courses, the same path runs alongside the group.
    items: [Role-play scenarios, Cohort discussion, Live sessions]
    cite: { label: Collaboration, href: "#collaboration" }
cohort_week:
  kicker: Cohort usage
  title: Where the cohort fits in a week of learning.
  lede: Self-study is individual and adaptive. Live time is for what only a group and an expert can give. Example — week 2 of the Internal Cybersecurity Auditor cohort.
  phases: [Before the session, Live session (2 h), After the session]
  lanes:
    - who: You
      note: individual, adaptive
      cells:
        - "Self-study on ISO 27001 controls and evidence sampling. Skip what your skill check shows you know."
        - "Play auditor or auditee in an interview role-play, using your role's briefing pack."
        - "Collect and evaluate evidence for the cohort's simulated audit."
    - who: Your cohort
      note: 4–20 peers
      cells:
        - "Discussion prompt in the cohort channel: what evidence would convince you?"
        - "Roles rotate. Each role sees only what that role would really have."
        - "Compare findings in the discussion thread; challenge each other's evidence."
    - who: Instructor
      note: in charge
      cells:
        - "Approves roadmaps; the progress heatmap shows who is stuck."
        - "Runs the session; stops the role-play to critique in the moment."
        - "Reviews every written assignment; overrides or regrades AI drafts."
    - who: AI
      note: suggests, never decides
      cells:
        - "Tutor answers from the course material and standards, with citations."
        - ""
        - "Drafts rubric-based feedback for the instructor to review."
  ai_absent: Live time stays human.
  hours:
    title: Live contact hours — Internal Cybersecurity Auditor
    unit: h
    rows:
      - { label: Classroom version, value: 32, note: mostly theory }
      - { label: Sparkurity cohort, value: 8, note: "cases, role-play, critique — plus adaptive self-study" }
    caption: Fewer hours in the classroom, more time practising. Theory moves into self-study, where experienced participants skip what they already know.
---

## An adaptive path: start where you are

- <span id="adaptive-tutoring"></span>**Personalised, step-level guidance works.** Intelligent tutoring systems showed a median +0.66 SD over conventional teaching across 50 evaluations (Kulik & Fletcher, 2016) and +0.41 across 107 effects (Ma et al., 2014). Step-based tutors come close to human tutors (VanLehn, 2011).
- <span id="expertise-reversal"></span>**Experts shouldn't sit through novice content.** Support that helps novices slows experts down — the expertise reversal effect (Kalyuga et al., 2003). In one randomised trial, adaptive skipping raised learning efficiency with no loss in scores (Kerfoot, 2010).
- <span id="fading"></span>**Difficulty grows with competence.** Worked examples fade into independent work as learners improve (Kalyuga, 2007).
- <span id="mastery"></span>**Mastery before moving on.** Mastery learning raised achievement across 108 studies, more for learners who start behind (Kulik, Kulik & Bangert-Drowns, 1990).
- **Testing yourself beats re-reading.** Retrieval practice shows g = 0.50, and 0.73 with corrective feedback (Rowland, 2014).
- <span id="feedback"></span>**Feedback that explains, not just a score.** Highly informative feedback is far more effective than a grade alone (Wisniewski et al., 2020) — and poorly designed feedback can hurt (Kluger & DeNisi, 1996), which is why every AI draft is reviewed.
- <span id="cases-that-fit"></span>**Cases that fit your job.** Relevance drives motivation and achievement (Göksu & Bolat, 2021); problem-based learning improves skills (Dochy et al., 2003).

## Cohorts: learn with people like you

- <span id="collaboration"></span>**Learning together beats learning alone.** Small-group learning improved achievement and persistence (Springer et al., 1999); computer-supported collaboration improved skills (Chen et al., 2018).
- **Structured roles make collaboration work.** Collaboration scripts with roles strongly improve collaboration skills (Vogel et al., 2017).
- **Interaction is what makes online learning work.** Designed interaction improves distance education (Bernard et al., 2009); blended learning outperforms purely face-to-face teaching (Means et al., 2013); social presence is linked to satisfaction and perceived learning (Richardson et al., 2017).
- **Active work beats lecture.** Active learning raised performance by about 0.47 SD; lecture students were 1.5× more likely to fail (Freeman et al., 2014).
- **Mixed groups, shared context.** Same-ability grouping shows only small gains (Lou et al., 1996), while weaker learners gain from mixed groups (Saleh et al., 2005). Our design: grouped by area of work for relevance, mixed by role and experience for perspective.

## Instructors: amplified, not replaced

- In a randomised trial, AI assistance for tutors improved student mastery, most for less experienced tutors (Wang et al., 2024, preprint).
- Generative AI cut lesson-planning time with no loss of quality in a teacher trial (Education Endowment Foundation, 2024).

## What this means for security awareness

Field data cuts against the standard product in this market: annual click-through training shows little effect on behaviour (Ho et al., 2025; Lain et al., 2022; Prümmer et al., 2024). We don't sell Sparkurity as a phishing-click reducer. We use role-based cases to build decision-makers' skills — risk, incident response and audit.

## References

**Adaptive learning and tutoring**

- Kulik & Fletcher (2016), *Review of Educational Research* 86(1) — [doi.org/10.3102/0034654315581420](https://doi.org/10.3102/0034654315581420)
- Ma, Adesope, Nesbit & Liu (2014), *Journal of Educational Psychology* — [doi.org/10.1037/a0037123](https://doi.org/10.1037/a0037123)
- VanLehn (2011), *Educational Psychologist* 46(4) — [doi.org/10.1080/00461520.2011.611369](https://doi.org/10.1080/00461520.2011.611369)
- Kestin et al. (2025), *Scientific Reports* 15 — [doi.org/10.1038/s41598-025-97652-6](https://doi.org/10.1038/s41598-025-97652-6)

**Mastery learning**

- Kulik, Kulik & Bangert-Drowns (1990), *Review of Educational Research* 60(2) — [doi.org/10.3102/00346543060002265](https://doi.org/10.3102/00346543060002265)
- von Hippel (2024), *Education Next* (critique) — [link](https://www.educationnext.org/two-sigma-tutoring-separating-science-fiction-from-science-fact/)

**Prior knowledge and expertise reversal**

- Kalyuga, Ayres, Chandler & Sweller (2003), *Educational Psychologist* 38(1) — [doi.org/10.1207/S15326985EP3801\_4](https://doi.org/10.1207/S15326985EP3801_4)
- Kalyuga (2007), *Educational Psychology Review* 19 — [doi.org/10.1007/s10648-007-9054-3](https://doi.org/10.1007/s10648-007-9054-3)
- Kerfoot (2010), *Journal of Urology* 183(2) — [doi.org/10.1016/j.juro.2009.10.005](https://doi.org/10.1016/j.juro.2009.10.005)

**Retrieval practice, spacing and feedback**

- Roediger & Karpicke (2006), *Psychological Science* 17(3) — [doi.org/10.1111/j.1467-9280.2006.01693.x](https://doi.org/10.1111/j.1467-9280.2006.01693.x)
- Rowland (2014), *Psychological Bulletin* 140(6) — [doi.org/10.1037/a0037559](https://doi.org/10.1037/a0037559)
- Cepeda et al. (2006), *Psychological Bulletin* 132(3) — [doi.org/10.1037/0033-2909.132.3.354](https://doi.org/10.1037/0033-2909.132.3.354)
- Wisniewski, Zierer & Hattie (2020), *Frontiers in Psychology* 10 — [doi.org/10.3389/fpsyg.2019.03087](https://doi.org/10.3389/fpsyg.2019.03087)
- Kluger & DeNisi (1996), *Psychological Bulletin* 119(2) — [doi.org/10.1037/0033-2909.119.2.254](https://doi.org/10.1037/0033-2909.119.2.254)

**Relevance and case-based learning**

- Göksu & Bolat (2021), *Review of Education* 9(1) — [doi.org/10.1002/rev3.3231](https://doi.org/10.1002/rev3.3231)
- Dochy et al. (2003), *Learning and Instruction* 13(5) — [doi.org/10.1016/S0959-4752(02)00025-7](<https://doi.org/10.1016/S0959-4752(02)00025-7>)

**Collaboration and cohorts**

- Springer, Stanne & Donovan (1999), *Review of Educational Research* 69(1) — [doi.org/10.3102/00346543069001021](https://doi.org/10.3102/00346543069001021)
- Chen, Wang, Kirschner & Tsai (2018), *Review of Educational Research* 88(6) — [doi.org/10.3102/0034654318791584](https://doi.org/10.3102/0034654318791584)
- Vogel, Wecker, Kollar & Fischer (2017), *Educational Psychology Review* 29(3) — [doi.org/10.1007/s10648-016-9361-7](https://doi.org/10.1007/s10648-016-9361-7)
- Lou et al. (1996), *Review of Educational Research* 66(4) — [doi.org/10.3102/00346543066004423](https://doi.org/10.3102/00346543066004423)
- Saleh, Lazonder & de Jong (2005), *Instructional Science* 33 — [doi.org/10.1007/s11251-004-6405-z](https://doi.org/10.1007/s11251-004-6405-z)

**Online and blended learning**

- Means, Toyama, Murphy & Baki (2013), *Teachers College Record* 115(3) — [doi.org/10.1177/016146811311500307](https://doi.org/10.1177/016146811311500307)
- Bernard et al. (2009), *Review of Educational Research* 79(3) — [doi.org/10.3102/0034654309333844](https://doi.org/10.3102/0034654309333844)
- Richardson, Maeda, Lv & Caskurlu (2017), *Computers in Human Behavior* 71 — [doi.org/10.1016/j.chb.2017.02.001](https://doi.org/10.1016/j.chb.2017.02.001)
- Reich & Ruipérez-Valiente (2019), *Science* 363 — [doi.org/10.1126/science.aav7958](https://doi.org/10.1126/science.aav7958)
- Freeman et al. (2014), *PNAS* 111(23) — [doi.org/10.1073/pnas.1319030111](https://doi.org/10.1073/pnas.1319030111)

**Security-awareness training**

- Ho et al. (2025), IEEE S&P — [PDF](https://sysnet.ucsd.edu/~voelker/pubs/phishtrain-oakland25.pdf)
- Lain, Kostiainen & Čapkun (2022), IEEE S&P — [arxiv.org/abs/2112.07498](https://arxiv.org/abs/2112.07498)
- Prümmer, van Steen & van den Berg (2024), *Computers & Security* 150 — [doi.org/10.1016/j.cose.2024.104206](https://doi.org/10.1016/j.cose.2024.104206)

**AI assistance for educators**

- Wang et al. (2024), Tutor CoPilot, preprint — [arxiv.org/abs/2410.03017](https://arxiv.org/abs/2410.03017)
- Education Endowment Foundation (2024), ChatGPT lesson-preparation trial, report — [link](https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/choices-in-edtech-using-generative-ai-chatgpt-for-ks3-science-lesson-preparation-2024-teacher-choices-trial)
