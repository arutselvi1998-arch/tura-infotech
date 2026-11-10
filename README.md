# Tura Infotech

Responsive static website foundation based on the supplied DOCX site map and design images. Run `npm start` and open http://127.0.0.1:4173. Run `npm run check` for JavaScript syntax validation. No dependencies or build step are needed; deploy `dist/`.

## Included

Home, About, course catalogue with category filters, four proposed course syllabuses, demo requests with rescheduling/removal, course bag, student portal preview, Careers, Contact and FAQs. Requests, cart items and enquiry drafts use browser local storage only. They do not reach the company. No real authentication, payments, student records, job applications or message delivery are connected. No fabricated reviews, fees, statistics, company contacts or job listings are included.

The supplied images are composite reference screenshots, rather than individual production assets. The hero crop is extracted from image1.jpeg; replace it with the original high-resolution photograph when available. Reference screenshots contain unverified marketing claims which are not repeated in site copy. Course outlines and general marketing copy are proposed content for review.

## GitHub

The source can be pushed to the user's chosen repository once GitHub access and a destination are available. A GitHub Pages workflow is provided and requires Pages to use GitHub Actions. Sites hosting uses the separate repository described by `.openai/hosting.json`; that repository is not GitHub.

## Trainer portal

Open `/#trainer` (or `/#trainer/overview`) for the trainer workspace. The public navigation includes a Trainer portal link. Views include Dashboard, My courses, Live sessions, Students, Assignments, Assessments, Resources and Profile. Trainers can save session plans with meeting links, assignment drafts, assessment briefs, resource links and a profile in browser local storage. Saved items can be removed. Course outlines are catalogue previews, not assigned courses. The Students view has an explicit empty state until secure enrolment and access services are connected. No sessions, assignments or resources are sent to students or published. This is a frontend preview, not an authenticated trainer account.

## Admin portal

Open `/#admin` for the admin workspace. Public navigation includes an Admin portal preview link. Views: Dashboard, Courses, Students, Trainers, Demo Bookings, Orders, Payments, Offers, Testimonials, Careers, Analytics, Support and Settings. Content proposals support create, edit and remove operations in browser local storage. Trainer drafts describe hiring requirements, not accounts. Offers do not modify prices. Testimonials require a consent/source reference and are not published. Demo bookings show only requests saved by the public form on the same browser. Analytics show local draft/request counts, with unavailable financial metrics explicitly distinguished from zero. Settings are local proposals and do not update the public site. Student accounts, trainer access, financial operations, publishing, notifications and shared support services require secure backend integrations. This is a public frontend preview, not an authenticated admin system.

## Student authentication preview

Open `/#auth`. Based on the supplied desktop/mobile authentication reference: Welcome, Choose Role, Student Sign-Up, OTP, Success, Sign In, Forgot Password, Reset Link Preview and New Password. Includes password show/hide controls, strength checks, confirmation matching, phone validation, OTP keyboard/paste handling and recovery-method switching. OTP preview code: `245801`. Social provider buttons explain their pending integration. No real accounts, sessions, SMS, recovery messages or password changes are created. Passwords and sign-in credentials are never persisted or sent; name and masked-phone flow context exist only in page memory. This public frontend preview does not protect the dashboard. Real authentication requires an identity provider, server-side validation, OTP delivery, expiring recovery tokens and protected API routes. Company and trainer registration are outside this student-focused flow. The reference's placement promise and legal consent text are not represented as verified company claims or policies.

## Home page sections

The home route follows the supplied reference with a compact hero and course enquiry banner, popular course cards, Why Choose Tura, a student testimonials section, demo-session request cards, FAQs and footer. Testimonials are explicitly awaiting verified reviews; no fabricated ratings or student stories are included. Demo cards do not claim confirmed availability. Offer prices, placement claims and employer logos in the reference are not published as verified facts. Desktop and mobile layouts are included. The supplied official logo asset still needs importing because shell execution has been unavailable.

## About Us

The `/#about` route follows the supplied About reference with the Future-Ready Careers hero, Our Story, proposed Mission and Vision, Why Learn with Tura, Trainers and Mentors, and Learn/Practice/Build/Get Prepared methodology. Desktop and mobile layouts are included. Company history, office photography and trainer identities were not supplied as verified assets, so the story uses the documented platform plan, the story visual is illustrative and trainer cards show teaching areas with explicit pending-profile disclosure. Mission and vision wording is proposed for approval. No placement guarantees, fabricated trainer biographies, ratings or student totals are included.

