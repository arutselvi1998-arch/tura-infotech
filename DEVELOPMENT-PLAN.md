# TURA Infotech & Academy — development plan

## Current implementation

Public pages and student, trainer and admin interfaces exist as a static frontend prototype. Most records are saved in browser local storage; imported media and logos use IndexedDB. Authentication and payment screens are demonstrations. No backend session, enforced permission, shared database, actual enrolment or financial operation exists.

The latest work has not been syntax-checked, browser-tested, pushed or deployed because the execution environment cannot start commands. Existing GitHub source and hosting must be reconciled with the workspace before release.

## Target navigation and URLs

The requested production structure is:

```text
turainfotech.com/
├── public pages
├── student/
│   ├── dashboard
│   ├── courses
│   ├── classes
│   ├── assignments
│   ├── progress
│   ├── certificates
│   ├── payments
│   ├── support
│   └── profile
└── admin/
    ├── dashboard
    ├── students
    ├── courses
    ├── curriculum
    ├── videos
    ├── enrollments
    ├── assignments
    ├── progress
    ├── certificates
    ├── support
    ├── instructors
    ├── payments
    ├── cms
    ├── notifications
    ├── reports
    ├── roles
    └── settings
```

Domain ownership, DNS and HTTPS have not been configured or verified. Current frontend routes use hashes: `/#student`, `/#dashboard`, `/#admin/dashboard`, and `/#admin/<module>`. The student routes are aliases; the admin dashboard also accepts `/#admin` and `/#admin/overview`. These are not clean production URLs. Migrating to clean paths requires a routing refactor and hosting fallback/rewrite configuration, with direct-load and refresh checks for every route. GitHub Pages remains a static frontend host and does not provide a backend API.

Public navigation: Home | About | Courses | Book Demo | Careers | Contact | Cart | Login. Testimonials and Support remain public pages accessible from links and may remain in extended navigation.

Student navigation: Dashboard | My Courses | Live Classes | Assignments | Progress | Certificates | Payments | Support | Profile.

Trainer navigation: Dashboard | My Courses | Live Sessions | Students | Assignments | Assessments | Resources | Profile.

Admin navigation: the modules in the tree above. Public registration must never grant admin or trainer roles automatically.

## 01 — Admin Dashboard + Authentication

First production milestone. Select and configure the backend/authentication service and database. Create real sessions, sign-in, password recovery, logout and server-side role permissions. Provide an authorised initial administrator bootstrap outside public registration. Validate role and ownership on every API request, not only in navigation. Protect all student and admin data. Replace specimen metrics with authorised database queries.

Release evidence: unauthenticated requests cannot read protected records; student identities cannot access another student's records or admin endpoints; trainers can access only assigned courses/students; disabled users cannot continue using protected APIs; sessions and recovery flows work; dashboard totals agree with stored data.

## 02 — Student + Enrollment Management

Create shared student, course-enrolment and access records with consistent identifiers. Connect registration and manual admissions. Add approval, expiry, suspension and transfers with server-side validation and event history. Enforce enrolment on lessons, resources and live-class links.

Release evidence: duplicate active enrolments are rejected; expiry and suspension actually block protected content; transfers follow approved rules and preserve history; notifications are sent only through an explicitly configured delivery service.

## 03 — Course + Video Management

Persist courses, modules, chapters, lessons and prerequisites in one shared model. Publish reviewed content through authorised endpoints. Configure private object storage, validated uploads, media processing and controlled lesson/resource URLs. Keep content ordering and prerequisite rules consistent between admin and student interfaces.

Release evidence: nested editing and reorder operations persist correctly; prerequisite cycles are rejected; unauthorised uploads and media requests fail; student playback works on supported devices; unpublished content remains inaccessible.

## 04 — Assignments + Progress

Connect real learner submissions, attachment storage, trainer evaluation, feedback and resubmission history. Record lesson and assessment events server-side using agreed completion rules. Derive progress and inactivity from verified events; keep manual overrides explicit and auditable.

Release evidence: learners submit only to enrolled courses; trainers evaluate only assigned work; marks are bounded; resubmission history is retained; progress calculations reconcile with source events; unknown activity is not misclassified.

## 05 — Certificates + Support

Implement verified certificate eligibility, authorised issuance, revocation and public verification records. Replace specimen layouts only after issuance requirements are met. Connect support tickets, assignment, replies, attachments and delivered notifications with appropriate visibility rules.

Release evidence: ineligible learners cannot receive certificates; issuance and revocation are auditable; verification distinguishes valid/revoked/missing records without exposing private data; support replies reach only authorised recipients.

## 06 — Payments + CMS + Reports

Connect verified prices and a payment provider using server-created orders and verified, idempotent webhook handling. Implement receipts/invoices and refunds according to confirmed business requirements. Add reviewed CMS publishing, content permissions and version history. Build analytics from shared transactional and learning records with clearly defined date/time boundaries.

Release evidence: client-side success screens cannot mark real orders paid; duplicate events cannot double-enrol or double-refund; reports reconcile with provider/database records; CMS drafts cannot bypass publication permissions; no credentials are stored in browser preferences.

## Immediate implementation prerequisites

1. Restore a working execution environment and inspect the actual workspace and GitHub state.
2. Run JavaScript syntax validation and browser checks across every existing route before further feature expansion. Fix rendering/listener ordering and data consistency issues found during those checks.
3. Import the approved official logo into deployable assets and obtain verified company contacts and approved public content.
4. Select hosting, authentication, database and private media storage suitable for the production architecture. Configure credentials in server-side secret storage.
5. Implement milestone 01 before treating any portal as secure or operational.

The six phases above are not complete merely because their screens exist. Current local preview records must not be automatically imported as genuine students, enrolments, payments, grades or credentials.
