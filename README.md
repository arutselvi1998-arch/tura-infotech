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

## Next integrations

Add verified company contacts, fees, batch dates, trainer profiles and approved testimonials. Connect secure authentication and student data, admissions request delivery, a payment provider and server-verified payment webhooks. Implement the phase-two learning platform and phase-three admin/trainer tools separately.