## Courses catalogue

The `/#courses` route follows the supplied reference with hero, search, category and learning-mode filters, quick course selections, four course cards and learning-mode guidance. Search covers titles, summaries and module keywords. Live and self-paced filters show proposed paths with explicit availability disclosures; no recorded lessons or live batches are represented as connected. Course routes (`/#course/ux-ui`, `/#course/data-analytics`, `/#course/data-engineering`, `/#course/scrum-master`) include proposed syllabus modules, mode explanations, pending verified reviews and course FAQs. Prices, ratings, batch dates, certificates and placement claims require verified details. Demo buttons lead to the existing local request flow; add-to-bag uses existing local cart storage.

## Book Demo

The `/#demo` route follows the supplied demo reference: course selection, preferred date and time (IST), student details, a dedicated local request confirmation and My Demo Bookings. Desktop shows the three form columns; mobile uses Next/Back steps. Required details, a future-or-today date, preferred time and preview acknowledgement are validated. Requests use existing browser storage. Rescheduling edits the existing request rather than creating a duplicate; cancellation keeps a locally cancelled record. No availability is fetched, slot reserved, team notified or meeting generated. Existing trainer/admin booking views may require additional integration to consume cancellation state consistently. These are browser-local request flows, not a production booking service.

## Cart and payment preview

Routes: `/#cart`, `/#checkout`, `/#payment`, `/#payment-success`, `/#payment-failure`, `/#invoices`, `/#refunds`. Includes course removal, a visibly illustrative `TURADEMO` coupon, validated student details, payment-method selection, explicit success/failure simulations, downloadable demo records and unavailable refund states. Prices and totals are unavailable rather than fabricated. Contact details stay in page memory; saved simulation records contain course titles, a preview method, outcome, date and a DEMO reference. Downloads explicitly state they are not invoices or payment receipts. No payment credentials are collected, provider is invoked, discount applied, enrolment created, invoice issued or refund processed. Successful simulation does not clear the course bag or grant course access. Real checkout requires verified prices/tax details, provider integration, server-side order handling, webhooks, authorised invoice records and a verified refund policy.

## Student profile and dashboard

Open `/#dashboard` for the student portal. Sidebar routes cover Personal Information, My Enrolled Courses, Learning Progress, Self-Paced Lessons, Assignments and Quizzes, Live Class Schedule, Certificates, Payment History, Wishlist and Support Tickets. Responsive layout follows the supplied reference, including mobile quick navigation. Profile drafts, wishlist add/remove and support drafts with local close/reopen actions persist in browser storage. No student is authenticated. Enrolment, tracked learning, video content, assessments, live class access, financial records and certificates show honest unavailable states. Course suggestions are labelled as not enrolled; payment simulations remain separate from real transaction history. No fabricated progress, grades, credentials, classmates or class schedule is included.

## Careers

`/#careers` follows the supplied Careers reference with a hero, search, department/type filters, interest-area cards, culture themes, trainer and internship opportunities, placement assistance, resume support and interview preparation. No verified openings are represented as active jobs. `/#careers/apply` saves a validated expression-of-interest draft locally; `/#careers/drafts` lists and removes these drafts. No applicant documents are uploaded, applications transmitted or hiring decisions simulated. Team artwork is a CSS illustration because original team photography is not supplied. Real hiring needs verified job records, company terms, privacy policy, secure application delivery and authorised applicant management.

## Support and Help Center

`/#support` includes searchable help articles, FAQs, shortcut navigation, technical/payment guidance, a validated local ticket-draft form and local close/reopen status controls. Ticket drafts share `tura-student-workspace` with the student portal and are not transmitted. WhatsApp and live chat are explicitly unavailable until verified company contact details and support services are connected. No support hours, agent response times, chat history, payment operations or submitted ticket numbers are fabricated.

## Contact

`/#contact` follows the supplied reference with hero, contact information, local message form, business enquiry routing, social channel placeholders, office location placeholder, reasons to contact and help-center handoff. `/#contact/business` selects Business Enquiries in the form; `/#contact/message` scrolls to it. Form drafts can be saved, restored and cleared on this device using the existing `tura-enquiry` key. No messages are sent. Phone, email, address, hours and social URLs remain pending because the small screenshot does not provide reliably readable verified details. The location artwork is explicitly illustrative, not a map. Contact information in admin draft settings is not published automatically.

