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

### Authentication Component

Most of the login flow is going to be on the backend - I'm probably going to integrate with facebook and use oauth2 because I think there might be something special I can do by integrating with facebook market on the admin side in the long run.

For now though I'm just focusing on the frontend, so I'll make a simple login component. chatgpt should be able to do this pretty fast.

I started to ask gpt for a component and the i recalled that if I choose to use oauth2 then it is pretty much unneccesary to code my own login component. oauth2 flows generally redirect to a page created by the provider with all the component jazz and more already made.

So, I am just going to forego this component, and assume that any login button I create will simply redirect to the login route and start the oauth2 process.

It's likely something I will have to revisit the frontend with some trivial react code later.

### Error Handling Component

### S3Upload and S3Image compoennts.

These are components I've written in past projects. I don't want to dig up that old code very much though, so I am just going to make a new component from scratch.

Startnig with S3Image, I know that there will need to be a uri prop for the image object's location in S3.

I'm going to use our LoadingSpinner component to show a loading icon while the app is still fetching the image url.

The S3Image component shows the spinner (indicating that the imgUrl hasn't been set), so I am going to leave it where it is for now. It won't be finished until I write the backend function for fetching an image url from AWS S3.

Now for S3Upload. This component will be important because products images need to be uploaded for each product being sold on the app. The frontend should just be a little upload button and a preview. Ideally, the preview is actually an S3Image component, so that we know that the image was properly uploaded to S3. Maybe that's a bad decision but I'm not really sure!

Okay! That wasn't too bad. I've left a lot of the handle upload function empty because the backend route is not implemented yet for grabbing an upload url from s3.

### Routing Components

React Router is very popular. I haven't used it in a long time so I'm going to take a quick gander through the guides on their website.

Pretty straight forward. Because I plan on just having the product page and an admin page I am not going to bother making a navigation menu.

That leaves just adding the root Router component in App.js and adding the admin Route and Home Route. I'll also have to create the Admin and Home components. no problem.

React Router has changed a lot over the years, so I got tripped up for a minute reading example code from the wrong router version. But that was pretty straigh forward! done!

### State Management

I was about to start on the Stripe components and then I realized that I will probably need to implement state management on the client first. Also worth noting that I could implemenent the payment side of the platform without a backend or client side state management if I chose to just use Stripe's product creator tool.

But, I'd like to make my own ui for uploading products, as I will be pricing things based on weight and ingredients and it would be cool if the app just calculated a good price for me per product. Plus, if I sell tomato sauce in recycled and therefore different sized jars via the app, it's unrealistic to create a product for each jar I use.

There are several options for client side state management. The simplest is to just use key value pairs in local storage. But the reason libraries like react redux exist is so that components can react to global state changes.

To be honest, I'm not sure I even need this for just a shopping cart. I could simply have a checkout button that snapshots the current state in localstorage and redirects to a custom checkout page, ignoring changes made during checkout - or redirecting users back to the main page if they want to make a change.

There are edge cases (multiple tabs open for example) but I am not super interested in making an overly complicated state management for the cart when I can do with just a simple one.

So, for now - I am just going to use localstorage key value pairs to save the cart data.

### Product component

This component will simply display an S3Image, a plus icon, a minus icon, and a price. Whenever the plus or minus icons are pressed, a notification will pop up letting the user know the contents of the cart are updated.

### Toast Notifications

I like the react toastify library. Let's use it. I just have to install the package, wrap the App component with ToastContainer, and then I'm ready to roll for the most part.

Cool that was easy.
