# Ike.Kitchen

An SPA with ExpressJS backend for selling cottage food items.

## Tech Stack

- ExpressJS (Backend)
- create-react-app build (Front End)
- AWS S3 (Image Hosting)
- Mongodb (Database)

## Dev Journey

### Hour 1

Okay! Time to set up the first goals for the project. I think I am going to start with just making the host folder for express, and then immediatly jumping into the frontend. This will encourage me to not try to work all the way down the stack with each component since none of the backend is even written yet. Also, it's early and I just had coffee. Would rather just write components.

I'll write all the backend functionalities I think of as I go right here:

## What I'm Struggling With

Immediatly when I boot up the dev server and examine the starting files (I haven't used plain ol' create-react-app in a long time) I am confronted with file structures that I am not used to! So now I gotta take a little bit to figure what is going on in the boilerplate app.

It took me a second, but it's pretty straight forward! There is an App file with the root react component, there is a test file for App, and there is a vanilla css App file for the styles. I think I will go ahead and make a components folder to organize this a little.

This is the point where I ask chatgpt what kind of components it thinks would be helpful in this app. At first it just responds with some general things that apply to all web apps, which is not bad. Here are the important ones it listed:

- Contact Form
- Call to Action / About
- Authentication Component
- Error Handling Component (for when something fails that the user needs to know about)
- Routing Components (I want to keep routes to a minimum, but I will need an admin dash for this project so I can upload images of products)
- Loading Spinner (fun!)
- API Integration... I can break this up further:
  - Stripe Integration Components
  - S3Upload and S3Image components for uploading and retrieving images from AWS S3
-

I will start by making some of the easiest ones, because it makes me feel good :)

### Contact Form

I'm so used to working with nextjs and implemeting both sides of the stack that I have to slow down a little here and think more carefully about what methods will interface with the backend. The contact form will need to send me a message somehow. Normally at this point I would get carried away looking up APIs for text messaging but NO I AM JUST WRITING A VISUAL COMPONENT RIGHT NOW. So I'll just make sure to include a sendMessageOnBackend method in the component.

Also, side note - I vitually never wirte tests, but that's bad and I'm trying to get a development job so, for now I've just copied the boilerplate test code into a ContactForm.test.js and will learn as I go.

Okay! After one hour I managed to setup write the ContactForm. Uh.... that's way too long to write that much code. To be fair, I also spent a lot of the hour writing in this document and gathering my thoughts about the app in general. So hopefully the rest of the app goes faster. I should probably use more chatgpt queries to write these really simple components.

I suck at CSS, so I'm just going to put it off until later. The current state of the UI looks horrible but I Just want all the components to exist, not for them to look pretty just yet.

### Call To Action / About

I decided to combine these two things because I am more interested in selling pasta sauce and writing a working app than telling people my life story. lol.

Let's see what chatgpt writes for this component.

Literally the simplest code in existance haha. I'll strip it of css classes because I've decided to do that later.

Great! That component only took 20 minutes (minus css).

### Loading Spinner

I love loading spinners so I'm going to do this one real quick. Time to look around the internet for some spinners! Fontawesome is my go to.

Found an opensource spinner on Fontawesome. Not really sure how to test an svg file, so i'm going to forego the test file. Instead I'm going to take a moment to make sure it look alright by rendering it on the main app page.

Unfortunately, it's not spinning :(

I'm used to using sveltekit lately, but I forgot that Fontawesome has some react modules I can install into the project. So, time to install those and see if that fixes the probem.

Okay, i took me about 15 minutes of reading documentation and looking at examples on github and stackoverflow, but I got the fontawesome library working! Spinner spins. Yay. I probably don't need a custom React component wrapping the spinner, but who knows, maybe I want to add some of my own funcitonality to it later! I'll just leave it for now.

That's all I can do right now because I have an appointment soon. more later!
