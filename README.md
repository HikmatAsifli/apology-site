# For Nurai — apology website

Multi-page static site. No build step, no dependencies.

## Pages
- index.html — landing / entry
- letter.html — Part I: the apology & honesty about trading
- understand.html — Part II: the lessons
- actions.html — Part III: what I'll do differently
- sorry.html — final page

## Deploy to Vercel

Option A (CLI):
  cd apology-site
  vercel --prod

Option B (dashboard): drag this folder to vercel.com/new, framework preset: "Other", no build command.

## Customize
- Colors: css/style.css → :root variables
- Letter text: edit the <p> blocks inside each page's .letter div