## Phase 1 scope

Public navigation focuses on Home, About, Courses, Book Demo, Careers, Testimonials, Support and Contact, with Login / Sign Up and the course bag. Trainer and admin previews remain separate routes and are hidden from the public header. Course detail pages include Overview, Syllabus and Trainer tabs; trainer identities and downloadable verified syllabuses remain pending. Login has Phone/Email selection matching the newer authentication reference. All authentication, booking, checkout and communication limits described above still apply. Phase 1 is a frontend/admissions prototype until real backend integrations and verification are completed.

## Student learning screens

Open `/#learn/player/ux-ui` or use Explore the Learning Screens in the student portal. Routes under `/#learn/` include `player`, `live`, `assignment`, `quiz`, `progress` and `certificate`, with an optional catalogue course ID. Player topic navigation uses the proposed syllabus and sample reading; video playback is unavailable. Sample reading marks and assignment text drafts persist locally per course. A three-question practice quiz provides session-only feedback and is explicitly not graded. Progress reports sample local marks separately from unavailable verified completion. Live class controls do not invoke camera/microphone permissions or connect to a meeting provider. Certificate layout is watermarked SAMPLE / NOT VALID, with no fabricated issuance data or credential downloads. Real media, submissions, assessments, live classes and earned certificates need backend integration. Static visual implementation has not been browser-verified because command execution remains unavailable.

## Phase 3: Admin Dashboard, Module 1

`/#admin` now follows the supplied academy dashboard reference: magenta sidebar, module search, welcome banner, overview metric cards, enrolment trend area, completion status, course catalogue, recent enrolments, pending tasks, support workspace and quick actions. Students, active courses, enrolments, completion and revenue remain unavailable until live services are connected; the reference's example metrics are not fabricated as business data. Content-draft and browser-local support counts are explicitly distinguished from submitted work. Search routes to known admin modules. Course creation links to the existing local draft editor. Certificate issuance and notifications remain disabled. The dashboard is an unauthenticated frontend preview, not an operational admin system.

## Admin Student Management

`/#admin/students` follows the supplied Student Management reference with local preview counts, searchable/filterable records, add/edit forms, a details panel, course-plan history, manual preview progress and confirmed suspend/activate controls. Initial state has no fabricated students. Records persist in `tura-admin-student-previews`; emails are checked for duplicates within the local list. Course plans are not real enrolments. Manually entered topic counts are explicitly not verified progress. Suspension only changes a preview status and does not enforce account access. No login details, invites, credentials or notifications are sent. Existing live admin metrics remain unavailable; preview records do not populate live totals.

## Admin Course Management

`/#admin/courses` includes searchable/filterable local courses, creation/editing, course details, curriculum outlines, category creation/renaming, proposed INR price plans and Draft/Published/Unpublished/Archived states. The initial catalogue is seeded as local drafts. Changes persist in `tura-admin-course-workspace`. Status changes require confirmation; preview publication requires a title, description and at least one module. Category renames update local course records; proposed price plans can be added and removed. No public course, live price, enrolment, rating, checkout or student permission is changed. Subroutes `/categories`, `/pricing` and `/status` scroll to the relevant module. Actual publication and financial operations require an authorised backend.

## Admin Curriculum Management

`/#admin/curriculum` adds local course selection, modules, chapters, lessons, add/edit/remove with nested-removal confirmation, accessible up/down ordering and course/module prerequisites. Initial modules are copied once from local course outlines. Later curriculum edits stay in `tura-admin-curriculum` and do not automatically synchronise public course pages or the separate course-outline editor. Lessons support reading/video/practice/quiz metadata, optional http(s) reference links, duration and local Draft/Published status. This does not upload media or publish student content. Course and module prerequisite graphs reject circular dependencies; rules do not gate actual access. The module is added to the admin navigation. Real curriculum publication requires authorised backend storage and consistent integration with enrolment and completion services.

## Admin Video Management

