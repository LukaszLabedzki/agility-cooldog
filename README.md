
# Agility Competitions Theme

<div align="center">

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RoneoOrg/hugo-remix-one-click-netlify-cms&stack=cms)

</div>

## Getting started

### Deploy to Netlify

You can generate your own website based on this with [this link](https://app.netlify.com/start/deploy?repository=https://github.com/LukaszLabedzki/agility-cooldog.git). You will be guided through the following steps:

1. this repo will be duplicated on Github or Gitlab. An account is required and will be created on the way if needed.
2. [Netlify](https://www.netlify.com/) will then use these files to build your website. Hosting, SSL certificate and domain are automatically set up. For free!
3. When your website is ready, Netlify sends you an email with an invitation link. Open this link, set up your password and you are in!


### Run locally

1. [Install Hugo](https://gohugo.io/getting-started/installing/).  
Hugo versions 0.71, 0.80 and 0.96 was successfully tested. Note that Hugo **extended** is required.
2. Clone the repo: `git clone https://github.com/LukaszLabedzki/agility-cooldog.git agility-cooldog`
3. Run: `cd agility-cooldog && hugo server`

<!-- 
### code tree
```
├─assets                // CSS folder.  coding here
├─content               // Data 
│  ├─news
│  └─products
├─data                  // Website Meta Data. Using $site.data in template
├─layouts               // Html folder.  coding here
│  ├─news              
│  ├─partials
│  └─_default
├─resources             // Auto gen. Ignore it
│  └─_gen
│      ├─assets
│      │  └─scss
│      └─images
└─static
    ├─admin
    ├─files
    └─media
``` -->
