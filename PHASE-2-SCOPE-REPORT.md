# TURA Infotech & Academy — Phase 2 Scope Report

Student Learning Platform · Web and mobile responsive

## Scope summary

| Measure | Scope |
| --- | ---: |
| Core modules | 7 |
| Screen specifications | 40 |
| Primary role | Student |
| Delivery form | Responsive student portal |

Some specifications are interaction states or actions inside a parent screen. In particular, Lesson Completion is a state reached from the video player, and Download Certificate is a dialog/action reached from Certificate Preview or My Certificates.

## Student portal sidebar

| Sidebar item | Public route | Current preview entry |
| --- | --- | --- |
| Dashboard | `/student/dashboard` | `#dashboard/overview` |
| My Courses | `/student/my-courses` | `#dashboard/courses` |
| Video Lessons | `/student/video-lessons` | `#dashboard/lessons` |
| My Progress | `/student/progress` | `#dashboard/progress/overall` |
| Assignments | `/student/assignments` | `#dashboard/assignments` |
| Certificates | `/student/certificates` | `#dashboard/certificates` |
| Support | `/student/support` | `#dashboard/support/help-center` |

The clean `/student/*` entries are the intended product routes. The current static prototype translates clean entries into hash routes so it can run on GitHub Pages without a server-side router.

## Complete screen specification

### 1. Student Dashboard — 5 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-DASH-001 | Dashboard Overview | Page |
| STU-DASH-002 | My Learning Summary | Page |
| STU-DASH-003 | Continue Learning | Page |
| STU-DASH-004 | Upcoming Deadlines | Page |
| STU-DASH-005 | Recent Learning Activity | Page |

### 2. Self-Paced Courses — 7 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-CRS-001 | My Courses | Page |
| STU-CRS-002 | Course Details | Page |
| STU-CRS-003 | Course Curriculum | Page |
| STU-CRS-004 | Module Details | Page |
| STU-CRS-005 | Chapter Details | Page |
| STU-CRS-006 | Lesson Details | Page |
| STU-CRS-007 | Course Resources | Page |

### 3. Video Lessons — 6 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-VID-001 | Video Player | Page |
| STU-VID-002 | Lesson Playlist | Page/state |
| STU-VID-003 | Video Notes | Page/state |
| STU-VID-004 | Bookmarks | Page |
| STU-VID-005 | Download Resources | Page/action |
| STU-VID-006 | Lesson Completion | Completion state |

### 4. Progress Tracking — 5 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-PRG-001 | Overall Learning Progress | Page |
| STU-PRG-002 | Course Progress | Page |
| STU-PRG-003 | Module Completion | Page |
| STU-PRG-004 | Lesson Tracking | Page |
| STU-PRG-005 | Learning History | Page |

### 5. Assignments — 6 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-ASG-001 | My Assignments | Page |
| STU-ASG-002 | Assignment Details | Page |
| STU-ASG-003 | Submit Assignment | Page/form |
| STU-ASG-004 | Submission History | Page |
| STU-ASG-005 | Grades & Feedback | Page |
| STU-ASG-006 | Resubmit Assignment | Page/form |

### 6. Certificates — 5 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-CERT-001 | My Certificates | Page |
| STU-CERT-002 | Certificate Eligibility | Page |
| STU-CERT-003 | Certificate Preview | Page |
| STU-CERT-004 | Download Certificate | Dialog/action |
| STU-CERT-005 | Verify Certificate | Page |

### 7. Support — 6 specifications

| ID | Screen | Delivery form |
| --- | --- | --- |
| STU-SUP-001 | Help Center | Page |
| STU-SUP-002 | FAQs | Page |
| STU-SUP-003 | Raise Support Ticket | Page/form |
| STU-SUP-004 | My Support Tickets | Page |
| STU-SUP-005 | Ticket Details | Page |
| STU-SUP-006 | Ticket Conversation | Page/state |

## Navigation behavior

The sidebar remains stable across all student screens. Module-specific screens use breadcrumbs and contextual actions while the sidebar continues to expose the seven primary destinations.

```text
Student Portal
├── Dashboard
├── My Courses
│   └── Course → Curriculum → Module → Chapter → Lesson
├── Video Lessons
│   └── Player → Playlist → Notes → Completion
├── My Progress
│   └── Overall → Course → Module → Lesson → History
├── Assignments
│   └── Details → Submit → History → Feedback → Resubmit
├── Certificates
│   └── Eligibility → Preview → Download → Verify
└── Support
    └── Help Center → FAQs → Raise Ticket → Tickets → Details → Conversation
```

## Prototype data boundary

The current Phase 2 implementation is a frontend prototype. It stores preview records in browser storage and IndexedDB. It does not provide authenticated student accounts, official enrollments, hosted lesson media, trainer delivery, verified grades, payment processing, certificate issuance, public certificate verification, or support-team delivery.

Illustrative figures appear only in explicitly labelled demo states. Certificate files are marked `SAMPLE · NOT VALID`, and support tickets are labelled browser-local until backend services are connected.

## Production dependencies

1. Student authentication and role-based access.
2. Course, curriculum, lesson and resource APIs.
3. Secure video hosting and watch-progress events.
4. Assignment upload, evaluation and grade services.
5. Verified progress and certificate eligibility rules.
6. Signed certificate generation and public verification.
7. Support ticket delivery, staff assignment and notifications.
8. Server-side routing for canonical `/student/*` URLs.