`/#admin/videos` includes library search/course/status filters, local MP4/WebM/Ogg file import (up to 100 MB), drag/drop, browser video preview, course/lesson mapping, local access preferences and resource files (up to 20 MB). Files are stored in IndexedDB `tura-local-media`; metadata uses `tura-admin-video-workspace`. There is no server upload, cloud storage, transcoding, public streaming or enforced audience/expiry/DRM/watermark. Codec support and storage quota depend on the browser. Lesson choices come from the local Curriculum Management hierarchy, and a lesson cannot map to multiple videos in this library. Resource downloads use locally stored originals. Deletion requires confirmation. Settings do not affect public lessons or student progress. Subroutes: `/library`, `/upload`, `/mapping`, `/access`, `/resources`. Authorised backend storage and upload validation are needed for real media management.

## Admin Enrollment Management

`/#admin/enrollments` includes local manual enrolment plans, searchable course/status filters, approval/rejection with confirmation, access preferences, expiry/renewal planning, transfers and local event history. Records use local student/course preview IDs and persist in `tura-admin-enrollment-previews`. Duplicate current plans are rejected. Approvals require an active local student preview. Expiry is computed from the current India calendar date; renewal inputs reject past dates. Transfers reject duplicate destination plans and reset local access preferences without moving grades, progress or payments. Notification/reminder buttons are disabled. No actual enrolment, access enforcement, approval notification, renewal charge or revenue record is created. Subroutes: `/all`, `/manual`, `/approvals`, `/access`, `/expiry`, `/transfers`.

## Admin Assignment Management

`/#admin/assignments` supports creating/editing local assignment previews, course/module mapping, instructions, due dates, total marks, text/reference-link submission types and local status. Local student practice attempts can be added, evaluated with bounded marks and feedback, and requested for resubmission while retaining prior attempts. Duplicate attempts are blocked unless resubmission is requested. Courses/types cannot change after submissions exist; total marks cannot undercut a saved grade. All data is browser-local `tura-admin-assignment-previews`, not real student submissions or official academic records. Subroutes: `/all`, `/submissions`, `/evaluate`, `/grades`, `/feedback`, `/resubmissions`. No publication, file upload, notifications or credential issuance occurs.

## Admin Progress Tracking

`/#admin/progress` combines local student course plans and manual enrolment plans into one student/course view. Sections cover student progress, course completion, lesson marks, analytics and inactive students. Preview topic counts come from Student Management; courses with curriculum lessons use local lesson-checkbox marks instead. Unknown progress is excluded from averages. Manual activity notes can be dated up to today; inactivity uses those dates with a configurable threshold, and missing dates remain unknown rather than inactive. Reminder actions only save local drafts. Historical trends, study time, playback activity, verified grades and completion remain unavailable. Records use `tura-admin-progress-previews` and do not grant certificates or modify real learning data. Subroutes: `/students`, `/completion`, `/lessons`, `/analytics`, `/inactive`.

## Admin Certificate Management

`/#admin/certificates` includes local specimen templates with fixed watermarks, proposed eligibility policies, manual sample eligibility testing, specimen generation, local issue/revoke states and browser-local ID lookup. Specimen records use DEMO-CERT IDs and snapshot template/name/course values at generation. No document certifies achievement, no signature/QR/official credential is fabricated, and no learner is notified. Issuance is explicitly a specimen state; revocation requires a reason and retains history. Verification never claims external validity. Real eligibility, issuance and verification require authorised backend records. Data uses `tura-admin-certificate-previews`. Subroutes: `/templates`, `/rules`, `/generate`, `/issue`, `/revoke`, `/verify`.

## Admin Support Management

`/#admin/support` adds searchable course/priority/status filters, local ticket creation/details, staff display labels, assignment, unsent reply drafts, priority/status controls, local activity logs and count-based reports. Staff labels are not accounts. Student support drafts can be copied once into the admin workspace with explicit acknowledgement that no submission or later synchronisation occurs. Replies are never delivered. Closed/resolved tickets must be reopened before returning to active work, and closed tickets block new reply drafts. Data uses `tura-admin-support-previews`. No agent response times, satisfaction ratings, live customer conversations, staff permissions or notification services are fabricated. Subroutes: `/all`, `/assign`, `/replies`, `/priority`, `/status`, `/reports`.

## Admin Instructor Management

`/#admin/instructors` adds searchable/filterable local instructor profiles, add/edit with duplicate-email checks, expertise tags, experience/bio fields, course responsibility assignments and planned permission toggles. Local Active/Inactive changes require confirmation. Data persists in `tura-admin-instructor-previews`; no instructor account, public profile, invitation, permission grant or access revocation occurs. Ratings and student totals remain unavailable. The admin navigation replaces Trainers with Instructors; the old `/#admin/trainers` route also displays this module. Subroutes: `/all`, `/add`, `/profiles`, `/courses`, `/permissions`. Existing trainer draft requirements remain separate planning data and are not converted into instructor identities.

