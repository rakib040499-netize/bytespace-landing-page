# ByteSpace

ByteSpace is a frontend prototype for an online learning platform. It includes a marketing homepage, course discovery, course detail and lesson screens, creator profiles, learner reviews, and demo login/signup forms.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create a production build in `dist/`, or `npm run preview` to serve that build locally.

## Routes

- `/` - homepage
- `/courses` - searchable, filterable course catalog (`?q=term` searches courses)
- `/courses/:id` - course details
- `/courses/:id/learn` - interactive lesson-list demo
- `/courses/:id/reviews` - course reviews
- `/creators/:creator` - creator profile
- `/login` and `/signup` - client-side form validation demos

## Demo limitations

Course content and reviews are sample data. Login/signup only validate input; they do not create accounts or save data. The newsletter form displays a demo message without sending or storing the email. Payments and course progress are not connected to a backend.

## Structure

- `src/components/ui`: small reusable pieces (Button, Logo, SectionHeading)
- `src/components/sections`: one file per landing page section
- `src/data.js`: course, testimonial and footer content
- `src/pages`: Home, and one Auth page used for both login and signup
