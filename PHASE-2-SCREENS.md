# Phase 2 — Student Learning Platform

Core modules: Student Dashboard, Self-Paced Courses, Video Lessons, Progress Tracking, Assignments, Certificates and Support. Web and mobile interfaces are frontend previews; real learning services are not connected.

| Approved screen ID | Screen | Current route | Implementation state |
| --- | --- | --- | --- |
| STU-DASH-001 | Dashboard Overview | `/#dashboard` | Saved frontend preview; untested |
| STU-DASH-002 | My Learning Summary | `/#dashboard/summary` | Saved frontend preview; untested |
| STU-DASH-003 | Continue Learning | `/#dashboard/continue` | Saved frontend preview; untested |
| STU-DASH-004 | Upcoming Deadlines | `/#dashboard/deadlines` | Saved frontend preview; untested |
| STU-DASH-005 | Recent Learning Activity | `/#dashboard/activity` | Saved frontend preview; untested |
| STU-CRS-001 | My Courses | `/#dashboard/courses` | Saved frontend preview; untested |
| STU-CRS-002 | Course Details | `/#dashboard/courses/:courseId` | Saved frontend preview; untested |
| STU-CRS-003 | Course Curriculum | `/#dashboard/courses/:courseId/curriculum` | Saved frontend preview; untested |

STU-DASH-001 includes welcome/summary cards, overall progress, course summaries, Today's Plan, deadlines, recent activity, quick actions, learning streak, completion distribution, performance snapshot and certificate availability. Normal mode uses explicitly labelled local sample records and unavailable states. `/?student_demo=1#dashboard` uses clearly disclosed illustrative design values from the latest reference. Neither mode creates real enrolments, grades or credentials.

Today's Plan uses `tura-student-today-plans` for personal, date-specific tasks. Streaks derive only from timestamped local preview events and end today or yesterday; sample mode labels its example streak explicitly. Admin records are not treated as authenticated student data.

STU-DASH-002 includes overall/course progress, learning statistics, learning hours, recent activity, streak, performance, completion status and skills panels. Normal mode uses local sample-topic marks and practice attempts, with hours and real skills/grades unavailable. Sample-data mode shows clearly labelled illustrative reference values without writing them into learner records. The clean entry `/student/my-learning-summary` and `/student/dashboard/summary` resolve to this preview through the compatibility router.

STU-DASH-003 includes course selection, a resume card, next proposed topics, other sample paths, last local activity and resource/notes shortcuts. Reading selections and own-video playback events record resume context in `tura-student-last-learning`; video time is sampled at most every five seconds plus play/pause/end events, not reported as measured study hours. Normal mode uses local topic marks and unavailable duration. Illustrative mode labels reference figures explicitly. Clean `/student/continue-learning` and `/student/dashboard/continue` are compatibility entry points. Hosted course video and authorised enrolments remain unconnected.

STU-DASH-004 includes deadline type/status/search filters, an India-date calendar, calendar-date selection, this-week and overdue panels, personal plan add/edit/reschedule and manual complete/undo flags. Plans share `tura-student-deadline-plans` with the dashboard and are not official course deadlines. Sample mode generates explicitly illustrative dates relative to today, separate from saved plans. Actions open practice modules rather than submitting actual coursework. No reminders, penalties or backend scheduling occur. `/student/upcoming-deadlines` and `/student/dashboard/deadlines` are compatibility entry points.

STU-DASH-005 includes latest-first local events, rolling week/month/all-time filters, event-type selection, recently accessed/related sample courses, local resume controls, daily event-count bars and quick actions. Normal mode never infers learning hours from timestamps or playback positions; missing history remains unknown. Sample mode uses explicitly illustrative activity and hours separately from stored records. `/student/recent-learning-activity` and `/student/dashboard/activity` are compatibility entry points.

STU-CRS-001 follows the latest horizontal-course-row reference with My Courses, All Courses, editorial sample suggestions and Wishlist tabs; search, progress/category filters, sorting, local wishlist actions and curriculum/continue links. Normal My Courses is empty until real enrolment is connected; sample mode shows the three explicitly illustrative enrolled cards. Module/lesson/hour counts in sample mode are design fixtures, not actual recordings. Normal mode uses proposed topic counts and unavailable duration. No recommendation model, earned completion or certificate is inferred.

STU-CRS-002 adds the course cover/header, continue/wishlist/bag actions, overview and outcomes, proposed technology tags, progress and course-information panels. Tabs link to curriculum, resources, local assignment/assessment/project previews and certificate availability. Normal mode leaves duration, level, enrolment and certificate status unverified; sample mode explicitly labels the reference values as illustrative. Admin media/resources are not exposed through these student views. Existing module/chapter layouts remain separate.

STU-CRS-003 adds expandable modules, expand/collapse all, separate local reading/video statuses, current lesson overview, own-file playback when available, sample-outline download and previous/next navigation. Each catalogue module has two explicitly illustrative interfaces, not fabricated published chapters or recordings. Own video files remain in browser storage; no admin files, duration claims, enforced prerequisites or earned completion are exposed. The course header/tabs remain shared with STU-CRS-002.

Remaining core-module route coverage is documented in README.md. Additional screen IDs should be added as their specifications are supplied. No production completion is implied by an implemented screen.