## Admin Payments and Revenue

`/#admin/payments` includes local fictional transaction recording, manual simulation verification/rejection, demo record downloads, partial refund simulations, proposed percentage discounts and reports from local simulation amounts. Amounts are stored as integer paise; refund balances reserve requested and processed amounts to prevent over-allocation. Verification and refund status changes require confirmation. Downloads state they are not invoices, tax documents or payment receipts. No bank/provider integration, real money, enrolment, tax calculation or notifications exist. Discounts do not alter public prices or previous simulation snapshots. Reports explicitly distinguish simulated amounts from unavailable real revenue. Storage: `tura-admin-revenue-previews`; subroutes `/transactions`, `/verification`, `/invoices`, `/refunds`, `/discounts`, `/reports`.

## Website CMS

`/#admin/cms` includes homepage hero/CTA drafts, ordered banner drafts, catalogue listing selection, consent/source-referenced review and success-story drafts, FAQs and contact/social details. Drafts can be edited, reordered, hidden/shown in a sandboxed desktop/mobile preview and removed. New section items start hidden. Homepage input updates its isolated preview before saving. Content is escaped; preview scripts are disabled. No public website content is modified and no testimonial evidence is automatically verified. Data uses `tura-website-cms-previews`. Subroutes: `/homepage`, `/banners`, `/listings`, `/reviews`, `/stories`, `/faqs`, `/contact`. Authorised publishing, moderation, shared storage and public-site integration remain required.

## Admin Notifications Management

`/#admin/notifications` includes email, in-app and announcement drafts, plain-text templates, sample placeholders, local audience-count snapshots, future IST schedule plans and explicitly confirmed delivery simulations. Schedule plans never run automatically. No email/push/in-app messages, announcements, staff notifications or external communication are sent or published. Delivery rates and reach remain unavailable. Template messages and previews are escaped as text; placeholders use sample learner/course values only. Local storage: `tura-admin-notification-previews`; subroutes `/all`, `/email`, `/inapp`, `/announcements`, `/templates`. Real delivery requires authorised recipient data, permissions, provider integration, scheduling and delivery logs.

## Admin Reports and Analytics

`/#admin/reports` aggregates local preview datasets for enrolment plans, manually noted engagement, course sample progress, fictional financial simulations and practice assignments. Filters use plan start dates, manual activity dates, simulation creation dates and assignment due dates respectively; current sample completion remains an explicitly labelled snapshot. Missing activity is not treated as engagement, and unknown progress is excluded from averages. Overview bars derive from actual local plan counts; production analytics remain unavailable. Course/date filters, report text search and formula-safe escaped CSV exports are included. Exports contain local-preview disclaimers and date-basis notes. Processed refund balances are associated with filtered transactions, not presented as period refund cash flow. The old `/#admin/analytics` route remains an alias. Subroutes: `/overview`, `/enrollments`, `/engagement`, `/courses`, `/revenue`, `/assignments`.

## Admin and Roles Management

`/#admin/roles` includes local admin profiles, staff role creation/editing, role assignments, a View/Create/Edit/Delete permission matrix and local activity logs. Permission editing disables write preferences when View is unchecked, and copying another role fills only the unsaved editor until saved. Duplicate profile emails and role names are blocked. Active/Inactive changes require confirmation. No accounts, invitations, logins, sessions or effective authorisations are created or changed; browser-local logs are not immutable security audit logs. Data uses `tura-admin-role-previews`. Subroutes: `/users`, `/staff`, `/permissions`, `/logs`. Real role-based access control must be enforced on authenticated server endpoints.

## Academy Settings

`/#admin/settings` includes academy profile drafts, light/dark original-logo imports, brand colour/theme previews, proposed learning rules, payment gateway plans, draft security policy and integration planning URLs. Original PNG/JPEG/WebP logos (up to 5 MB) can be stored locally in IndexedDB and removed; public assets are not replaced. Payment gateways, 2FA, session expiry, IP allowlists, lesson gating and integrations remain unconnected and unenforced. Tax is an optional proposed value, not a verified rate. No API keys or secrets are collected. Settings are separate from existing CMS/contact/public assets. Storage: `tura-academy-settings-previews`; subroutes `/profile`, `/branding`, `/learning`, `/payment`, `/security`, `/integrations`.

