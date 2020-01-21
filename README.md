# 7 Minutes of science website
This is the website for 7 Minutes of Science (7MOS), an event where a number of speakers each have 7 minutes to talk about a topic of their choice.  7MOS happens once a year and is hosted by GU Physoc and GU Astrosoc.

## How this website was built and what to do to maintain it
This website was built with straight HTML, JS and CSS.  Nothing else.  This is because for such a simple site, there is no point in using something like Jquery, that would only make the website slower to download.  Vue or React (Vue is my preference) could also have been used and most likely wouldn't have slowed down the site, in fact, the main Physoc site is made in React, but again, this site was just considered too small to use such a package on.

So as to add a bit of flare to the website, unique, individual logos were created for each talk.  Thi sis not completely nessessary, but if you cannot use inkscape well, (ie weel enough to make icons for the talks) a trick is to take an image from the internet, clikc on it, go to path -> trace bitmap, select grays, then I would go about 3 layers down, and just use that for the icon, but the choice is yours.  This can create some pretty cool images, it was used for the VR and the Wiskey svg in 2020.

## If the previous owner of the site has left and you are the new owner
First get github, it's like a cloud for software developers.  Next Fork the repository of the previous owner.  This should give you access to the GH pages enviroment in the previous repo, i.e it should be copied over as well.  So, just to test your on the right track, go to your forked repository: Under the title, is should say forked from xxx/yyy.  Now in the bar with commits/branches/packages ... click on enviroments (if it's not there, you'll have to set up GH pages, so go to settings on the bar above and scroll down to GH pages, then click activate/turn on, make sure you set it to turn on in the gh-pages branch, not the master and it might give you a warning, don't worry about it, it might not, then enviroments should be there).  Now click enviroments, then view deployment, if the website appears with your Github name as the URL, your on the right track.

Now go to google domains in the 7MOS/Physoc gmail account and find the 7minutesofscience.co.uk URL.  Click on DNS then scroll down to the bottom where there should be 3 entires in a table, two @ and one CNAME.  change the CNAME to the URL of your website, i.e xxxyyyzzz.github.io and that's it.

The website is now yours and running on your github page.

## Notes
In order to see the traffic through the webpage, google analytics was set up.  Google "google analytics" and you'll find the dashboard where you can see current and past users, what OS/browser they used to access the webpage, what location they were in, number of hits etc... 

Also google search console was set up so as to get the 7MOS site noticed by the google search engine, so it's registered to that, again Google "google search console" and you'll see what it is.

Oh, and you'll want to add your name to the copyright notice, it's MIT (why would it be anything else).

Richard Menzies 
GU Physoc OCM 2019/2020