## Production development order

See [DEVELOPMENT-PLAN.md](DEVELOPMENT-PLAN.md) for the agreed six-phase order, target domain/portal structure, backend prerequisites and release checks. Phase 01 is real admin authentication and server-enforced roles. Existing screens are frontend prototypes, not completed production milestones. `/#admin/dashboard` now also opens the reference admin overview. Clean `/student` and `/admin/...` URLs require router and hosting changes; the current app uses hash routes.

## Latest student portal reference

Student and learning routes now use the latest supplied purple-sidebar reference: isolated portal chrome, compact top search, account-preview link, welcome area, metric cards, horizontal course suggestions, learning layouts and mobile navigation. Search routes to existing student screens rather than claiming backend content search. No sample identities, enrolments, live participants, progress, streaks, grades, receipts or earned certificates from the reference are presented as real. The original official logo asset is still pending deployable-file import; the portal brand remains a temporary text treatment. Styling is saved but unverified in a browser due the command-runner failure.

## Latest trainer portal reference

The trainer workspace follows the latest eight-screen reference with purple sidebar, compact header search, account-preview link, local planning cards, desktop/mobile layouts and mobile quick navigation. Profile adds local availability notes and notification preferences in `tura-trainer-preferences`; these neither reserve sessions nor enable delivery. Student totals, attendance, performance charts and live learner activity remain unavailable rather than copied from example screens. Existing local trainer creation/planning functions remain intact. Portal styling is reapplied after internal form/list updates. The official logo and original photography remain pending deployable-asset import and browser verification remains blocked.

## Latest unified admin reference

The latest all-screens admin reference is applied as shared portal chrome across the existing modules: purple sidebar, compact header/module search, table treatment, pink active tabs, badges and mobile quick navigation. All previously requested module links are retained even where the reference shows a shorter sidebar. Shared styling is reapplied after local form/list refreshes. Sample business totals, names, revenue, ratings and performance values from the screenshot are not imported as real data. Existing local-data and backend limitations remain. Browser validation and release are still outstanding.

## Updated STU-AUTH reference

`/#auth` now starts at `/#auth/signin`. The latest reference adds split desktop login/register panels, stacked mobile forms, direct student registration, confirm-password validation and selectable email/mobile demo verification. Sign-in supports optional email/phone remembering in `tura-signin-identity`; passwords are never persisted. Registration context remains page memory only. OTP code remains the visibly disclosed `245801` with no delivery. Forgot-password defaults to email, retains phone recovery and labels reset as a preview. No real identity, session, account recovery, OTP/email delivery or protected student API is connected. Original reference illustration assets and official deployable logo still need import; current imagery uses the existing supplied crop.

## STU-DASH updated dashboard

Student overview routes now follow the focused STU-DASH reference with a learning-goal banner, five overview cards, section shortcuts, Continue Learning, My Learning Summary, Upcoming Deadlines and Recent Activity. Summary counts come from valid local sample-reading marks across the four paths and are not enrolled or verified course progress. Goals and personal deadlines persist locally, with no reminder scheduling. New sample-reading mark changes are timestamped from now onward; old marks are not assigned invented activity dates. Continue Learning resumes a sample course preview. Storage keys include `tura-student-learning-goal`, `tura-student-deadline-plans`, `tura-student-learning-events` and `tura-student-continue-preview`. Real course, assignment and certificate metrics remain unavailable.

## STU-CRS My Courses

`/#dashboard/courses` separates unavailable authenticated enrolments from sample learning paths. Sample paths support All/In Progress/Completed filters, grid/list layouts, course details, curriculum, module/chapter previews, sample reading links and resource availability. Routes under `/#dashboard/courses/<course-id>` include `/curriculum`, `/modules/<zero-based-index>`, `/chapters/<zero-based-index>` and `/resources`; `/#student/courses/...` is an alias. Illustrative chapter hierarchy is labelled as proposed and does not fabricate published lesson content. Completion filters use local sample reading marks only. Admin resource uploads are not exposed as student downloads. Real enrolment, reviewed curriculum, private media and resources still need backend integration.

## STU-VID Video Learning

`/#dashboard/lessons` lists video-interface previews; `/#learn/video/<course-id>` opens a topic playlist, local player, notes, timestamp bookmarks, personal text exports and manual preview completion. Learners can import their own MP4/WebM/Ogg file up to 100 MB into IndexedDB, with browser-dependent codec/storage support. This does not expose admin files, upload to a server or unlock an enrolled course. Notes/bookmarks/positions and manual completion persist per course/topic in `tura-student-video-preview-<course-id>`. Replacing/removing media clears bookmarks, positions and completion and preserves note text without stale timestamps. Downloads export only personal notes/bookmarks; approved course resources are unavailable. No verified playback progress or completion credit is granted. Real hosted video, access enforcement and completion tracking require backend integration.

## STU-PRG My Progress

`/#dashboard/progress` includes overall, course, module, lesson and history views. Sample topic completion unions local reading marks and own-video manual completion, counting each catalogue topic only once. Module percentages are binary illustrative-topic states, not measured real modules. History filters timestamped preview events by type and recent date range. Video mark/note/bookmark interactions are recorded from this implementation onward; old actions are not backdated. Daily sample progress snapshots are collected only when the progress screen opens, with no invented historical trend. Actual enrolments, grades, playback time, course completion and certificates remain unavailable. Snapshot storage: `tura-student-progress-snapshots`; subroutes `/overall`, `/courses`, `/modules`, `/lessons`, `/history`.

## STU-ASG Assignments

`/#dashboard/assignments` separates unavailable real assigned coursework from four sample practice briefs. Sample workflows include details/checklists, downloadable plain-text briefs, text drafts, optional own-file attachments (up to 20 MB), saved practice attempt history, pending official grades/feedback and voluntary revisions. Draft-only saves retain text, not files. Attachments are kept locally in IndexedDB and only the owner's stored file can be downloaded in this preview. No work is sent to a trainer or linked to admin practice grades. Metadata uses `tura-student-assignment-previews`; subroutes `/<course-id>/details`, `/submit`, `/history`, `/grades`, `/resubmit`. No actual deadlines, scores or trainer resubmission requests are fabricated.

## STU-EXAM Assessments

`/#dashboard/assessments` adds four sample quiz/assessment paths, start instructions, a five-minute browser-local timer, per-question saved answers, previous/next navigation, review-before-submit, practice scoring/explanations and attempt history. Sample rules allow three submitted attempts per test and a 70% illustrative pass threshold. An expired draft is scored locally on return or while its screen remains open; no background job is used. Timer/storage are device-controlled and not secure assessment enforcement. Results create no official grade, completion or certificate. Storage: `tura-student-assessment-previews-v1`. Subroutes `/<sample-id>/start`, `/take/<question-index>`, `/review`, `/result/<attempt-id>`, `/history`. Student navigation includes Assessments.

## STU-PRJ Projects

`/#dashboard/projects` adds four sample project briefs, instructions, synthetic CSV datasets with dictionaries/readmes, local text/link drafts, optional own-file attachments (up to 20 MB), practice attempt history and pending trainer feedback. Downloaded datasets are explicitly fictional and are generated from static sample strings, with no personal data or real business records. Text/link drafts do not retain selected files. Attempts and own attachments stay in browser storage; no project is submitted or graded. Metadata: `tura-student-project-previews`. Subroutes `/<sample-project-id>/instructions`, `/dataset`, `/submit`, `/feedback`, `/history`. Projects is added to student navigation.

## STU-CERT Certificates

`/#dashboard/certificates` separates unavailable earned credentials from browser-local specimens. Includes eligibility views (real requirements unverified), sample previews, explicit specimen generation, actual watermarked PDF downloads and local specimen-ID lookup. The dependency-free sample PDF contains SAMPLE / NOT VALID labels, no official completion assertion, signatures or QR, and handles its basic-font limitations explicitly. Local sample percentages do not establish eligibility. Admin specimens remain separate from unauthenticated student views. Storage: `tura-student-certificate-specimens`; subroutes `/all`, `/eligibility`, `/preview`, `/downloads`, `/verify`. Real issuance, private certificate downloads and external verification still require authorised backend integration.

## STU-SUP Student Support

`/#dashboard/support` provides searchable help topics, category FAQs, local ticket drafts with optional own attachments (PDF/PNG/JPEG/TXT, up to 10 MB), My Tickets filters, details, unsent reply drafts and close/reopen controls. Records share the existing `tura-student-workspace` ticket list. New tickets record creation time; old drafts without timestamps explicitly remain unknown. Local replies never fabricate an agent conversation and no messages are sent or delivered from admin drafts. Attachments stay in IndexedDB and can be downloaded locally. Subroutes `/help`, `/faqs`, `/raise`, `/tickets`, `/ticket/<id>`, `/replies/<id>`. Real ticket submission, staff responses, delivery and access rules require backend integration.

## STU-NOT Notifications

`/#dashboard/notifications` includes all/course/reminder/announcement views, search, local read/unread state, mark-all-read, details and notification preferences. The inbox begins empty; sample notices are added only by explicit buttons or a manual copy of local admin in-app/announcement delivery simulations. No audience enforcement or real delivery is implied. Copies are deduplicated by source ID and use sample placeholders. Email/push preferences enable no service and request no browser permission. Data uses `tura-student-notification-previews`; subroutes `/all`, `/course`, `/assignment`, `/announcement`, `/detail/<id>`, `/preferences`. A local unread-count link is added to the student header and navigation.

## STU-PAY Payments

`/#dashboard/payments` includes enrolment availability, checkout simulation history with status filters, invoice availability, demo record downloads and a payment-status timeline. It reads only the existing public checkout simulations in `tura-payment-previews`, not unrelated admin financial records. No authenticated purchases, balances, invoices or enrolments are inferred from local success screens. Timeline shows only actual local simulation creation; provider verification, enrolment and invoice stages remain unavailable. Text downloads explicitly state they are not invoices/receipts/tax documents. Subroutes `/enrollments`, `/history`, `/invoices`, `/status/<simulation-id>`. Real student payment records require authenticated backend access and provider reconciliation.

## STU-PRO Profile

`/#dashboard/profile` includes view/edit, optional birth date/gender, learning goals, original photo import/removal (PNG/JPEG/WebP up to 5 MB), password-change validation and account preference drafts. Photos are decoded before IndexedDB storage and displayed in local portal avatars. Edits merge current student workspace data so wishlist/tickets are retained. Passwords are never saved or sent; current passwords are not verified and no account password changes. Theme is a sample-card preference; only English is implemented. Logout-all-devices is disabled without authenticated sessions. Optional personal details are stored unencrypted in this browser; no student ID, membership date, earned certificates or verified enrolment is invented. Subroutes `/view`, `/edit`, `/photo`, `/password`, `/settings`.

## Recommended sample dashboard and route entry points

Open `/?student_demo=1#dashboard` (or `/tura-infotech/?student_demo=1#dashboard` on GitHub Pages) for the explicitly labelled illustrative dashboard: 3 enrolled courses, 28 lessons completed, 67% overall progress, 2 pending assignments and a Data Analytics / Module 4 Power BI card at 62%. These supplied design-example values do not modify local learner records. External Power BI reference image has a tile fallback; its availability is not guaranteed. Normal dashboard routes retain actual local-preview counts.

`dist/routes.js` adds compatibility entry points for `/login`, `/register`, `/student`, `/student/dashboard`, `/student/my-courses`, `/student/my-courses/:courseId`, `/student/my-courses/:courseId/learn/:lessonId`, `/student/video-lessons`, `/student/progress`, `/student/assignments`, `/student/assessments`, `/student/projects`, `/student/certificates`, `/student/support`, `/student/notifications`, `/student/payments` and `/student/profile`. Clean entry paths resolve to existing hash views; this is not a completed clean-router migration. Numeric lesson indexes can select local sample video topics; real opaque lesson IDs need backend routing. The local server provides an extensionless-route fallback and GitHub Pages has a redirecting `404.html`. Asset base paths support the repository prefix and domain root. Production domain ownership, DNS, HTTPS and API authentication are still unconfigured. All route compatibility and PDF/frontend changes remain untested because command execution is unavailable.

## Phase 2 screen tracking

See [PHASE-2-SCREENS.md](PHASE-2-SCREENS.md). Dashboard Overview now carries screen ID STU-DASH-001 and follows the latest three-column desktop/single-column mobile reference, with personal Today's Plan, local-event streak, quick actions, summary panels and clearly separated sample mode. All validation, backend integration and release limitations remain.

## Next integrations

Add verified company contacts, fees, batch dates, trainer profiles and approved testimonials. Connect secure authentication and student data, admissions request delivery, a payment provider and server-verified payment webhooks. Implement the phase-two learning platform and phase-three admin/trainer tools separately.
